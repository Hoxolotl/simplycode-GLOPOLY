/* HTML stored in a public Solid resource, rendered inside its own custom element. */
(() => {
  const name = 'turtlecms-render'; // HTML normalizes <turtleCMS-render> to lowercase.
  if (customElements.get(name)) return;

  const allowedTags = new Set(('article section header footer div span p h1 h2 h3 h4 h5 h6 ' +
    'a img figure figcaption picture ul ol li dl dt dd blockquote pre code strong em b i u s ' +
    'small sub sup abbr time br hr table caption thead tbody tfoot tr th td details summary').split(' '));
  const discardedTags = new Set(['script', 'style', 'link', 'meta', 'base', 'iframe', 'object',
    'embed', 'template', 'noscript', 'form', 'input', 'button', 'textarea', 'select', 'svg', 'math']);
  const allowedAttributes = new Set(('id title lang dir alt width height datetime colspan rowspan ' +
    'scope start reversed value open cite about typeof property resource prefix vocab datatype content').split(' '));

  function safeURL(value, base, image = false) {
    try {
      const url = new URL(value, base);
      const protocols = image ? ['http:', 'https:'] : ['http:', 'https:', 'mailto:', 'tel:'];
      return protocols.includes(url.protocol) ? url.href : null;
    } catch {
      return null;
    }
  }

  // Reconstruct passive HTML instead of inserting remote scripts, event handlers,
  // styles, custom elements, or SimplyEdit command/data-binding attributes.
  function copyContent(source, target, base) {
    for (const node of source.childNodes) {
      if (node.nodeType === Node.TEXT_NODE) {
        target.append(document.createTextNode(node.textContent));
        continue;
      }
      if (node.nodeType !== Node.ELEMENT_NODE || discardedTags.has(node.localName)) continue;
      if (!allowedTags.has(node.localName)) {
        copyContent(node, target, base);
        continue;
      }
      const copy = document.createElement(node.localName);
      for (const { name, value } of node.attributes) {
        if (allowedAttributes.has(name)) copy.setAttribute(name, value);
        if ((name === 'href' && node.localName === 'a') || (name === 'src' && node.localName === 'img')) {
          const url = safeURL(value, base, name === 'src');
          if (url) copy.setAttribute(name, url);
        }
      }
      if (node.localName === 'img') {
        copy.setAttribute('loading', 'lazy');
        copy.setAttribute('decoding', 'async');
      }
      copyContent(node, copy, base);
      target.append(copy);
    }
  }

  class TurtleCMSRender extends HTMLElement {
    static get observedAttributes() { return ['rel']; }

    connectedCallback() { this.load(); }

    disconnectedCallback() {
      this.request?.abort();
      this.request = null;
    }

    attributeChangedCallback(attribute, before, after) {
      if (before !== after && this.isConnected) this.load();
    }

    showStatus(message, retry = false) {
      const status = document.createElement('p');
      status.setAttribute('role', 'status');
      status.textContent = message;
      this.replaceChildren(status);
      if (retry) {
        const button = document.createElement('button');
        button.type = 'button';
        button.textContent = 'Try again';
        button.addEventListener('click', () => this.load());
        this.append(button);
      }
    }

    async load() {
      this.request?.abort();
      const request = new AbortController();
      this.request = request;
      this.setAttribute('aria-busy', 'true');
      this.dataset.state = 'loading';
      this.showStatus('Loading blog post…');
      const timeout = setTimeout(() => request.abort(), 20000);
      try {
        const rel = this.getAttribute('rel')?.trim();
        if (!rel) throw new Error('No blog post URL was provided.');
        const url = new URL(rel, document.baseURI);
        if (!['http:', 'https:'].includes(url.protocol)) {
          throw new Error('The blog post URL must use HTTP or HTTPS.');
        }
        const response = await fetch(url.href, {
          // The source currently contains HTML but is served as text/turtle.
          headers: { Accept: 'text/html, application/xhtml+xml, text/turtle;q=0.9' },
          credentials: 'omit',
          signal: request.signal
        });
        if (!response.ok) throw new Error('Could not load the blog post (HTTP ' + response.status + ').');
        const source = new DOMParser().parseFromString(await response.text(), 'text/html');
        const main = source.querySelector('main');
        if (!main) throw new Error('The source does not contain an HTML <main> element.');
        const content = document.createDocumentFragment();
        copyContent(main, content, response.url || url.href);
        if (this.request !== request || !this.isConnected) return;
        this.replaceChildren(content);
        this.dataset.state = 'loaded';
      } catch (error) {
        if (this.request !== request || !this.isConnected) return;
        this.dataset.state = 'error';
        const message = request.signal.aborted ? 'Loading the blog post timed out.' :
          error instanceof TypeError ? 'Could not fetch the blog post. Check your connection and the source’s public access.' : error.message;
        this.showStatus(message, true);
      } finally {
        clearTimeout(timeout);
        if (this.request === request) this.setAttribute('aria-busy', 'false');
      }
    }
  }

  customElements.define(name, TurtleCMSRender);
})();

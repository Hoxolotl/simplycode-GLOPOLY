async function(podUrl, websiteName) {
  const pod = new URL(podUrl.trim());
  if (!['http:', 'https:'].includes(pod.protocol)) {
    throw new Error('Enter an HTTP or HTTPS pod URL.');
  }
  const name = websiteName.trim();
  if (!name || name === '.' || name === '..' || /[\/\\]/.test(name)) {
    throw new Error('Enter a website name without slashes.');
  }
  pod.pathname = pod.pathname.replace(/\/?$/, '/');
  pod.search = '';
  pod.hash = '';
  const fileUrl = new URL('public/' + encodeURIComponent(name) + '/website/index.ttl', pod);

  // A public file can be retrieved without the OIDC login middleware.
  const response = await metro.client().get(fileUrl.href, {
    headers: { Accept: 'text/turtle' },
    credentials: 'omit'
  });
  if (!response.ok) {
    throw new Error('Could not retrieve index.ttl (HTTP ' + response.status + ').');
  }
  return response.text();
}
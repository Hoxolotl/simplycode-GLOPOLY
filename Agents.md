## Frontend technologies

The dashboard uses the following technologies. Consult their source and
documentation when needed, and follow existing patterns in the project:

- **SimplyCode**: [source](https://github.com/SimplyEdit/simplycode) and
  [tutorials](https://tutorial.dev.muze.nl/).
- **SimplyEdit**: [source](https://github.com/SimplyEdit/simplyedit) and
  [reference](https://reference.simplyedit.io/).
- **SimplyView**: [source](https://github.com/SimplyEdit/simplyview) and
  [reference](https://reference.simplyedit.io/simplyview/).
- **SimplyFlow**: [source](https://github.com/simplyedit/simplyflow).

## CSS ownership

The frontend uses [theDS](https://github.com/muze-nl/the-ds/). Organize
SimplyCode `componentCss` parts by responsibility:

- **`design`**: vanilla CSS imported from theDS. Keep project customizations
  and locally developed extensions out of this component.
- **`design-extra`**: generic CSS extensions intended to be backported to
  theDS. These rules must be reusable beyond Edulinq.
- **`client-design`**: CSS specific to this project, including its theme,
  layouts, and feature styling.
- **`client-design-extra`**: legacy CSS whose proper placement was deferred.
  When refactoring, move understood rules to their appropriate owner instead
  of adding more styles here.

Split mixed CSS parts and rename or move parts when that makes ownership
clearer. Class prefixes alone do not determine ownership: inspect what the
rule does and where it is used. Preserve rendering, selector behavior, and
the CSS cascade when moving rules; SimplyCode's generated stylesheet order
can change when a component or part is renamed. Keep a theDS version upgrade
separate from an organizational refactor, and rebuild through SimplyCode.

## Editing the frontend

**SimplyFlow and SimplyView render the DOM.** Account for their rendering
lifecycle when changing frontend behavior or markup.

- Inspect the relevant templates, data bindings, and flow/view code before
  making changes.
- Make changes through the existing rendering and state patterns. Avoid
  ad hoc DOM mutations that conflict with rendering or disappear on a render.
- Check that affected behavior still works after the DOM is rendered again,
  including event handling and state updates.
- Edit frontend source files and rebuild generated output; do not make fixes
  only in `generated.html` or the generated `site/` tree.

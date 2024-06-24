async function() {
  var checkHelper = function() {
    if ( location.hash == '#simply-edit' || location.hash == '#present') {
      simplyApp.actions.hideHelper()
    } 
  }
  window.addEventListener('hashchange', checkHelper)
  checkHelper()
}
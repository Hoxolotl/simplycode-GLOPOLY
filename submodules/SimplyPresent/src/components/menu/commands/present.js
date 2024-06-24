async function() {
  document.location.hash = "#present"
/*
if (simplyPresentConnection) {
    simplyPresentConnection.terminate();
    simplyPresentConnection = null
    document.body.removeAttribute('data-simply-present')
  } else {
    let connection = await simplyPresentRequest.start()
    simplyPresentConnection = connection
    document.body.setAttribute('data-simply-present',true)
  }
*/
  this.app.actions.hideHelperMenu()
}
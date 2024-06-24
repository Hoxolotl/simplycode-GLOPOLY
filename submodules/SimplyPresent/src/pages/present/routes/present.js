async function(params) {
  editor.pageData.page = "present"
  editor.pageData.hhsWords = [];
  await simplyApp.actions.start()
  simplyApp.actions.gotoSlide(1)
}
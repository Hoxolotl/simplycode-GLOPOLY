async function(params) {
  await simplyApp.actions.start()
  simplyApp.actions.hhsConnectSpace([params.word1, params.word2, params.word3])
  editor.pageData.page = 'slides'
  simplyApp.actions.initSlides() 
}
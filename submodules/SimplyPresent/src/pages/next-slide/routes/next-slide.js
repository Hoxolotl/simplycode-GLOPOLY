async function(params) {
  editor.pageData.page = 'next-slide'
  await simplyApp.actions.start()
  simplyApp.actions.gotoSlide(1)
}
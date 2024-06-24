async function() {
  slide = Math.max(1, editor.pageData.slide - 1)
  return simplyApp.actions.gotoSlide(slide)
}
async function() {
  let max = editor.pageData.slides.length
  slide = Math.min(max, editor.pageData.slide + 1)
  return simplyApp.actions.gotoSlide(slide)
}
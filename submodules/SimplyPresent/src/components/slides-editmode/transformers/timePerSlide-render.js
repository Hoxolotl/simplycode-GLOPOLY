function(data) {
  this.originalData = data
  if (!editor.pageData.slides) {
    return data
  }
  let slidesCount = editor.pageData.slides.length
  timePerSlide = parseInt(data / slidesCount)
  return timePerSlide
}

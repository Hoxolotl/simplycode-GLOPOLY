function() {
  let slides = document.querySelector('.slides-present')
  if (slides) {
    slide  = Math.max(1, Math.min(editor.pageData.slide, slides.querySelectorAll('.slide').length))
    slides.scrollLeft = document.getElementById('slide-'+slide).offsetLeft
  }
}
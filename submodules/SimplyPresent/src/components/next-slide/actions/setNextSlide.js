async function() {
  let nextSlidePreview = document.querySelector('.slides.slides-next');
  if (nextSlidePreview) {
    let currentSlide = nextSlidePreview.querySelector('.slide:nth-child('+(parseInt(editor.pageData.slide))+')')
    let nextSlide = nextSlidePreview.querySelector('.slide:nth-child('+(parseInt(editor.pageData.slide)+1)+')')
    if (nextSlide) {
      nextSlide.scrollIntoView()
    } else {
      currentSlide.scrollIntoView() // we are at the last slide so we have no 'next' to show.
    }
  }
}
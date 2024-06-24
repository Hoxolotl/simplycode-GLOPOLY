function() {
  document.querySelectorAll(".slides-speaker-notes-current").forEach(function(element) {
    element.classList.remove("slides-speaker-notes-current")
  })
  let newSlide = document.querySelector(".slides-speaker-note:nth-child(" + editor.pageData.slide + ")")
  if (newSlide) {
    newSlide.classList.add("slides-speaker-notes-current")
    newSlide.scrollIntoView()
  }
}
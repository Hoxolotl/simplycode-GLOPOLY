function() {
  simplyApp.actions.startTimer()
  document.querySelectorAll(".slides-timer-current").forEach(function(element) {
    element.classList.remove("slides-timer-current")
  })
  let newSlide = document.querySelector(".slides-timer-slide:nth-child(" + editor.pageData.slide + ")")
  if (newSlide) {
    newSlide.classList.add("slides-timer-current")
  }
}
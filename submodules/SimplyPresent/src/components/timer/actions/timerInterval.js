function() {
  if (editor.pageData.isTimerPaused) {
    editor.pageData['timerPauseDuration']++
  }
  let timeNow = new Date()
  let timeStarted = new Date(editor.pageData['timerStarted'])
  let timeSpent = parseInt((timeNow - timeStarted) / 1000) // javascript has ms times
  timeSpent -= parseInt(editor.pageData.timerPauseDuration)

  let timePerSlide = parseInt(editor.pageData.totalTime / editor.pageData.slides.length)
  let slidesElapsed = 0
  editor.pageData.slides.forEach(function(entry, index) {
    if (index < (editor.pageData.slide)) {
      slidesElapsed += timePerSlide
    }
  })
  editor.pageData['total-time-left'] = editor.pageData.totalTime - timeSpent
  editor.pageData['slide-time-left'] = slidesElapsed - timeSpent
}
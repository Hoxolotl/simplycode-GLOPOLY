async function() {
  if (!editor.pageData['timerStarted']) {
    editor.pageData['timerStarted'] = new Date().toJSON()
  }
  if (!editor.pageData.timerInterval) {
    editor.pageData['timerPauseDuration'] = 0
    editor.pageData.timerInterval = window.setInterval(simplyApp.actions.timerInterval, 1000)
  } else if (editor.pageData.isTimerPaused) {
    editor.pageData.isTimerPaused = false
  }
}
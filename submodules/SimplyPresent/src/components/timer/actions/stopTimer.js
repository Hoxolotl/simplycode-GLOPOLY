async function() {
  if (editor.pageData.timerInterval) {
    clearInterval(editor.pageData.timerInterval)
    editor.pageData.timerInterval = null
  }
}
async function(ds) {
  let data = ds.getValue()
  if (data) {
    data = JSON.parse(data)
    if (data['slide'] && !editor.pageData.hhsCreator) {
      this.app.actions.gotoSlide(data['slide'])
    }
    if (data['timerStarted'] && !editor.pageData.hhsCreator) {
      editor.pageData['timerStarted'] = data['timerStarted']
    }
    if (data['isTimerPaused'] && !editor.pageData.hhsCreator) {
      editor.pageData['isTimerPaused'] = data['isTimerPaused']
    }
  }
}
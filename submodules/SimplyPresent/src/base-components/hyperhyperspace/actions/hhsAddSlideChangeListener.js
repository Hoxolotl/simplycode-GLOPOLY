function() {
  document.addEventListener("simply-data-changed", function(event) {
    if (
      (event.data.dataBinding.parentKey == "/") && 
      (
        (event.data.dataBinding.key == "slide") || 
        (event.data.dataBinding.key == "timerStarted") ||
        (event.data.dataBinding.key == "isTimerPaused")
      )
    ) {
      if (editor.pageData.hhsCreator) {
        simplyHHS.ds.setValue(JSON.stringify({
          timerStarted : editor.pageData.timerStarted,
          isTimerPaused : editor.pageData.isTimerPaused,
          slide : editor.pageData.slide
        }))
      }
    }
  })
}
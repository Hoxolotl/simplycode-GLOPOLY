function(data) {
  this.originalValue = data
  if (data) {
    let totalSize = editor.pageData.totalTime
    let width = 100 * (parseInt(data) / parseInt(totalSize) )
    this.style.flex = '0 1 '+ width +'%'
  }
}
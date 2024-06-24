function(data) {
  this.originalValue = data
  let current = parseInt(data) || 0
  let total = parseInt(editor.pageData.totalTime)
  let delta = (current/total)*100
  this.style.left = Math.min(100-delta,100)+'%'
  return ''
}
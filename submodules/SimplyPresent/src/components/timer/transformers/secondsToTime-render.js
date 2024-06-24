function(data) {
  this.originalValue = data
  let total = parseInt(data) || 0
  let hours = Math.floor(Math.abs(total)/3600) || 0
  let minutes = Math.floor( (Math.abs(total)%3600) / 60) || 0
  let seconds = (Math.abs(total)%60) || 0
  return ((total>=0)?'':'-')
    +(hours?hours+':':'')
    +(''+(minutes?minutes:0)).padStart(2,'0')
    +':'+(''+seconds).padStart(2,'0')
}
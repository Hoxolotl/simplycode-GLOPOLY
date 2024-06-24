function(data) {
 this.originalValue = data
 let value = document.location.origin + document.location.pathname + "#words/" + data.join("/")
 return value
}
function(el) {
  let slidesLink = el.href
  navigator.clipboard.writeText(slidesLink)
  alert("The link is now in your clipboard!")
}
async function() {
  var helper = document.getElementById('SimplyPresentButton')
  if (helper) {
    helper.style.visibility = 'hidden'
    helper.classList.remove('simply-visible')
  }
}
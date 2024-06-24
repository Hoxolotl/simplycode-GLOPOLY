async function() {
  function isScrolledIntoView(el) {
    var rect = el.getBoundingClientRect()
    var parentRect = el.parentNode.getBoundingClientRect()
    return (rect.left >= parentRect.left) && (rect.right <= parentRect.right)
  }

  function throttle( callbackFunction, intervalTime ) {
    var eventId = 0
    return function() {
      var myArguments = arguments;
      var me = this;
      if ( eventId ) {
        return
      } else {
        eventId = window.setTimeout( function() {
          callbackFunction.apply(me, myArguments)
          eventId = 0
        }, intervalTime )
      }
    }
  }

  if (editor.pageData.slide) {
    editor.pageData.slide = parseInt(editor.pageData.slide)
  }
  let slideQuery = '.slides-present .slide:not(.welcome-slide)'
  var slides = document.body.querySelectorAll(slideQuery)
  var count = 1
  var hash = window.location.hash.substr(1)
  slides.forEach(function(slide) {
    slide.id='slide-'+count
	slide.slide = count
    count++
    if (hash == slide.id) {
      slide.scrollIntoView()
    }
  })

  window.addEventListener('scroll', throttle(
    function() {
      var slides = document.body.querySelectorAll(slideQuery)
      for (var i=0, l=slides.length; i<l; i++) {
        if (isScrolledIntoView(slides.item(i))) {
          // history.replaceState({}, '', '#'+slides.item(i).id)
          simplyApp.actions.gotoSlide(slides.item(i).slide)
          return
        }
      }
    }, 
    500
  ), true)
}
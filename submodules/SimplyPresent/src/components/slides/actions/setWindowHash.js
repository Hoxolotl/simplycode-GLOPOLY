function() {
  // FIXME: Should we set it differently for different page types?
  if (editor.pageData.page == "slides") {
    window.location.hash='#slide/'+editor.pageData.slide
  }
}
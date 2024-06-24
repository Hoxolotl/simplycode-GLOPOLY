async function() {
  this.app.started = true
  this.app.keyboard = simply.keyboard(this.app, slidesKeyboard)
  this.app.view.slidesTotal = 10
  await this.call('initMenu')
  await this.call('initSlides')
}
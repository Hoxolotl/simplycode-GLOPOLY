async function(params) {
	editor.pageData.page = 'slides'
    if (!simplyApp.started) {
        await simplyApp.actions.start()
    }
    if (!params.slide) {
		params.slide=1;
    }
    simplyApp.actions.gotoSlide(parseInt(params.slide))
}
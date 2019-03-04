$('.js-back-to-top').on('click', () => {
	$('html, body').animate({
		scrollTop: 0
	}, 600)
})

$('.js-sb-trigger').on('click', event => {
	const $this = $(event.target)
	$this.toggleClass('is-active')
})

$('.js-print').on('click', () => {
	window.print()
})

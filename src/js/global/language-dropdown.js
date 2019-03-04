$('.language-dropdown__trigger').on('click', event => {
	$(event.target).parents('.language-dropdown')
		.toggleClass('is-active')
})

$('body').on('click', event => {
	if (!$(event.target).closest('.language-dropdown').length)
		$('.language-dropdown').removeClass('is-active')
})

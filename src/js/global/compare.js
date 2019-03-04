$(() => {
	if ($('body').find('.compare-block, .fix-btm-block').length)
		$('footer').css('margin-bottom', '60px')
})



$('.js-compare-trigger').on('click', event => {
	const $this = $(event.currentTarget)
	const parent = $this.parents('.compare-block')
	const openItem = parent.children('.js-compare-main')
	$this.toggleClass('is-active')
	openItem.slideToggle(400)
})

$(() => {
	if ($('body').find('.js-isotope').length) {
		const Isotope = require('isotope-layout')

		const iso = new Isotope('.js-isotope', {
			itemSelector: '.isotope-item',
			layoutMode: 'fitRows'
		})
	}
})


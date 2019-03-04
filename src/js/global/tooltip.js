$(() => {

	const tooltipTrigger = $('.js-tooltipTrigger')
	const check_tooltipTrigger = tooltipTrigger.length > 0 ? true : false
  
	function toggleTooltip(action, ...args) {
		Array.from(args).forEach(e => {
			action === 'add' ? $(e).addClass('is-active') : $(e).removeClass('is-active')
		})
	}

	if (check_tooltipTrigger) {

		const tooltip = $('.tooltip')
		const tooltipClose = $('.tooltop__close')
		const bubble = $('.js-tooltipBubble')
    
		tooltipTrigger.on('click', () => {
			toggleTooltip('add', tooltip, bubble)
			setTimeout(() => {
				toggleTooltip('close', tooltip, bubble)
			}, 3000)
		})
    
		tooltipClose.on('click', () => {
			toggleTooltip('close', tooltip, bubble)
		})

	}

})

/*
** check elements functions
*/
function checkElement(element) {
	return element.length > 0
}

/*
** actions
*/
const anchorActions = {
	animate_duration: 500,
	offset_threshold: 88,
	sticky_height: 80,
	clicking: false,
	init(anchors) {
		anchors.each((index, element) => {
			const $element = $(element)
			$element.find('.js-scrollAnchorTrigger')
				.eq(0)
				.addClass('is-active')
		})
	},
	scroll_bar(item) {
		anchorActions.clicking = true
		const scrollAnchorBar = $('.js-scrollAnchorBar')
		const barHeight = $(item).css('height')
		const barOffset = $(item).position().top
		if (checkElement(scrollAnchorBar)) {
			scrollAnchorBar.css('height', barHeight)
			scrollAnchorBar.animate({
				top: `${barOffset}px`
			}, anchorActions.animate_duration, () => {
				anchorActions.clicking = false
			})
		} else anchorActions.clicking = false
	},
	scroll_window(id) {
		const target = $(`#${id}`)
		const targetOffset = target.hasClass('js-scrollAnchorNoPadding')
			? target.offset().top - (anchorActions.offset_threshold * 2)
			: target.offset().top

		$('html, body').animate({
			scrollTop: `${targetOffset}px`
		}, anchorActions.animate_duration)
	},
	reset_active(item, id) {
		const otherTriggers = $(`.js-scrollAnchorTrigger:not([data-anchor="${id}"])`)
		otherTriggers.removeClass('is-active')
		item.addClass('is-active')
	},
	last_active() {
		const triggers = document.getElementsByClassName('js-scrollAnchorTrigger')
		Array.from(triggers).forEach((e, i) => {
			const triggersLength = [...triggers].length
			if (triggersLength - 1 === i) {
				$(e).addClass('is-active')
				anchorActions.scroll_bar(e)
			} else $(e).removeClass('is-active')
		})
	},
	target_offsets() {
		const array = []
		$('.js-scrollAnchorTarget').each(function(index) {
			const $this = $(this)
			array.push({
				id: $this.attr('id'),
				top: $this.offset().top,
				min: $this.offset().top - anchorActions.offset_threshold,
				max: $this.offset().top + (parseInt($this.css('height').replace('px', ''))/2),
			})
			if (checkElement($('.tab-section__top'))) array[index].min -= anchorActions.sticky_height
			// if ($this.hasClass('js-scrollAnchorNoPadding')) array[index].min -= anchorActions.offset_threshold
		})
		return array
	},
	scrollWaypoint(offsets, scrollVal, docHeight) {
		offsets.forEach(e => {
			if (scrollVal >= e.min && scrollVal <= e.max) {
				const [id] = [e.id]
				const trigger = $(`[data-anchor="${id}"]`)
				anchorActions.reset_active(trigger, id)
				anchorActions.scroll_bar(trigger)
			}
			// if (docHeight && scrollVal - docHeight >= -980) anchorActions.last_active()
		})
	}
}

$(window).on('load', () => {
	const anchor = $('.js-anchor')
	const anchorTrigger = $('.js-scrollAnchorTrigger')
	const scrollAnchorBar = $('.js-scrollAnchorBar')
	const targetOffsets = anchorActions.target_offsets()

	/*
	** check anchor scrollbar
	*/
	if (checkElement(scrollAnchorBar)) {
		const barHeight = $('.is-active[data-anchor]').css('height')
		scrollAnchorBar.css('height', barHeight)
	}

	/*
	** check anchor trigger
	*/
	if (checkElement(anchorTrigger)) {
		/* initiate actions */
		anchorActions.init(anchor)

		/* click event */
		anchorTrigger.on('click', e => {
			const $this = $(e.currentTarget)
			const id = $this.data('anchor')
			if (checkElement(scrollAnchorBar)) anchorActions.scroll_bar($this)
			else {
				anchorActions.clicking = true
				setTimeout(() => { anchorActions.clicking = false }, anchorActions.animate_duration)
			}
			anchorActions.reset_active($this, id)
			anchorActions.scroll_window(id)
		})

		/* scroll event */
		$(window).scroll(() => {
			const scrollVal = $(window).scrollTop()
			const docHeight = $(document).innerHeight()
			if (anchorActions.clicking === false)
				anchorActions.scrollWaypoint(targetOffsets, scrollVal, docHeight)
		})
	}
})


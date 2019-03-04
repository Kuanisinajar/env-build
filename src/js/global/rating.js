$(() => {
	const ratingItem = $('.rating-list__item')
	const checkRatingItem = ratingItem.length > 0

	if (checkRatingItem) {
		ratingItem
			.mouseenter(e => {
				const $this = $(e.currentTarget)
				const ratingId = $this.data('rating-id')
				const list = $this.parent('.rating-list__list').find('.rating-list__item')

				list.each(function (i) {
					i <= ratingId ? $(this).attr('src', '/imgs/bulb-rating-fill.svg') : $(this).attr('src', '/imgs/bulb-rating.svg')
				})
			})
			.mouseleave(e => {
				const $this = $(e.currentTarget)
				const list = $this.parent('.rating-list__list').find('.rating-list__item')

				list.attr('src', '/imgs/bulb-rating.svg')
			})
	}
})


function closeSearch() {
	$('.header__search-result-block').slideUp(100)
	$('header').removeClass('search-active')
	$('.header__search-icon').removeClass('icon-cross')
		.addClass('icon-magnifier ')
	$('.overlay').removeClass('active')
}

$('.header__mobile-menu').on('click', event => {
	const $this = $(event.currentTarget)
	closeSearch()
	$this.find('i').toggleClass('icon-hamburger icon-cross')
	if ($('.mobile-nav').hasClass('is-active')) {
		$('.mobile-nav li').removeClass('is-active')
		$('.mobile-nav__lv2').hide()
		$('.mobile-nav__lv1 li, .mobile-nav__list-wrap').slideDown(200)
	}
	$('.mobile-nav').toggleClass('is-active')
})

$('.mobile-nav__lv1 .mobile-nav__list-wrap > .mobile-nav__next').on('click', event => {
	const $this = $(event.currentTarget)
	const parentLi = $this.closest('li')
	if (parentLi.hasClass('is-active')) {
		parentLi.removeClass('is-active')
		parentLi.siblings('li').slideDown(200)
		parentLi.find('.mobile-nav__lv2').hide()
	} else {
		parentLi.addClass('is-active')
		parentLi.siblings('li').hide()
		parentLi.find('.mobile-nav__lv2').slideDown(200)
	}
})

$('.mobile-nav__accordion').on('click', event => {
	const $this = $(event.currentTarget)
	const ulList = $this.siblings('.mobile-nav__lv3')
	$this.find('i').toggleClass('icon-plus icon-minus')
	ulList.slideToggle(200)
})

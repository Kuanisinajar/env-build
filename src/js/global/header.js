import 'jquery-hoverintent'

$(() => {
	$('.header__search-result-block').hide()
	$('.overlay, body:before').prop('disabled', true)
})
function openSubMenu() {
	$('.submenu').removeClass('.is-active')
	$(this).find('.submenu')
		.addClass('is-active')
}

function closeSubMenu() {
	$('.submenu').removeClass('is-active')
}

function closeMobileNav() {
	$('.mobile-nav').removeClass('is-active')
	$('.mobile-nav li').removeClass('is-active')
	$('.mobile-nav__lv2, .mobile-nav__lv3').hide()
	$('.mobile-nav__lv1 li, .mobile-nav__list-wrap').slideDown(400)
	$('.header__mobile-menu i').removeClass('icon-cross')
		.addClass('icon-hamburger')
}

// function searchValidate() {
// 	if ($('.search-input').val().length !== 0) {
// 		$('.header__search-result-list').each(function () {
// 			// Handle special characters used in regex
// 			const searchregexp = new RegExp($('.search-input').val()
// 				.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'gi')
// 			// $& will maintain uppercase and lowercase characters.
// 			$(this).html($(this).html()
// 				.replace(searchregexp, "<span class='header__search-key-word'>$&</span>"))
// 		})
// 	}
// }

const $search = $('.search-input')

$search.keyup(function () {
	const $names = $('.js-search')
	const match = RegExp(this.value, 'gi')

	$names
		.filter(function () {
			return $(this).text()
				.match(match)
		})
		.html(function () {
			if (!$search.val()) return $(this).text()
			return $(this).text()
				.replace(match, '<span class="header__search-key-word">$&</span>')
		})
})


$('.header__list').hoverIntent({
	over: openSubMenu,
	out: closeSubMenu,
	timeout: 200,
	sensitivity: 10,
	interval: 200,
	selector: '.header__item'
})

$('.search-input').keydown(() => {
	$('.header__search-result-block').slideDown(300)
})

$('.header__search-trigger').on('click', () => {
	closeMobileNav()
	$('.header__search-result-block').slideUp(100)
	$('header')
		.queue(function () {
			$(this).toggleClass('search-active')
				.dequeue()
		})
	$('.header__search-icon').toggleClass('icon-magnifier icon-cross')
	$('.overlay').toggleClass('active')
	$('.search-input').focus()
})


$('.overlay').on('click', () => {
	$('.overlay').removeClass('active')
	$('.header__search-result-block').slideUp(100)
	$('header').removeClass('search-active')
	$('.header__search-icon').removeClass('icon-cross')
		.addClass('icon-magnifier ')
})

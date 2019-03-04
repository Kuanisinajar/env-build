import 'dragscroll'
import { log } from 'util'

const tabAmount = $('.tab-section__long-tab').length
const initlength = 100 / tabAmount
$('.tab-section__long-tab').css('flex', `${initlength}%`)

$('.js-tab').each((index, element) => {
	const $element = $(element)
	if (!$element.find('.js-tab-trigger').hasClass('is-active')) {
		$element.find('.js-tab-trigger')
			.eq(0)
			.addClass('is-active')
	}
	if (!$element.find('.js-tab-main').hasClass('is-active')) {
		$element.find('.js-tab-main')
			.eq(0)
			.addClass('is-active')
	}
})

function scrollToTabs($tabParent) {
	switch ($('body').find('.tab-section__top.js-sticky').length) {
		case 0:
			if (window.matchMedia('(max-width: 1024px)').matches)
				$('html, body').scrollTop($tabParent.offset().top - 50)
			else
				$('html, body').scrollTop($tabParent.offset().top)
			break
		case 1:
			if (window.matchMedia('(max-width: 1024px)').matches) {
				if (window.matchMedia('(max-width: 767px)').matches)
					$('html, body').scrollTop($tabParent.offset().top - 100)
				else
					$('html, body').scrollTop($tabParent.offset().top - 117)
			} else
				$('html, body').scrollTop($tabParent.offset().top - 67)
			break
	}
}

$('.js-tab-underline').css('width', $('.tab-section__btn.is-active').outerWidth())

if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))
	$('.tab-section__scroll').css('overflow-x', 'auto')

$('.js-tab-trigger').on('click', event => {
	const $this = $(event.currentTarget)
	const tabParent = $this.parents('.js-tab')
	const underline = tabParent.find('.js-tab-underline')
	const position = $this.position()
	const selectId = $this.attr('data-tab-id')
	const actvId = $this.attr('data-actv-trigr')
	const openTab = $(`[data-tab="${selectId}"]`)
	const currentId =  openTab.attr('id')
	const railwayOpenTab = $(`[data-target="${actvId}"]`)
	if (currentId) {
		const url = window.location.href.split('#')[0]
		history.pushState(null, null, `#${currentId}`)
	}
	if ($this.hasClass('showcase-block__item')) {
		$('html, body').animate({
			scrollTop: $('.showcase-block__detail').offset().top - 68
		}, 600)
	}
	underline.css('left', position.left)
	underline.css('width', $this.outerWidth())
	tabParent.find('.js-tab-trigger').removeClass('is-active')
	tabParent.find('.js-tab-main')
		.hide()
	$this.addClass('is-active')
	tabParent.find(openTab)
		.fadeIn(600)
	tabParent.find(railwayOpenTab)
		.fadeIn(600)

	// scrollToTabs(tabParent)

	// if (openTab.find('.slick-slider').length)
	// 	openTab.find('.slick-slider').slick('refresh')
})



function moveTabUnderline() {
	if ($('body').find('.js-tab-underline').length) {
		$('.js-tab-underline').css('width', $('.tab-section__btn.is-active').outerWidth())
		const position = $('.tab-section__btn.is-active').position()
		$('.js-tab-underline').css('left', position.left)
	}
}

function checkScroll($range) {
	const scrollDest = $('.tab-section__scroll').scrollLeft()
	if (scrollDest > 0)
		$('.tab-section__scroll-btn--left').removeClass('btn-hide')
	else
		$('.tab-section__scroll-btn--left').addClass('btn-hide')
	if (scrollDest >= $range)
		$('.tab-section__scroll-btn--right').addClass('btn-hide')
	else
		$('.tab-section__scroll-btn--right').removeClass('btn-hide')
}


$('.tab-section__scroll').scroll(() => {
	const containerWidth =  $('.tab-section__scroll').width()
	let totalWidth = 0
	let scrollRange = 0
	$('.tab-section__scroll .tab-section__tab').each((index, element) => {
		totalWidth += $(element).outerWidth()
	})
	scrollRange = totalWidth - containerWidth
	checkScroll(scrollRange)
})

$('.tab-section__scroll-btn--right').on('click', () => {
	$('.tab-section__scroll').animate({
		scrollLeft: '+=450px'
	}, 'slow')
})

$('.tab-section__scroll-btn--left').on('click', () => {
	$('.tab-section__scroll').animate({
		scrollLeft: '-=450px'
	}, 'slow')
})

$(window).resize(() => {
	moveTabUnderline()
})

$('.tab-accordion__btn').on('click', event => {
	const $this = $(event.currentTarget)
	const tabParent = $this.parents('.tab-accordion')
	const selectText = $this.text()
	$('.tab-accordion__btn ').removeClass('is-active')
	$this.toggleClass('is-active')
	tabParent.find('.tab-accordion__trigger-text')
		.text(selectText)
	tabParent.find('.tab-accordion__trigger')
		.removeClass('is-active')
	$('.tab-accordion__main').slideUp(400)
})

$('.js-models-tab').on('click', () => {
	const targetBtn = $('.tab-section__btn[data-tab-id="models"]')
	const tabParent = targetBtn.parents('.js-tab')
	tabParent.find('.js-tab-trigger').removeClass('is-active')
	tabParent.find('.js-tab-main')
		.hide()
	targetBtn.addClass('is-active')
	$('[data-tab="models"]').fadeIn(600)
	history.pushState(null, null, '#models')
	moveTabUnderline()
	// scrollToTabs(tabParent)
})

$(() => {
	moveTabUnderline()
	$('.js-tab').each((index, element) => {
		const $element = $(element)
		const activeTab = $element.find('.js-tab-trigger.is-active').attr('data-tab-id')
		const activeTglActv = $element.find('.js-tab-trigger.is-active').attr('data-actv-trigr')
		const tabSection = $element.find('.js-tab-main')
		const openTabSection = $element.find(`[data-tab="${activeTab}"]`)
		const openTglActv = $element.find(`[data-target="${activeTglActv}"]`)
		if ($('body').find('.js-tab-underline').length)
			tabSection.hide()
		openTabSection.show()
		openTglActv.show()
	})
	if (window.location.href.indexOf('#') > -1) {
		const targetId = window.location.hash.substr(1)
		$(`.js-tab-trigger[data-tab-id="${targetId}"]`).click()
		setTimeout(() => {
			$('html, body').scrollTop($('body').offset().top)
		}, 0)
	}
})

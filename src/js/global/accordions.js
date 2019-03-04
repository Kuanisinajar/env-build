import AOS from 'aos'
import $ from 'jquery'
import 'slick-carousel'

function collapseAll() {
	const toggleIcon = $('.js-accordion-toggle').find('.simple-icon-btn__icon')
	const toggleText = $('.js-accordion-toggle').find('.simple-icon-btn__text')
	$('.js-accordion-toggle').removeClass('is-default')
	$('.basic-accordion__container').slideUp(400)
	$('.basic-accordion__trigger').addClass('is-active')
	toggleText.text(toggleText.attr('data-active'))
	toggleIcon.removeClass('icon-collapse')
		.addClass('icon-expand')
}

$(() => {
	$('.js-accordion-toggle').find('.simple-icon-btn__text').text($('.js-accordion-toggle').find('.simple-icon-btn__text').attr('data-default'))
	$('.js-accordion-toggle').addClass('is-default')
	$('.js-expand').hide()
	AOS.refresh()
	if (window.matchMedia('(max-width: 767px)').matches)
		collapseAll()
})

$('.js-expand-trigger').on('click', event => {
	const selectId = $(event.currentTarget).attr('data-expand-id')
	const openItem = $(`[data-expand="${selectId}"]`)
	openItem.slideToggle(400)
	$('.overflow-carousel').slick('setPosition')
	$('.overflow-carousel__controls').appendTo('.overflow-carousel')
	$('html, body').animate({
		scrollTop: $(openItem).offset().top - 68
	}, 600)
})

$('.js-accordion-trigger').on('click', event => {
	const $this = $(event.currentTarget)
	const parent = $this.parents('.js-accordion')
	const openItem = $this.siblings('.js-accordion-main')
	if (!parent.is('.js-acc-multi-option')) {
		parent.find('.js-accordion-main')
			.not(openItem)
			.slideUp(400)
		parent.find('.js-accordion-trigger')
			.not($this)
			.removeClass('is-active')
	}
	$this.toggleClass('is-active')
	openItem.slideToggle(400)
})

$('.js-accordion-toggle').on('click', event => {
	const $this = $(event.currentTarget)
	const toggleIcon = $this.find('.simple-icon-btn__icon')
	const toggleText = $this.find('.simple-icon-btn__text')
	if ($this.hasClass('is-default'))
		collapseAll($this)
	else {
		$this.addClass('is-default')
		$('.js-accordion-main').slideDown(400)
		$('.js-accordion-trigger').removeClass('is-active')
		toggleText.text(toggleText.attr('data-default'))
		toggleIcon.removeClass('icon-expand')
			.addClass('icon-collapse')
	}
})

$('.ellipsis-accordion__trigger').on('click', event => {
	const $this = $(event.currentTarget)
	const openItem = $this.parents('.ellipsis-accordion__block').find('.ellipsis-accordion__container')
	$this.toggleClass('is-active')
	openItem.toggleClass('is-active')
})

$('.tab-accordion__trigger').on('click', event => {
	const $this = $(event.currentTarget)
	const openItem = $this.parents('.tab-accordion').find('.tab-accordion__main')
	$this.toggleClass('is-active')
	openItem.slideToggle(400)
})

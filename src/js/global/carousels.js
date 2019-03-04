import $ from 'jquery'
import 'slick-carousel'

$(() => {
	// $('.hero-carousel:not(.yt-carousel').each((index, element) => {
	// 	const carouselId = `hero-carousel-${index}`
	// 	element.id = carouselId
	// 	$(element).slick({
	// 		slide: `#${carouselId} .hero-carousel__slide`,
	// 		lazyLoad: 'progressive',
	// 		rows: 0,
	// 		slidesToShow: 1,
	// 		slidesToScroll: 1,
	// 		fade: true,
	// 		prevArrow: `#${carouselId} .hero-carousel__btn.hero-carousel__btn--prev`,
	// 		nextArrow: `#${carouselId} .hero-carousel__btn.hero-carousel__btn--next`,
	// 		responsive: [{
	// 			breakpoint: 768,
	// 			settings: {
	// 				dots: true,
	// 				arrows: false,
	// 				appendDots: `#${carouselId} .hero-carousel__dots`,
	// 			}
	// 		}]
	// 	})
	// 	if ($('body').find('.hero-carousel__video').length) {
	// 		$('.hero-carousel__video').get(0)
	// 			.play()
	// 	}
	// })
	$('.overlap-carousel').each((index, element) => {
		const carouselId = `overlap-carousel-${index}`
		element.id = carouselId
		$('.overlap-carousel__imgs').slick({
			slide: `#${carouselId} .overlap-carousel__img-slide`,
			lazyLoad: 'progressive',
			slidesToShow: 1,
			rows: 0,
			fade: true,
			slidesToScroll: 1,
			prevArrow: `#${carouselId} .overlap-carousel__btn.overlap-carousel__btn--prev`,
			nextArrow: `#${carouselId} .overlap-carousel__btn.overlap-carousel__btn--next`,
			asNavFor: `#${carouselId} .overlap-carousel__containers`
		})
		$('.overlap-carousel__containers').slick({
			slide: `#${carouselId} .overlap-carousel__container-slide`,
			lazyLoad: 'progressive',
			slidesToShow: 1,
			rows: 0,
			fade: true,
			swipe: false,
			slidesToScroll: 1,
			arrows: false,
			adaptiveHeight: true,
			asNavFor: `#${carouselId} .overlap-carousel__imgs`
		})
	})
	$('.inline-img-carousel').each((index, element) => {
		const carouselId = `inline-img-carousel-${index}`
		element.id = carouselId
		$(element).find('.inline-img-carousel__wrap')
			.slick({
				slide: `#${carouselId} .inline-img-carousel__slide`,
				lazyLoad: 'progressive',
				slidesToShow: 1,
				slidesToScroll: 1,
				rows: 0,
				dots: true,
				appendDots: `#${carouselId} .inline-img-carousel__dots`,
				prevArrow: `#${carouselId} .inline-img-carousel__btn.inline-img-carousel__btn--prev`,
				nextArrow: `#${carouselId} .inline-img-carousel__btn.inline-img-carousel__btn--next`
			})
	})
	$('.r-img-carousel').each((index, element) => {
		const carouselId = `r-img-carousel-${index}`
		element.id = carouselId
		$(element).slick({
			slide: `#${carouselId} .r-img-carousel__slide`,
			lazyLoad: 'progressive',
			slidesToShow: 1,
			slidesToScroll: 1,
			rows: 0,
			fade: true,
			dots: true,
			appendDots: `#${carouselId} .r-img-carousel__dots`,
			prevArrow: `#${carouselId} .r-img-carousel__btn.r-img-carousel__btn--prev`,
			nextArrow: `#${carouselId} .r-img-carousel__btn.r-img-carousel__btn--next`
		})
	})
	$('.center-carousel').each((index, element) => {
		const carouselId = `center-carousel-${index}`
		element.id = carouselId
		$(element).slick({
			slide: `#${carouselId} .center-carousel__slide`,
			lazyLoad: 'progressive',
			slidesToShow: 1,
			slidesToScroll: 1,
			adaptiveHeight: true,
			rows: 0,
			dots: true,
			appendDots: `#${carouselId} .center-carousel__dots`,
			prevArrow: `#${carouselId} .center-carousel__btn.center-carousel__btn--prev`,
			nextArrow: `#${carouselId} .center-carousel__btn.center-carousel__btn--next`
		})
		if ($('body').find('.center-carousel__video').length) {
			$('.center-carousel__video').get(0)
				.play()
		}
	})
	$('.c-text-carousel').each((index, element) => {
		const carouselId = `c-text-carousel-${index}`
		element.id = carouselId
		$(element).slick({
			slide: `#${carouselId} .c-text-carousel__slide`,
			lazyLoad: 'progressive',
			slidesToShow: 1,
			slidesToScroll: 1,
			rows: 0,
			adaptiveHeight: true,
			dots: false,
			prevArrow: `#${carouselId} .c-text-carousel__btn.c-text-carousel__btn--prev`,
			nextArrow: `#${carouselId} .c-text-carousel__btn.c-text-carousel__btn--next`
		})
	})
	$('.overflow-carousel').each((index, element) => {
		const carouselId = `overflow-carousel-${index}`
		element.id = carouselId
		$(element).slick({
			slide: `#${carouselId} .overflow-carousel__slide`,
			lazyLoad: 'progressive',
			slidesToShow: 2,
			slidesToScroll: 1,
			rows: 0,
			dots: true,
			appendDots: `#${carouselId} .overflow-carousel__dots`,
			prevArrow: `#${carouselId} .overflow-carousel__btn.overflow-carousel__btn--prev`,
			nextArrow: `#${carouselId} .overflow-carousel__btn.overflow-carousel__btn--next`,
			responsive: [{
				breakpoint: 768,
				settings: {
					slidesToShow: 1
				}
			}]
		})
	})
	$('.img-card-carousel').each((index, element) => {
		const carouselId = `img-card-carousel-${index}`
		element.id = carouselId
		$(element).slick({
			slide: `#${carouselId} .img-card-carousel__slide`,
			slidesToShow: 3,
			slidesToScroll: 1,
			rows: 0,
			dots: true,
			appendDots: `#${carouselId} .img-card-carousel__dots`,
			prevArrow: `#${carouselId} .img-card-carousel__btn.img-card-carousel__btn--prev`,
			nextArrow: `#${carouselId} .img-card-carousel__btn.img-card-carousel__btn--next`
		})
	})
	$('.module-carousel').each((index, element) => {
		const carouselId = `module-carousel-${index}`
		element.id = carouselId
		$(element).slick({
			slide: `#${carouselId} .module-carousel__slide`,
			lazyLoad: 'progressive',
			adaptiveHeight: true,
			slidesToShow: 1,
			slidesToScroll: 1,
			rows: 0,
			dots: false,
			prevArrow: `#${carouselId} .module-carousel__btn.module-carousel__btn--prev`,
			nextArrow: `#${carouselId} .module-carousel__btn.module-carousel__btn--next`
		})
	})
	$('.product-carousel').each((index, element) => {
		const carouselId = `product-carousel-${index}`
		element.id = carouselId
		$(element).slick({
			slide: `#${carouselId} .product-carousel__item`,
			lazyLoad: 'progressive',
			slidesToShow: 1,
			slidesToScroll: 1,
			rows: 0,
			dots: false,
			fade: true,
			prevArrow: `#${carouselId} .product-carousel__btn.product-carousel__btn--prev`,
			nextArrow: `#${carouselId} .product-carousel__btn.product-carousel__btn--next`
		})
	})
	$('.showcase-block__item.js-tab-trigger').on('click', event => {
		const slideId = $('.showcase-block__item').index(event.currentTarget)
		$('.product-carousel').slick('slickGoTo', slideId)
	})

	$('.product-carousel').on('afterChange', () => {
		const currentSlide = $('.product-carousel').slick('slickCurrentSlide')
		$('.showcase-block__item.js-tab-trigger').removeClass('is-active')
			.eq(currentSlide)
			.addClass('is-active')
	})
	$('.step-carousel').each((index, element) => {
		const carouselId = `step-carousel-${index}`
		element.id = carouselId
		$(element).slick({
			slide: `#${carouselId} .step-carousel__slide`,
			lazyLoad: 'progressive',
			slidesToShow: 1,
			slidesToScroll: 1,
			rows: 0,
			adaptiveHeight: true,
			draggable: false,
			swipe: false,
			dots: false,
			fade: true,
			prevArrow: `#${carouselId} .step-carousel__btn.step-carousel__btn--prev`,
			nextArrow: `#${carouselId} .step-carousel__btn.step-carousel__btn--next`
		})
	})
})



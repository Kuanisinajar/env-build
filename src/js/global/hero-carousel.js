import $ from 'jquery'
import 'slick-carousel'

$(document).ready(() => {
	// vars
	let w = $(window).width()
	const main = 'hero-carousel'
	const videoArr = []
	const storage = {
		slider: $(`.${main}__slider`),
		slide: $(`.${main}__slide`),
		iframe: `.${main}__slider iframe`,
		videoItem: $(`.${main}__item.-videoYT`)
	}
	const config = {
		videoApi: '',
		firstLoad: 1,
		videoIdName: '',
		state: '',
		currentVideoId() {
			return storage.slider.find(`.slick-current .${main}__item`).attr('data-value')
		},
		videoResizer(iframeBox, iframes, ratio = 16 / 9) {
			if (!iframes[0]) return
			const win = iframeBox
			const width = win.width()
			const height = win.height()
			let playerWidth
			let playerHeight

			iframes.each(function () {
				const current = $(this)
				if ((width / ratio) < height) {
					playerWidth = Math.ceil(height * ratio)
					current.css({
						width: `${playerWidth}px`,
						height: `${height}px`,
						left: (width - playerWidth) / 2,
						top: 0
					})
				} else {
					playerHeight = Math.ceil(width / ratio)
					current.css({
						width: `${width}px`,
						height: `${playerHeight}px`,
						left: 0,
						top: (height - playerHeight) / 2
					})
				}
			})
		},
		postMessageToPlayer(player, command) {
			if (player == null || command == null) return
			player.contentWindow.postMessage(JSON.stringify(command), '*')
		},
		// When the slide is changing
		playPauseVideo(slick, control) {
			const currentSlide = slick.find('.slick-current').find('.item')
			const slideType = currentSlide.attr('class').split(' ')[1]
			const startTime = currentSlide.data('video-start')
			const player = currentSlide.find('iframe').get(0)
			let video

			if (slideType === '-videoVM') {
				switch (control) {
					case 'play':
						if ((startTime != null && startTime > 0) && !currentSlide.hasClass('started')) {
							currentSlide.addClass('started')
							config.postMessageToPlayer(player, {
								method: 'setCurrentTime',
								value: startTime
							})
						}
						config.postMessageToPlayer(player, {
							method: 'play',
							value: 1
						})
						break
					case 'pause':
						config.postMessageToPlayer(player, {
							method: 'pause',
							value: 1
						})
						break
				}
			} else if (slideType === '-videoYT') {
				switch (control) {
					case 'play':
						config.postMessageToPlayer(player, {
							event: 'command',
							func: 'mute'
						})
						config.postMessageToPlayer(player, {
							event: 'command',
							func: 'playVideo'
						})
						break
					case 'pause':
						config.postMessageToPlayer(player, {
							event: 'command',
							func: 'pauseVideo'
						})
						break
				}
			} else if (slideType === '-videoVD') {
				video = currentSlide.children('video').get(0)
				video != null && control === 'play' ? video.play() : video.pause()
			}
		}
	}

	// yt api
	const tag = document.createElement('script')
	tag.src = 'https://www.youtube.com/iframe_api'
	const firstScriptTag = document.getElementsByTagName('script')[0]
	firstScriptTag.parentNode.insertBefore(tag, firstScriptTag)

	window.onYouTubeIframeAPIReady = function () {
		storage.videoItem.each(function () {
			config.videoIdName = $(this).attr('data-value')
			const ytId = $(this).data('video-id')
			videoArr[config.videoIdName] = new YT.Player(config.videoIdName, {
				videoId: ytId,
				playerVars: {
					modestbranding: 0
				},
				events: {
					onReady: () => {
						const videoId = config.currentVideoId()
						w = $(window).width()
						config.videoApi = '1'
						if (
							videoId === 'img' &&
							parseInt(config.firstLoad, 10) === 1 &&
							w > 767
						)
							storage.slider.slick('slickPause')
						if (videoArr[videoId]) {
							videoArr[videoId].mute()
							videoArr[videoId].playVideo()
						} else {
							$('.hero-carousel__item').find('video')[0]
								.play()
						}
						config.videoResizer(storage.slider, $(storage.iframe), 16 / 9)
						return config.videoApi
					},
					onStateChange: () => {
						const videoId = config.currentVideoId()
						if (videoId !== 'img' && videoId !== 'localVideo') {
							config.state = videoArr[videoId].getPlayerState()
							switch (config.state) {
								case 0:
									$(`.slick-slide .item[data-value=${videoId}]`).removeClass('on')
									storage.slider.slick('slickNext')
									storage.slider.slick('slickPlay')
									break
								case 1:
									$(`.slick-slide .item[data-value=${videoId}]`).addClass('on')
									break
							}
						}
					}
				}
			})
		})
	}

	// slick

	storage.slider.slick({

		fade: true,
		speed: 600,
		rows: 0,
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: false,
		prevArrow: $(`.${main}__btn--prev`),
		nextArrow: $(`.${main}__btn--next`),
		cssEase: 'cubic-bezier(0.87, 0.03, 0.41, 0.9)',
		autoplay: false,
		responsive: [{
			breakpoint: 768,
			settings: {
				dots: true,
				arrows: false,
				appendDots: `.${main} .hero-carousel__dots`,
			}
		}]
	})

	storage.slider.on('beforeChange', (event, slick, currentSlide, nextSlide) => {
		const videoId = config.currentVideoId()
		const $currentSlide = storage.slider.find('.slick-current')
		const videoType = $currentSlide.find(`.${main}__item`).attr('class')
			.split(' ')[1]
		const video = $currentSlide.find('video').length > 0 ? $currentSlide.find('video')[0] : null
		w = $(window).width()
		if (videoId !== 'img' && parseInt(config.state, 10) !== 0 && w > 767) {
			switch (videoType) {
				case '-videoYT':
					videoArr[videoId].pauseVideo()
					break
				case '-videoVD':
					if (video !== null) video.pause()
					break
			}
		}
	})

	storage.slider.on('afterChange', (event, slick, currentSlide) => {
		w = $(window).width()
		config.firstLoad = 0
		let videoId = config.currentVideoId()
		const $currentSlide = storage.slider.find('.slick-current')
		const videoType = $currentSlide.find(`.${main}__item`).attr('class')
			.split(' ')[1]
		const video = $currentSlide.find('video').length > 0 ? $currentSlide.find('video')[0] : null
		if (videoId !== 'img' && w > 767) {
			// 偵測若div內容為影片
			storage.slider.slick('slickPause')
			switch (videoType) {
				case '-videoYT':
					videoArr[videoId].mute()
					videoArr[videoId].playVideo()
					break
				case '-videoVD':
					if (video !== null) {
						video.play()
						$(video).off('ended')
							.on('ended', () => {
								storage.slider.slick('slickPlay')
							})
					}
					break
			}
		} else
			videoId = 'img'
	})

	$(window).on('scroll', () => {
		// detect scroll to stop
		if ($(`.${main}`).length > 0) {
			const scrollTop = $('html, body').scrollTop()
			const bannerHeight = $(`.${main}`).offset().top + ($(`.${main}`).height() * (2 / 3))
			const videoId = config.currentVideoId()
			w = $(window).width()

			const $currentSlide = storage.slider.find('.slick-current')
			const videoType = $currentSlide.find(`.${main}__item`).attr('class')
				.split(' ')[1]
			const video = $currentSlide.find('video').length > 0 ? $currentSlide.find('video')[0] : null

			// 偵測若div內容為影片
			if (w > 991) {
				if (videoId !== 'img' && scrollTop > bannerHeight) {
					switch (videoType) {
						case '-videoYT':
							videoArr[videoId].pauseVideo()
							break
						case '-videoVD':
							if (video !== null) video.pause()
							break
					}
				} else {
					switch (videoType) {
						case '-videoYT':
							videoArr[videoId].mute()
							videoArr[videoId].playVideo()
							break
						case '-videoVD':
							if (video !== null) video.play()
							break
					}
				}
			}
		}
	})

	$(window).on('resize', () => {
		config.videoResizer(storage.slider, $(storage.iframe), 16 / 9)
		config.videoResizer(storage.slider, storage.slider.find('video'), 192 / 55)
	})
		.trigger('resize')

	// if ($(window).width() > 767) {
	// 	setTimeout(() => {
	// 		storage.slider.slick('slickPlay')
	// 	}, 2000)
	// }
})

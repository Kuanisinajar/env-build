$(() => {
	$('.ie-browser .step-carousel__btn--disable').prop('disabled', true)
	if (navigator.appName == 'Microsoft Internet Explorer' || !!(navigator.userAgent.match(/Trident/) || navigator.userAgent.match(/rv:11/)) || (typeof $.browser !== 'undefined' && $.browser.msie == 1)) {
		$('.body-section').addClass('ie-browser')
		$('.compare-section__top').prepend('<div class="compare-section__ie-block"></div>')
	} else
		$('.body-section').addClass('not-ie')
})



function getCookie(cname) {
	const name = `${cname}=`
	const ca = document.cookie.split(';')
	for (let i = 0; i < ca.length; i++) {
		let c = ca[i]
		while (c.charAt(0) === ' ') c = c.substring(1)
		if (c.indexOf(name) === 0) return c.substring(name.length, c.length)
	}
	return ''
}
function setCookie(cname, cvalue, exdays) {
	const d = new Date()
	d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000))
	const expires = `expires=${d.toUTCString()}`
	document.cookie = `${cname}=${cvalue}; ${expires}; path=/`
}


$(() => {
	const hasClosed = getCookie('closeCookie')
	if (hasClosed !== '1')
		$('.cookie-block').fadeIn()
	$('.js-closeCookieBlock').on('click', () => {
		$('.cookie-block').fadeOut()
		setCookie('closeCookie', '1', 36500)
	})
})

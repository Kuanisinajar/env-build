import AOS from 'aos'

AOS.init({
	once: true,
	offset: 300,
	duration: 800,
	delay: 100,
	disable: window.innerWidth < 768
})


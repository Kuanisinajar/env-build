export const scrollLock = {
	enabled: false,
	position: 0,

	on() {
		this.enabled = true;
		this.position = $(window).scrollTop();
	},
	off() {
		this.enabled = false;
	},
	init() {
		$(window).scroll(() => {
			if (this.enabled){
				$(window).scrollTop(this.position);
			}
		});
	}
};

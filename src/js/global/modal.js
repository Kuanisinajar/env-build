import { scrollLock } from "./scroll-lock.js";

let modalTrigger = $(".js-modal-trigger");
const modalClose = $(".js-modal-close");

function closeModal() {
	if ($(".modal.is-active").find("iframe").length) {
		const openedModalIframe = $(".modal.is-active iframe");
		let videoURL = openedModalIframe.prop("src");
		videoURL = videoURL.replace("&amp;autoplay=1", "");
		openedModalIframe.prop("src", "");
		openedModalIframe.prop("src", videoURL);
	}
	$(".modal, .full-modal").removeClass("is-active");
	// $('body').removeClass('modal-active')
	$(".body-section").removeClass("ps-active");
	scrollLock.off();
}

function openModal() {
	modalTrigger = $(".js-modal-trigger");
	modalTrigger.on("click", event => {
		closeModal();
		const modalId = event.currentTarget.getAttribute("data-modal-id");
		const modalVideo = event.currentTarget.getAttribute("data-video");
		const modalInternalVideo = event.currentTarget.getAttribute(
			"data-internal-video"
		);
		const modalImg = event.currentTarget.getAttribute("data-image");
		const modal = $(`[data-modal="${modalId}"]`);
		const $this = $(event.target);
		const scrollPosition = $(window).scrollTop();
		if (modalVideo) {
			modal
				.find(".iframe-block")
				.empty()
				.append(modalVideo);
			let videoURL = modal.find("iframe").prop("src");
			videoURL += "&amp;autoplay=1";
			modal.find("iframe").prop("src", videoURL);
		} else if (modalInternalVideo) {
			modal
				.find(".video-block")
				.find("source")
				.attr("src", modalInternalVideo);
			$(".video-block")[0].load();
		} else if (modalImg) {
			modal
				.find(".modal__container")
				.empty()
				.append(`<img src="${modalImg}"/>`);
		}
		// if ($this.hasClass('full-modal-trigger'))
		// 	$('body').toggleClass('modal-active')
		modal.addClass("is-active");
		if (modal.hasClass("modal--ps")) $(".body-section").addClass("ps-active");
		if (modal.hasClass("js-scroll-lock-target")){
			scrollLock.on();
		}
	});
}

function modalAction() {
	closeModal();
	openModal();
	scrollLock.init();
}

modalClose.on("click", () => {
	closeModal();
});

$("body").on("click", ".modal", event => {
	if (!$(event.target).closest(".modal__container").length) closeModal();
});

$(".js-full-modal").on("click", event => {
	const modalId = event.currentTarget.getAttribute("data-modal-id");
	const modal = $(`[data-modal="${modalId}"]`);
	modal.addClass("is-active");
});

modalAction();

import 'selectize'

const addAddress = $('.js-add-address')
const saveTag = $('.js-save-tag')
const followBtn = $('.js-follow-btn')

const addressBlock =
	`<div class="basic-form js-product">
		<div class="shadow-block">
			<div class="basic-form__fieldset">
				<div class="basic-form__legend">
					<span>Product Information</span>
					<button type="button" class="basic-form__remove-product js-remove-product">Remove</button>
				</div>
				<h4 class="basic-form__subheading">Product No. 1</h4>
				<div class="basic-form__column column column--4">
					<div class="basic-form__group column__item">
						<label class="basic-form__label" for="">Add Product*</label>
						<div class="basic-form__select-wrap">
							<select class="basic-form__select" name="product-by" required>
								<option value="- Select -" selected disabled>- Select -</option>
								<option value="Serial Number">By Serial Number (SN)</option>
								<option value="Mac Address">By MAC Address (MAC)</option>
								<option value="By Product Model">SN and MAC Not Available</option>
							</select>
						</div>
						<div class="basic-form__notice">This is required.</div>
					</div>
					<div class="basic-form__group column__item column__item--3">
						<div class="js-select-input" data-input="serial-number">
							<label class="basic-form__label" for="serial-number">Enter the serial number* <button class="js-modal-trigger basic-form__btn js-tab-serial" data-modal-id="serial-num-modal"><i class="icon-question"></i></button></label>
							<input class="basic-form__input" type="text" name="serial-number" placeholder="Please enter the serial number" required>
							<span class="basic-form__notice">Serial Number is required.</span>
						</div>
						<div class="js-select-input js-form-format" data-input="mac-address">
							<label class="basic-form__label" for="mac-address">Enter the MAC address* <button class="js-modal-trigger basic-form__btn js-tab-mac" data-modal-id="serial-num-modal"><i class="icon-question"></i></button></label>
							<input class="basic-form__input js-format-mac-address js-label" maxlength="17" type="text" name="mac-address" placeholder="Please enter the MAC address" required>
							<span class="basic-form__notice js-mac-address-error">MAC address is required.</span>
						</div>
						<div class="js-select-input" data-input="product-model-info">
							<label class="basic-form__label" for="prodict-model-info">Enter the Product Model* <button class="js-modal-trigger basic-form__btn js-tab-p-model" data-modal-id="serial-num-modal"><i class="icon-question"></i></button></label>
							<input class="basic-form__input" type="text" name="prodict-model-info" placeholder="Please enter the product model" required>
							<span class="basic-form__notice">Product model is required.</span>
						</div>
					</div>
				</div>
				<div class="basic-form__column column column--2">
					<div class="basic-form__group column__item">
						<div class="basic-form__label">Product Model</div>
						<div class="basic-form__block">ICS-G7748A-HV-HV</div>
					</div>
					<div class="basic-form__group column__item">
						<div class="basic-form__label">Warranty Status</div>
						<div class="basic-form__block">Expired (Warranty end date: 2014/10/20 )</div>
					</div>
					<div class="basic-form__group column__item">
						<label class="basic-form__label" for="">Type of Problem*</label>
						<div class="basic-form__select-wrap">
							<select class="basic-form__select" name="problem" required>
								<option value="- Select -" selected disabled>- Select -</option>
								<option value="problem 1">Problem 1</option>
								<option value="problem 2">Problem 2</option>
							</select>
						</div>
						<div class="basic-form__notice">Type of Problem is required.</div>
					</div>
					<div class="basic-form__group column__item">
						<label class="basic-form__label" for="">Technical Support Case ID <div class="basic-form__tooltip"><i class="icon-info"></i><span class="basic-form__bubble">If you have created a technical support case corresponding to this request, enter the Case ID here to help us expedite your RMA request.</span></div></label>
						<input class="basic-form__input" type="text" name="Technical Support Case ID">
					</div>
				</div>
				<div class="basic-form__group">
					<label class="basic-form__label" for="describe-problem">Problem Description*</label>
					<textarea class="basic-form__textarea" name="describe-problem" cols="30" rows="10" placeholder="Describe the problem in detail and include the troubleshooting steps followed and their results."></textarea>
				</div>
			</div>
		</div>
	</div>`
const addressBlock2 =
	`<div class="basic-form js-product">
		<div class="shadow-block">
			<div class="basic-form__fieldset">
				<div class="basic-form__legend">
					<span>Product Information</span>
					<button type="button" class="basic-form__remove-product js-remove-product">Remove</button>
				</div>
				<h4 class="basic-form__subheading">Product No. 1</h4>
				<div class="basic-form__column column column--4">
					<div class="basic-form__group column__item">
						<label class="basic-form__label" for="">Add Product*</label>
						<div class="basic-form__select-wrap">
							<select class="basic-form__select" name="product-by" required>
								<option value="- Select -" selected disabled>- Select -</option>
								<option value="Serial Number">By Serial Number</option>
								<option value="Mac Address">By MAC Address</option>
							</select>
						</div>
						<div class="basic-form__notice">This is required.</div>
					</div>
					<div class="basic-form__group column__item column__item--3">
						<div class="js-select-input" data-input="serial-number">
							<label class="basic-form__label" for="serial-number">Enter the serial number* <button class="js-modal-trigger basic-form__btn js-tab-serial" data-modal-id="serial-num-modal"><i class="icon-question"></i></button></label>
							<input class="basic-form__input" type="text" name="serial-number" placeholder="Please enter the serial number" required>
							<span class="basic-form__notice">Serial Number is required.</span>
						</div>
						<div class="js-select-input js-form-format" data-input="mac-address">
							<label class="basic-form__label" for="mac-address">Enter the MAC address* <button class="js-modal-trigger basic-form__btn js-tab-mac" data-modal-id="serial-num-modal"><i class="icon-question"></i></button></label>
							<input class="basic-form__input js-format-mac-address js-label" maxlength="17" type="text" name="mac-address" placeholder="Please enter the MAC address" required>
							<span class="basic-form__notice js-mac-address-error">MAC address is required.</span>
						</div>
					</div>
				</div>
				<div class="basic-form__column column column--2">
					<div class="basic-form__group column__item">
						<div class="basic-form__label">Product Model</div>
						<div class="basic-form__block">ICS-G7748A-HV-HV</div>
					</div>
					<div class="basic-form__group column__item">
						<div class="basic-form__label">Warranty Status</div>
						<div class="basic-form__block">Expired (Warranty end date: 2014/10/20 )</div>
					</div>
					<div class="basic-form__group column__item">
						<label class="basic-form__label" for="">Type of Problem*</label>
						<div class="basic-form__select-wrap">
							<select class="basic-form__select" name="problem" required>
								<option value="- Select -" selected disabled>- Select -</option>
								<option value="problem 1">Problem 1</option>
								<option value="problem 2">Problem 2</option>
							</select>
						</div>
						<div class="basic-form__notice">Type of Problem is required.</div>
					</div>
					<div class="basic-form__group column__item">
						<label class="basic-form__label" for="">Technical Support Case ID <div class="basic-form__tooltip"><i class="icon-info"></i><span class="basic-form__bubble">If you have created a technical support case corresponding to this request, enter the Case ID here to help us expedite your DOA request.</span></div></label>
						<input class="basic-form__input" type="text" name="Technical Support Case ID">
					</div>
				</div>
				<div class="basic-form__group">
					<label class="basic-form__label" for="describe-problem">Problem Description*</label>
					<textarea class="basic-form__textarea" name="describe-problem" cols="30" rows="10" placeholder="Describe the problem in detail and include the troubleshooting steps followed and their results."></textarea>
				</div>
			</div>
		</div>
	</div>`

let mixer
let productForms = $('.basic-form.js-product')


function showNoteBlock($btn) {
	const block = $btn.siblings('.save-note-block')
	block.fadeIn(200)
		.css('display', 'inline-block')
	setTimeout(() => {
		block.fadeOut(200)
	}, 3000)
}

function checkFormNum() {
	productForms = $('.basic-form.js-product')
	productForms.each((index, element) => {
		$(element).find('.basic-form__subheading')
			.text(`Product No. ${index + 1}`)
	})
}

function formatMacAddress() {
	const $form = $('.js-form-format')
	const format = $form.find('.js-format-mac-address')
	const split = 2
	format.on('keyup', event => {
		const $this = $(event.currentTarget)
		let input = $this.val()
		input = input.replace(/[\W\s\._\-]+/g, '')
		const chunk = []
		// When user select text in the document, also abort.
		const selection = window.getSelection().toString()
		if (selection !== '')
			return false
		// When the arrow keys are pressed, abort.
		if ($.inArray(event.keyCode, [38, 40, 37, 39]) !== -1)
			return false

		for (let i = 0, len = input.length; i < len; i += split)
			chunk.push(input.substr(i, split))

		$this.val(() => chunk.join('-').toUpperCase())
	})
}

function validateMacAddress() {
	$('.basic-form__input.js-format-mac-address').on('focusout', event => {
		const $this = $(event.currentTarget)
		const errorField = $this.siblings('.js-mac-address-error')
		const input = $this.val()
		if (input.length !== 17 && input.length !== 0) {
			$this.addClass('basic-form--error')
			errorField.addClass('is-active')
		} else {
			$this.removeClass('basic-form--error')
			errorField.removeClass('is-active')
		}
	})
}

function checkSelect($item, $name) {
	switch ($item.find(`select[name="${$name}"]`).val()) {
		case 'Serial Number':
			$item.find('.js-select-input').hide()
			$item.find('[data-input="serial-number"]').show()
			break
		case 'Mac Address':
			$item.find('.js-select-input').hide()
			$item.find('[data-input="mac-address"]').show()
			break
		case 'By Product Model':
			$item.find('.js-select-input').hide()
			$item.find('[data-input="product-model-info"]').show()
			break
		case 'United States':
			$item.find('.js-select-input').hide()
			$item.find('[data-input="usa-state"]').show()
			break
		default:
			$item.find('.js-select-input').hide()
	}
}

// function checkItemsNum() {
// 	if ($('.product-area .basic-form').length === 1) {
// 		$('.product-area .basic-form').find('.js-remove-product')
// 			.hide()
// 	} else {
// 		$('.product-area .basic-form').find('.js-remove-product')
// 			.show()
// 	}
// }

function selectFunction() {
	$('select').on('change', event => {
		const $this = $(event.target)
		const { name } = $this[0]
		if (name === 'product-by' || name === 'country') {
			const $parent = $this.parents('.basic-form')
			checkSelect($parent, name)
		}
	})
}

function removeProductForm() {
	$('.js-remove-product').on('click', event => {
		const $this = $(event.currentTarget)
		$this.parents('.basic-form').remove()
		// checkItemsNum()
		checkFormNum()
	})
}

function switchTab() {
	$('.js-tab-serial').on('click', () => {
		$('.modal .js-tab-trigger').removeClass('is-active')
		$('.modal .js-tab-main').removeClass('is-active')
		$('[data-tab="tab-serial"], [data-tab-id="tab-serial"]').addClass('is-active')
	})

	$('.js-tab-mac').on('click', () => {
		$('.modal .js-tab-trigger').removeClass('is-active')
		$('.modal .js-tab-main').removeClass('is-active')
		$('[data-tab="tab-mac"], [data-tab-id="tab-mac"]').addClass('is-active')
	})

	$('.js-tab-p-model').on('click', () => {
		$('.modal .js-tab-trigger').removeClass('is-active')
		$('.modal .js-tab-main').removeClass('is-active')
		$('[data-tab="tab-product"], [data-tab-id="tab-product"]').addClass('is-active')
	})
}

function openModal() {
	modalTrigger = $('.js-modal-trigger')
	modalTrigger.on('click', event => {
		closeModal()
		const modalId = event.currentTarget.getAttribute('data-modal-id')
		const modalVideo = event.currentTarget.getAttribute('data-video')
		const modalImg = event.currentTarget.getAttribute('data-image')
		const modal = $(`[data-modal="${modalId}"]`)
		const $this = $(event.target)
		if (modalVideo) {
			modal.find('.iframe-block')
				.empty()
				.append(modalVideo)
			let videoURL = modal.find('iframe').prop('src')
			videoURL += '&amp;autoplay=1'
			modal.find('iframe').prop('src', videoURL)
		} else if (modalImg) {
			modal.find('.modal__container')
				.empty()
				.append(`<img src="${modalImg}"/>`)
		}
		if ($this.hasClass('full-modal-trigger'))
			$('body').toggleClass('modal-active')
		modal.addClass('is-active')
		if (modal.hasClass('modal--ps'))
			$('.body-section').addClass('ps-active')
	})
}

function closeModal() {
	if ($('.modal.is-active').find('iframe').length) {
		const openedModalIframe = $('.modal.is-active iframe')
		let videoURL = openedModalIframe.prop('src')
		videoURL = videoURL.replace('&amp;autoplay=1', '')
		openedModalIframe.prop('src', '')
		openedModalIframe.prop('src', videoURL)
	}
	$('.modal, .full-modal').removeClass('is-active')
	$('body').removeClass('modal-active')
	$('.body-section').removeClass('ps-active')
}

const testSelectizeArray = [
	{ value: 'aaa22', text: 'aaa22' },
	{ value: 'aaabb', text: 'aaabb' },
	{ value: 'bbbbbb', text: 'bbbbbb' },
	{ value: 'ccccccccc', text: 'ccccccccc' },
	{ value: 'hello', text: 'hello' },
	{ value: 'hello2', text: 'hello2' },
	{ value: 'hello3', text: 'hello3' },
	{ value: 'hello4', text: 'hello4' },
	{ value: 'TaipeiMetro', text: 'TaipeiMetro' }
]

function initSelectize(optionArray) {
	const $select = $('.edit-tags-block__tags').selectize({
		plugins: ['remove_button'],
		persist: true,
		create(input) {
			return {
				value: input,
				text: input
			}
		}
	})
	$select.each((index, element) => {
		const test = element.selectize
		test.addOption(optionArray)
		test.refreshOptions()
	})
}

formatMacAddress()
validateMacAddress()
selectFunction()
switchTab()

$(() => {
	// Save Tag click function (Product page)
	saveTag.each((index, element) => {
		const defaultText = $(element).find('.simple-icon-btn__text')
			.data('btn-default')
		const activeText = $(element).find('.simple-icon-btn__text')
			.data('btn-select')
		$(element).find('.simple-icon-btn__text')
			.text(defaultText)
		$(element).click(event => {
			const $this = $(event.currentTarget)
			const btnText = $this.find('.simple-icon-btn__text')
			if (btnText.text() === defaultText) {
				$this.find('.simple-icon-btn__icon')
					.removeClass('icon-tag')
					.addClass('icon-tag-full')
				btnText.text(activeText)
				if ($('body').find('.page-saved-block').length) {
					$('.page-saved-block').fadeIn(200)
						.delay(1500)
						.fadeOut(200)
					setTimeout(() => {
						showNoteBlock($this)
					}, 1700)
				} else
					showNoteBlock($this)
			} else {
				$this.find('.simple-icon-btn__icon')
					.removeClass('icon-tag-full')
					.addClass('icon-tag')
				btnText.text(defaultText)
				$this.siblings('.save-note-block')
					.fadeOut(400)
			}
		})
	})

	// Follow Product button click function (Product page)
	followBtn.each((index, element) => {
		const defaultText = $(element).find('.border-btn__text')
			.data('btn-default')
		const activeText = $(element).find('.border-btn__text')
			.data('btn-select')
		$(element).find('.border-btn__text')
			.text(defaultText)
		$(element).click(event => {
			const $this = $(event.currentTarget)
			const btnText = $this.find('.border-btn__text')
			$this.toggleClass('is-active')
			if (btnText.text() === defaultText) {
				$this.find('.border-btn__icon')
					.removeClass('icon-plus')
					.addClass('icon-check')
				btnText.text(activeText)
				showNoteBlock($this)
			} else {
				$this.find('.border-btn__icon')
					.removeClass('icon-check')
					.addClass('icon-plus')
				btnText.text(defaultText)
				$this.siblings('.save-note-block')
					.fadeOut(400)
			}
		})
	})


	$('.basic-form__select option').each((index, element) => {
		const $element = $(element)
		const $parent = $element.parents('.basic-form')
		if ($element.val() === 'United States' && $element.is(':selected'))
			$parent.find('[data-input="usa-state"]').show()
	})

	if ($('body').find('.edit-tags-block__tags').length)
		initSelectize(testSelectizeArray)
})

//  Add Address button click function (RMA / DOA Case)
addAddress.each((index, element) => {
	$(element).click(event => {
		const textArea = $(element).children('.simple-icon-btn__text')
		const text = textArea.text()
		$(element)
			.find('.simple-icon-btn__icon')
			.toggleClass('icon-plus')
		$(element)
			.find('.simple-icon-btn__icon')
			.toggleClass('icon-check')
		textArea.text(text === 'ADD TO MY SAVED ADDRESSES' ? 'ADDRESSES ADDED' : 'ADD TO MY SAVED ADDRESSES')
	})
})

// How to Buy Search button clicked animation (How to buy)
$('.js-distributor-filter').on('click', event => {
	event.preventDefault()
	$('#distributor-result-section').slideDown(400)
	$('html, body').animate({
		scrollTop: $('#distributor-result-section').offset().top - 68
	}, 1000)
	mixer = mixitup('.mix-container')
	mixer.sort('name:asc')

	// Change search result `sort by` animation (How to buy)
	$('.sort-dropdown__select').on('change', element => {
		const selectOrder = $(element.target).val()
		switch (selectOrder) {
			case 'company-name-a-z':
				mixer.sort('name:asc')
				break
			case 'company-name-z-a':
				mixer.sort('name:desc')
				break
		}
	})
})

//  Add Product button click function (RMA / DOA Case)
$('.js-add-product').on('click', event => {
	const $this = $(event.currentTarget)
	if ($this.hasClass('js-doa'))
		$('.product-area').append(addressBlock2)
	else
		$('.product-area').append(addressBlock)
	openModal()
	formatMacAddress()
	validateMacAddress()
	// checkItemsNum()
	selectFunction()
	removeProductForm()
	checkFormNum()
	switchTab()
})


// Change border color after selected option
$('.js-select').on('click', event => {
	const $this = $(event.currentTarget)
	const selectParent = $this.parents('.js-select-wrap')
	selectParent.find('.js-select').removeClass('is-active')
	$this.addClass('is-active')
})

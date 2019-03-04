// function checkForm($item) {
// 	if ($item != null) {
// 			const requiredInputs = $item.find('[data-required="true"]')
// 			requiredInputs.each((index, element) => {
// 					const $element = $(element)
// 					checkRequiredInput($element)
// 			})
// 	}
// }

// function checkRequiredInput($item) {
// 	//check if control has validation assigned and if any is active (display inline or block) change control border class
// 	const $noticeItems = $item.parents('.basic-form__group')
// 					.find('.basic-form__notice')

// 	let isNotValid = false;
// 	$noticeItems.each((index, element) => {
// 			const $element = $(element);
// 			if (!isNotValid && ($element.css('display') == 'inline' || $element.css('display') == 'block')) {
// 					isNotValid = true;
// 			}
// 	})

// 	if (isNotValid) {
// 			$item.addClass('basic-form--error')
// 	}
// 	else {
// 			$item.removeClass('basic-form--error')
// 	}
// }


// $('input, textarea, select').filter('[data-required="true"]')
// 	.blur(event => {
// 		const $this = $(event.target)
// 		const parentForm = $this.parents('.js-form-group')
// 		checkRequiredInput($this)
// 		checkForm(parentForm)
// 	})

// $('button[type="submit"]').on('click', event => {
// 	const $this = $(event.target)
// 	const parentForm = $this.parents('.js-form-group')
// 	checkForm(parentForm)
// })

function togglePW($input, $btn) {
	const currentType = $input.attr('type')
	if (currentType === 'password') {
		$input.prop('type', 'text')
		$btn.text($btn.attr('data-active'))
	} else {
		$input.prop('type', 'password')
		$btn.text($btn.attr('data-default'))
	}
}

$(() => {
	$('.js-togglePW').each((index, element) => {
		const initPwText = $(element).attr('data-default')
		$(element).text(initPwText)
		$(element).siblings('.basic-form__input')
			.addClass('-with-btn')
	})
})

$('input[type=number]').on('change keyup', function () {
	// Remove invalid characters
	let sanitized = $(this).val()
		.replace(/[^-.0-9]/g, '')
	// Remove non-leading minus signs
	sanitized = sanitized.replace(/(.)-+/g, '$1')
	// Remove the first point if there is more than one
	sanitized = sanitized.replace(/\.(?=.*\.)/g, '')
	// Update value
	$(this).val(sanitized)
})

$('.js-extand-pw').on('click', event => {
	const $this = $(event.currentTarget)
	const parent = $this.parents('.account-section__border-block')
	parent.addClass('is-active')
})

$('.account-section__cancel-btn').on('click', event => {
	const $this = $(event.currentTarget)
	const parent = $this.parents('.account-section__border-block')
	const clearForm = $this.parents('.base-form')
	clearForm.find('input').val('')
	parent.removeClass('is-active')
	if ($this.hasClass('.js-select-no-listed')) {

	}
})


$('input[type=radio][name=prd-modal]').on('change', () => {
	const selectedValue = $("input[name='prd-modal']:checked").val()
	if (selectedValue === 'yes')
		$('.js-prd-model-confirm').show()
	else
		$('.js-prd-model-confirm').hide()
})

$('.js-togglePW').on('click', event => {
	const $this = $(event.currentTarget)
	const $target = $this.siblings('.basic-form__input')
	togglePW($target, $this)
})


function checkAllCheckbox($list) {
	$list.find('.notify-checkbox__input')
		.prop('checked', true)
}

function uncheckAllCheckbox($list) {
	$list.find('.notify-checkbox__input')
		.prop('checked', false)
}

function updateDisplay($subList) {
	const parent = $subList.parents('.notify-checkbox-wrap')
	const totalList = $subList.find('.notify-checkbox__input').length
	const checkedList = $subList.find('.notify-checkbox__input:checked').length
	const controledCheckbox = parent.find('.is-indeterminate')
	if (totalList === checkedList) {
		controledCheckbox.hide()
			.siblings('.notify-checkbox__label')
			.removeClass('is-active')
		parent.find('.js-indeterminate')
			.prop('checked', true)
	} else if (checkedList === 0) {
		controledCheckbox.hide()
			.siblings('.notify-checkbox__label')
			.removeClass('is-active')
		parent.find('.js-indeterminate')
			.prop('checked', false)
	} else {
		controledCheckbox.show()
			.siblings('.notify-checkbox__label')
			.addClass('is-active')
		parent.find('.js-indeterminate')
			.prop('checked', false)
	}
}

$(() => {
	$('.notify-checkbox-wrap').each((index, element) => {
		const $this = $(element)
		const $subList = $this.find('.notify-checkbox-sublist')
		updateDisplay($subList)
	})
})

$('.js-indeterminate').on('click', event => {
	const $this = $(event.currentTarget)
	const parent = $this.parents('.notify-checkbox-wrap')
	const $subList = parent.find('.notify-checkbox-sublist')
	parent.find('.is-indeterminate')
		.hide()
		.siblings('.notify-checkbox__label')
		.removeClass('is-active')
	$this.is(':checked')
		? checkAllCheckbox($subList)
		: uncheckAllCheckbox($subList)
})

$('.notify-checkbox-sublist .notify-checkbox__input').on('click', event => {
	const $this = $(event.currentTarget)
	const parent = $this.parents('.notify-checkbox-wrap')
	const $subList = parent.find('.notify-checkbox-sublist')
	updateDisplay($subList)
})


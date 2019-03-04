$(() => {
	$('.js-prd-modal-field').hide()
})

$('.search-dropdown__trigger').on('click', event => {
	$(event.target).parents('.search-dropdown')
		.toggleClass('is-active')
})

$('body').on('click', event => {
	if (!$(event.target).closest('.search-dropdown').length)
		$('.search-dropdown').removeClass('is-active')
})

$('.js-select-option').on('click', event => {
	const $this = $(event.currentTarget)
	const parent = $this.parents('.search-dropdown')
	const displayField = parent.find('.basic-form__dropdown-current')
	displayField.text($this.text())
	$('.search-dropdown').removeClass('is-active')
	if ($this.hasClass('js-select-no-listed'))
		$('.js-prd-modal-field').show()
	else
		$('.js-prd-modal-field').hide()
})

$('.js-filterSearch_input').on('keyup', event => {
	const parent = $(event.currentTarget).parents('.js-filterSearch')
	const target = parent.find('.js-filterSearch_list li')
	const filter = $(event.currentTarget).val()
		.toUpperCase()
	for (let i = 0; i < target.length; i++) {
		const aLink = target[i].getElementsByTagName('a')[0]
		const aText = aLink.text
		const matchStart = aText.toUpperCase().indexOf(filter)
		if (matchStart > -1) {
			target[i].style.display = ''
			const matchEnd = matchStart + filter.length - 1
			const beforeMatch = aText.slice(0, matchStart)
			const matchText = aText.slice(matchStart, matchEnd + 1)
			const afterMatch = aText.slice(matchEnd + 1)
			aLink.innerHTML = beforeMatch + '<em>' + matchText + '</em>' + afterMatch
		} else
			target[i].style.display = 'none'
	}
})

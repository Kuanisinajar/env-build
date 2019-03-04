function checkElement(element) {
	return element.length > 0
}

const act = (() => {
	return {
		init() {
			$('.js-tglActv').each((index, element) => {
				const $element = $(element)
				$element.find('.js-tglActv_trigr')
					.eq(0)
					.addClass('is-active')
				$element.find('.js-tglActv_tgt')
					.eq(0)
					.addClass('is-active')
			})
		},
		findElements(trigr) {
			const trigrId = trigr.data('actv-trigr')
			const scopeId = trigr.data('actv-scope')
			const scopeParent = trigr.parents(`.js-tglActv[data-active="${scopeId}"]`)
			const otherTrigrs = scopeParent.find(`.js-tglActv_trigr[data-actv-scope="${scopeId}"]:not([data-actv-trigr="${trigrId}"])`)
			const otherTgts = scopeParent.find(`.js-tglActv_tgt[data-actv-scope="${scopeId}"]:not([data-target="${trigrId}"])`)
			const trigrTgt = scopeParent.find(`[data-target="${trigrId}"]`)

			return {
				trigrTgt, otherTgts, trigr, otherTrigrs
			}
		},
		resetStatus({ trigrTgt, otherTgts, trigr, otherTrigrs }) {
			trigrTgt.addClass('is-active')
			otherTgts.removeClass('is-active')
			trigr.addClass('is-active')
			otherTrigrs.removeClass('is-active')
		}
	}
})()


$(() => {
	const actvTrigrs = $('.js-tglActv_trigr')
	const rmActive = $('.js-rmActive')

	if (checkElement(actvTrigrs)) {
		act.init()
		actvTrigrs.on('click', e => {
			const $this = $(e.currentTarget)
			act.resetStatus(act.findElements($this))
		})
	}

	if (checkElement(rmActive)) {
		rmActive.on('click', e => {
			const $this = $(e.currentTarget)
			$this.removeClass('is-active')
		})
	}
})

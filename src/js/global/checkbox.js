const checkElement = element => element.length > 0

const act = (() => {
	return {
		inputStatus: false,
		getId(item, data) {
			return item.data(data)
		},
		tglTgt(tglTrigr) {
			const id = act.getId(tglTrigr, 'tgl-trigr')
			return $(`.js-checkboxTgl_tgt[data-tgl-tgt="${id}"]`)
		},
		getInput(wrap) {
			return wrap.find('input')
		},
		tglCheck(wrap) {
			const input = act.getInput(wrap)
			if (act.inputStatus) {
				input.prop('checked', false)
				act.inputStatus = false
			} else {
				input.prop('checked', true)
				act.inputStatus = true
			}
		},
		toggle(tgt, className) {
			act.inputStatus
				? $(tgt).removeClass(className)
				: $(tgt).addClass(className)
		}
	}
})()

$(() => {
	// const tglTrigr = $('.js-checkboxTgl_trigr')
	const wrap = $('.js-checkboxWrap')

	if (checkElement(wrap)) {
		wrap.on('click', e => {
			const $this = $(e.currentTarget)
			const tgtBtn = act.tglTgt(act.getInput(wrap))
			act.tglCheck($this)
			act.toggle(tgtBtn, 'fill-btn--disable')
		})
	}
})

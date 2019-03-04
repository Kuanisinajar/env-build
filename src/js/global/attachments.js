const store = {
	attachFile: '.js-attachFile',
	attachFileList: '.js-attachFileList',
	maxAmount: 5,
	maxSize: 10000000
}

const act = {
	getFiles(files) {
		return Array.from(files[0].files)
	},
	getFileSize(files) {
		return files.map(file => file.size)
	},
	storeName(files) {
		return files.map(file => file.name)
	},
	showFiles(fileList, resultBlock) {
		const selectFileText = resultBlock.find('.fill-btn__text')
		resultBlock.removeClass('hide')
		selectFileText.text(fileList)
	},
	showAlertOverSized() {
		return alert('Maximum file size in total is 10 MB')
	},
	showAlertSize() {
		return alert('Maximum file size is 10 MB')
	}
}

const check = {
	overMaxSize(files) {
		return act.getFileSize(files)
			.filter(size => size > store.maxSize)
			.length > 0
	}
}

const condition = files => {
	if (check.overMaxSize(files))
		return 'overSize'
	return 'pass'
}

const status = {
	tooLarge(resultBlock) {
		act.showAlertSize()
		resultBlock.addClass('hide')
	},
	success(fileList, resultBlock) {
		act.showFiles(fileList, resultBlock)
	}
}

$(() => {
	$('.js-attachFile').on('change', event => {
		const $this = $(event.currentTarget)
		const files = act.getFiles($this)
		const fileList = act.storeName(files)
		const resultBlock = $this.siblings('.attachments-block__bars').find('.js-attachFile_result')

		switch (condition(files)) {
			case 'pass':
				status.success(fileList, resultBlock)
				break
			case 'overSize':
				status.tooLarge()
				$this.val('')
				resultBlock.addClass('hide')
				break
		}
	})

	/*
	** actions of deleting files
	*/
	$(document).on('click', '.js-attachFileRemove', e => {
		const $this = $(e.currentTarget)
		const targetInput = $this.parents('.attachments-block__container').find('.js-attachFile')
		targetInput.val('')
		$this.addClass('hide')
	})
})

function renderKeys() {
	let res = keys.map((row) => {
		return (
			CE.render({
				tag: 'div',
				classList: ['row'],
				children: [
					row[0].split(',').map((key) => {
						let renderKey = key.split('::')
						let additionalClass = ['key']
						if (renderKey[1]) {
							renderKey[1].split('.').forEach((el) => {
								additionalClass.push(el)
							})
						}
						return (
							CE.render({
								tag: 'div',
								classList: additionalClass,
								children: [renderKey[0]]
							})
						)
					})
				]
			})
		)
	})
	return res
}

let container = CE.render({
	tag: 'div',
	classList: ['container'],
	children: [
		CE.render({
			tag: 'H1',
			classList: ['title'],
			children: ['RSS Виртуальная клавиатура']
		}),
		CE.render({
			tag: 'textarea',
			classList: ['textarea'],
		}),
		CE.render({
			tag: 'div',
			classList: ['keyboard__wrapper'],
			children: [renderKeys()],
		})
	]
})

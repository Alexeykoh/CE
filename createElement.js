export class CE {
	static render(parameters) {
		function addClassList(
			parent,
			classList
		) {
			classList.forEach((className) => {
				parent.classList.add(className)
			})
		}
		function addAtr(
			parent,
			atr
		) {
			atr.forEach((attribute) => {
				parent.setAttribute(
					attribute[0],
					attribute[1]
				)
			})
		}

		function addEvents(
			parent,
			events
		) {
			events.forEach((event) => {
				// console.log(typeof event[1])
				parent.addEventListener(
					event[0],
					() => {
						event[1]()
					}
				)
			})
		}

		function addChildren(
			parent,
			children
		) {
			children.forEach((child) => {
				if (Array.isArray(child)) {
					child.forEach((el) => {
						parent.appendChild(el)
					})
				} else if (typeof child === 'string') {
					parent.innerText = child
				} else {
					parent.appendChild(child)
				}
			})
		}
		//
		const p = {
			tag: parameters.tag || 'div',
			classList: parameters.classList || [],
			atr: parameters.atr || [],
			events: parameters.events || [],
			children: parameters.children || [],
		}
		//
		let element = document.createElement(p.tag)


		addClassList(
			element,
			p.classList
		)
		addAtr(
			element,
			p.atr
		)
		addEvents(
			element,
			p.events
		)
		addChildren(
			element,
			p.children
		)
		//
		return element
	}
}

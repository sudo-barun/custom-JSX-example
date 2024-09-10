export type * from './jsx.d.js';

export
function jsxs(
	tagNameOrFragment: string|((...attributes:any[])=>HTMLElement),
	attributesWithChildren: {[attributeName: string]: any, children: Array<HTMLElement>},
	_key?: number
) {
	if (tagNameOrFragment === Fragment) {
		return attributesWithChildren.children.flat();
	} else {
		const childElements = jsx.apply(null, arguments as any);
		return Array.isArray(childElements)
			? childElements
			: [ childElements]
		;
	}
}

export
function jsx(
	tagNameOrFunction: string|((...attributes:any[])=>HTMLElement),
	attributesWithChildren: {[attributeName: string]: any, children?: string|HTMLElement|Array<string>},
	_key?: number
) {
	if (typeof tagNameOrFunction === 'string') {
		const element = document.createElement(tagNameOrFunction);
		for (const name in attributesWithChildren) {
			if (name === 'children') {
				const children = attributesWithChildren[name];
				if (typeof children === 'string') {
					element.appendChild(document.createTextNode(children));
				} else if (Array.isArray(children)) {
					element.append(...children.flat());
				}
			} else {
				element.setAttribute(name, attributesWithChildren[name]);
			}
		}
		return element;
	} else {
		return tagNameOrFunction(attributesWithChildren);
	}
}

export
function Fragment()
{}

export
function jsxDEV()
{}

export function jsxs(tagNameOrFragment, attributesWithChildren, _key) {
    if (tagNameOrFragment === Fragment) {
        return attributesWithChildren.children.flat();
    }
    else {
        const childElements = jsx.apply(null, arguments);
        return Array.isArray(childElements)
            ? childElements
            : [childElements];
    }
}
export function jsx(tagNameOrFunction, attributesWithChildren, _key) {
    if (typeof tagNameOrFunction === 'string') {
        const element = document.createElement(tagNameOrFunction);
        for (const name in attributesWithChildren) {
            if (name === 'children') {
                const children = attributesWithChildren[name];
                if (typeof children === 'string') {
                    element.appendChild(document.createTextNode(children));
                }
                else if (Array.isArray(children)) {
                    element.append(...children.flat());
                }
            }
            else {
                element.setAttribute(name, attributesWithChildren[name]);
            }
        }
        return element;
    }
    else {
        return tagNameOrFunction(attributesWithChildren);
    }
}
export function Fragment() { }
export function jsxDEV() { }
//# sourceMappingURL=jsx-runtime.js.map
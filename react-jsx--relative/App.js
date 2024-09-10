import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "./packages/custom-jsx/jsx-runtime";
import { Bar } from "./bar/Bar.js";
import { Foo } from "./Foo.js";
function App() {
    return _jsxs(_Fragment, { children: [_jsx("h1", { children: "App" }), _jsxs("div", { style: "display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px;", children: [_jsx(Foo, { message: 'Welcome' }), _jsx(Bar, {})] })] });
}
const elements = App();
const appContainer = document.getElementById('app-container');
for (const element of elements) {
    appContainer.appendChild(element);
}
//# sourceMappingURL=App.js.map
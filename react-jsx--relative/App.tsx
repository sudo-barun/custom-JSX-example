import { Bar } from "./bar/Bar.js";
import { Foo } from "./Foo.js";

function App()
{
	return <>
		<h1>App</h1>
		<div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px;">
			<Foo message={'Welcome'}/>
			<Bar/>
		</div>
	</>
}

const elements = App();

const appContainer = document.getElementById('app-container')!;

for (const element of elements) {
	appContainer.appendChild(element);
}

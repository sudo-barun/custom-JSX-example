# Custom JSX Example

Example of using JSX without using framework like React.

There are 3 different ways:
- [./react-jsx--bare--node-modules/](./react-jsx--bare--node-modules/)
	<br>using bare path to access `custom-jsx` through `node_modules` folder
- [./react-jsx--bare--internal/](./react-jsx--bare--internal/)
	<br>using bare path to access `custom-jsx` internally
- [./react-jsx--relative/](./react-jsx--relative/)
	<br>using relative path to access `custom-jsx`
	<br>**Note**: This works in browser but shows errors when using `tsc`

## Prerequisities

1. Node and NPM

## Usage

0. `git clone` this repo
1. Make sure the folder is accessible through a web server.
	<br>Lets assume this repo is available at http://localhost:8080
1. In the browser, go to:
	- http://localhost:8080/react-jsx--bare--node-modules/
	- http://localhost:8080/react-jsx--bare--internal/
	- http://localhost:8080/react-jsx--relative/

To make modifications, go to the root folder and:
1. Install dependencies
	```
	npm ci
	```
1. Make modifications
1. Run TypeScript Compiler after making modifications:
	```
	npx tsc
	```
1. Refresh the browser

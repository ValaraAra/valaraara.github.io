import primeui from 'tailwindcss-primeui'

/** @type {import('tailwindcss').Config} */
export default {
	darkMode: 'selector',
	content: [
		'./index.html',
		'./src/**/*.{vue,js,jsx,ts,tsx}',
	],
	theme: {
		extend: {},
	},
	plugins: [
		primeui
	],
}


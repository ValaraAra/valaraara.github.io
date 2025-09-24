const plugin = require('tailwindcss/plugin');

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
		require('tailwindcss-primeui'),
	],
}


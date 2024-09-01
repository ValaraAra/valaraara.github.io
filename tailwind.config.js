const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./index.html',
		'./src/**/*.{vue,js,jsx,ts,tsx}',
	],
	theme: {
		extend: {},
	},
	darkMode: 'selector',
	plugins: [
		require('tailwindcss-primeui'),
		plugin(function({ addVariant }) {
			addVariant('light', 'html:not(.dark) &')
		})
	],
}


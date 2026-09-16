import js from '@eslint/js'
import pluginVue from 'eslint-plugin-vue'
import globals from 'globals'

export default [
	js.configs.recommended,
	...pluginVue.configs['flat/essential'],
	{
		ignores: ['dist/**']
	},
	{
		languageOptions: {
			globals: { ...globals.browser }
		}
	},
	{
		files: ['*.config.js'],
		languageOptions: { globals: { ...globals.node } }
	},
]
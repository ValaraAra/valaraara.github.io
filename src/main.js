import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

import PrimeVue from 'primevue/config'
import Aura from '@primevue/themes/aura'

const app = createApp(App)

app.use(createPinia())

app.use(PrimeVue, {
	ripple: true,
	theme: {
		preset: Aura,
		options: {
			cssLayer: {
                name: 'primevue',
                order: 'tailwind-base, primevue, tailwind-utilities',
            },
			darkModeSelector: '.dark',
		}
	},
})

app.mount('#app')

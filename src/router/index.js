import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Web from '@/views/Web.vue'
import Engine from '@/views/Engine.vue'
import Education from '@/views/Education.vue'
import About from '@/views/About.vue'

const routes = [
	{ path: '/', component: Home },
	{ path: '/web', component: Web },
	{ path: '/engine', component: Engine },
	{ path: '/education', component: Education },
	{ path: '/about', component: About },
]

export default createRouter({
	history: createWebHashHistory(),
	routes,
})
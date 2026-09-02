<script setup>
	import AppFooter from './components/AppFooter.vue';
	import AppNavbar from './components/AppNavbar.vue';
	import AppBackground from './components/AppBackground.vue';
</script>

<template>
	<AppBackground />
	<AppNavbar />

	<main class="mb-auto flex flex-col place-items-center gap-16 my-8 w-full">
		<RouterView />
	</main>

	<AppFooter />
</template>

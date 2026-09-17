<script setup>
	import { ref } from 'vue';
	import { RouterLink } from 'vue-router';

	const open = ref(false);

	const linkClass = "w-full sm:w-auto"
</script>

<template>
	<header class="relative flex justify-between gap-2 w-full py-4 text-surface-400">
		<h1 class="text-3xl font-semibold">
			<RouterLink to="/">Aubrey Koch</RouterLink>
		</h1>

		<button type="button" class="block sm:hidden text-2xl self-center px-1" aria-label="Toggle menu" @click="open = !open">
			<span class="pi pi-bars" />
		</button>

		<div @click="open = false" :class="[
			'absolute flex-col w-48 p-4 gap-2 top-full right-0 z-10 text-xl place-items-center rounded-lg bg-surface-900 border border-surface-800',
			'sm:flex sm:flex-row sm:static sm:z-auto sm:bg-transparent sm:border-0 sm:p-0 sm:w-auto sm:gap-4',
			open ? 'flex' : 'hidden'
		]">
			<RouterLink :class="linkClass" to="/web">Web</RouterLink>
			<RouterLink :class="linkClass" to="/engine">Engine & Graphics</RouterLink>
			<RouterLink :class="linkClass" to="/education">Education</RouterLink>
			<RouterLink :class="linkClass" to="/about">About</RouterLink>
		</div>
	</header>
</template>

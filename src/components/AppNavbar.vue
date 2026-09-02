<script setup>
	import { RouterLink } from 'vue-router';
</script>

<template>
	<header class="flex justify-between gap-2 w-full py-4 text-surface-400">
		<h1 class="text-3xl font-semibold">
			<RouterLink to="/">Aubrey Koch</RouterLink>
		</h1>
		<div class="flex gap-4 text-xl place-items-center">
			<RouterLink to="/web">Web</RouterLink>
			<RouterLink to="/engine">Systems & Rendering</RouterLink>
			<RouterLink to="/education">Education</RouterLink>
			<RouterLink to="/about">About</RouterLink>
		</div>
	</header>
</template>

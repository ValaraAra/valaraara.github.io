<script setup>
defineProps({
	msg: {
		type: String,
		required: true
	}
})
</script>

<template>
	<div class="text-center">
		<h1 class="font-medium text-4xl mb-2">{{ msg }}</h1>
		<h2 class="text-lg">
			You’ve successfully created a project with
			<a href="https://vitejs.dev/" target="_blank" rel="noopener">Vite</a> +
			<a href="https://vuejs.org/" target="_blank" rel="noopener">Vue 3</a>.
		</h2>
	</div>
</template>

<script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
</script>

<template>
	<header class="flex place-items-center">
		<img alt="Vue logo" class="" src="./assets/logo.svg" width="100" height="100" />
		<HelloWorld msg="Hello World!" />
	</header>

	<main class="mb-auto flex flex-col gap-4 mt-8">
		<TheWelcome />
	</main>

	<footer>
		<p class="text-center">Made by <span class="font-bold text-purple-600">Valara</span></p>
	</footer>
</template>

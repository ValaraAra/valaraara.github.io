<script setup>
	import IconTextLink from './IconTextLink.vue';
</script>

<template>
	<footer class="flex flex-col gap-4 mt-16">
		<h2 class="text-3xl font-semibold">Contact Me</h2>
		<div class="flex gap-8">
			<IconTextLink icon="pi-envelope text-surface-400" text="Email" href="mailto:contact@aubreykoch.com" />
			<IconTextLink icon="pi-linkedin text-blue-600" text="LinkedIn" href="https://www.linkedin.com/in/aubreykoch/" />
			<IconTextLink icon="pi-github text-surface-0" text="Github" href="https://github.com/valaraara" />
		</div>
		<p class="text-surface-300">Created by <span class="text-primary font-semibold">Aubrey</span></p>
	</footer>
</template>

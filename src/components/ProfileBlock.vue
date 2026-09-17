<script setup>
	import Avatar from 'primevue/avatar';

	defineProps({
		image: String,
		alt: String,
		intro: String,
		body: String,
		status: String,
	})

</script>

<template>
	<div class="flex flex-col items-center text-center md:flex-row md:items-start gap-8 justify-start mt-12 py-2 w-full bg-island">
		<Avatar class="border-4 border-primary" style="--p-avatar-xl-width: 8rem; --p-avatar-xl-height: 8rem; aspect-ratio: 1/1;" :image="image" shape="circle" size="xlarge" :ariaLabel="alt" />
		<div class="flex flex-col items-center md:items-start gap-5 text-center md:text-left">
			<p class="text-3xl text-surface-400">
				<span class="inline-block font-semibold text-surface-200">{{ intro }}</span>
				{{ body }}
			</p>
			<p class="text-base text-surface-300">
				<span class="text-primary me-1.5" aria-hidden="true">●</span>
				{{ status }}
			</p>
		</div>
	</div>
</template>
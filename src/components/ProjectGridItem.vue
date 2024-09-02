<script setup>

const props = defineProps({
	project: Object
})

</script>

<template>
	<div class="flex gap-4 rounded-lg border border-surface-700 w-full h-56 bg-surface-900 overflow-hidden">
		<div class="w-5/12 relative">
			<img class="rounded-l-lg object-cover shrink-0 size-full" :src="props.project.image" alt="project image" />
			<div class="absolute size-full top-0 left-0 bg-gradient-to-l from-surface-900 to-60% to-transparent"></div>
		</div>

		<div class="flex flex-col gap-4 p-4 w-full text-left">
			<h1 class="text-2xl font-semibold text-surface-300 line-clamp-1">{{ props.project.title }}</h1>
			<p class="text-surface-400 md:text-lg line-clamp-6 md:line-clamp-5">
				{{ props.project.text }}
			</p>
		</div>
	</div>
</template>
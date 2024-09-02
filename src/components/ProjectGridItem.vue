<script setup>

const props = defineProps({
	project: Object
})

</script>

<template>
	<div class="flex gap-4 rounded-lg border dark:border-surface-700 w-full h-56 bg-surface-50 dark:bg-surface-900 overflow-hidden hover:scale-[1.01]">
		<div class="w-5/12 relative ">
			<img class="rounded-l-lg object-cover shrink-0 size-full" :src="props.project.image" alt="project image" />
			<div class="absolute size-full top-0 left-0 bg-gradient-to-l from-surface-50 dark:from-surface-900 dark:to-60% to-transparent"></div>
		</div>

		<div class="flex flex-col gap-4 p-4 w-full text-left">
			<h1 class="text-2xl dark:text-surface-300 font-semibold line-clamp-1">{{ props.project.title }}</h1>
			<p class="md:text-lg dark:text-surface-400 line-clamp-6 md:line-clamp-5">
				{{ props.project.text }}
			</p>
		</div>
	</div>
</template>
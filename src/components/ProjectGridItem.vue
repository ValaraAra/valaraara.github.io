<script setup>
import Chip from 'primevue/chip';

const props = defineProps({
	project: Object
})

</script>

<template>
	<div class="flex flex-col sm:flex-row gap-4 rounded-lg border dark:border-surface-700 w-full sm:h-56 bg-surface-50 dark:bg-surface-900 overflow-hidden hover:scale-[1.01]">
		<div class="sm:w-8/12 relative sm:py-3 sm:pl-3">
			<img class="sm:rounded-lg object-cover shrink-0 size-full max-h-72 object-top" :src="props.project.image" alt="project image" />
		</div>

		<div class="flex flex-col gap-4 p-3 w-full text-left">
			<h1 class="text-2xl dark:text-surface-300 font-semibold line-clamp-1">{{ props.project.title }}</h1>
			<div class="flex gap-2 flex-wrap">
				<Chip v-for="(chip, index) in props.project.chips" :key="index" :label="chip" class="text-xs" />
			</div>
			<p class="dark:text-surface-400 line-clamp-6 md:line-clamp-5">
				{{ props.project.text }}
			</p>
		</div>
	</div>
</template>
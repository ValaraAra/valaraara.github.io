<script setup>
import Chip from 'primevue/chip';

const props = defineProps({
	card: Object
})

const linkClass = "group-hover:text-primary focus-visible:outline-none after:absolute after:inset-0"

</script>

<template>
	<div class="group relative flex flex-col sm:flex-row gap-4 rounded-lg border border-surface-800 w-full sm:h-56 bg-surface-900 bg-opacity-70 overflow-hidden hover:scale-[1.01]">
		<div class="sm:w-8/12 relative sm:py-3 sm:pl-3">
			<img class="sm:rounded-lg object-cover shrink-0 size-full max-h-72 object-top" :src="props.card.image" :alt="props.card.alt" />
		</div>

		<div class="flex flex-col gap-4 p-3 w-full text-left">
			<h3 class="text-2xl text-surface-300 font-semibold line-clamp-1">
				<RouterLink v-if="props.card.link && props.card.link.startsWith('/')" :class="linkClass" :to="props.card.link">{{ props.card.title }}</RouterLink>
				<a v-else-if="props.card.link" :class="linkClass" :href="props.card.link">{{ props.card.title }}</a>
				<span v-else>{{ props.card.title }}</span>
			</h3>
			<div v-if="props.card.chips" class="flex gap-2 flex-wrap">
				<Chip v-for="(chip, index) in props.card.chips" :key="index" :label="chip" class="text-xs" />
			</div>
			<p class="text-surface-400 line-clamp-6 md:line-clamp-5">
				{{ props.card.text }}
			</p>
		</div>
	</div>
</template>
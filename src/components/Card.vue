<script setup>
	import Chip from 'primevue/chip';
	import SmartLink from './SmartLink.vue';

	defineProps({
		card: Object
	})

</script>

<template>
	<div :class="[
		'group relative flex flex-col gap-4 rounded-lg w-full overflow-hidden focus-ring-parent',
		'border border-surface-800',
		'bg-surface-900 bg-opacity-70',
		'sm:flex-row sm:h-56',
		'motion-safe:transition-transform motion-safe:hover:scale-[1.01]'
	]">
		<div class="sm:w-8/12 sm:py-3 sm:pl-3">
			<img class="sm:rounded-lg object-cover shrink-0 size-full max-h-72 object-top" :src="card.image" :alt="card.alt" />
		</div>

		<div class="flex flex-col gap-4 p-3 w-full text-left">
			<h3 class="text-2xl text-surface-300 font-semibold line-clamp-1">
				<SmartLink v-if="card.link" class="group-hover:text-primary focus-ring-none after:absolute after:inset-0" :to="card.link">
					{{ card.title }}
				</SmartLink>
				<span v-else>
					{{ card.title }}
				</span>
			</h3>
			<div v-if="card.chips" class="flex gap-2 flex-wrap">
				<Chip v-for="(chip, index) in card.chips" :key="index" :label="chip" class="text-xs" />
			</div>
			<p class="text-surface-400 line-clamp-6 md:line-clamp-5">
				{{ card.text }}
			</p>
		</div>
	</div>
</template>
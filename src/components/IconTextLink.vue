<script setup>
import { twJoin } from 'tailwind-merge';


const props = defineProps({
	class: String,
	icon: String,
	text: String,
	href: String
})

</script>

<template>
	<a :class="twJoin('text-center w-fit text-lg items-center dark:text-surface-300 hover:text-primary inline-block', props.class)" :href="props.href" target="_blank" rel="noopener noreferrer">
		<span v-if="icon" :class="twJoin('pi pr-1', props.icon)" />
		{{ props.text }}
	</a>
</template>
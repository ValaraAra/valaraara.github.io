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
	<a :class="twJoin('inline-block w-fit items-center text-center text-lg text-surface-300 hover:text-primary', props.class)" :href="props.href" target="_blank" rel="noopener noreferrer">
		<span v-if="icon" :class="twJoin('pi pr-1', props.icon)" />
		{{ props.text }}
	</a>
</template>
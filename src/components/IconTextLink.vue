<script setup>
import { twJoin } from 'tailwind-merge';


const props = defineProps({
	icon: String,
	text: String,
	href: String
})

</script>

<template>
	<a class="text-center w-fit text-lg items-center dark:text-surface-300 hover:text-primary" :href="props.href" target="_blank" rel="noopener noreferrer">
		<span :class="twJoin('pi pr-1', props.icon)" />
		{{ props.text }}
	</a>
</template>
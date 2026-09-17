<script setup>
	import { useAttrs } from 'vue';
	import { twMerge } from 'tailwind-merge';

	defineOptions({ inheritAttrs: false });

	defineProps({
		icon: String,
		text: { type: String, required: true },
		href: { type: String, required: true }
	})

	const attrs = useAttrs();

</script>

<template>
	<a :class="twMerge('inline-flex gap-2 px-1 w-fit items-center text-center text-lg text-surface-300 hover:text-primary', attrs.class ?? '')" :href="href" rel="noopener noreferrer">
		<span v-if="icon" :class="['pi', icon]" />
		{{ text }}
	</a>
</template>
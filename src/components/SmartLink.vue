<script setup>
	import { computed } from 'vue'

	const props = defineProps({
		to: { type: String, required: true }
	})

	const isInternal = computed(() => props.to.startsWith('/'))
</script>

<template>
	<RouterLink v-if="isInternal" :to="to"><slot /></RouterLink>
	<a v-else :href="to" rel="noopener noreferrer"><slot /></a>
</template>
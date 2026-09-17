<script setup>
import Card from './Card.vue';

defineProps({
	id: String,
	title: String,
	cards: Array,
})

</script>

<template>
	<div class="flex flex-col gap-6" :id="id">
		<h2 class="text-3xl font-semibold">{{ title }}</h2>
		<div class="flex flex-col gap-6">
			<Card v-for="(card, index) in cards" :card="card" :key="index" />
		</div>
	</div>
</template>
<script setup>
import Card from './Card.vue';

const props = defineProps({
	id: String,
	title: String,
	cards: Array,
})

</script>

<template>
	<div class="flex flex-col gap-6" :id="props.id">
		<h2 class="text-3xl font-semibold">{{ props.title }}</h2>
		<div class="flex flex-col gap-6">
			<Card v-for="(card) in props.cards" :card="card" :key="card.title" />
		</div>
	</div>
</template>
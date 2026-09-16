<script setup>
import CardGridItem from './CardGridItem.vue';

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
			<CardGridItem v-for="(card) in props.cards" :card="card" :key="card.title" />
		</div>
	</div>
</template>
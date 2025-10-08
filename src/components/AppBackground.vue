<script setup>
	import { ref, onMounted } from 'vue'
	
	const stars = ref([])

	onMounted(() => {
		for (let i = 0; i < 200; i++) {
			stars.value.push({
				id: i,
				left: Math.random() * 100,
				top: Math.random() * 100,
				duration: 2 + (Math.random() * 3)
			})
		}
	})
</script>

<template>
	<div class="starry-background">
		<div class="star" v-for="star in stars" :key="star.id" :style="{
				left: star.left + '%',
				top: star.top + '%',
				animationDuration: star.duration + 's'
			}"
		></div>
	</div>
</template>

<style scoped>
	.starry-background {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: -1;
		background: linear-gradient(to bottom, #221b35, #1d162f, #16102a, #0f0b22, #090714);
		pointer-events: none;
	}

	.star {
		position: absolute;
		width: 4px;
		height: 4px;
		background: white;
		clip-path: polygon(50% 0%, 60% 40%, 100% 50%, 60% 60%, 50% 100%, 40% 60%, 0% 50%, 40% 40%);
		animation: twinkle infinite ease-in-out;
	}

	@keyframes twinkle {
		0%, 100% { opacity: 0.3; transform: scale(1); }
		50% { opacity: 1; transform: scale(1.3); }
	}
</style>
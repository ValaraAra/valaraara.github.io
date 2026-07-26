<script setup>
	import { ref, onMounted, onUnmounted } from 'vue'
	
	const starryCanvasRef = ref(null)
	let animationFrameID, context, starSprite
	
	const stars = []
	const starCount = 200

	const points = 4
	const inset = 0.5
	const radius = 3

	function resizeCanvas() {
		const canvas = starryCanvasRef.value
		
		const oldWidth = canvas.width
		const oldHeight = canvas.height

		canvas.width = canvas.clientWidth
		canvas.height = canvas.clientHeight

		if (oldWidth && oldHeight) {
			const widthRatio = canvas.width / oldWidth
			const heightRatio = canvas.height / oldHeight

			for (const star of stars) {
				star.x *= widthRatio
				star.y *= heightRatio
			}
		}
	}

	function generateStars() {
		const canvas = starryCanvasRef.value

		stars.length = 0
		for (let i = 0; i < starCount; i++) {
			stars.push({
				x: Math.random() * canvas.width,
				y: Math.random() * canvas.height,
				speed: Math.random() * 1.5 + 0.5,
				phase: Math.random() * Math.PI * 2
			})
		}
	}

	// Function adapted from Dennis S. at https://stackoverflow.com/a/45140101
	function drawStar(context, x, y) {
		context.save();
		context.beginPath();
		context.translate(x, y);
		context.moveTo(0, 0 - radius);
		for (let i = 0; i < points; i++) {
			context.rotate(Math.PI / points);
			context.lineTo(0, 0 - (radius * inset));
			context.rotate(Math.PI / points);
			context.lineTo(0, 0 - radius);
		}
		context.closePath();
		context.fill();
		context.restore();
	}

	function drawStarSprite() {
		const spriteCanvas = document.createElement('canvas')

		const size = radius * 2 + 2
		spriteCanvas.width = size
		spriteCanvas.height = size

		const spriteContext = spriteCanvas.getContext('2d')
		spriteContext.fillStyle = 'white'
		drawStar(spriteContext, size / 2, size / 2)

		return spriteCanvas
	}

	function animationStep(timestamp) {
		const canvas = starryCanvasRef.value
		context.clearRect(0, 0, canvas.width, canvas.height)

		const halfSize = starSprite.width / 2

		for (const star of stars) {
			const alpha = 0.5 + 0.5 * Math.sin(star.phase + (timestamp / 1000) * star.speed)
			context.globalAlpha = alpha

			context.drawImage(starSprite, star.x - halfSize, star.y - halfSize)
		}

		animationFrameID = requestAnimationFrame(animationStep)
	}

	onMounted(() => {
		starSprite = drawStarSprite()

		resizeCanvas()
		generateStars()

		context = starryCanvasRef.value.getContext('2d')
		context.imageSmoothingEnabled = false

		animationFrameID = requestAnimationFrame(animationStep)
		window.addEventListener('resize', resizeCanvas)
	})

	onUnmounted(() => {
		cancelAnimationFrame(animationFrameID)
		window.removeEventListener('resize', resizeCanvas)
	})
</script>

<template>
	<canvas ref="starryCanvasRef" class="starry-background"></canvas>
</template>

<style scoped>
	.starry-background {
		position: fixed;
		inset: 0;
		width: 100%;
		height: 100%;
		z-index: -1;
		background: linear-gradient(to bottom, #221b35, #1d162f, #16102a, #0f0b22, #090714);
	}
</style>
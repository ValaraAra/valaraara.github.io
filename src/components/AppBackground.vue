<script setup>
	import { ref, onMounted, onUnmounted } from 'vue'
	
	const starryCanvasRef = ref(null)
	let animationFrameID, context, starSprite
	
	const stars = []
	let starCount = 200

	const minStars = 100
	const maxStars = 600
	const starDensity = 0.0001
	const genSpacingSquared = (1 / starDensity) * 0.36
	const genAttempts = 50
	const refWidth = 1920
	const refHeight = 1080

	const points = 4
	const inset = 0.4
	const radius = 4

	function resizeCanvas() {
		const canvas = starryCanvasRef.value

		canvas.width = canvas.clientWidth
		canvas.height = canvas.clientHeight

		starCount = calculateStarCount()
	}

	function calculateStarCount() {
		const canvas = starryCanvasRef.value

		const area = canvas.width * canvas.height
		const calculatedCount = Math.floor(area * starDensity)

		const count = Math.max(Math.min(stars.length, minStars), Math.min(stars.length, calculatedCount))
		console.log(`Calculated star count: ${calculatedCount}, adjusted to: ${count}`)

		return count
	}

	function isStarOverlapping(x, y) {
		for (const star of stars) {
			const dx = star.x - x
			const dy = star.y - y
			const distanceSquared = dx * dx + dy * dy

			if (distanceSquared < genSpacingSquared) {
				return true
			}
		}
		return false
	}

	function generateStars() {
		stars.length = 0

		for (let i = 0; i < maxStars; i++) {
			let x, y
			let attempts = 0

			do {
				x = Math.random() * refWidth
				y = Math.random() * refHeight
				attempts++
			} while (isStarOverlapping(x, y) && attempts < genAttempts)

			if (attempts < genAttempts) {
				stars.push({
					x: x / refWidth,
					y: y / refHeight,
					speed: Math.random() * 1.5 + 0.5,
					phase: Math.random() * Math.PI * 2
				})
			}
		}

		console.log(`Generated ${stars.length} stars of attempted ${maxStars}.`)
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

		for (let i = 0; i < starCount; i++) {
			const star = stars[i]
			const x = star.x * canvas.width - halfSize
			const y = star.y * canvas.height - halfSize

			const alpha = 0.5 + 0.5 * Math.sin(star.phase + (timestamp / 1000) * star.speed)
			context.globalAlpha = alpha

			context.drawImage(starSprite, x, y)
		}

		animationFrameID = requestAnimationFrame(animationStep)
	}

	onMounted(() => {
		starSprite = drawStarSprite()

		context = starryCanvasRef.value.getContext('2d')
		context.imageSmoothingEnabled = false

		resizeCanvas()
		generateStars()
		resizeCanvas()

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
		background: var(--bg-gradient);
		image-rendering: pixelated;
	}
</style>
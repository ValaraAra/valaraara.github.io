<script setup>
	import { ref, onMounted, onUnmounted } from 'vue'
	
	const starryCanvasRef = ref(null)
	let animationFrameID, resizeFrameID, context, starSprite
	let reducedMotionQuery, prefersReducedMotion = false
	let canvasWidth = 0
	let canvasHeight = 0
	
	const stars = []

	const genSpacing = 60
	const genSpacingSquared = genSpacing * genSpacing
	const genAttempts = 50
	const targetFps = 12
	const frameInterval = 1000 / targetFps
	let lastFrameTimestamp = 0
	const maxBackingWidth = 3840
	const maxBackingHeight = 2160
	let backingScale = 1
	const refWidth = 1920
	const refHeight = 1080

	const points = 4
	const inset = 0.4
	const radius = 3

	function resizeCanvas() {
		const canvas = starryCanvasRef.value
		canvasWidth = canvas.clientWidth
		canvasHeight = canvas.clientHeight
		const deviceScale = window.devicePixelRatio || 1
		const nextBackingScale = Math.min(
			deviceScale,
			maxBackingWidth / canvasWidth,
			maxBackingHeight / canvasHeight
		)

		if (starSprite && nextBackingScale !== backingScale) {
			backingScale = nextBackingScale
			starSprite = drawStarSprite()
		} else {
			backingScale = nextBackingScale
		}

		canvas.width = Math.round(canvasWidth * backingScale)
		canvas.height = Math.round(canvasHeight * backingScale)
		context.setTransform(backingScale, 0, 0, backingScale, 0, 0)
		context.imageSmoothingEnabled = false


		if (prefersReducedMotion && !document.hidden) {
			drawFrame(performance.now())
		}
	}

	function scheduleResize() {
		cancelAnimationFrame(resizeFrameID)
		resizeFrameID = requestAnimationFrame(resizeCanvas)
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

		let consecutiveMisses = 0

		while (consecutiveMisses < genAttempts) {
			const x = Math.random() * refWidth
			const y = Math.random() * refHeight

			if (isStarOverlapping(x, y)) {
				consecutiveMisses++
				continue
			}

			stars.push({
				x,
				y,
				speed: Math.random() * 1.5 + 0.5,
				phase: Math.random() * Math.PI * 2
			})
			consecutiveMisses = 0
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

		const size = (radius * 2 + 2) * backingScale
		spriteCanvas.width = size
		spriteCanvas.height = size

		const spriteContext = spriteCanvas.getContext('2d')
		spriteContext.fillStyle = 'white'
		spriteContext.setTransform(backingScale, 0, 0, backingScale, 0, 0)
		drawStar(spriteContext, size / backingScale / 2, size / backingScale / 2)

		return spriteCanvas
	}

	function drawFrame(timestamp) {
		context.clearRect(0, 0, canvasWidth, canvasHeight)

		const halfSize = starSprite.width / backingScale / 2

		for (let i = 0; i < stars.length; i++) {
			const star = stars[i]
			const x = (star.x / refWidth) * canvasWidth - halfSize
			const y = (star.y / refHeight) * canvasHeight - halfSize

			const alpha = 0.5 + 0.5 * Math.sin(star.phase + (timestamp / 1000) * star.speed)
			context.globalAlpha = alpha

			context.drawImage(
				starSprite,
				x,
				y,
				starSprite.width / backingScale,
				starSprite.height / backingScale
			)
		}
	}

	function animationStep(timestamp) {
		if (document.hidden || prefersReducedMotion) {
			animationFrameID = null
			return
		}

		if (timestamp - lastFrameTimestamp < frameInterval) {
			animationFrameID = requestAnimationFrame(animationStep)
			return
		}
		lastFrameTimestamp = timestamp
		drawFrame(timestamp)

		animationFrameID = requestAnimationFrame(animationStep)
	}

	function startAnimation() {
		if (document.hidden || prefersReducedMotion || animationFrameID !== null) {
			return
		}

		lastFrameTimestamp = 0
		animationFrameID = requestAnimationFrame(animationStep)
	}

	function handleVisibilityChange() {
		if (document.hidden) {
			cancelAnimationFrame(animationFrameID)
			animationFrameID = null
			return
		}

		if (prefersReducedMotion) {
			drawFrame(performance.now())
			return
		}

		startAnimation()
	}

	function handleReducedMotionChange(event) {
		prefersReducedMotion = event.matches
		cancelAnimationFrame(animationFrameID)
		animationFrameID = null

		if (prefersReducedMotion) {
			if (!document.hidden) {
				drawFrame(performance.now())
			}
			return
		}

		startAnimation()
	}

	onMounted(() => {
		reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
		prefersReducedMotion = reducedMotionQuery.matches
		starSprite = drawStarSprite()

		context = starryCanvasRef.value.getContext('2d')
		context.imageSmoothingEnabled = false

		generateStars()
		resizeCanvas()

		animationFrameID = null
		startAnimation()
		window.addEventListener('resize', scheduleResize)
		document.addEventListener('visibilitychange', handleVisibilityChange)
		reducedMotionQuery.addEventListener('change', handleReducedMotionChange)
	})

	onUnmounted(() => {
		cancelAnimationFrame(animationFrameID)
		cancelAnimationFrame(resizeFrameID)
		window.removeEventListener('resize', scheduleResize)
		document.removeEventListener('visibilitychange', handleVisibilityChange)
		reducedMotionQuery.removeEventListener('change', handleReducedMotionChange)
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
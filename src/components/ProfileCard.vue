<script setup>
	import Avatar from 'primevue/avatar';

</script>

<template>
	<div class="flex flex-col items-center text-center md:flex-row md:items-start gap-8 justify-start mt-12 py-2 w-full bg-island">
		<Avatar class="border-4 border-primary -scale-x-100 transform" style="--p-avatar-xl-width: 8rem; --p-avatar-xl-height: 8rem; aspect-ratio: 1/1;" image="/images/profile.webp" shape="circle" size="xlarge" ariaLabel="Aubrey Koch." />
		<div class="flex flex-col items-center md:items-start gap-5 text-center md:text-left">
			<p class="text-3xl text-surface-400">
				<span class="inline-block font-semibold text-surface-200">Hey, I'm Aubrey!</span>
				I build real-time renderers and game engines, and do professional web development.
			</p>
			<p class="text-base text-surface-300">
				<span class="text-primary me-1.5" aria-hidden="true">●</span>
				Currently building a Vulkan renderer and studying CS at OSU.
			</p>
		</div>
	</div>
</template>
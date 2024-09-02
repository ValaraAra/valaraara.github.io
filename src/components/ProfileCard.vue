<script setup>
import Avatar from 'primevue/avatar';
import IconTextLink from './IconTextLink.vue';

</script>

<template>
	<div class="flex flex-col items-center md:flex-row gap-8 justify-start mt-12 w-full">
		<Avatar class="border-4 border-primary size-32" image="https://gravatar.com/avatar/32f1707bf470bc71a1dee6f60ee5cf96?size=256" shape="circle" size="xlarge" />
		<div class="flex flex-col gap-5 max-w-[30rem] text-left">
			<p class="text-3xl text-surface-400">
				<h1 class="inline-block font-semibold text-surface-200">Hey, I'm Aubrey.</h1>
				I create websites, desktop apps, and tools.
			</p>
			<div class="flex gap-6 justify-between">
				<IconTextLink icon="pi-twitter text-surface-400" text="Twitter" href="https://x.com/ValaraAra" />
				<IconTextLink icon="pi-linkedin text-blue-600" text="LinkedIn" href="https://www.linkedin.com/in/aubreykoch/" />
				<IconTextLink icon="pi-github text-surface-0" text="Github" href="https://github.com/valaraara" />
			</div>
		</div>
	</div>
</template>
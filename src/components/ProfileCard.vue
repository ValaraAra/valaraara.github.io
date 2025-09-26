<script setup>
import Avatar from 'primevue/avatar';
import IconTextLink from './IconTextLink.vue';

</script>

<template>
	<div class="flex flex-col items-center md:flex-row gap-8 justify-start mt-12 w-full">
		<Avatar class="border-4 border-primary size-32" image="https://gravatar.com/avatar/32f1707bf470bc71a1dee6f60ee5cf96?size=256" shape="circle" size="xlarge" aria-label="avatar image" />
		<div class="flex flex-col gap-5 max-w-[30rem] text-left">
			<p class="text-3xl text-surface-400">
				<span class="inline-block font-semibold text-surface-200">Hey, I'm Aubrey.</span>
				I create websites, desktop apps, and more.
			</p>
			<div class="flex gap-6 justify-between">
				<IconTextLink icon="pi-envelope text-surface-400" text="Email" href="mailto:contact@aubreykoch.com" />
				<IconTextLink icon="pi-linkedin text-blue-600" text="LinkedIn" href="https://www.linkedin.com/in/aubreykoch/" />
				<IconTextLink icon="pi-github text-surface-0" text="Github" href="https://github.com/valaraara" />
			</div>
		</div>
	</div>
</template>
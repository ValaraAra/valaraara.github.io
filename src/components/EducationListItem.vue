<script setup>
	import SmartLink from './SmartLink.vue';

	defineProps({
		education: Object
	})

</script>

<template>
	<div class="flex flex-col gap-1 w-full text-left">
		<div class="flex flex-row gap-3 w-full">
			<div class="size-20 sm:size-28 shrink-0 relative bg-surface-950 rounded-lg">
				<img class="object-contain shrink-0 size-full scale-75" :src="education.image" :alt="education.alt" />
			</div>

			<div class="flex flex-col w-full">
				<h3 class="text-lg text-surface-300 font-semibold line-clamp-1">
					<SmartLink v-if="education.link" class="hover:text-primary" :to="education.link">{{ education.title }}</SmartLink>
					<span v-else>{{ education.title }}</span>
				</h3>
				<div class="flex flex-col sm:flex-row sm:justify-between sm:items-center">
					<p class="text-surface-300">
						{{ education.degree }}
					</p>
					<p class="text-surface-400 text-sm mr-5">
						{{ education.graduation }}
					</p>
				</div>
				<p class="text-surface-400 hidden sm:block" v-for="(bullet, index) in education.bullets" :key="index"> 
					{{ ' • ' + bullet }}
				</p>
			</div>
		</div>
		<div class="sm:hidden">
			<p class="text-surface-400" v-for="(bullet, index) in education.bullets" :key="index"> 
				{{ ' • ' + bullet }}
			</p>
		</div>
	</div>

</template>
<script setup>
	const props = defineProps({
		education: Object
	})

</script>

<template>
	<div class="flex flex-col gap-1 w-full text-left">
		<div class="flex flex-row gap-3 w-full">
			<div class="size-20 sm:size-28 shrink-0 relative bg-surface-950 rounded-lg">
				<img class="object-contain shrink-0 size-full scale-75" :src="props.education.image" :alt="props.education.alt" />
			</div>

			<div class="flex flex-col w-full">
				<h3 class="text-lg text-surface-300 font-semibold line-clamp-1">
					<a v-if="props.education.link" class="hover:text-primary" :href="props.education.link">{{ props.education.title }}</a>
					<span v-else>{{ props.education.title }}</span>
				</h3>
				<div class="flex flex-col sm:flex-row sm:justify-between sm:items-center">
					<p class="text-surface-300">
						{{ props.education.degree }}
					</p>
					<p class="text-surface-400 text-sm mr-5">
						{{ props.education.graduation }}
					</p>
				</div>
				<p class="text-surface-400 hidden sm:block" v-for="(bullet, index) in props.education.bullets" :key="index"> 
					{{ ' • ' + bullet }}
				</p>
			</div>
		</div>
		<div class="sm:hidden">
			<p class="text-surface-400" v-for="(bullet, index) in props.education.bullets" :key="index"> 
				{{ ' • ' + bullet }}
			</p>
		</div>
	</div>

</template>
<script setup>
	const props = defineProps({
		education: Object
	})

</script>

<template>
	<div class="flex flex-row w-full gap-4">
		<div class="size-20 sm:size-28 shrink-0 relative bg-surface-950 my-3 ml-3 rounded-lg ">
			<img class="object-contain shrink-0 size-full scale-75" :src="props.education.image" alt="college logo" />
		</div>

		<div class="flex flex-col gap-1 my-3 mr-3 sm:ml-3 w-full text-left">
			<h1 class="text-xl text-surface-300 font-semibold">{{ props.education.title }}</h1>
			<div class="flex flex-col sm:flex-row sm:justify-between sm:items-center text-surface-300">
				<p>
					{{ props.education.degree }}
				</p>
				<p class="text-sm md:pr-8">
					{{ props.education.graduation }}
				</p>
			</div>
			<p class="text-surface-400" v-for="(bullet, index) in props.education.bullets" :key="index"> 
				{{ ' • ' + bullet }}
			</p>
		</div>
	</div>
</template>
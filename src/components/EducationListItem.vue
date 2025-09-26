<script setup>
	const props = defineProps({
		education: Object
	})

</script>

<template>
	<div class="flex flex-col w-full mb-3 text-left">
		<div class="flex flex-row w-full gap-3">
			<div class="size-20 sm:size-28 shrink-0 relative bg-surface-950 my-3 ml-3 rounded-lg ">
				<img class="object-contain shrink-0 size-full scale-75" :src="props.education.image" alt="college logo" />
			</div>

			<div class="flex flex-col gap-1 my-3 sm:ml-3 w-full">
				<h1 class="text-xl text-surface-300 font-semibold">{{ props.education.title }}</h1>
				<div class="flex flex-col mr-3 sm:flex-row sm:justify-between sm:items-center">
					<p class="text-surface-300">
						{{ props.education.degree }}
					</p>
					<p class="text-surface-400 text-sm md:mr-5">
						{{ props.education.graduation }}
					</p>
				</div>
				<p class="text-surface-400 hidden sm:block" v-for="(bullet, index) in props.education.bullets" :key="index"> 
					{{ ' • ' + bullet }}
				</p>
			</div>
		</div>
		<div class="ml-5 mr-3 sm:hidden">
			<p class="text-surface-400" v-for="(bullet, index) in props.education.bullets" :key="index"> 
				{{ ' • ' + bullet }}
			</p>
		</div>
	</div>

</template>
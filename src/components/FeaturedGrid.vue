<script setup>
import ProjectGridItem from './ProjectGridItem.vue';

const projects = [
	{
		image: '/images/voxel-engine.png',
		alt: 'Voxel terrain render of blocky hills at dusk with a glowing light source in a valley.',
		title: 'Voxel Engine',
		text: 'This passion project has a variety of features, including SSAO, multi-threaded terrain generation and meshing, optimized meshing using bitmasks, and more.',
		chips: ['C++', 'OpenGL', 'GLSL'],
		link: 'https://github.com/ValaraAra/Practice-Engine',
	},
]

</script>

<template>
	<div class="flex flex-col gap-6" id="featured">
		<h2 class="text-3xl font-semibold">Featured</h2>
		<div class="flex flex-col gap-6">
			<ProjectGridItem v-for="(project) in projects" :project="project" :key="project.title" />
		</div>
	</div>
</template>
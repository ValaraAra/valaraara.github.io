<script setup>
import ProjectGridItem from './ProjectGridItem.vue';

const projects = [
	{
		image: '/images/voxel-engine.png',
		title: 'Voxel Engine',
		text: 'In my free time, I work on a voxel engine as my passion project. So far, it features multi-threaded world generation, basic Blinn-Phong lighting, and a custom pipeline for meshing, rendering, and more.',
		chips: ['C++', 'OpenGL', 'GLSL'],
		link: 'https://github.com/ValaraAra/Practice-Engine'
	},
	{
		image: '/images/work.png',
		title: 'Oregon State University',
		text: 'As a Web Developer for the College of Engineering, I implement new pages, features, and redesigns. This work is done with a high level of collaboration with the design and marketing teams.',
		chips: ['JS', 'HTML/CSS', 'Bootstrap', 'Drupal', 'Azure DevOps'],
		link: 'https://engineering.oregonstate.edu/'
	},
]

</script>

<template>
	<div class="flex flex-col gap-6" id="featured">
		<h1 class="text-3xl font-semibold">Featured</h1>
		<div class="flex flex-col gap-6">
			<ProjectGridItem v-for="(project) in projects" :project="project" :key="project.title" />
		</div>
	</div>
</template>
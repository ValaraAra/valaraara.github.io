<script setup>
import ProjectGridItem from './ProjectGridItem.vue';

const projects = [
	{
		image: '/images/work.webp',
		alt: 'Oregon State University College of Engineering homepage with headline \'Engineer a better future.\'',
		title: 'Web',
		text: 'Professional work for Oregon State University\'s College of Engineering, focused on accessible frontend development, plus full-stack projects built in Vue and Node.',
		chips: ['Vue', 'Node', 'JS', 'HTML', 'CSS', 'WCAG'],
		link: '/web',
	},
	{
		image: '/images/voxel-engine.webp',
		alt: 'Voxel terrain render of blocky hills at dusk with a glowing light source in a valley.',
		title: 'Systems & Rendering',
		text: 'Engine architecture and real-time rendering projects, covering systems design, multi-threaded processing, and GPU-driven graphics programming.',
		chips: ['C++', 'Vulkan', 'OpenGL'],
		link: '/engine',
	},
]

</script>

<template>
	<div class="flex flex-col gap-6" id="featured">
		<h2 class="text-3xl font-semibold">Experience</h2>
		<div class="flex flex-col gap-6">
			<ProjectGridItem v-for="(project) in projects" :project="project" :key="project.title" />
		</div>
	</div>
</template>
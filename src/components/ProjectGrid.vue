<script setup>
import ProjectGridItem from './ProjectGridItem.vue';

const projects = [
	{
		image: '/images/voxel-engine.png',
		title: 'Voxel Engine',
		text: 'Developing a voxel engine to strengthen my skills with OpenGL, C++, and engine architecture. Includes a Blinn Phong lighting model, performant chunked world generation, and a custom pipeline for meshing, rendering, and resource management.',
		chips: ['C++', 'OpenGL', 'GLSL'],
		link: 'https://github.com/ValaraAra/Practice-Engine'
	},
	{
		image: '/images/to-do-cropped.png',
		title: 'Task Management',
		text: 'Task management app with user accounts and syncing. Working with a team of 5 to develop several microservices, including OAuth login, file uploads, reminders, and more.',
		chips: ['Node', 'Express', 'Vue', 'Tailwind', 'MongoDB' ],
	},
	{
		image: '/images/character-manager-gallery.png',
		title: 'Character Manager',
		text: 'Cross-platform desktop app for writers to create, edit, and manage characters. Includes in-depth character creation and management features.',
		chips: ['Electron', 'Vue', 'Tailwind'],
	},
	{
		image: '/images/warframe-market.png',
		title: 'Warframe Trading Tool',
		text: 'Tracked the Warframe Market API to find profitable trades. Offered real-time updates, search, and filtering supported by a custom data processing pipeline.',
		chips: ['Node', 'Next', 'Tailwind', 'MongoDB'],
	},
	{
		image: '/images/discord-toolbox.png',
		title: 'Discord Toolbox',
		text: 'Web app that provided advanced tools for Discord users. Featured OAuth login, server analytics, Discord API status monitoring, and several utility tools.',
		chips: ['Next', 'Tailwind'],
	},
]

</script>

<template>
	<div class="flex flex-col gap-6" id="projects">
		<h1 class="text-3xl font-semibold">Projects</h1>
		<div class="flex flex-col gap-6">
			<ProjectGridItem v-for="(project) in projects" :project="project" :key="project.title" />
		</div>
	</div>
</template>
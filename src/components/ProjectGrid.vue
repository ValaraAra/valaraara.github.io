<script setup>
import ProjectGridItem from './ProjectGridItem.vue';

const projects = [
	{
		image: '/images/character-manager-gallery.png',
		title: 'Character Manager',
		text: 'A cross-platform desktop app for writers to create, edit, and organize characters, featuring random generation and streamlined management tools. Built with Electron, Vue.js, and SQLite.',
	},
	{
		image: '/images/warframe-market.png',
		title: 'Warframe Deals',
		text: 'A real-time web app that tracks the Warframe Market API to identify profitable deals, providing search, filtering, and live updates backed by a custom data processing pipeline. Built with Node.js, Next.js, Tailwind CSS, and MongoDB.',
	},
	{
		image: '/images/onyxia.png',
		title: 'Onyxia Bot',
		text: 'A Discord pet collection bot with persistent user profiles, pets, inventories, items, currencies, and daily quests, built for an engaging, game-like user experience. Built with Node.js, Discord.js, and MongoDB.',
	},
	{
		image: '/images/discord-toolbox.png',
		title: 'Discord Toolbox',
		text: 'A web app offering advanced utilities for Discord users, including a gallery that let users browse and filter servers with detailed info such as emotes and user statistics. Built with Next.js, Tailwind CSS, and NextAuth.',
	},
]

</script>

<template>
	<div class="flex flex-col gap-6" id="projects">
		<h1 class="text-3xl font-semibold">Featured Projects</h1>
		<div class="flex flex-col gap-6">
			<ProjectGridItem v-for="(project, index) in projects" :project="project" />
		</div>
	</div>
</template>
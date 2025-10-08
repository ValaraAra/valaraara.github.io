<script setup>
import ProjectGridItem from './ProjectGridItem.vue';

const projects = [
	{
		image: '/images/character-manager-gallery.png',
		title: 'Character Manager',
		text: 'Cross-platform desktop app for writers to create, edit, and manage characters. Features in-depth character creation and management tools.',
		chips: ['Electron', 'Vue', 'SQLite'],
	},
	{
		image: '/images/warframe-market.png',
		title: 'Warframe Trading Tool',
		text: 'Tracks the Warframe Market API to find profitable deals. Provides real-time updates with search and filtering backed by a custom data processing pipeline.',
		chips: ['Node', 'Next', 'Tailwind', 'MongoDB'],
	},
	{
		image: '/images/discord-toolbox.png',
		title: 'Discord Toolbox',
		text: 'Web app offering advanced utilities for Discord users. Featured OAuth login, in-depth server stats, Discord API status monitoring, and several tools.',
		chips: ['Next', 'Tailwind', 'NextAuth'],
	},
	{
		image: '/images/onyxia.png',
		title: 'Onyxia Bot',
		text: 'Discord pet collection bot with persistent user profiles, achievements, daily quests, and more. Built for an engaging, game-like user experience.',
		chips: ['Node', 'DiscordJS', 'MongoDB'],
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
<script setup>
import ProjectGridItem from './ProjectGridItem.vue';

const projects = [
	{
		image: '/images/character-manager-gallery.png',
		title: 'Character Manager',
		text: 'A desktop app that allows users to randomly generate, create, edit, and manage their characters. My client wanted it made to simplify the process of creating and editing characters for their DnD campaigns.',
	},
	{
		image: '/images/onyxia.png',
		title: 'Onyxia Bot',
		text: 'An in-depth Discord pet bot themed around World of Warfraft. Allows users to search for and capture a wide variety of pets from the game. Also features usable items, reward crates, it\'s own currency system, daily quests, and much more.',
	},
	{
		image: '/images/discord-toolbox.png',
		title: 'Discord Toolbox',
		text: 'Congregated several useful tools for advanced Discord users. The primary tool was the guild gallery, which allowed users to view and filter through all of their servers in one place with in-depth information about each, notably emotes.',
	},
	{
		image: '/images/warframe-market.png',
		title: 'Warframe Market Tool',
		text: 'A website allowing users to filter and search through up-to-date deals currently on the Warframe Market. It uses the Warframe Market API to maintain up-to-date data and constantly monitor for new, high-quality, deals on the backend.',
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
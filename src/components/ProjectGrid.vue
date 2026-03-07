<script setup>
import ProjectGridItem from './ProjectGridItem.vue';

const projects = [
	{
		image: '/images/to-do-cropped.png',
		alt: 'To-do app with a task list on the left and the selected task\'s details shown on the right.',
		title: 'Task Management',
		text: 'Task management app with user accounts and syncing. Worked with a team of 5 to develop several microservices, including OAuth login, data syncing, reminders, and more.',
		chips: ['Node', 'Express', 'Vue', 'Tailwind', 'MongoDB' ],
	},
	{
		image: '/images/character-manager-gallery.png',
		alt: 'Character gallery with a search bar, filters, and a grid of character cards, each with a name, artwork, and description.',
		title: 'Character Manager',
		text: 'Cross-platform desktop app for writers to create, edit, and manage characters. Includes in-depth character creation and management features.',
		chips: ['Electron', 'Vue', 'Tailwind'],
	},
	{
		image: '/images/warframe-market.png',
		alt: 'Trading tool with a list of three Warframe item deals, each with stats and buy or sell buttons.',
		title: 'Warframe Trading Tool',
		text: 'Tracked the Warframe Market API to find profitable trades. Offered real-time updates, search, and filtering supported by a custom data processing pipeline.',
		chips: ['Node', 'Next', 'Tailwind', 'MongoDB'],
	},
	{
		image: '/images/discord-toolbox.png',
		alt: 'Discord server list with a search bar and a grid of server cards, each with an icon, name, and stats.',
		title: 'Discord Toolbox',
		text: 'Web app that provided advanced tools for Discord users. Featured OAuth login, server analytics, Discord API status monitoring, and several utility tools.',
		chips: ['Next', 'Tailwind'],
	},
]

</script>

<template>
	<div class="flex flex-col gap-6" id="projects">
		<h2 class="text-3xl font-semibold">Past Projects</h2>
		<div class="flex flex-col gap-6">
			<ProjectGridItem v-for="(project) in projects" :project="project" :key="project.title" />
		</div>
	</div>
</template>
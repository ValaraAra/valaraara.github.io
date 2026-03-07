<script setup>
import ProjectGridItem from './ProjectGridItem.vue';

const projects = [
	{
		image: '/images/work.png',
		title: 'Oregon State University',
		text: 'As a Web Developer for the College of Engineering, I implement new pages, features, and redesigns alongside our design and marketing teams. Currently project lead for accessibility.',
		chips: ['JS', 'HTML/CSS', 'Bootstrap', 'Drupal', 'WCAG'],
		link: 'https://engineering.oregonstate.edu/'
	},
]

</script>

<template>
	<div class="flex flex-col gap-6" id="experience">
		<h2 class="text-3xl font-semibold">Work Experience</h2>
		<div class="flex flex-col gap-6">
			<ProjectGridItem v-for="(project) in projects" :project="project" :key="project.title" />
		</div>
	</div>
</template>
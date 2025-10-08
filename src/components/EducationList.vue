<script setup>
	import EducationListItem from './EducationListItem.vue';

	const educationList = [
		{
			image: '/images/oregon-state-university.png',
			title: 'Oregon State University',
			degree: 'BS in Computer Science',
			graduation: 'Expected Jun 2028',
			bullets: [
				'Cumulative 3.6 GPA',
				'Achieved a 4.0 in all CS courses taken',
			],
		},
		{
			image: '/images/pierce-college-logo.png',
			title: 'Pierce College Puyallup',
			degree: 'Associate of Arts',
			graduation: 'Graduated Mar 2020',
			bullets: [
				'Completed primarily during high school',
				'Offered tutoring positions in the CS department',
			],
		},
	]
</script>

<template>
	<div class="flex flex-col gap-6 w-full" id="education">
		<h1 class="text-3xl font-semibold">Education</h1>
		<div class="flex flex-col gap-6 p-3 rounded-lg border border-surface-800 w-full bg-surface-900 bg-opacity-70 overflow-hidden">
			<EducationListItem v-for="(education) in educationList" :education="education" :key="education.title" />
		</div>
	</div>
</template>
<script setup>
	import EducationListItem from './EducationListItem.vue';

	const educationList = [
		{
			image: '/images/oregon-state-university.png',
			title: 'Oregon State University',
			degree: 'Bachelor of Science in Computer Science',
			graduation: 'Expected Jun 2028',
			bullets: [
				'Cumulative GPA: 3.6/4.0',
				'Achieved a 4.0 in all CS courses taken so far',
			],
		},
		{
			image: '/images/pierce-college-logo.png',
			title: 'Pierce College Puyallup',
			degree: 'Associate of Arts',
			graduation: 'Graduated Mar 2020',
			bullets: [
				'Completed almost entirely during high school',
				'Offered tutoring positions in the CS department',
			],
		},
	]
</script>

<template>
	<div class="flex flex-col gap-6 w-full" id="education">
		<h1 class="text-3xl font-semibold">Education</h1>
		<div class="flex flex-col gap-6 rounded-lg border border-surface-800 w-full bg-surface-900 bg-opacity-70 overflow-hidden">
			<EducationListItem v-for="(education, index) in educationList" :education="education" :key="education.title" />
		</div>
	</div>
</template>
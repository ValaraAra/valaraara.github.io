<script setup>
	import EducationListItem from './EducationListItem.vue';

	const educationList = [
		{
			image: '/images/oregon-state-university.png',
			alt: 'Oregon State University logo.',
			title: 'Oregon State University',
			degree: 'BS in Computer Science',
			graduation: 'Expected Jun 2028',
			bullets: [
				'Cumulative 3.6 GPA and 4.0 OSU GPA',
				'Achieved a 4.0 in all CS courses taken',
			],
			link: 'https://oregonstate.edu/'
		},
		{
			image: '/images/pierce-college-logo.png',
			alt: 'Pierce College logo.',
			title: 'Pierce College Puyallup',
			degree: 'Associate of Arts',
			graduation: 'Graduated',
			bullets: [
				'Completed during high school',
				'Offered tutoring positions in the CS department',
			],
			link: 'https://www.pierce.ctc.edu/'
		},
	]
</script>

<template>
	<div class="flex flex-col gap-6 w-full" id="education">
		<h2 class="text-3xl font-semibold">Education</h2>
		<div class="flex flex-col gap-6 p-3 rounded-lg border border-surface-800 w-full bg-surface-900 bg-opacity-70 overflow-hidden">
			<EducationListItem v-for="(education) in educationList" :education="education" :key="education.title" />
		</div>
	</div>
</template>
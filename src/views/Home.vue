<script setup>
	import ProfileBlock from '@/components/ProfileBlock.vue';
	import CardGrid from '@/components/CardGrid.vue';

	const profileInfo = {
		image: '/images/profile.webp',
		alt: 'Aubrey Koch.',
		intro: 'Hi, I\'m Aubrey!',
		body: 'I build real-time renderers and game engines, and do professional web development.',
		status: 'Currently building a Vulkan renderer and studying CS at OSU.',
	}

	const focusCards = [
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
			alt: 'Rendered voxel terrain with trees and lakes at dusk.',
			title: 'Engine & Graphics',
			text: 'Engine architecture and real-time rendering projects, focused on multithreading, SIMD, and GPU-driven rendering.',
			chips: ['C++', 'Vulkan', 'OpenGL'],
			link: '/engine',
		},
	]

	const moreCards = [
		{
			image: '/images/osu-campus.jpg',
			alt: 'OSU campus from an aerial view.',
			title: 'Education',
			text: 'Working towards my Bachelor\'s degree in Computer Science as a Junior at Oregon State University. Solid 4.0 institutional GPA, with 3.75 GPA overall. Currently working in the OSU graphics lab alongside Dr. Yue Zhang on an independent graphics project.',
			link: '/education',
		},
		{
			image: '/images/ash.webp',
			alt: 'Brown and white cat with long hair posing on a desk framed by sunlight.',
			title: 'About',
			text: 'Whenever I\'m not working on a project, I\'m usually relaxing with my two cats, reading a good book. I also love games. Games like World of Warcraft and Cube World are what got me interested in building my own game engine.',
			link: '/about',
		},
	]
</script>

<template>
	<ProfileBlock v-bind="profileInfo" />
	<CardGrid id="focus-areas" title="Focus Areas" :cards="focusCards" />
	<CardGrid id="more-about-me" title="More About Me" :cards="moreCards" />
</template>

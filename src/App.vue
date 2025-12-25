<script setup>
	import AppFooter from './components/AppFooter.vue';
	import AppNavbar from './components/AppNavbar.vue';
	import ContactMe from './components/ContactMe.vue';
	import ProfileCard from './components/ProfileCard.vue';
	import ProjectGrid from './components/ProjectGrid.vue';
	import AppBackground from './components/AppBackground.vue';
	import EducationList from './components/EducationList.vue';
	import FeaturedGrid from './components/FeaturedGrid.vue';
	import WorkGrid from './components/WorkGrid.vue';
</script>

<template>
	<AppBackground />
	<AppNavbar />

	<main class="mb-auto flex flex-col place-items-center gap-16 my-8 w-full">
		<ProfileCard />
		<FeaturedGrid />
		<WorkGrid />
		<EducationList />
		<ProjectGrid />
		<ContactMe />
	</main>

	<AppFooter />
</template>

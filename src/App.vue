<script setup>
import AppFooter from './components/AppFooter.vue';
import AppNavbar from './components/AppNavbar.vue';
import ContactMe from './components/ContactMe.vue';
import ProfileCard from './components/ProfileCard.vue';
import ProjectGrid from './components/ProjectGrid.vue';
</script>

<template>
	<AppNavbar />

	<main class="mb-auto flex flex-col place-items-center gap-16 my-8 w-full">
		<ProfileCard />
		<ProjectGrid />
		<ContactMe />
	</main>

	<AppFooter />
</template>

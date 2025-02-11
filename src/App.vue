<script setup lang="ts">

if (import.meta.env.VITE_SPECIFIC_FEATURE === "true") {
	console.log("specific feature enabled");
}

console.log(import.meta.env.VITE_SPECIFIC_FEATURE);
</script>

<template>
	<header>
		<Menubar>
			<template #start>
				<RouterLink to="/">
					Home
				</RouterLink>
				<RouterLink to="/about">
					About
				</RouterLink>
			</template>
			<template #end>
				<Select v-model="$i18n.locale" :options="$i18n.availableLocales" />
			</template>
		</Menubar>
	</header>

	<RouterView />
</template>

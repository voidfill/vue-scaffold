<script setup lang="ts">
</script>

<template>
	<header>
		<div class="wrapper">
			<div class="locale-changer">
				<select v-model="$i18n.locale">
					<option
						v-for="locale in $i18n.availableLocales"
						:key="`locale-${locale}`"
						:value="locale"
					>
						{{ locale }}
					</option>
				</select>
			</div>
			<nav>
				<RouterLink to="/">Home</RouterLink>
				<RouterLink to="/about">About</RouterLink>
			</nav>
		</div>
	</header>

	<RouterView />
</template>

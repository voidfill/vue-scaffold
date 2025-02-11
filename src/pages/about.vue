<script setup lang="ts">
import { useI18n } from "vue-i18n";
const { t } = useI18n();
</script>

<template>
	<h1>{{ t("title") }}</h1>
	<p>{{ t("description") }}</p>
</template>

<i18n>
{
	"en": {
		"title": "About",
		"description": "Hi, i made this for fun. This page is missing japanes translations and some german translations"
	},
	"de": {
		"title": "Über",
	}
}
</i18n>

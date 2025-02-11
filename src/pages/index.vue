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
		"title": "Welcome",
		"description": "This is a Vue Scaffold project."
	},
	"ja": {
		"title": "ようこそ",
		"description": "これはVue Scaffoldプロジェクトです。"
	},
	"de": {
		"title": "Willkommen",
		"description": "Dies ist ein Vue Scaffold Projekt."
	}
}
</i18n>

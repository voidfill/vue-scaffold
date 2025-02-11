<script setup lang="ts">
import { useI18n } from "vue-i18n";
const { t } = useI18n();
</script>

<template>
	<h1>{{ t("title") }}</h1>
	<p>{{ t("description") }}</p>

	<p>{{
		// can also do translations like this and immediately have a fallback
		t("Some number formatting")
	}} : {{ $n(123456789.123456789, "currency") }}</p>
</template>

<i18n>
{
	"en": {
		"title": "About",
		"description": "Hi, i made this for fun. This page is missing japanese translations and some german translations"
	},
	"de": {
		"title": "Über",
		"Some number formatting": "Einige Zahlenformatierungen",
	}
}
</i18n>

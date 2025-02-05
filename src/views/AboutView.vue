<script setup lang="ts">
import { useI18n } from "vue-i18n";
const { t } = useI18n();
</script>

<template>
	<div class="about">
		<h1>title: {{ t("title") }}</h1>
	</div>
</template>

<i18n>
{
	"en": {
		"title": "About view"
	},
	"ja": {
		"title": "このページについて"
	}
}
</i18n>

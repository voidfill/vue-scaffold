import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";

import Vue from "@vitejs/plugin-vue";
import VueRouter from "unplugin-vue-router/vite";
import VueJsx from "@vitejs/plugin-vue-jsx";
import VueDevTools from "vite-plugin-vue-devtools";
import VueI18nPlugin from "@intlify/unplugin-vue-i18n/vite";

import Components from "unplugin-vue-components/vite";
import { PrimeVueResolver } from "@primevue/auto-import-resolver";

import browserslist from "browserslist";
import { browserslistToTargets } from "lightningcss";

// target all css standards with usage of at least .25%
const targets = browserslistToTargets(browserslist(">= 0.25%"));

// https://vite.dev/config/
export default defineConfig({
	plugins: [
		VueRouter({
			routesFolder: "src/pages",
		}),
		Vue(),
		VueJsx(),
		VueDevTools(),
		VueI18nPlugin(),
		Components({
			resolvers: [PrimeVueResolver()],
		}),
	],
	resolve: {
		alias: {
			"@": fileURLToPath(new URL("./src", import.meta.url)),
		},
	},
	build: {
		cssMinify: "lightningcss",
	},
	css: {
		transformer: "lightningcss",
		lightningcss: {
			targets,
		},
	},
});

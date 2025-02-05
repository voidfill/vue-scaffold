import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import vueDevTools from "vite-plugin-vue-devtools";
import vueI18nPlugin from "@intlify/unplugin-vue-i18n/vite";
import browserslist from "browserslist";
import { browserslistToTargets } from "lightningcss";
import Components from "unplugin-vue-components/vite";
import { PrimeVueResolver } from "@primevue/auto-import-resolver";

// target all css standards with usage of at least .25%
const targets = browserslistToTargets(browserslist(">= 0.25%"));

// https://vite.dev/config/
export default defineConfig({
	plugins: [
		vue(),
		vueJsx(),
		vueDevTools(),
		vueI18nPlugin(),
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

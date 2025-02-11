import "./assets/main.css";

import { createApp } from "vue";
import App from "./App.vue";
import { router } from "./router";
import { createI18n } from "vue-i18n";
import PrimeVue from "primevue/config";
import Aura from "@primevue/themes/aura";

const app = createApp(App);
app.use(router);

app.use(PrimeVue, {
	theme: {
		preset: Aura,
	},
});

const i18n = createI18n({
	fallbackLocale: "en",
	locale: "en",
	messages: {
		en: {},
		ja: {},
		de: {},
	},
});
app.use(i18n);

app.mount("#app");

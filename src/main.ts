import "./assets/main.css";

import { createApp } from "vue";
import PrimeVue from "primevue/config";
import Aura from "@primevue/themes/aura";
import { router } from "./router";
import { i18n } from "./i18n";
import App from "./App.vue";

const app = createApp(App);

app.use(router);
app.use(i18n);

app.use(PrimeVue, {
	theme: {
		preset: Aura,
	},
});

app.mount("#app");

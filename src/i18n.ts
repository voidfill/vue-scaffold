import { createI18n } from "vue-i18n";

export const i18n = createI18n({

	legacy: false,
	fallbackLocale: "en-US",
	locale: "en-US",
	messages: {
		"en-US": {},
		"ja": {},
		"de": {},
	},
	numberFormats: {
		"en-US": {
			currency: {
				style: "currency", currency: "USD", notation: "standard",
			},
			decimal: {
				style: "decimal", minimumFractionDigits: 2, maximumFractionDigits: 2,
			},
			percent: {
				style: "percent", useGrouping: false,
			},
		},
		"de": {
			currency: {
				style: "currency", currency: "EUR", notation: "standard",
			},
			decimal: {
				style: "decimal", minimumFractionDigits: 2, maximumFractionDigits: 2,
			},
			percent: {
				style: "percent", useGrouping: true,
			},
		},
		"ja": {
			currency: {
				style: "currency", currency: "JPY", notation: "standard",
			},
			decimal: {
				style: "decimal", minimumFractionDigits: 2, maximumFractionDigits: 2,
			},
			percent: {
				style: "percent", useGrouping: false,
			},
		},
	},
});

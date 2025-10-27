import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
	ssr: false,
	app: { baseURL: "/ticket-cult-lp/" },
	nitro: { preset: "github_pages" },
	compatibilityDate: "2025-07-15",
	devtools: { enabled: true },
	css: ["~/assets/css/main.css"],
	vite: {
		plugins: [tailwindcss()],
	},
	modules: ["@nuxt/eslint", "@nuxt/fonts", "@nuxt/image"],
});

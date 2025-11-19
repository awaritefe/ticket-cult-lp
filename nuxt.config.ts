import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
	compatibilityDate: "2025-07-15",
	devtools: { enabled: true },
	css: ["~/assets/css/main.css"],
	vite: {
		plugins: [tailwindcss()],
	},
	modules: ["@nuxt/eslint", "@nuxt/fonts", "@nuxt/image"],
	app: {
		head: {
			link: [
				// Main favicon
				{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" },

				// Standard PNG favicons
				{
					rel: "icon",
					type: "image/png",
					sizes: "16x16",
					href: "/favicon-16x16.png",
				},
				{
					rel: "icon",
					type: "image/png",
					sizes: "32x32",
					href: "/favicon-32x32.png",
				},

				// Apple devices
				{
					rel: "apple-touch-icon",
					sizes: "180x180",
					href: "/apple-touch-icon.png",
				},

				// Android / PWA icons
				{
					rel: "icon",
					type: "image/png",
					sizes: "192x192",
					href: "/android-chrome-192x192.png",
				},
				{
					rel: "icon",
					type: "image/png",
					sizes: "512x512",
					href: "/android-chrome-512x512.png",
				},

				// Manifest file
				{ rel: "manifest", href: "/site.webmanifest" },
			],
		},
	},
});

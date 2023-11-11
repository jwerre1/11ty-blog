/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./content/**/*.{njk,md}",
		"./content/**/*.svg",
		"./_includes/**/*.{njk,md}",
		"./_includes/**/*.svg",
	],
	theme: {
		extend: {
			typography: {
				quoteless: {
					css: {
						"p:first-of-type::before": { content: "none" },
						"p:first-of-type::after": { content: "none" },
					},
				},
			},
		},
	},
	plugins: [require("@tailwindcss/typography")],
};

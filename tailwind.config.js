/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				"primary-light": "hsl(var(--primary-light) / <alpha-value>)",
				primary: "hsl(var(--primary-base) / <alpha-value>)",
				"primary-dark": "hsl(var(--primary-dark) / <alpha-value>)",
				background: "hsl(var(--background) / <alpha-value>)",
				surface: "hsl(var(--surface) / <alpha-value>)",
				"text-primary": "hsl(var(--text-primary) / <alpha-value>)",
				"text-secondary": "hsl(var(--text-secondary) / <alpha-value>)",
				border: "hsl(var(--border) / <alpha-value>)",
				hover: "hsl(var(--hover) / <alpha-value>)",
				disabled: "hsl(var(--disabled) / <alpha-value>)",
				overlay: "hsl(var(--overlay) / <alpha-value>)",
				success: "hsl(var(--success) / <alpha-value>)",
				warning: "hsl(var(--warning) / <alpha-value>)",
				error: "hsl(var(--error) / <alpha-value>)",
				info: "hsl(var(--info) / <alpha-value>)",
			},
			fontFamily: {
				lato: ["Lato", "sans-serif"],
				"dm-mono": ["DM Mono", "monospace"],
			},
			backgroundImage: {
				"dark-bg": "url('/dark_bg.png')",
				"light-bg": "url('/light_bg.png')",
			},
		},
	},
	variants: {
		extend: {
			backgroundImage: ["light"],
		},
	},
	plugins: [],
	darkMode: "class",
};

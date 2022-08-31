module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				gray: {
					650: "#423e4f",
				},
			},
		},
	},
	plugins: [require("@tailwindcss/forms")],
};

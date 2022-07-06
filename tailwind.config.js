/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		fontFamily: {
			VT: ['VT323', 'monospace'],
		},
		extend: {
			maxHeight: {
				128: '32rem',
			},
		},
		screens: {
			sm: { max: '639px' },
		},
	},
	plugins: [],
};

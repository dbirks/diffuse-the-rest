/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		screens: {
			desktop: '816px'
		},
		extend: {
			screens: {
				'with-hover': { raw: '(hover: hover)' },
				'no-hover': { raw: '(hover: none)' }
			}
		}
	},
	plugins: [require('@tailwindcss/typography'),]
};

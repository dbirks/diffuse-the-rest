/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		screens: {
			desktop: '816px',
			sm: '640px',
			md: '768px',
			lg: '1024px',
			xl: '1280px'
		},
		extend: {
			screens: {
				'with-hover': { raw: '(hover: hover)' },
				'no-hover': { raw: '(hover: none)' }
			}
		}
	},
	plugins: [require('@tailwindcss/typography')]
};

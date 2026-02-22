/** @type {import('tailwindcss').Config} */
export default {
	darkMode: 'class',
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				sans: ["'Plus Jakarta Sans'", "Inter", "sans-serif"],
				serif: ["'Playfair Display'", "serif"],
				mono: ["'JetBrains Mono'", "monospace"],
			},
			colors: {
				premium: {
					900: '#050505',
					800: '#0a0a0a',
					700: '#111111',
					border: 'rgba(255, 255, 255, 0.08)',
					glow: 'rgba(255, 255, 255, 0.03)',
				}
			},
			animation: {
				'float': 'float 6s ease-in-out infinite',
				'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
				'spotlight': 'spotlight 2s ease .75s 1 forwards',
			},
			keyframes: {
				float: {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-10px)' },
				},
				spotlight: {
					'0%': {
						opacity: 0,
						transform: 'translate(-72%, -62%) scale(0.5)',
					},
					'100%': {
						opacity: 1,
						transform: 'translate(-50%,-40%) scale(1)',
					},
				},
			},
		},
	},
	plugins: [],
};

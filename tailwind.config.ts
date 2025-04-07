
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				sage: {
					DEFAULT: '#7D9D74',
					light: '#A8C1A0',
					dark: '#5A7953',
				},
				wheat: {
					DEFAULT: '#E6C27A',
					light: '#F0D9A8',
					dark: '#C9A05D',
				},
				soil: {
					DEFAULT: '#5C4033',
					light: '#7D604F',
					dark: '#3D2A22',
				},
				cream: {
					DEFAULT: '#F8F5F0',
					light: '#FFFFFF',
					dark: '#E9E2D5',
				},
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' },
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' },
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-10px)' },
				},
				'fade-in-up': {
					'0%': {
						opacity: '0',
						transform: 'translateY(20px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					},
				},
				'slow-spin': {
					'0%': { transform: 'rotate(0deg)' },
					'100%': { transform: 'rotate(360deg)' },
				},
				'pollen-float': {
					'0%, 100%': { 
						transform: 'translateY(0) translateX(0)',
						opacity: '0.6'
					},
					'25%': { 
						transform: 'translateY(-15px) translateX(5px)',
						opacity: '1'
					},
					'50%': { 
						transform: 'translateY(-25px) translateX(15px)',
						opacity: '0.8'
					},
					'75%': { 
						transform: 'translateY(-15px) translateX(25px)',
						opacity: '0.4'
					},
					'100%': { 
						transform: 'translateY(0) translateX(30px)',
						opacity: '0'
					},
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'float': 'float 6s ease-in-out infinite',
				'fade-in-up': 'fade-in-up 1s ease-out forwards',
				'slow-spin': 'slow-spin 20s linear infinite',
				'pollen-float': 'pollen-float 8s ease-in-out infinite',
			},
			fontFamily: {
				'playfair': ['"Playfair Display"', 'serif'],
				'inter': ['Inter', 'sans-serif'],
			},
			backgroundImage: {
				'grain-texture': "url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iLjY1IiBudW1PY3RhdmVzPSIzIiBzdGl0Y2hUaWxlcz0ic3RpdGNoIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ibWF0cml4IiB2YWx1ZXM9IjAuMTQgMCAwIDAgMCAwIDAuMDkgMCAwIDAgMCAwIDAuMDkgMCAwIDAgMCAwIDAuMDUgMCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWx0ZXI9InVybCgjYSkiLz48L3N2Zz4=')",
			}
		},
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
  ],
  theme: {
    extend: {
      colors: {
        // Brand colors
        green: {
          400: '#4ddd77', // brand-primary-light
          500: '#30d158', // brand-primary
          600: '#28b34a', // brand-primary-dark
        },
        // Primary colors (minimal, elegant scheme)
        primary: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1f2937',
          900: '#000000',
        },
        // Boxing glove red
        red: {
          50: '#fef2f2',
          100: '#fee2e2',
          200: '#fecaca',
          300: '#fca5a5',
          400: '#f87171',
          500: '#ef4444',
          600: '#dc2626',
          700: '#b91c1c',
          800: '#991b1b',
          900: '#7f1d1d',
        },
        // Apple Messages green
        applegreen: {
          DEFAULT: '#30d158', // main
          light: '#4be769', // lighter
          dark: '#28b34a', // darker
          gradientFrom: '#30d158',
          gradientTo: '#28b34a',
        },
        // Golden yellow from app icon
        golden: {
          DEFAULT: '#FFC300', // goldenrod main
          dark: '#FFB300', // goldenrod dark accent
        },
        // Elegant theme colors
        elegant: {
          primary: '#121212', // main background
          secondary: '#1e1e1e', // secondary backgrounds
          tertiary: '#2d2d2d', // card headers
          text: {
            primary: '#FFFFFF', // main text
            secondary: 'rgba(255, 255, 255, 0.8)', // subdued text
            tertiary: 'rgba(255, 255, 255, 0.6)', // muted text
          },
          border: {
            primary: 'rgba(255, 255, 255, 0.1)', // subtle borders
            secondary: 'rgba(255, 255, 255, 0.05)', // more subtle borders
          },
          card: {
            primary: '#222222',
            secondary: '#181818',
          },
          highlight: '#30d158', // accent color (green)
        },
        // Direct brand color references
        'brand': '#30d158',
        'brand-dark': '#28b34a',
        'brand-light': '#4ddd77',
        'bg-dark': '#121212',
        'bg-card': '#222222',
        'bg-card-secondary': '#181818',
        'bg-footer': '#0e0e0e',
      },
      backgroundColor: {
        'hero': '#121212',
        'card': '#1a1a1a',
        'footer': '#0a0a0a',
      },
      textColor: {
        'hero': '#ffffff',
        'card': '#ffffff',
        'footer': '#e5e7eb',
      },
      borderColor: {
        'card': '#374151',
      },
      boxShadow: {
        'card': '0 1px 3px rgba(0,0,0,0.1)',
      },
    },
  },
  plugins: [],
}

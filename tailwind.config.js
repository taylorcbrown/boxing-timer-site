/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
  ],
  theme: {
    extend: {
      colors: {
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
        // Dark neutral theme
        elegant: {
          // Backgrounds
          primary: '#121212',
          secondary: '#1a1a1a',
          tertiary: '#242424',
          // Text
          text: {
            primary: '#ffffff',
            secondary: '#e5e7eb',
            tertiary: '#d1d5db',
            muted: '#9ca3af',
          },
          // Borders
          border: {
            primary: '#333333',
            secondary: '#444444',
          },
          // Card backgrounds
          card: {
            primary: '#1a1a1a',
            secondary: '#242424',
          },
          // Interactive elements
          hover: {
            primary: '#2c2c2c',
            secondary: '#3c3c3c',
          },
        },
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

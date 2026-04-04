/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        primary: 'var(--color-sea)',
        secondary: '#E0F2FE',
        cta: 'var(--color-sun)',
        accent: 'var(--color-pine)',
        text: 'var(--foreground)',
      },
      fontFamily: {
        heading: ['var(--font-heading)', 'Montserrat Alternates', 'sans-serif'],
        body: ['var(--font-body)', 'Lexend', 'sans-serif'],
      },
      boxShadow: {
        'modern': 'var(--shadow-modern)',
        'modern-lg': 'var(--shadow-modern-lg)',
      },
    },
  },
  plugins: [],
}

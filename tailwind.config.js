/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        /* Base */
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        text: 'var(--foreground)',
        
        /* Brand Colors */
        sea: {
          DEFAULT: 'var(--color-sea)',
          dark: 'var(--color-sea-dark)',
        },
        sun: {
          DEFAULT: 'var(--color-sun)',
          dark: 'var(--color-sun-dark)',
        },
        sunset: {
          DEFAULT: 'var(--color-sunset)',
          dark: 'var(--color-sunset-dark)',
        },
        pine: {
          DEFAULT: 'var(--color-pine)',
          dark: 'var(--color-pine-dark)',
        },
        /* Logo Red - for PRIJAVI SE CTA */
        logo: {
          DEFAULT: 'var(--color-logo-red)',
          dark: 'var(--color-logo-red-dark)',
        },
        /* Legacy aliases for backwards compatibility */
        primary: 'var(--color-sea)',
        secondary: '#E0F2FE',
        cta: 'var(--color-sun)',
        accent: 'var(--color-pine)',
      },
      fontFamily: {
        sans: ['Rubik', 'sans-serif'],
        heading: ['Rubik', 'sans-serif'],
        body: ['Rubik', 'sans-serif'],
      },
      fontWeight: {
        regular: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
        extrabold: '800',
        black: '900',
      },
      boxShadow: {
        'modern': 'var(--shadow-modern)',
        'modern-lg': 'var(--shadow-modern-lg)',
      },
    },
  },
  plugins: [],
}

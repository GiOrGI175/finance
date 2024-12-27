import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        publicSans: ['PublicSans', 'serif'],
      },
      transitionDuration: {
        '8000': '8000ms',
      },
      transitionDelay: {
        '400': '400ms',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      colors: {},
    },
    screens: {
      sm: '300px',
      md: '768px',
      lg: '1024px',
      'max-xs': { max: '480px' },
      'max-ss': { max: '620px' },
      ss: '620px',
      'max-sm': {
        max: '768px',
      },
      'max-md': {
        max: '1060px',
      },
      'max-md-lg': {
        max: '1265px',
      },
      'max-lg': {
        max: '1440px',
      },
      'max-xl': {
        max: '1700px',
      },
    },
    options: {
      safelist: ['/w-\\[\\d+%\\]/', '/bg-\\[.*\\]/'],
    },
  },
  plugins: [require('tailwindcss-animate')],
};
export default config;

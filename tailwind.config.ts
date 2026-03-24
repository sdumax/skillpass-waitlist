import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        night: '#05070f'
      },
      boxShadow: {
        glow: '0 0 80px rgba(80, 150, 255, 0.25)'
      }
    }
  },
  plugins: []
};

export default config;

import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        cofounder: {
          blue: '#1A237E',
          green: '#00C853',
          mist: '#F5F5F5',
          ink: '#10162F',
        },
      },
      fontFamily: {
        display: ['var(--font-display)', 'Georgia', 'serif'],
        body: ['var(--font-body)', 'Helvetica Neue', 'sans-serif'],
      },
      boxShadow: {
        card: '0 24px 70px rgba(26, 35, 126, 0.14)',
        glow: '0 18px 55px rgba(0, 200, 83, 0.28)',
      },
    },
  },
  plugins: [],
};

export default config;

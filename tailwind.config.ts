import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      keyframes: {
        'slide-right': {
          '0%': { transform: 'translateX(0) skewX(-20deg)' },
          '100%': { transform: 'translateX(1200%) skewX(-20deg)' },
        },
      },
      animation: {
        'slide-right': 'slide-right 3s linear infinite',
      },
    },
  },
  plugins: [],
};
export default config;

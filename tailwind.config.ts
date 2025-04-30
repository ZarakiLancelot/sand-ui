import type { Config } from 'tailwindcss';
import { defaultTheme } from './src/styles/theme';

const config: Config = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './.storybook/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: defaultTheme.colors,
      spacing: defaultTheme.spacing,
      fontSize: defaultTheme.fontSizes,
      borderRadius: defaultTheme.borderRadius,
      fontFamily: {
        sans: defaultTheme.typography.fontFamily.replace(/['"]/g, '')
      },
      boxShadow: defaultTheme.shadows,
    },
  },
  plugins: [],
};

export default config;

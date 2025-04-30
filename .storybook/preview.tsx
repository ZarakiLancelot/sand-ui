import '../src/styles/tailwind.css';
import React from 'react';
import type { Preview } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from '../src/styles/theme';

const preview: Preview = {
  decorators: [
    (Story) => (
      <ThemeProvider theme={defaultTheme}>
        <Story />
      </ThemeProvider>
    ),
  ],
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    docs: {
      inlineStories: true
    },
    backgrounds: {
      values: [
        { name: 'light', value: '#FFF' },
        { name: 'dark', value: '#000' },
        { name: 'gray', value: '#EEE' },
      ]
    }
  },
};

export default preview;

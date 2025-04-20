import type { StorybookConfig } from '@storybook/react-vite';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';

const config: StorybookConfig = {
  core: {
    builder: '@storybook/builder-vite',
  },
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  stories: [
    '../src/components/atoms/**/*.stories.@(ts|tsx)',
    '../src/components/molecules/**/*.stories.@(ts|tsx)',
    '../src/components/organisms/**/*.stories.@(ts|tsx)',
    '../src/components/templates/**/*.stories.@(ts|tsx)',
    '../src/components/pages/**/*.stories.@(ts|tsx)',
  ],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-a11y',
  ],
  async viteFinal(config, { configType }) {
    config.plugins = config.plugins ?? [];
    config.plugins.push(
      vanillaExtractPlugin(),
      // pandaPlugin()
    );
    return config;
  },
};

export default config;

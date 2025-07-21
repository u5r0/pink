import { dirname, join } from 'path';
/** @type { import('@storybook/sveltekit').StorybookConfig } */
const config = {
    stories: ['../src/**/*.stories.svelte'],
    addons: [
        '@storybook/addon-svelte-csf',
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/addon-interactions',
        '@storybook/addon-a11y'
    ],
    framework: {
        name: '@storybook/sveltekit',
        options: {}
    }
};

export default config;

function getAbsolutePath(value) {
    return dirname(require.resolve(join(value, 'package.json')));
}

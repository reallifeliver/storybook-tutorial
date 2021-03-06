module.exports = {
  stories: ['../src/**/*.stories.(js|mdx|tsx)'],
  addons: [
    '@storybook/preset-create-react-app',
    '@storybook/addon-actions',
    '@storybook/addon-links',
    '@storybook/addon-knobs/register',
    //'@storybook/addon-docs',
    {
      name : '@storybook/addon-docs',
      options : {
        configureJSX : true,
        babelOptions: {},
        sourceLoaderOptions: null,
      }
    }
  ],
};

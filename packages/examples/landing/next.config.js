const withPlugins = require('next-compose-plugins');
const withTM = require('next-transpile-modules')
const withCSS = require('@zeit/next-css')


let plugins = [
  [withCSS],
  (process.env.NODE_ENV != "production" ? 
    [withTM, {
      transpileModules: ['@craftjs/core', '@craftjs/utils', '@craftjs/layers']
    }] : []
  ),
];

module.exports = withPlugins(plugins, {
  assetPrefix: process.env.NODE_ENV === 'production' ? '/craft.js' : '',
});
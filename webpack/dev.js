const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const commonConfig = require('./base.js');
const merge = require('webpack-merge');

// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const rootpath = path.resolve(__dirname, '..');

console.log("Creating for development");

module.exports = merge(commonConfig, {
  mode: 'development',
  devtool: 'eval-cheap-module-source-map', //eval-cheap-source-map
  output: {
    library: "Renderer",
    libraryTarget: 'umd',
    libraryExport: "default",
    umdNamedDefine: true,
    path: path.resolve(rootpath, 'dist'),
    // publicPath: '/',
    filename: '[name].js',
    pathinfo: false
  },
  module: {
    rules: [
      {
        // Include ts, tsx, js, and jsx files.
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        loader: require.resolve('babel-loader'),
        query: { compact: false }
      }
    ]
  },
  plugins: [
    new htmlWebpackPlugin({ //create html file to serve the bundle
      template: path.join(rootpath, '', 'index.html'), //webpack build html file for us in dist folder(will take this index.html file and inject main.js file)
      inject: false
    }),
  ],
  optimization: {

  },
  devServer: {
    port: 3001,
    open: true,
    inline: true,
    stats: 'errors-only'
  }
});

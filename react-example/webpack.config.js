/* eslint no-unused-vars: 0 */

const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path');
require('babel-polyfill')

module.exports = {
  entry: './src/index.js',
  devtool: 'inline-source-map',
  output: {
    path: path.resolve(__dirname, './dist/assets'),
    filename: 'main.js',
    sourceMapFilename: '[file].map'
  },
  externals: {
    zendesk_app_framework_sdk: 'ZAFClient'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [{loader: 'babel-loader', options: {presets: ['env', 'react', 'flow']}}],
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Zendesk app',
      template: './src/index.html'
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        drop_debugger: false,
        warnings: false
      }
    })
  ]
}

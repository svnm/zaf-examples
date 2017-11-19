/* eslint no-unused-vars: 0 */

const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin')
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
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: { loader: 'css-loader', options: { minimize: true } }
        })
      },
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
    new ExtractTextPlugin("styles.css"),
    new webpack.optimize.UglifyJsPlugin()
  ]
}

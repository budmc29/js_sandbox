const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/app/index.html',
  filename: 'index.html'
});

const { NamedModulesPlugin } = require('webpack');

module.exports = {
  context: __dirname,
  devtool: 'source-map',
  entry: [
    './app/index.js'
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        include:  __dirname + '/app',
        loader: 'babel-loader?presets[]=es2015'
      }
    ]
  },
  output: {
    filename: 'index_bundle.js',
    path: __dirname + '/dist'
  },
  plugins: [
    HTMLWebpackPluginConfig,
    new NamedModulesPlugin()
  ],
  serve: {},
}

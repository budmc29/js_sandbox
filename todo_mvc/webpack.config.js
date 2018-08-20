const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/app/index.html',
  filename: 'index.html'
});

const { NamedModulesPlugin } = require('webpack');

module.exports = {
  mode: 'development',
  context: __dirname,
  devtool: 'source-map',
  entry: {
    main: './app/app.js',
    style: './app/index.css'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include:  __dirname + '/app',
        loader: 'babel-loader?presets[]=es2015'
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader'
        ]
      }
    ]
  },
  output: {
    filename: 'index_bundle.js',
    path: __dirname + '/dist'
  },
  plugins: [
    HTMLWebpackPluginConfig,
    new NamedModulesPlugin(),
    new MiniCssExtractPlugin()
  ],
  serve: {},
}


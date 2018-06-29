const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development', // or 'production'
  entry: './src/index.jsx',
  devtool: 'eval-source-map',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /\/node_modules\//,
        loader: 'babel-loader'
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    })
  ]
}

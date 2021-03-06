const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './dev/index.html',
  filename: 'index.html',
  inject: 'body'
})

module.exports = {
  entry: './dev/index.jsx',
  output: {
    filename: 'dev-bundle.js',
  },
  module: {
    rules: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: path.resolve(__dirname, 'node_modules'),
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
          },
          {
            loader: "sass-loader",
          }
        ]
      }
    ]
  },
  plugins: [
    HtmlWebpackPluginConfig,
  ]
};
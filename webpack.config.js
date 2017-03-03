var cssnext = require('postcss-cssnext')
var path = require('path')
var webpack = require('webpack')

module.exports = {
  devtool: 'eval',
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    './app/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['babel'],
        exclude: /node_modules/,
        include: path.join(__dirname, 'app')
      },
      {
        test: /\.css$/,
        use: 'style!css?modules&importLoaders=1&localIdentName=[local]_[hash:base64:5]!postcss',
        exclude: /node_modules/,
        include: path.join(__dirname, 'app')
      }
    ]
  },
  resolve: {
    modules: [
      'app',
      'node_modules',
    ],
  },
  resolveLoader: {
    moduleExtensions: ['-loader'],
  },
  postcss: function () {
    return [cssnext]
  },
}

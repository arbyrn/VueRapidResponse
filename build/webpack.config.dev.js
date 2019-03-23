'use strict'
const webpack = require('webpack')
const { VueLoaderPlugin } = require('vue-loader')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

const path = require('path')
function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
  mode: 'development',
  entry: {
    app: './src/main.js'
  },
  devServer:{
    hot: true,
    watchOptions:{
        poll: true
    }
  },
  module: {
    rules: [
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader']
      },
      {
        test: /\.vue$/,
        exclude: /static/,
        use: 'vue-loader'
      },
      {
        test: /\.css$/,
        exclude: /static/,
        use: [
            'vue-style-loader',
            'css-loader'
        ]
      },
      {
        test: /\.js$/,
        exclude: /static/,
        use: 'babel-loader'
      }

    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
        filename: 'index.html',
        template: 'index.html',
        inkect: true
    })
  ]
}

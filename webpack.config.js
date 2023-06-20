'use strict'

const path = require("path");
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: 'development',
  entry: {
    index: path.resolve(__dirname, "src", "index.ts")
  },
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, "dist")
  },
  devServer: {
    static: path.resolve(__dirname, 'dist'),
    port: 8081,
    hot: true
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          {            
            loader: 'style-loader'
          },
          {            
            loader: 'css-loader'
          },
          {            
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: () => [
                  autoprefixer
                ]
              }
            }
          },
          {
            loader: 'sass-loader'
          }
        ]
      }, {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.css'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "index.html")
    })
  ]
};
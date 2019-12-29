'use strict';

const path = require('path');
const webpack = require('webpack');

const pkg = require('./package');

module.exports = {
  entry: './src',
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist',
    filename: `${pkg.name}.js`
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }, {
        test: /\.json$/,
        loader: 'json-loader',
        type: 'javascript/auto',
        exclude: /node_modules/
      }, {
        test: /\.less$/,
        include: /node_modules/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'less-loader',
            options: {
              javascriptEnabled: true,
            },
          },
        ],
      }, {
        test: /\.less$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: '[name]_[local]_[hash:base64:5]',
            },
          },
          {
            loader: 'less-loader',
          },
        ],
      }, {
        test: /.css$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          }
        ],
      },
    ]
  },
  devtool: '#eval-source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"dev"'
      },
      VERSION: `'${pkg.version}'`
    })
  ]
};

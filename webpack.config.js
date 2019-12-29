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
        use: [
          require.resolve('style-loader'),
          {
            loader: require.resolve('css-loader'),
            options: {
              modules: true,
              localIdentName: '[name]_[local]_[hash:base64:5]',
            },
          },
          {
            loader: require.resolve('less-loader')
          },
        ],
      }, {
        test: /.css$/,
        use: [
          require.resolve('style-loader'),
          {
            loader: require.resolve('css-loader'),
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

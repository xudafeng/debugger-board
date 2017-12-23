'use strict'

const fs = require('fs');
const path = require('path')
const webpack = require('webpack')

const pkg = require('./package')

const isProduction = process.env.NODE_ENV === 'production';

class WebpackAfterAllPlugin {
  apply (compiler) {
    compiler.plugin('done', (compilation) => {
      setTimeout(() => {
        fs.writeFileSync(path.join(__dirname, '.ready'), '')
      }, 1000)
    })
  }
}

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
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ],
      },
      {
        test: /\.less$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'less-loader'
        ],
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            'less': [
              'vue-style-loader',
              'css-loader',
              'less-loader'
            ]
          },
        },
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
    ],
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    },
    extensions: ['*', '.js', '.vue', '.json']
  },
  devtool: '#eval-source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"dev"'
      },
      VERSION: `'${pkg.version}'`
    }),
    new WebpackAfterAllPlugin()
  ]
}

if (isProduction) {
  module.exports.devtool = '#source-map'
  module.exports.plugins.push(new webpack.optimize.UglifyJsPlugin({
    sourceMap: false,
    compress: {
      warnings: false
    }
  }))
  module.exports.plugins.push(new webpack.LoaderOptionsPlugin({
    minimize: true
  }))
}

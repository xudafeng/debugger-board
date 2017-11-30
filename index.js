'use strict'

const path = require('path')

const pkg = require('./package')

exports.staticDir = path.join(__dirname, 'dist', `${pkg.name}.js`)

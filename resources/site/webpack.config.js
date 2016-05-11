'use strict';

let path = require('path');
let webpack = require('webpack');

module.exports = [{
  entry: {
    app: './src/app',
    vendor: [
      'jquery',
      'react'
    ]
  },
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'client.js'
  },
  module: {
    loaders: [{
      test: /\.jsx$/,
      loader: 'jsx'
    }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
    modulesDirectories: ['node_modules']
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.js')
  ]
}];

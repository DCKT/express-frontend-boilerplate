'use strict';

const webpack = require('webpack');
const path    = require('path');
const fs      = require('fs');
const pages   = fs.readdirSync('./src/frontend/pages');
const DEV     = process.argv.indexOf('--dev') != -1;
let entries   = {};


const commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.bundle.js');
const uglifyPlugin  = new webpack.optimize.UglifyJsPlugin({
  compress: {
    warnings: false,
  }
});

let plugins = [commonsPlugin];

!DEV ? plugins.push(uglifyPlugin) : null;

pages.forEach(page => {
  if (page != 'misc') {
    entries[page] = `./src/frontend/pages/${page}/index.js`;
  }
});

module.exports = {
  entry: entries,
  output: {
    path: path.join(__dirname, './public/javascripts/'),
    filename: '[name].bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
      },
    ],
  },
  resolve: {
    root: path.resolve('./src/frontend/'),
    extensions: ['', '.js'],
  },
  plugins,
};

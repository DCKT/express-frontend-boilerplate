'use strict';

const webpack = require('webpack');
const path    = require('path');
const fs      = require('fs');
const pages   = fs.readdirSync('./src/frontend/pages');
let entries   = {};


const commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.bundle.js');

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
  plugins: [commonsPlugin]
};

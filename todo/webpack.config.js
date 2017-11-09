var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'src/main/resources/static');
var APP_DIR = path.resolve(__dirname, 'src/main/resources/app');
var BrowserRouter = require('react-router-dom').BrowserRouter
var Route = require('react-router-dom').Route
var Link = require('react-router-dom').Link
var config = {
  entry: APP_DIR + '/index.jsx',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  resolve: {
	  extensions: [ '.js', '.jsx', '.json'],
	  },
  module : {
	  rules : [
      {
          test: /\.jsx?$/,
        include : APP_DIR,
        exclude: /node_modules/,
        use : ["babel-loader"],
      },
    ]
  }
};


module.exports = config;
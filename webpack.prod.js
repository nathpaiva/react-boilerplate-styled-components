'use strict';

const webpack = require('webpack');
const common = require('./webpack.config');

const HtmlPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CleanPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: common.entry,

  output: common.output,

  plugins: [
    new CleanPlugin(['dist'], {
      root: './dist'
    }),

    new webpack.DefinePlugin({
      'proccess.env': {
        'NODE_ENV': '"production"'
      }
    }),

    new HtmlPlugin(common.htmlPluginConfig),
    new webpack.optimize.OccurrenceOrderPlugin()
  ],

  optimization: {
    splitChunks: {
      cacheGroups: {
        vendors: {
          test: ({ resource }) => (/node_modules/.test(resource)),
          name: 'vendor',
          chunks: 'initial',
          maxAsyncRequests: 1,
          maxInitialRequests: 1,
          minSize: 1,
          minChunks: 1
        },
        "react-build": {
          test: ({ resource }) => (
            /node_modules\/(react(-dom)?|fbjs)\//.test(resource) ||
            /node_modules\/preact(-compat)?\//.test(resource)
          ),
          name: 'react-build',
          chunks: 'initial',
          maxAsyncRequests: 1,
          maxInitialRequests: 1,
          minSize: 1,
          minChunks: 2
        }
      }
    },
    minimizer: [
      new UglifyJsPlugin({
        uglifyOptions: {
          compress: {
            warnings: true
          }
        }
      })
    ]
  },

  module: {
    rules: [
      common.jsLoader,
      common.fileLoader,
      common.urlLoader
    ]
  },

  resolve: common.resolve
};

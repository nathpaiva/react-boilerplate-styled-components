'user strict';

const webpack = require('webpack');
const WebpackDevDerver = require('webpack-dev-server');
const config = require('./webpack/webpack.dev');

new WebpackDevDerver(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true,
  stats: {
    colors: true
  }
}).listen(7000, () => {
  console.log('====================================');
  console.log('Server running on :7000');
  console.log('====================================');
});

const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');

module.exports = merge(common, {
  entry: path.resolve(__dirname, 'examples/src/index.tsx'),
  output: {
    path: path.resolve(__dirname, 'examples/dist/'),
    filename: 'index.js',
    publicPath: '/assets/'
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.resolve(__dirname, 'examples/dist/')
  }
});

const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'examples/src/index.tsx'),
  output: {
    path: path.resolve(__dirname, 'examples/dist/'),
    filename: 'index.js',
    publicPath: '/assets/'
  },
  devtool: 'inline-source-map',
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          { loader: 'awesome-typescript-loader' }
        ]
      }
    ]
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'examples/dist/')
  }
};

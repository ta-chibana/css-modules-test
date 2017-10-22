const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin')

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
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader?modules"
        })
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin("./styles.css")
  ],
  devServer: {
    contentBase: path.resolve(__dirname, 'examples/dist/')
  }
};

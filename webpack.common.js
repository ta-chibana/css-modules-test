const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: undefined,
  output: undefined,
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
          use: "css-loader?modules&camelCase=true"
        })
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin("./css/styles.css")
  ]
};

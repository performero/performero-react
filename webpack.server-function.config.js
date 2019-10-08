// Work around for https://github.com/angular/angular-cli/issues/7200

const path = require('path');
const webpack = require('webpack');

module.exports = {
  mode: 'none',
  entry: {
    // This is our Express server for Dynamic universal
    server: './server-function.js'
  },
  target: 'node',
  resolve: { extensions: ['*', '.js', '.jsx'] },
  optimization: {
    minimize: false
  },
  output: {
    // Puts the output at the root of the dist folder
    path: path.join(__dirname, 'dist'),
    library: 'app',
    libraryTarget: 'umd',
    filename: 'server-function.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/,
        loader: "ignore-loader"
      },
      {
        test: /\.html$/,
        exclude: /node_modules/,
        use: {loader: 'html-loader'}
      }
      
    ]
  },
  plugins: [
  ]
};

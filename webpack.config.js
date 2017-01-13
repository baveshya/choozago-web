var webpack = require('webpack');
module.exports = {
  entry: './src/app.js',
  output: {
        path: __dirname + '/build/assets/js',
        filename: "bundle.js"
    },
  devServer: {
    inline: true,
    contentBase: './build',
    port: 8080
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel'
      },
       { test: /\.css$/, 
        loader: "style!css" 
    }
    ]
  }

}


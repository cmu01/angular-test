const webpack = require('webpack');
const path = require('path');
const PATH = {
  app: path.join(__dirname, 'src/index.js'),
  out: path.join(__dirname, 'src/dist')
}

module.exports = {
  entry: {
    app: PATH.app
  },
  output: {
    path: PATH.out,
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          cacheDirectory: true,
          presets: ['es2015']
        }
      },
      {
        test: /\.css$/,
        loaders: ['style', 'css']
      },
      {
        test: /\.html$/,
        loader: 'html-loader',
      },
      {
        test: /\.less$/,
        loaders: ['style', 'css', 'less']
      },
      {
        test: /\.(ico|jpg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)(\?.*)?$/,        
        loader: 'file',
        query: {
          name: '[path][name].[ext]'
        }
      },      
    ]
  },
  resolve: {
    alias: {
      resource: path.resolve('./src/resource'),
      src: path.resolve('./src')
    }
  }
};
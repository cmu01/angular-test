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
        // css-loader是处理css文件，style-loader是把css内嵌到浏览器
        loader:  ['style-loader', 'css-loader']
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
        test: /(\.png|\.jpeg|.\ttf|\.jpg)$/,
        loader: 'url-loader'
      }   
    ]
  },
  resolve: {
    alias: {
      resource: path.resolve('./src/resource'),
      src: path.resolve('./src'),
      css: path.resolve('./src/css'),
      template: path.resolve('./src/template')
    },
    extensions: ['.js', '.jsx']
  }
};
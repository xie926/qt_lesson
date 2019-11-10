const path = require('path');
const VueloaderPlugin = require('vue-loader/lib/plugin');
// const {CleanWebpackPlugin} = require('clean-webpacck-plugin')
const htmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  mode: 'development', // production
  entry: {
    bundle: path.resolve(__dirname, './src/index.js')
  },
  output: {
    path: path.resolve(__dirname, './build'),
    filename: '[name].[hash:6].js'
  },
  resolve: {
    extensions: ['.vue', '.js', '.jsx'],
    alias: {
      '@': path.resolve(__dirname, './src/')
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      }
    ]
  },
  plugins: [
    new VueloaderPlugin(),
    new htmlWebpackPlugin({
      template: path.resolve(__dirname, './index.html')
    })
  ]
}

const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader/dist/index')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

const NODE_ENV = process.env.NODE_ENV

module.exports = {
  entry: path.join(__dirname,'..','src','index.js'),
  module: {
    rules: [
      {
        test: /\.png$|\.jpg$|\.gif$|\.jpeg$/i,
        exclude: /node_modules/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 10240
          }
        }]
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [
          'cache-loader',
          'thread-loader',
          'babel-loader'
        ]
      },
      {
        test: /\.vue$/,
        exclude: /node_modules/,
        use: [
          'cache-loader',
          'thread-loader',
          'vue-loader'
        ]
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          NODE_ENV === 'development' ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              implementation: require('dart-sass')
            }
          }
        ]
      }
    ]
  },
  plugins:[
    new VueLoaderPlugin(),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: NODE_ENV === 'development' ? 'Carl的Vue3脚手架-开发模式' : 'Carl的Vue3脚手架-生产模式',
      template: path.join(__dirname,'..','public','index.html')
    })
  ],
  resolve: {
    alias: {
      "@src": path.join(__dirname,'..','src')
    }
    //extensions: ['*','jpg','png','gif','jpeg']
  },
  output: {
    path: path.join(__dirname,'..','dist'),
    filename: NODE_ENV === 'development' ? '[name].[hash].js' : '[name].[chunkhash].js'
  }
}
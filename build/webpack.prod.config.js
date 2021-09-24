const path = require('path')
const { merge } = require('webpack-merge')
const baseConfig = require('./webpack.base.config')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

module.exports = merge(baseConfig, {
  mode: 'production',
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css'
    }),
    new BundleAnalyzerPlugin()
  ]
})
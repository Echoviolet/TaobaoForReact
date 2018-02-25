console.log('use webpack.dev.prod.config')
var fs = require('fs')
var path = require('path')
var webpack = require('webpack')
// var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    devtool: 'cheap-source-map',
    entry: [
        // 'webpack-hot-middleware/client',
        './index'
    ],
    output:{
        path: __dirname+'/static/scripts/',
        filename: 'bundle.js',
        chunkFilename:'[id],chunk_[hash].js',
        publicPath:'/static/scripts/'
    }

};

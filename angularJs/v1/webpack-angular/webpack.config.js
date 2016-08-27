var webpack = require("webpack")
//var HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    context: __dirname + "/app",
    entry: "./index.js",
    output: {
        path: __dirname + '/app',
        filename: 'bundle.js'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        //new HtmlWebpackPlugin(),
        new webpack.NoErrorsPlugin()
    ]
}
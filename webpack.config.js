var path = require('path');
var webpack = require('webpack');

module.exports = {

    devtool: 'eval-source-map',

    entry: [
        'webpack-dev-server/client?http://localhost:8080',
        'webpack/hot/only-dev-server',
        './src/main.js'
    ],

    output: {
        path: path.join(__dirname, 'public'),
        filename: 'main.js',
        publicPath: '/public/'
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ],

    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loaders: ['react-hot', 'babel'],
                include: path.join(__dirname, 'src')
            }
        ]
    }
}
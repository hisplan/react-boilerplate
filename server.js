var webpack = require('webpack'),
    WebPackDevServer = require('webpack-dev-server'),
    config = require('./webpack.config');

new WebPackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    hot: true,
    historyApiFallback: true,
}).listen(8080, 'localhost', function (err, results) {
    if (err) {
        console.log(err);
    }
    console.log('Listening on localhost:3000');
});

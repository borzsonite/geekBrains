let path = require('path');
let conf = {
    // entry: './src/js/app.js',
    // entry: path.resolve(__dirname, 'src/js/app.js'),
    entry: {
        app: ['./src/js/app.js']
    },
    output: {
        // filename: 'main.js',
        filename: 'js/[name].js',
        path: path.resolve(__dirname, './dist'),
        publicPath: '../'
    },
    devServer: {
        overlay: true
    }
}

module.exports = conf;
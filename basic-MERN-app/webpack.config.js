var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: './client/index.js', //entry point
    output: {
        path: path.join(__dirname, 'client'),
        filename: 'bundle.js'
    },
    module: { //instructions for transpiling
        loaders: [{
            test: /.jsx?$/, //catch all .js + .jsx files
            loader: 'babel-loader',
            exclude: /node_modules/, //do not include files in node_modules folder
            query: {
                presets: ['es2015', 'react'] //transpile all non-pure JS files in our app
            }
        }]
    }
}
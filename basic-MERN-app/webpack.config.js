var path = require('path');
var webpack = required('webpack');

module.exports = {
    entry: './app.js', //entry point
    output: {
        path: __dirname,
        filename: bundle.js
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
var bourbon = require('bourbon').includePaths;
var neat = require('bourbon-neat').includePaths
require('es6-promise').polyfill();
// var refills = require('node-refills').includePaths
// require("font-awesome-webpack");

module.exports = {
    entry: {
        app: ['../src/index.js']
    },
    output: {
        path: '../bin',
        filename: './bundle.[name].js',
    },
    cache: true,
    debug: true,
    devtool: 'source-map',
    module: {
        loaders: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: ['es2015','react']
                }
            },{
                test: /\.handlebars$/,
                loader: "handlebars-loader"
            },{
                test: /\.scss$/,
                loader: 'style!css!resolve-url!sass?includePaths[]=' + bourbon + '&includePaths[]=' + neat
            },{
                test: /\.css$/,
                loader: 'style!css'
            },{ 
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&minetype=application/font-woff" 
            },{ 
                test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" 
            }
        ]
    }
}
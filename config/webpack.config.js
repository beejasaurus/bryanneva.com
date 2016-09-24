var bourbon = require('bourbon').includePaths;
var neat = require('bourbon-neat').includePaths
var refills = require('node-refills').includePaths

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
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: ['es2015']
                }
            },{
                test: /\.handlebars$/,
                loader: "handlebars-loader"
            },{
                test: /\.scss$/,
                loader: 'style!css!resolve-url!sass?includePaths[]=' + bourbon + '&includePaths[]=' + neat + '&includePaths[]=' + refills
            },{
                test: /\.css$/,
                loader: 'style!css'
            }
        ]
    }
}
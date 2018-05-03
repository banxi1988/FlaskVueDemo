const webpack = require("webpack")
const path = require('path')
const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
    mode: "development",
    entry: "./todoapp.ts",
    output:{
        filename:"todoapp.bundle.js",
        path:path.resolve(__dirname, '.')
    },
    resolve:{
        extensions: [".ts",'.js', ".vue"]
    },
    module:{
        rules:[
            {test:/\.vue$/, loader: 'vue-loader'},
            {
                test:/\.ts$/, exclude: /node_modules/,
                loader:"ts-loader",
                options:{
                    appendTsSuffixTo: [/\.vue$/]
                }
            },
            {
                test: /\.css$/,
                use: [ 'vue-style-loader','css-loader' ]
            },
            
        ]
    },
    plugins: [
        new VueLoaderPlugin()
    ]

}


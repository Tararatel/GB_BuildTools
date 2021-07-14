'use strict';

const { resolve } = require("path");
const HTMLWebpackPlugin = require('html-webpack-plugin');
const SRC = resolve(__dirname, 'node_modules');


module.exports = {
    entry: resolve(__dirname, 'public/js/', 'main.js'),
    output: {
        path: resolve(__dirname, 'dist'),
        filename: 'main.js'
    },

    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ],
             },
             {
                test: /\.(gif|png|jpe?g|svg)$/i,
                use: [
                  'file-loader?name=../dist/images/[name].[ext]',
                  {
                     loader: 'image-webpack-loader'                                          
                  }
                ]
             },
             {
                test: /\.mp3$/,
                use: [
                    {
                     loader: 'file-loader?name=../dist/audio/[name].[ext]'
                    }
                ]                
            },
            {
               test: /\.(webm|mp4)$/,
               use: [
                   {
                    loader: 'file-loader?name=../dist/video/[name].[ext]'
                   }
               ]                
           }
        ]
    },
    plugins: [
        new HTMLWebpackPlugin({ template: resolve(__dirname, 'public', 'index.html') }),
    ]   
};
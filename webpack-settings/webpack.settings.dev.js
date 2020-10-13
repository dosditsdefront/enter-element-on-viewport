const path = require('path')
const loaders = require('./loaders')
const plugins = require('./plugins')

const configuration = {
    devServer: {
        port: 3001,
        publicPath: '/',
        watchContentBase: true,
    },
    mode: process.env.NODE_ENV,
    module: {
        rules: [
            loaders.IMAGESLoader,
            loaders.CSSLoader,
            loaders.JSLoader,
            loaders.ESLintLoader,
        ],
    },
    resolve: {
        alias: {
            js: path.resolve(__dirname, '../../'),
            css: path.resolve(__dirname, '../../'),
        },
    },
    plugins: [
        plugins.StyleLintPlugin,
        plugins.MiniCssExtractPlugin,
    ],
}

module.exports = configuration
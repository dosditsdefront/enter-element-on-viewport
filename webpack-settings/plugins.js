const path = require('path')
const ExtractPlugin = require('mini-css-extract-plugin')
const Lint = require('stylelint-webpack-plugin')

const MiniCssExtractPlugin = new ExtractPlugin({
    filename: 'css/[name].css',
    chunkFilename: 'css/[id].css',
})

const StyleLintPlugin = new Lint({
    configFile: path.resolve(__dirname, 'stylelint.config.js'),
    context: path.resolve(__dirname, '../../src/css'),
    files: '**/*.css',
    failOnError: false,
    quiet: false,
})

module.exports = {
    MiniCssExtractPlugin,
    StyleLintPlugin,
}
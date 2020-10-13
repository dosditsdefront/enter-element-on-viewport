const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const JSLoader = {
    test: /\.js$/,
    use: {
        loader: 'babel-loader',
        options: {
            presets: [ [ 'airbnb', {
                targets: {
                    chrome: 50,
                    ie: 10,
                    firefox: 45,
                },
            } ] ],
        },
    },
}

const ESLintLoader = {
    test: /\.js$/,
    enforce: 'pre',
    use: {
        loader: 'eslint-loader',
        options: {
            // eslint-disable-next-line prefer-template, no-path-concat
            configFile: __dirname + '/.eslintrc',
        },
    },
}

const CSSLoader = {
    test: /\.css$/,
    use: [
        {
            loader: MiniCssExtractPlugin.loader,
            options: {
                // eslint-disable-next-line prefer-template, no-path-concat
                publicPath: __dirname + './dist/css/',
            },
        },
        {
            loader: 'css-loader',
            options: {
                importLoaders: 1,
                sourceMap: true,
            },
        },
        {
            loader: 'postcss-loader',
            options: {
                postcssOptions: {
                    path: `${__dirname}/postcss.config.js`,
                },
            },
        },
    ],
}

const IMAGESLoader = {
    test: /\.(png|ttf|woff|eot|svg|jpe?g|gif)$/,
    use: [
        {
            loader: 'file-loader',
            options: {
                outputPath: 'vendor-images',
                publicPath: '../vendor-images',
                name: '[name].[ext]',
            },
        },
    ],
}

module.exports = {
    JSLoader,
    ESLintLoader,
    IMAGESLoader,
    CSSLoader,
}

const cssComment = require('postcss-comment')

const settings = {
    parser: cssComment,
    plugins: {
        'postcss-easy-import': {},
        'postcss-import': {
            extensions: '.css',
            prefix: false,
        },
        'postcss-url': {},
        'postcss-simple-extend': {},
        'postcss-mixins': {},
        'postcss-advanced-variables': {},
        'postcss-color-function': {},
        'postcss-bem': {},
        'postcss-nested': {},
        'postcss-utilities': {},
        'postcss-discard-empty': {},
        'postcss-flexbugs-fixes': {},
        'postcss-calc': {
            mediaQueries: true,
        },
        'postcss-preset-env': {
            browsers: 'last 2 versions',
        },
        cssnano: {},
    },
}

module.exports = settings
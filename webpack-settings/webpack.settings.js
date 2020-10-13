const devSettings = require('./webpack.settings.dev')
const prod = require('./webpack.settings.prod')

const environment = (process.env.NODE_ENV || 'development').trim()

if (environment === 'development') {
    module.exports = devSettings
}

module.exports = prod
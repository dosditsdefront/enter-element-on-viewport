const webpack = require('webpack-settings/webpack.settings.js')
const path = require('path')

webpack.entry = {
	// name and input entry of your file
	// this first js is a alias js/src/js/input-file-name.js
	'name-of-your-output-file-name': 'js/src/js/input-file-name.js',
}

webpack.output = {
	filename: 'js/[name].js',
	chunkFilename: 'js/[name].js',
	path: path.resolve(__dirname, 'path-to-your-ouput-folder'),
}

module.exports = webpack
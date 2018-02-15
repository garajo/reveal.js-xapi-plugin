const path = require('path')

const config = {
  entry: ['whatwg-fetch', './index.js'],
  output: {
    path: path.resolve(__dirname, 'revealJS/plugin/xapi/'),
    filename: 'xapi.js',
    library: 'RevealXAPI',
    libraryTarget: 'var',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        options: {
					presets: [
						'es2017'
					],
					plugins: [
						['transform-react-jsx', { pragma: 'h' }]
					]
				}
      },
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      }
    ],
  },
  devtool: 'source-map'
}

module.exports = config

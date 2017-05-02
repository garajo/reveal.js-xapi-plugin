const path = require('path')

const config = {
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'reveal.js/plugin/xapi/'),
    filename: 'xapi.js',
    library: 'RevealXAPI',
    libraryTarget: 'var',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
      }
    ],
  }
}

module.exports = config

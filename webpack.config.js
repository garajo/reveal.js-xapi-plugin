const path = require('path')

const config = {
  entry: ['./index.js'],
  output: {
    path: path.resolve(__dirname, 'dist/plugin/xapi/'),
    filename: 'xapi.js',
    library: 'RevealXAPI',
    libraryTarget: 'var'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        options: {
          presets: ['es2017'],
        }
      }, {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  devtool: 'source-map',
  resolve: {
    modules: [
      path.resolve('./'), path.resolve('./node_modules')
    ],
  }
}

module.exports = config

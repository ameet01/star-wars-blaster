const path = require('path');

module.exports = {
  context: __dirname,
  entry: './lib/game/game.js',
  output: {
    path: path.resolve(__dirname, 'lib'),
    filename: './bundle.js'
  },
  resolve: {
    extensions: ['.js', '.jsx', '*']
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      }
    ]
  }
};

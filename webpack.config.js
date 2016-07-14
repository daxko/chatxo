module.exports = {
  entry: './src/index.jsx',
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loader: 'babel'
    }]
  },
  output: {
    filename: 'js/global.js'
  }
};
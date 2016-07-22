module.exports = {
  entry: [
    './src/app.jsx',
  ],
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
    filename: 'public/js/global.js'
  }
};
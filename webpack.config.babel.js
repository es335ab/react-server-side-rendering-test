import path from 'path'

module.exports = {
  entry : './src/javascripts/client/app.jsx',

  output : {
    filename: 'app.js',
    path: path.join('public/javascripts/')
  },

  resolve: {
    extensions: ['.js', '.jsx'],
    modules: [
      path.resolve('./src/javascripts/'),
      path.resolve('./node_modules')
    ]
  },

  module : {
    rules : [
      {
        test: /\.jsx?$/,
        loaders: ['babel-loader'],
        exclude: /node_modules/
      }
    ]
  }
};

const path = require('path')

const webpack = require('webpack')

const devFlagPlugin = new webpack.DefinePlugin({
  __DEV__: JSON.stringify(JSON.parse(process.env.DEBUG || 'false')),
})

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'webpack-hot-middleware/client',
    './app/index.jsx',
  ],
  alias: {
    'react/lib/ReactMount': 'react-dom/lib/ReactMount',
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/',
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    devFlagPlugin,
  ],
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loaders: ['react-hot-loader/webpack', 'babel'],
      include: path.join(__dirname, 'app'),
    }],
  },
}

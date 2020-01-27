const path = require('path');
const merge = require('webpack-merge');
const common = require('./node_modules/adyenthreeds2-js-utils/webpack.config.js');

module.exports = merge(common, {
  entry: {
    app: './node_modules/adyenthreeds2-js-utils/src/index.js',
  },
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ],
  }
});


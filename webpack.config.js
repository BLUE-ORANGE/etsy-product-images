const path = require('path');

const APP_DIR = path.resolve(__dirname, 'client/src');
const BUILD_DIR = path.resolve(__dirname, 'public');

const config = {
  entry: `${APP_DIR}/index.jsx`,
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.jsx?/,
        include: APP_DIR,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015'],
        },
      },
    ],
  },
};

module.exports = config;

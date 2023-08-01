const {resolve} = require('path');
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin');
module.exports = {
  resolve: {
    fallback: {
      "fs": false,
    },
  },
  entry: {
    emulator: './src/emulator.js',
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  output: {
    path: resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    library: 'bundle',
  },
  plugins: [
      new NodePolyfillPlugin(),
  ],
  mode: 'production',
  // mode: 'development',
}
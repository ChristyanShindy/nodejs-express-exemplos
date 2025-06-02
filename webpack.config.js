const patch = require('path')
const NodemonPlugin = require('nodemon-webpack-plugin')
const nodeExternals = require('webpack-node-externals')

module.exports = {
  entry: './src/index.js',
  target: 'node',
  mode: 'development',
  output: {
    filename: 'index.js',
    path: patch.resolve(__dirname, 'dist')
  },
  resolve: {
    extensions: ['.js']
  },
  plugins: [
    new NodemonPlugin(),
  ],
  externals: [
    nodeExternals()
  ]
}
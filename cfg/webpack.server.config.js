const path = require('path');
const nodeExturnals = require('webpack-node-externals');

const NODE_ENV = process.env.NODE_ENV;

module.exports = {
  target: 'node',
  mode: NODE_ENV || 'development',
  entry: path.resolve(__dirname, '../src/server-index.js'),
  output: {
    path: path.resolve(__dirname, '../dist/server'),
    filename: 'server.js'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json']
  },
  externals: [nodeExturnals()],
  module: {
    rules: [
      {
        test: /\.[tj]sx?$/,
        use: ['ts-loader']
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: 'css-loader',
            options: {
              modules: {
                mode: 'local',
                localIdentName: '[name]__[local]--[hash:base64:5]'
              },
              onlyLocals: true
            }
          },
          'less-loader'
        ]
      }
    ]
  },
  optimization: {
    minimize: false
  }
};

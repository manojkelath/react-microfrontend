


const { ModuleFederationPlugin } = require('webpack').container;
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = env => {
  return {
    entry: './src/index',
    mode: 'development',
    devServer: {
      port: 3000,
    },
    output: {
      publicPath: 'auto',
      clean: true,
    },
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          loader: 'babel-loader',
          exclude: /node_modules/,
          options: {
            presets: ['@babel/preset-react'],
          },
        },
      ],
    },
    plugins: [
      new ModuleFederationPlugin({
        name: 'host',
        filename: 'remoteEntry.js',
        remotes: {
          squad1: 'squad1@http://localhost:3001/remoteEntry.js',
          squad2: 'squad2@http://localhost:3004/remoteEntry.js',
          libs: 'libs@http://localhost:3002/remoteEntry.js'
        },
      }),
      new HtmlWebpackPlugin({
        template: './public/index.html',
        chunks: ['main'],
      })
    ],
  }

};


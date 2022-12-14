const { ModuleFederationPlugin } = require('webpack').container;
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = env => {
  return {
    entry: './src/index',
    mode: 'development',
    devServer: {
      port: 3004,
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
        name: 'squad2',
        filename: 'remoteEntry.js',
        exposes: {
          './Squad2Component': './src/Squad2Component',
          './Gauge': './src/Gauge'
        },
        remotes: {
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

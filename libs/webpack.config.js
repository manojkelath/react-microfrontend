const { ModuleFederationPlugin } = require('webpack').container;

module.exports = {
  entry: './src/index',
  mode: 'development',
  devServer: {
    port: 3002,
  },
  output: {
    publicPath: 'auto',
    clean: true,
  },
  module: {},
  plugins: [
    new ModuleFederationPlugin({
      name: 'libs',
      filename: 'remoteEntry.js',
      exposes: {
        './react': 'react',
        './react-dom/client': 'react-dom/client',
        './react-dom': 'react-dom',
        './@chakra-ui/react': '@chakra-ui/react',
        './@chakra-ui/icons': '@chakra-ui/icons',
        './react-router-dom': 'react-router-dom',
      },
    }),
  ],
};

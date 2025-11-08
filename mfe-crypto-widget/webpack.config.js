const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const dotenv = require('dotenv');
const { printHeaders } = require('../scripts/mfe.util');

dotenv.config({
  path: path.resolve(__dirname, `./environments/.${process.env.ENVIRONMENT_APP}.env`)
});

printHeaders();

const isProduction = process.env.WEBPACK_MODE === 'production';
const PUBLIC_PATH = process.env.APP_PUBLIC_PATH;

module.exports = {
  entry: './src/index.js',
  mode: process.env.WEBPACK_MODE,
  devServer: {
    port: process.env.WEBPACK_DEV_PORT,
    hot: true,
    historyApiFallback: true,
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: PUBLIC_PATH,
    filename: isProduction ? '[name].[contenthash:8].js' : '[name].js',
    chunkFilename: isProduction ? '[name].[contenthash:8].chunk.js' : '[name].chunk.js',
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx|js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react',
              '@babel/preset-typescript',
            ],
          },
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  plugins: [
    new webpack.container.ModuleFederationPlugin({
      name: 'mfeCryptoWidget',
      filename: 'remoteEntry.js',
      exposes: {
        './CryptoWidget': './src/presentation/CryptoWidget',
      },
      shared: {
        react: { singleton: true, requiredVersion: '^19.0.0', },
        'react-dom': { singleton: true, requiredVersion: '^19.0.0', },
      },
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
};

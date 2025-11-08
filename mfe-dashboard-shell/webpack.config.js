const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const dotenv = require('dotenv');
const { getRemotesEntryUrl, printHeaders } = require('../scripts/mfe.util');

dotenv.config({
  path: path.resolve(__dirname, `./environments/.${process.env.ENVIRONMENT_APP}.env`)
});

printHeaders();

const isProduction = process.env.WEBPACK_MODE === 'production';
const PUBLIC_PATH = process.env.APP_PUBLIC_PATH;
const remotes = getRemotesEntryUrl({
  env: process.env.ENVIRONMENT_APP,
});

console.log('Remotes:', remotes);
console.log('PUBLIC_PATH:', PUBLIC_PATH);

module.exports = {
  entry: './src/index.js',
  mode: process.env.WEBPACK_MODE,
  devServer: { port: process.env.WEBPACK_DEV_PORT, hot: true, historyApiFallback: true, },
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
            presets: [ '@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript', ],
          },
        },
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: { modules: false, sourceMap: true, importLoaders: 1, },
          },
        ],
      },
    ],
  },
  resolve: { extensions: ['.ts', '.tsx', '.js', '.jsx'], },
  plugins: [
    new webpack.container.ModuleFederationPlugin({
      name: 'dashboardShell',
      filename: 'remoteEntry.js',
      remotes,
      shared: {
        react: { singleton: true, requiredVersion: '^19.0.0', },
        'react-dom': { singleton: true, requiredVersion: '^19.0.0', }
      },
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
      minify: isProduction ? {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true,
      } : false,
    }),
  ],
};
const path = require('path')
const { WebpackManifestPlugin } = require('webpack-manifest-plugin')
const BabelMinifyPlugin = require('babel-minify-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const isProduction = process.argv[process.argv.indexOf('--mode') + 1] === 'production';

const filename = (ext) => isProduction ? `[name].[contenthash].${ext}` : `[name].${ext}`

const config = {
  context: path.resolve(__dirname, 'src'),
  entry: ['./js/index.js', './scss/main.scss'],
  output: {
    filename: `js/${filename('js')}`,
    path: path.resolve(__dirname, 'public'),
    publicPath: "",
    clean: true
  },
  devServer: {
    port: 3000
  },
  plugins: [
    new WebpackManifestPlugin(),
    new BabelMinifyPlugin({}, {
      comments: false
    }),
    new MiniCssExtractPlugin({
      filename: `css/${filename('css')}`
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader'
      },
      {
        test: /\.(css|scss)$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true
            }
          },
          'postcss-loader',
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      }
    ]
  }
}


if (isProduction) {
  // Minify
} else {
  // Logging?
}

module.exports = config;
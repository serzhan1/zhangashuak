const path = require('path')
const { WebpackManifestPlugin } = require('webpack-manifest-plugin')
const BabelMinifyPlugin = require('babel-minify-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const isProduction = process.argv[process.argv.indexOf('--mode') + 1] === 'production';

const filename = (ext) => isProduction ? `[name].[contenthash].${ext}` : `[name].${ext}`

const config = {
  context: path.resolve(__dirname, 'src'),
  entry: {
    main:['@babel/polyfill', './js/index.js', './scss/main.scss'],
    jssor: './js/jssor.slider-27.5.0.min.js',
    cbpFWtabs: './js/cbpFWtabs',
  },
  output: {
    filename: `js/${filename('js')}`,
    path: path.resolve(__dirname, 'public'),
    publicPath: "",
    clean: true 
  },

  plugins: [
    new WebpackManifestPlugin(),
    new BabelMinifyPlugin({}, {
      comments: false
    }),

    new MiniCssExtractPlugin({
      filename: `css/${filename('css')}`
    }),
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
          MiniCssExtractPlugin.loader,
          {
            loader:'css-loader',
            options: {
              url:false
            }
          },
          'postcss-loader',
          'sass-loader'
        ]
      },

      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name].[ext]'
            }
          },
          {
            loader: 'image-webpack-loader',
            options: {
              mozjpeg: {
                progressive: true,
                quality: 65
              },
              // optipng.enabled: false will disable optipng
              optipng: {
                enabled: false,
              },
              pngquant: {
                quality: [0.65, 0.90],
                speed: 4
              },
            }
          },
        ],
      },

      {
        test: /\.(ico|pdf)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: './assets',
              name: '[name].[ext]'
            }
          }
        ]
      },
    ]
  }

}

if (isProduction) {
  config.module.rules.push()
} else {
  config.devtool = 'source-map';
}

module.exports = config;
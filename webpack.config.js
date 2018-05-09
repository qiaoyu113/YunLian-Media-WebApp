const path = require('path')
const resolve = require('path').resolve
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const url = require('url')
const publicPath = '/'
const CompressionWebpackPlugin = require('compression-webpack-plugin')
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = (options = {}) => ({
  entry: {
    vendor: './src/vendor',
    index: './src/main.js'
  },
  output: {
    path: resolve(__dirname, 'dist'),
    filename: options.dev ? '[name].js' : '[name].js?[chunkhash]',
    chunkFilename: '[id].js?[chunkhash]',
    publicPath: options.dev ? '/assets/' : publicPath
  },
  externals: {
// "http://crm.shequnyi.cn/static/js/swiper/js/swiper.min.js": "Swiper",
      "swiper/dist/js/swiper.min": "Swiper",
      // 'vue-video-player':"videoPlayer"
      // "http://apps.bdimg.com/libs/jquery/1.11.3/jquery.min.js":"$"
  },
  module: {
    rules: [{
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
            extractCSS: true
        }
    },
      {
        test: /\.js$/,
        use: ['babel-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.less$/,
        use: ExtractTextPlugin.extract({
            fallback: "style-loader",
            use: "less-loader"
        })
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
            fallback: "style-loader",
            use: "css-loader"
        })
      },
      {
        test: /\.(png|jpg|jpeg|gif|eot|ttf|woff|woff2|svg|svgz)(\?.+)?$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 10000
          }
        }]
      }
    ],
    /*loaders: [
        {
            test: /\.css$/,
            loader: ExtractTextPlugin.extract('style-loader', 'css-loader'),
        },
        {
            test: /\.less$/,
            loader: ExtractTextPlugin.extract('style-loader', 'css-loader!less-loader'),
        },
    ]*/
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks:2,
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new webpack.ProvidePlugin({
        // jQuery: "jquery",
        // $: "jquery",
        videoPlayer:'vue-video-player'
    }),
    new ExtractTextPlugin("[name].[chunkhash].css"),
    new CompressionWebpackPlugin({
        asset: '[path].gz?[query]',
        algorithm: 'gzip',
        threshold: 10240,
        minRatio: 0.8
    })
  ],
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.min.js',
      '~': resolve(__dirname, 'src')
    }
  },
  devServer: {
    host: 'localhost',
    port: 8090,
    disableHostCheck: true,
    proxy: {
        /*'/api/': {
          target: 'http://127.0.0.1:8090/mock',
          changeOrigin: true,
          pathRewrite: {
            '^/api': ''
          },
          Method:'get'
        }
        /*'/api/': {
          target: 'http://127.0.0.1:8080',
          changeOrigin: true,
          pathRewrite: {
            '^/api': ''
          }
        }*/
    },
    historyApiFallback: {
      index: url.parse(options.dev ? '/assets/' : publicPath).pathname
    }
  },
  devtool: options.dev ? '#eval-source-map' : ''
})

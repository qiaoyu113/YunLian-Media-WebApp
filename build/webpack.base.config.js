const path = require('path')
// const projectRoot = path.resolve(__dirname, '../')
const vueConfig = require('./vue-loader.config')
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  devtool: '#source-map',
  entry: {
    app: './src/client-entry.js',
    vendor: ['vue', 'vue-router', 'vuex', 'vuex-router-sync', 'axios','vue-lazyload']
  },
  resolve: {
    modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    extensions: ['.js', '.vue'],
    alias: {
      'src': path.resolve(__dirname, '../src'),
      'assets': path.resolve(__dirname, '../src/assets'),
      'components': path.resolve(__dirname, '../src/components')
    }
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/dist/',
    filename: 'client-bundle.[chunkhash].js'
  },
  externals: {
    "http://crm.shequnyi.cn/static/js/swiper/js/swiper.min.js": "Swiper",
    "CKEDITOR": "window.CKEDITOR"
    // "http://apps.bdimg.com/libs/jquery/1.11.3/jquery.min.js":"$"
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        // loader: 'eslint-loader',
        exclude: /node_modules/
      },
      {
        enforce: 'pre',
        test: /\.vue$/,
        // loader: 'eslint-loader',
        exclude: /node_modules/
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: vueConfig
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
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
              fallback: "vue-style-loader",
              use: "css-loader"
          })
      },
      {
        test: /\.(png|jpg|jpeg|gif|eot|ttf|woff|woff2|svg|svgz)(\?.+)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000
        }
      }
    ],
    loaders: [
        {
            test: /\.css$/,
            loader:  ExtractTextPlugin.extract("vue-style-loader!css-loader")
        },
        {
            test:  /\.scss$/,
            loader:  ExtractTextPlugin.extract("style-loader!css-loader!scss-loader")
        },
        {
            test:  /\.less$/,
            loader:  ExtractTextPlugin.extract("style-loader!css-loader!less-loader")
        },
    ]
  },
  plugins: [
      new ExtractTextPlugin("[name].css"),
  ],
  devtool: '#source-map'
}

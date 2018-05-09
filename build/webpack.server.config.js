const webpack = require('webpack')
const merge = require('webpack-merge')
const base = require('./webpack.base.config')
const VueSSRPlugin = require('vue-ssr-webpack-plugin')
const swiper = {"http://crm.shequnyi.cn/static/js/swiper/js/swiper.min.js": "Swiper"}
const depdependencies = Object.keys(require('../package.json')).depdependencies
module.exports = merge(base, {
  target: 'node',
  entry: './src/server-entry.js',
  output: {
    filename: 'server-bundle.js',
    libraryTarget: 'commonjs2'
  },
  resolve: {
    alias: {
      'create-api': './create-api-server.js',
      'vue$': 'vue/dist/vue.min.js'
    }
  },
  externals: Object.assign(swiper, depdependencies),
  plugins: [
    new webpack.ProvidePlugin({
        jQuery: "jquery",
        $: "jquery"
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
      'process.env.VUE_ENV': '"server"'
    }),
    new VueSSRPlugin()
  ]
})

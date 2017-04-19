var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = function(env) {
  return {
    entry: {},
    output: {
      filename: '[name].js'
    },
    module: {
      loaders: [
        {
          test: /\.(png|jpg|jpeg|gif|woff|svg)$/,
          loader: 'url'
        },
        {
          test: /\.vue$/,
          loader: 'vue'
        },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel'
        },
        {
          test: /\.(css|scss)$/,
          loader: ExtractTextPlugin.extract('style',
                    'css?modules,camelCase=dashes,localIdentName=' + (
                      env === 'production' ?
                      '[hash:base64:5]' :
                      '[folder]--[local]--[hash:base64:5]'
                    )
                  )
        }
      ]
    },
    resolve: {
      extensions: ['', '.js', '.vue'], //后缀名自动补全
      alias: {
        assets: path.join(__dirname, 'src/assets'),
        vue: 'vue/dist/vue.js' //webpack打包时，需要设置别名
      }
    },
    plugins: [
      new ExtractTextPlugin('[name].css', {
        disable: env === 'production' ? false : true
      })
    ]
  }
}

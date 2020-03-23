const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    index: './src/index.js'
  },
  resolveLoader: { // 配置这个loader可以让你先在node_modules下去找，如果没有就去./loaders文件夹下去找
    modules: ['node_modules', './loaders']
  },
  module: {
    rules: [{
      test: /\.js/,
      use: [ // 这里使用自己编写的loader
        {
          loader: 'replaceLoader'
        },
        {
          loader: 'replaceLoaderAsync',
          options: {
            name: 'liujiana1'
          }
        }
      ]
    }]
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  }
}
const loaderUtils = require('loader-utils') // 使用这个插件去帮忙格式化utils的内容
module.exports = function(source) {
  const options = loaderUtils.getOptions(this)
  const callback = this.async() // 这里使用了异步方法去调用
  setTimeout(() => {
    const result = source.replace('janna', options.name)
    callback(null, result)
  }, 1000)
}
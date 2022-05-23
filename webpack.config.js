const ScanVueAuth = require("./ScanVueAuth");
module.exports = {
// 加载插件
    plugins: [
        new ScanVueAuth() // 加载自定义插件MyPlugin用来将打包文件下js文件里面注释去除
    ]
}
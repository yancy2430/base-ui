class ScanVueAuth {
    apply(compiler) {
        console.log(compiler)
        // 监听webpack 打包时候的钩子,选择在编译的时候
        compiler.hooks.compilation.tap('ScanVueAuth', (compilation, callback) => {

            compilation.plugin('html-webpack-plugin-before-html-processing', (htmlPluginData) => {});
        });
    }
}
module.exports = ScanVueAuth;
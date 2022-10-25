const path = require('path')

module.exports = {
    lintOnSave:false,
    chainWebpack(config) {
        config.resolve.symlinks(false)
        config.resolve.alias.set( 'vue', path.resolve('./node_modules/vue'))
    },
    css: {
        loaderOptions: {
            less: {
                modifyVars: {
                    // less vars，customize ant design theme

                    // 'primary-color': '#F5222D',
                    // 'link-color': '#F5222D',
                    'border-radius-base': '2px'
                },
                // DO NOT REMOVE THIS LINE
                javascriptEnabled: true
            }
        }
    },
    devServer: {
        // development server port 8000
        port: 8000,
        allowedHosts: [
            '*'   // .是二级域名的通配符
        ],
        // If you want to turn on the proxy, please remove the mockjs /src/main.jsL11
        proxy: {
            "/gateway/": {
                target: "http://localhost:10000",
                ws: false,
                changeOrigin: true,
                pathRewrite: {"^/gateway": "/"}
            },
            "/upload/": {
                target: "http://localhost:10000",
            }
        }
    },
    pluginOptions: {
        electronBuilder: {
            nodeIntegration: true
        }
    }
}

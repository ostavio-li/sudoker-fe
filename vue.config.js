const path = require('path')
const CompressionPlugin = require('compression-webpack-plugin')

// Config
const conf = {

    publicPath: '/',

    // 保存时 lint
    lintOnSave: false,

    // 生产环境下，console.log 显示打印位置
    productionSourceMap: false,

    // 开发服务器配置
    devServer: {
        port: 80,
        proxy: {
            '/api': {
                target: 'http://localhost:8050',
                secure: false
            }
        }
    },

    configureWebpack: {
        externals: {
            vue: 'Vue',
            echarts: 'echarts'
        }
    },

    chainWebpack: (config) => {
        if (process.env.NODE_ENV === 'production') {
            config.plugin('compressionPlugin')
                .use(new CompressionPlugin({
                    // filename: '[path][base].gz[query]',
                    algorithm: 'gzip',
                    test: /\.js$|\.html$|\.css/, // 匹配文件名
                    threshold: 10240, // 超过 10k 则压缩
                    minRatio: 0.8,
                    deleteOriginalAssets: true
                }))
        }
    }

}

module.exports = conf
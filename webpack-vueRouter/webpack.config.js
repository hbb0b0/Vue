/* 引入操作路径模块和webpack */
var path = require('path');
var webpack = require('webpack');

module.exports = {
    /* 输入文件 */
    entry: './src/main.js',
    output: {
        /* build 输出目录*/
        path: path.resolve(__dirname, './dist'),
        /* 静态目录，可以直接从这里取文件 */
        publicPath: '/dist/',
        /* 输出文件名名称 */
        filename: 'build.js'
    },
    module: {
        rules: [
            /* vue 解释器 */
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            /* babel 解释器  */
            {
                test: /\.js$/,
                loader: 'babel-loader',
                /* 排除模块安装目录的文件 */
                exclude: /node_modules/
            }
        ]
    }
}
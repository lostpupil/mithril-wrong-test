var path = require('path');
var webpack = require('webpack');

module.exports = {
    context: path.resolve(__dirname, 'src'),
    entry: {
        a: ["babel-polyfill",'./a.js'],
        b: ["babel-polyfill",'./b.js'],
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'public/dist')
    },
    module: {
        loaders: [{
            test: /\.s?css$/,
            use: ['style-loader', 'css-loader', 'sass-loader']
        }, {
            test: /\.jsx?$/, // 匹配'js' or 'jsx' 后缀的文件类型
            exclude: /(node_modules|bower_components)/, // 排除某些文件
            loader: 'babel-loader', // 使用'babel-loader'也是一样的
            query: { // 参数
                presets: ['es2015']
            }
        }]
    },
    plugins: [
        new webpack.LoaderOptionsPlugin({
            minimize: true,
            debug: false
        }),
    ]
};
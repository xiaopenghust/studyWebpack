/**
 * Created by 584003 on 2017/3/15.
 */
 var htmlWebpackPlugin = require('html-webpack-plugin');

module.exports={
    context: '.',
    entry:{
        "main":'./src/script/main.js',
        "a":'./src/script/a.js'
    },
    output:{
        path:'./dist',
        filename:'js/[name]-[chunkhash].js'
    },
    plugins: [
        new htmlWebpackPlugin({
            filename: './index.html',
            template: 'index.html',
            inject:'head',
            title:'this is a title',
            date:new Date()
        })
    ]

}
/**
 * Created by 584003 on 2017/3/15.
 */
 var htmlWebpackPlugin = require('html-webpack-plugin');

module.exports={
    entry:{
        'main':'./src/script/main.js',
        'a':'./src/script/a.js',
        'b':'./src/script/b.js',
        'c':'./src/script/c.js'
    },
    output:{
        path:'./dist',
        filename:'js/[name]-[chunkhash].js',
        publicPath:'http://www.sharp.com'
    },
    plugins: [
        new htmlWebpackPlugin({
            filename: 'a.html',
            template: 'index.html',
            title:'this is a title',    //一个title 属性
            inject:'body',   //注入head/body/ture/false true为body false为不注入
            date:new Date(),
            chunks:['main','a']
        }),
        new htmlWebpackPlugin({
            filename: 'b.html',
            template: 'index.html',
            title:'this is b title',    //一个title 属性
            inject:'body',   //注入head/body/ture/false true为body false为不注入
            date:new Date(),
            chunks:['b','c']
        })
    ]

}
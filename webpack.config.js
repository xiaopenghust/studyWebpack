/**
 * Created by 584003 on 2017/3/15.
 */
 var htmlWebpackPlugin = require('html-webpack-plugin');

module.exports={
    entry:'./src/app.js',
    output:{
        path:'./dist',
        filename:'js/[name]-[chunkhash].js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    { loader: 'style-loader'},
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true
                        }
                    }
                ]
            },
            {
                test: /\.js$/,
                use:[
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ["latest"]
                        }
                    },
                ],
                exclude:'./node_modules'
            }
        ]
    },
    plugins: [
        new htmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html',
            title:'this is a title',    //一个title 属性
            inject:'body'
        })
    ]

}
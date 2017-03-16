/**
 * Created by 584003 on 2017/3/15.
 */
var htmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

module.exports={
    context:__dirname,
    entry:'./src/app.js',
    output:{
        path:'./dist',
        filename:'js/[name]-[hash:5].js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader:'babel-loader',
                include:path.resolve(__dirname,'src'),
                exclude:path.resolve(__dirname,'node_modules'),
                query:{
                    presets:['latest']
                }
            },
            {
                test: /\.css$/,
                loader:'style-loader!css-loader?importLoaders=1!postcss-loader'
            },
            {
                test:/\.scss$/,
                loader:'style-loader!css-loader?importLoaders=1!postcss-loader!sass-loader'
            },
            {
                test: /\.html/,
                loader:'html-loader'
            },
            {
                test: /\.(gif|png|jpe?g|svg)$/i,
                loaders:[
                    'file-loader?name=assets/[name]-[hash:5].[ext]'
                ]

            }
        ]
    },
    postcss:[
      require('autoprefixer')({
          broswers:['last 5 versions']
      })
    ],
    plugins: [
        new htmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html',
            title:'this is a title',    //一个title 属性
            inject:'body'
        })
    ]

}
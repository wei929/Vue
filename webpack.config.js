const Path = require("path");
const ExtractTextWebpackPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const Webpack = require("webpack");

module.exports = {
    entry: ["./src/index.js"],
    output:{
        path:Path.resolve(__dirname,'dist'),//出口路径  --  所有文件的
        filename:"static/js/[name].js",//出口文件
        publicPath:"./",//给所有的资源加上前缀
    },
    //模块: 解析css,图片的文件
    module:{
        rules:[{
            test:/\.(png|gif|jpg|jpeg|eot|svg|ttf|woff|woff2)$/,//匹配文件名
            use:[{
                //使用url-loader解析器
                loader:"url-loader",
                options:{
                    limit: 8192,
                    outputPath:"static/assets",//出口路径
                }
            }]
        },{
            //css样式文件
            test:/\.css$/,
            use:ExtractTextWebpackPlugin.extract({
                use:"css-loader",//指定加载器
                fallback:"style-loader",//编译后，用什么loader来提取文件
                publicPath:"../../",//在资源前，加上前缀
            })
        },{
            test:/\.less$/,
            use:ExtractTextWebpackPlugin.extract({
                fallback:"style-loader",//编译后，用什么loader来提取文件
                publicPath:"../../",//在资源前，加上前缀
                use:[{
                    loader:"css-loader"
                },{
                    loader:"less-loader"
                }]
            })
        },{
            test:/\.vue$/,
            use:[{
                loader:"vue-loader",
                // options:{}
            }]
        }]
    },
    plugins:[
		new Webpack.HotModuleReplacementPlugin(),
        new ExtractTextWebpackPlugin({
            filename:"static/css/index.css"
        }),
        new HtmlWebpackPlugin({
            template:"./src/index.html",//入口文件
            //filename:"",//出口文件
        }),
        new VueLoaderPlugin(),
        new Webpack.ProvidePlugin({
            //将jquery类库作为全局变量$引入
            "$":"jquery",
            "jQuery":"jquery"
        })
    ],
    //服务器设置
	devServer: {
		contentBase: Path.resolve('dist'), //最好设置成绝对路径
		host: 'localhost',
		port: 8090,
		open: true,
		hot: true,
        inline: true,
        publicPath: '/',
	}
}



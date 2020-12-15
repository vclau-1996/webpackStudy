const path = require("path");
const MiniCssPlugins = require("mini-css-extract-plugin");
console.log(__dirname);
module.exports={
    //js入口执行文件
    entry:"./main.js",
    //打包文件的出口
    output:{
       // 把入口所依赖的所有模块打包成一个文件 bundle.js 输出 
        filename: 'bundle.js',
        //输出文件都放到/dist目录下
        path:path.resolve(__dirname,'./dist')
    },
    module:{
        rules:[
            {
                test: /\.css$/,
                use: [MiniCssPlugins.loader, 'css-loader']
              },
        ]
    },
    plugins:[
        new MiniCssPlugins({filename:'[name]-[contenthash].css'}),
    ]
}
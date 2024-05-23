const path = require("path")
// 引入自动生成 html 的插件
const HtmlWebpackPlugin = require('html-webpack-plugin')



module.exports = {
  // mode:  "development" | "production" | "none", // 配置开发模式: '开发' | '打包' | '无'
  mode: 'production',

  // devServer: {
  //   port: 3000, // 端口号
  //   open: true
  // }

  entry: "./src/js/love.js", // 单入口

  output: {
    path: path.join(__dirname, "dist"), // 出口路径
    filename: "index.js" // 出口文件名
  },

  // plugins: [
  //   new HtmlWebpackPlugin()
  // ],

  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html', // 引用的html路径
      filename: 'index.html' // 输出的html名称
    })
  ],


  module: {
    rules: [ // loader的规则
      {
        test: /\.css$/, // 匹配所有的css文件
        // use数组里从右向左运行
        // 先用 css-loader 让webpack能够识别 css 文件的内容并打包
        // 再用 style-loader 将样式, 把css插入到dom中
        use: ["style-loader", "css-loader"]
        // 有less文件另安装less
        // test: /\.less$/
        // use: ["style-loader", "css-loader", 'less-loader']
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset', // 使用内部的loader，所以使用type
      },
      {
        test: /\.(html|htm)$/i,
        loader: 'html-withimg-loader'
      },
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'] // 预设:转码规则(用bable开发环境本来预设的)
          }
        }
      }
    ]
  }
}


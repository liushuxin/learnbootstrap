const path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");
let HappyPack = require("happypack");
var webpack = require("webpack");
const SentryWebpackPlugin = require("@sentry/webpack-plugin");
const release = "staging@1.0.1"; // 可以根据package.json的版本号或者Git的tag命名
module.exports = {};
module.exports = {
  mode: "production", // "production" | "development" | "none"  // Chosen mode tells webpack to use its built-in optimizations accordingly.
  entry: "./src/index.tsx", // string | object | array  // 默认为 './src'
  // 这里应用程序开始执行
  // webpack 开始打包
  output: {
    // webpack 如何输出结果的相关选项
    path: path.resolve(__dirname, "public"), // string
    // 所有输出文件的目标路径
    // 必须是绝对路径（使用 Node.js 的 path 模块）
    filename: "bundle.js", // string    // 「入口分块(entry chunk)」的文件名模板
    chunkFilename: "[name].js",
    publicPath: "./" // string    // 输出解析文件的目录，url 相对于 HTML 页面
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
    alias: {
      components: path.resolve(__dirname, "./src/components")
    }
  },
  module: {
    rules: [
      // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: "awesome-typescript-loader"
          }

          // {
          //   loader: 'babel-loader',
          //   options: {
          //     plugins: ["@babel/plugin-syntax-dynamic-import"]
          //   }
          // }
        ]
      },

      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },
      {
        test: /\.less$/,

        use: [
          {
            loader: "style-loader" // creates style nodes from JS strings
          },
          {
            loader: "css-loader" // translates CSS into CommonJS
          },
          {
            loader: "less-loader", // compiles Less to CSS
            options: {
              modifyVars: {
                "primary-color": "#1DA57A",
                "link-color": "#1DA57A",
                "border-radius-base": "2px"
                // // or
                // 'hack': `true; @import "your-less-file-path.less";`, // Override with less file
              },
              javascriptEnabled: true
            }
          }
        ]
      }
    ]
  },

  devtool: "source-map", // enum  // 通过在浏览器调试工具(browser devtools)中添加元信息(meta info)增强调试
  // 牺牲了构建速度的 `source-map' 是最详细的。
  context: __dirname, // string（绝对路径！）
  // webpack 的主目录
  // entry 和 module.rules.loader 选项
  // 相对于此目录解析
  target: "web", // 枚举  // bundle 应该运行的环境
  // 更改 块加载行为(chunk loading behavior) 和 可用模块(available module)
  //externals: ["react", /^@angular\//],  // 不要遵循/打包这些模块，而是在运行时从环境中请求他们
  // 为 webpack-serve 提供选项
  optimization: {},
  //stats: "errors-only",  // 精确控制要显示的 bundle 信息
  devServer: {
    proxy: {
      // proxy URLs to backend development server
      "/api": "http://localhost:3000"
    },
    contentBase: path.join(__dirname, "public"), // boolean | string | array, static file location
    compress: true, // enable gzip compression
    historyApiFallback: true, // true for index.html upon 404, object for multiple paths
    hot: true, // hot module replacement. Depends on HotModuleReplacementPlugin
    https: false, // true for self-signed, object for cert authority
    noInfo: false, // only errors & warns on hot reload
    index: "index.html",
    historyApiFallback: true,
    historyApiFallback: {
      // rewrites: [
      //     { from: /^\/tacos/, to: '/index.html' },
      // ],
      index: "/index.html"
    }
  },
  externals: {
    react: "React",
    "react-dom": "ReactDOM"
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "My App",
      filename: "index.html",
      template: "src/webpack-template/index.html"
    })
    // new SentryWebpackPlugin({
    //   release: "staging@1.0.1",
    //   include: "./public",
    //   ignoreFile: "index.html",
    //   ignore: ["node_modules", "webpack.config.js"],
    //   configFile: "sentry.properties"
    // })
  ]
};

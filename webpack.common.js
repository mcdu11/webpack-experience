const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
// 做一些清理
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
// 此插件为每个包含 CSS 的 JS 文件创建一个单独的 CSS 文件，并支持 CSS 和 SourceMap 的按需加载。
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require("webpack");

const distPath = path.resolve(__dirname, "dist");

module.exports = {
  entry: {
    app: "./src/index.js",
  },
  output: {
    filename: "[name].bundle.js",
    path: distPath,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: "/css",
              esModule: true,
              modules: {
                namedExport: true,
              },
            },
          },
          {
            loader: "css-loader",
            options: {
              esModule: true,
              modules: {
                namedExport: true,
                localIdentName: "[name]__[local]",
              },
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "Output Management",
      template: "index.html",
    }),
    new webpack.HotModuleReplacementPlugin(),
    new MiniCssExtractPlugin({
      filename: "css/[name].[hash].css",
      chunkFilename: "[id].css",
    }),
  ],
  optimization: {
    moduleIds: "named",
  },
};

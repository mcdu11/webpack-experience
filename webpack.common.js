const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
// 此插件为每个包含 CSS 的 JS 文件创建一个单独的 CSS 文件，并支持 CSS 和 SourceMap 的按需加载。
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require("webpack");

function resolve(dir) {
  return path.resolve(__dirname, dir);
}

module.exports = {
  entry: {
    app: "./src/index.js",
    // another: "./src/another-module.js",
  },
  output: {
    filename: "js/[name].bundle.js",
    chunkFilename: 'js/[name].bundle.js', // 非入口 chunk 的名称
    path: resolve("dist"),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: "../",
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
      {
        test: /\.png$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "img/[name].[hash:8].[ext]",
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Output Management",
      template: "index.html",
    }),
    new webpack.HotModuleReplacementPlugin(),
    new MiniCssExtractPlugin({
      filename: "css/[name].[hash:8].css",
      chunkFilename: "[id].css",
    }),
  ],
  optimization: {
    moduleIds: "named",
    /* splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          chunks: "all",
        },
      },
    }, */
  },
};

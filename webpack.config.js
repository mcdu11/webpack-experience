const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const webpack = require("webpack");

const distPath = path.resolve(__dirname, "dist");

module.exports = {
  entry: {
    app: "./src/index.js",
  },
  devtool: "inline-source-map",
  devServer: {
    contentBase: "./dist",
    port: 8081,
    hot: true,
  },
  output: {
    filename: "[name].bundle.js",
    path: distPath,
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "Output Management",
      template: "index.html",
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
  optimization: {
    moduleIds: 'named'
  }
};

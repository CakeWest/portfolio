const path = require("path");
const webpack = require("webpack");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");

const devMode = process.env.NODE_ENV !== "production";

module.exports = {
  entry: "./src/index.js",
  mode: "development",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/env"]
        }
      },
      {
        test: /\.s?[ac]ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              modules: true,
              localIdentName: "[name]_[local]--[hash:base64:5]"
            }
          },
          "sass-loader"
        ]
      },
      {
        test: /\.(png|svg|jpe*g|gif)$/,
        use: ["file-loader"]
      }
    ]
  },
  resolve: {
    alias: {
      common: path.resolve(__dirname, "src/common/"),
      footer: path.resolve(__dirname, "src/components/footer/"),
      header: path.resolve(__dirname, "src/components/header/"),
      home: path.resolve(__dirname, "src/components/home/"),
      portfolio: path.resolve(__dirname, "src/components/portfolio/")
    }
  },
  output: {
    path: path.resolve(__dirname, "dist/"),
    publicPath: "/",
    filename: "bundle.js"
  },
  devServer: {
    contentBase: path.join(__dirname, "dist/"),
    port: 3000,
    publicPath: "/",
    historyApiFallback: true
  },
  plugins: [
    new CleanWebpackPlugin("dist", {}),
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    }),
    new MiniCssExtractPlugin({
      filename: "style.[hash].css"
    })
  ]
};

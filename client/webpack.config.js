const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const devMode = process.env.NODE_ENV !== "production";

const plugins = [
  new CleanWebpackPlugin(),
  new HtmlWebpackPlugin({
    template: "./src/index.html",
    filename: "index.html",
  }),
];
if (!devMode) {
  plugins.push(
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css",
    })
  );
}

module.exports = {
  entry: "./src/index.js",
  plugins,
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/env"],
        },
      },
      {
        test: /\.module\.s(a|c)ss$/,
        use: [
          devMode ? "style-loader" : MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              modules: true,
              sourceMap: devMode,
            },
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: devMode,
            },
          },
        ],
      },
      {
        test: /\.s(a|c)ss$/,
        exclude: /\.module.(s(a|c)ss)$/,
        use: [
          devMode ? "style-loader" : MiniCssExtractPlugin.loader,
          "css-loader",
          {
            loader: "sass-loader",
            options: {
              sourceMap: devMode,
            },
          },
        ],
      },
      {
        test: /\.(png|svg|jpe*g|gif)$/,
        use: ["file-loader"],
      },
    ],
  },
  resolve: {
    alias: {
      common: path.resolve(__dirname, "src/common/"),
      footer: path.resolve(__dirname, "src/components/footer/"),
      header: path.resolve(__dirname, "src/components/header/"),
      home: path.resolve(__dirname, "src/components/home/"),
      portfolio: path.resolve(__dirname, "src/components/portfolio/"),
      stack: path.resolve(__dirname, "src/components/stack/"),
      contact: path.resolve(__dirname, "src/components/contact/"),
    },
  },
  output: {
    path: path.resolve(__dirname, "dist/"),
    publicPath: "/",
    filename: "bundle.js",
  },
  devServer: {
    contentBase: path.join(__dirname, "dist/"),
    port: 3000,
    publicPath: "/",
    historyApiFallback: true,
  },
};

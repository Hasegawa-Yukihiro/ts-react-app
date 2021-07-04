const baseConfig = require("./webpack.config.base");
const { merge } = require("webpack-merge");
const webpack = require("webpack");

/**
 * @description 環境変数の設定
 * @param DOMAIN ドメイン
 * @param NODE_ENV 環境名
 */
const env = {
  NODE_ENV: JSON.stringify("development"),
  DOMAIN: JSON.stringify("http://localhost:3002")
};

const config = merge(baseConfig, {
  mode: "development",
  devServer: {
    contentBase: "dist",
    open: true,
    port: 3002,
    /** 404のfallback先を /index.html にする */
    historyApiFallback: true
  },
  plugins: [
    /** 環境変数の追加 */
    new webpack.DefinePlugin({
      process: { env }
    })
  ]
});

module.exports = config;

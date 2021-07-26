const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

//  aliasの読み込み
const { Alias } = require("../config/scripts/alias.js");
const alias = new Alias();

const config = {
  /** entry point */
  entry: path.resolve(__dirname, "../src/index.tsx"),
  /** output point */
  output: {
    path: path.resolve(__dirname, "../dist"),
    filename: "bundle.js",
    publicPath: "/"
  },
  /** https://qiita.com/YoshinoriKanno/items/322ae6e53daa35059c15 */
  devtool: "eval-source-map",
  /** jsファイルへの変換処理  */
  module: {
    rules: [
      /** ts , tsx ファイルは ts-loader を使ってJSに変換 */
      {
        test: /\.(ts|tsx)$/,
        use: [
          {
            loader: "ts-loader",
            options: { transpileOnly: true } //  ビルドの高速化
          }
        ]
      },
      /** css ファイルは MiniCssExtractPlugin.loader と css-loader を使ってJSに変換 */
      {
        test: /\.css$/,
        use: [
          { loader: MiniCssExtractPlugin.loader, options: {} },
          "css-loader"
        ]
      },
      /** .png ファイルは url-loader を使ってJSに変換 */
      { test: /\.png$/, loader: "url-loader" }
    ]
  },

  /**
   * webpack には import する際に、指定されたモジュールを検索して該当するファイルを探す仕組み（モジュール解決  ）がある
   * resolve オプションはモジュール解決（モジュールの import を解決する仕組み）の設定を変更します。
   */
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
    alias: alias.toWebpack()
  },
  plugins: [
    /** CSSファイルをjsに含めるのではなく別ファイルで出力する */
    new MiniCssExtractPlugin({
      filename: "styles.css"
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      filename: "index.html"
    })
  ]
};

module.exports = config;

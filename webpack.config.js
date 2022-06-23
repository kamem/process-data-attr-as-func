// Generated using webpack-cli https://github.com/webpack/webpack-cli
const webpack = require('webpack')
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserPlugin = require('terser-webpack-plugin')

const isProduction = process.env.NODE_ENV == "production";

const stylesHandler = MiniCssExtractPlugin.loader;

const package = require('./package.json')

const config = {
  entry: {
    'docs/example/index': './src/example/index.ts',
    'docs/example/vanilla': './src/example/vanilla.js',
    'dist/process-data-attr-as-func/process-data-attr-as-func': './src/process-data-attr-as-func/index.ts',
    'dist/process-data-attr-as-func/process-data-attr-as-func.min': './src/process-data-attr-as-func/index.ts',
  },
  output: {
    path: path.resolve(__dirname),
    filename: '[name].js',
    library: "scroll-parallax-effect",
    libraryTarget: "umd"
  },
  devServer: {
    open: ['/docs/example'],
    port: 5100,
    host: "localhost"
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "example/index.html",
      filename: 'docs/example/index.html',
      chunks: ['docs/example/index']
    }),
    new HtmlWebpackPlugin({
      template: "example/index.html",
      filename: 'docs/example/vanilla.html',
      chunks: ['docs/example/vanilla']
    }),

    new MiniCssExtractPlugin(),

    // Add your plugins here
    // Learn more about plugins from https://webpack.js.org/configuration/plugins/

    new webpack.BannerPlugin({
      banner: `${package.name}
${package.description}
${package.repository.url}
@version ${package.version}
@license Released under ${package.license} license
@author ${package.author.name}`,
      test: /^(?=.*js)(?!.*min).*$/
    }),
    new webpack.BannerPlugin({
      banner: `${package.name}|${package.repository.url}|${package.version}|${package.license} license|${package.author.name}`,
      test: /\.min.js(\?.*)?$/i
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/i,
        loader: "ts-loader",
        exclude: ["/node_modules/"],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [stylesHandler, "css-loader", "postcss-loader", "sass-loader"],
      },
      {
        test: /\.css$/i,
        use: [stylesHandler, "css-loader", "postcss-loader"],
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
        type: "asset",
      },

      // Add your rules for custom modules here
      // Learn more about loaders from https://webpack.js.org/loaders/
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js", "..."],
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        extractComments: false,
        test: /\.min.js(\?.*)?$/i,
      }),
    ],
  },
};

module.exports = () => {
  if (isProduction) {
    config.mode = "production";
  } else {
    config.mode = "development";
  }
  return config;
};

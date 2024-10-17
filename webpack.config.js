const CopyWebpackPlugin = require("copy-webpack-plugin");
const ESLintWebpackPlugin = require("eslint-webpack-plugin");
const TerserWebpackPlugin = require("terser-webpack-plugin");

const path = require("node:path");
const sourceMapSupport = require("source-map-support");

sourceMapSupport.install({ environment: "node" });

module.exports = function compile(option) {
  return {
    ...option,
    output: {
      filename: "main.js",
      path: path.resolve(__dirname, "dist"),
      libraryTarget: "commonjs2"
    },
    target: "node",
    devtool: "source-map",
    mode: process.env.NODE_ENV === "production" ? "production" : "development",
    optimization: {
      ...option.optimization,
      minimizer: [
        new TerserWebpackPlugin({
          extractComments: false,
          parallel: true,
          terserOptions: {
            ecma: 2020,
            keep_classnames: true,
            keep_fnames: true
          }
        })
      ]
    },
    plugins: [
      new ESLintWebpackPlugin({
        cache: false,
        extensions: ["js", "ts"]
      }),
      new CopyWebpackPlugin({
        patterns: [
          {
            from: "resources",
            to: "resources"
          }
        ]
      })
    ]
  };
};

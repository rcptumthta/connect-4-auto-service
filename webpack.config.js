const CopyWebpackPlugin = require("copy-webpack-plugin");
const ESLintWebpackPlugin = require("eslint-webpack-plugin");
const TerserWebpackPlugin = require("terser-webpack-plugin");

const path = require("node:path");
const sourceMapSupport = require("source-map-support");

sourceMapSupport.install({ environment: "node" });

/**
 *
 * @description Function to compile source code into a bundle
 *
 * @param {import("webpack").Configuration} option
 *
 * @returns {import("webpack").Configuration}
 *
 */
module.exports = function compile(option) {
  return {
    ...option,
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "main.js",
      libraryTarget: "commonjs2"
    },
    target: "node",
    devtool: "source-map",
    mode: process.env["NODE_ENV"] === "production" ? "production" : "development",
    optimization: {
      ...option.optimization,
      minimizer: [
        new TerserWebpackPlugin({
          extractComments: false,
          parallel: true,
          terserOptions: {
            ecma: 2020,
            keep_classnames: true,
            keep_fnames: true,
            mangle: true
          }
        })
      ]
    },
    plugins: [
      ...option.plugins,
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

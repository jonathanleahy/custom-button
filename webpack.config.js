const webpack = require("webpack");
const TerserPlugin = require("terser-webpack-plugin");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const path = require("path");

module.exports = {
    mode: "production",
    entry: "./src/index.js",
    output: {
        filename: "custom-button.js",
        library: "custom-button",
        libraryTarget: 'umd',
        path: path.resolve(__dirname, 'dict')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env", "@babel/preset-react"]
                    }
                }
            }
        ]
    },
    optimization: {
        minimize: [new TerserPlugin()]
    },
    plugins: [new CleanWebpackPlugin(["dist"])]
}
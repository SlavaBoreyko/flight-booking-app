const path = require("path");

module.exports = {
  mode: "development",
  devServer: {
    historyApiFallback: true,
    port: 3000,
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  devtool: "source-map",
};

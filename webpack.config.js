const { ModuleFederationPlugin } = require("webpack").container;
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExternalTemplateRemotesPlugin = require("external-remotes-plugin");
const path = require("path");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
const packageConfig = require('./package');

module.exports = {
  entry: "./src/index",
  mode: "development",
  devtool: "source-map",
  optimization: {
    minimize: false,
  },
  devServer: {
    hot: true,
    static: path.join(__dirname, "dist"),
    port: 3001,
    liveReload: false,
  },
  output: {
    publicPath: "auto",
    clean: true,
  },
  externals: {
    // Use external version of React
    externals: { react: "react" },
    externals: { "react-dom": "react-dom" },
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: ["@babel/preset-react"],
          plugins: [require.resolve("react-refresh/babel")],
        },
      },
      {
        test: /\.(css)$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "RemoteCharts",
      filename: "remoteEntry.js",
      exposes: {
        "./Button": "./src/Button",
        "./Heading": "./src/Heading",
        "./FunnelChart": "./src/FunnelChart",
      },
      shared: {
        react: {
          requiredVersion: packageConfig.dependencies.react,
          singleton: true,
        },
        'react-dom': {
          requiredVersion: packageConfig.dependencies['react-dom'],
          singleton: true,
        },
      },
    }),
    new ExternalTemplateRemotesPlugin(),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      chunks: ["main"],
    }),
    new ReactRefreshWebpackPlugin({
      exclude: [/node_modules/, /bootstrap\.js$/],
    }),
  ],
};

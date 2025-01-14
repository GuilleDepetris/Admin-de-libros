//Basicamente webpack convierte todo nuestro codigo frontend
// a codigo estandar html, css, js y moverlo a otra carpeta
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const devMode = process.env.NODE_ENV !== "production";

module.exports = {
  //Esto sirve para especificar donde esta
  //mi proyecto de front de desarrollo y en donde quiero
  //que lo coloque
  entry: "./frontend/app.js", //Donde está
  output: {
    //Donde ira el codigo convertido
    path: path.join(__dirname, "backend/public"),
    filename: "js/bundle.js",
  },
  mode: "production",
  module: {
    rules: [
      {
        test: /\.css/,
        use: [
          devMode ? "style-loader" : MiniCssExtractPlugin.loader,
          //Si estoy en Des. carga los estilos dentro del js sino, cargalos en su propio archivo de css
          "css-loader",
        ],
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "./frontend/index.html",
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true,
      },
    }),
    new MiniCssExtractPlugin({
      filename: "css/bundle.css",
    }),
  ],
  devtool: "source-map", //Nos indica en que line cometimos un error
};

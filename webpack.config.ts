// const webpack = require('webpack')
// const path = require('path')
// const htmlWebpackPlugin = require('html-webpack-plugin')
import webpack from "webpack"
import path from "path"
import { buildPlugins } from "./config/build/buildPlugins"
import HtmlWebpackPlugin from "html-webpack-plugin";

const config: webpack.Configuration = {
  mode: 'development', // production минимизирует код
  /**
   * создаст файл с именем random, таким образом можно создавать бандлы
   * entry: {
   *  random: path.resolve(__dirname, 'src', 'index.js'),
   *  },
   */
  entry: path.resolve(__dirname, 'src', 'index.ts'),
  output: {
    filename: '[name].[contenthash].js', // contenthash создаст бандлу уникальный хэш
    path: path.resolve(__dirname, 'build'),
    clean: true // Очищает старые бандлы
  },
  plugins: [
      new HtmlWebpackPlugin({
          template: path.resolve(__dirname, 'public', 'index.html')
      }),
      new webpack.ProgressPlugin(), // Показывает прогресс сборки
  ],
  module: {
    // Лоадеры нужны для обработки файлов, которые выходят за рамки js: ts, jpeg ..,
    rules: [
      {
        test: /\.tsx?$/, // Файлы которые нужно пропустить через лоадер. В данном случае ts и tsx
        use: 'ts-loader', // Какой лоадер будет использоваться
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'], // Позволяет не указывать расширение при импорте файлов
  },
}

export default config

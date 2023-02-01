import webpack from "webpack"
import MiniCssExtractPlugin from "mini-css-extract-plugin"
import {BuildOptions} from "./types/config";

export function buildLoaders ({ isDev }: BuildOptions): webpack.RuleSetRule[] {

    // Если не используем тайпскрипт - нужен babel
    const tsLoader =  {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    }

    const cssLoaders = {
        test: /\.s[ac]ss$/i,
        use: [
            isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            // Translates CSS into CommonJS
            {
                loader: 'css-loader',
                options: {
                    modules: {
                        auto: /\.module\.scss/, // Генерация названий классов только для модульных файлов стилей
                        localIdentName: isDev // Оставлять классам оригинальные имена
                            ? '[path][name]__[local]'
                            : '[hash:base64:5]',
                    },
                }
            },
            // Compiles Sass to CSS
            "sass-loader",
        ],
    }



    return [
        tsLoader,
        cssLoaders,
    ]
}

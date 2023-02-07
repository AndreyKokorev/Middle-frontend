import path from "path"
import { BuildOptions } from "./types/config"
import { buildPlugins } from "./buildPlugins"
import { buildLoaders } from "./buildLoaders"
import { buildResolvers } from "./buildResolvers"
import { buildDevServer } from "./buildDevServer"

export function buildWebpackConfig (options: BuildOptions) {
    const { mode, paths, isDev } = options

    return {
        mode, // production минимизирует код
        /**
         * создаст файл с именем random, таким образом можно создавать бандлы
         * entry: {
         *  random: path.resolve(__dirname, 'src', 'index.js'),
         *  },
         */
        entry: paths.entry,
        devServer: buildDevServer(options),
        devtool: isDev ? 'inline-source-map' : undefined,
        output: {
            filename: '[name].[contenthash].js', // contenthash создаст бандлу уникальный хэш
            path: paths.build,
            clean: true // Очищает старые бандлы
        },
        plugins: buildPlugins(options),
        module: {
            // Лоадеры нужны для обработки файлов, которые выходят за рамки js: ts, jpeg ..,
            rules: buildLoaders(options)
        },
        resolve: buildResolvers(options),
    }
}

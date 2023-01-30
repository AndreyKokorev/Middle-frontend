import webpack from "webpack"

export function buildLoaders (): webpack.RuleSetRule[] {
    const tsLoader =  {
        test: /\.tsx?$/, // Файлы которые нужно пропустить через лоадер. В данном случае ts и tsx
        use: 'ts-loader', // Какой лоадер будет использоваться
        exclude: /node_modules/,
    }

    return [
        tsLoader,
    ]
}

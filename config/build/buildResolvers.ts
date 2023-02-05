import { ResolveOptions } from "webpack"

export function buildResolvers (): ResolveOptions {
    return {
        extensions: ['.tsx', '.ts', '.js'], // Позволяет не указывать расширение при импорте файлов
    }
}


type Mods = Record<string, boolean | string>

export const classNames = (className: string, additionalClasses: string[] = [], mods: Mods = {} ): string => {
    const classesByMods = Object.entries(mods)
        .filter(([className, value]) => Boolean(value))
        .map(([className]) => className)

    return [
        className,
        ...additionalClasses.filter(Boolean),
        ...classesByMods,
    ]
        .join(' ')
}

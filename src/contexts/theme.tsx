import React, { createContext, useEffect, useState } from 'react'

export type Theme = 'dark' | 'light'

export interface IThemeContext {
    theme: Theme
    toggleTheme: () => void
}

export const ThemeContext = createContext<IThemeContext>({
    theme: 'light',
    toggleTheme: () => {}
})

export const ThemeProvider: React.FC<React.PropsWithChildren<{}>> = (props) => {
    const [theme, setTheme] = useState<Theme>()

    useEffect(() => {
        const storedTheme = localStorage.getItem('theme')
        if (storedTheme && ['dark', 'light'].includes(storedTheme))
            return setTheme(storedTheme as Theme)

        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)')
        setTheme(prefersDark ? 'dark' : 'light')
    }, [])

    useEffect(() => {
        if (theme === undefined) return
        localStorage.setItem('theme', theme)
        document.documentElement.classList.add(theme)
        document.documentElement.classList.remove(
            theme === 'light' ? 'dark' : 'light'
        )
    }, [theme])

    const toggleTheme = () => {
        if (theme === undefined) return
        setTheme(theme === 'light' ? 'dark' : 'light')
    }

    return (
        <ThemeContext.Provider value={{ theme: theme ?? 'light', toggleTheme }}>
            {props.children}
        </ThemeContext.Provider>
    )
}

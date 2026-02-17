import { useState, useEffect } from 'react'

const STORAGE_KEY = 'portfolio-theme'

export function useTheme() {
    const [theme, setThemeState] = useState(() => {
        if (typeof window === 'undefined') return 'dark'
        return window.localStorage.getItem(STORAGE_KEY) || 'dark'
    })

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme)
        window.localStorage.setItem(STORAGE_KEY, theme)
    }, [theme])

    const toggleTheme = () => setThemeState((t) => (t === 'dark' ? 'light' : 'dark'))

    return { theme, setTheme: setThemeState, toggleTheme }
}

import { useEffect } from 'react'

/**
 * Run callback when user presses Escape.
 * @param {() => void} onEscape
 */
export function useEscapeKey(onEscape) {
    useEffect(() => {
        const handler = (e) => e.key === 'Escape' && onEscape()
        window.addEventListener('keydown', handler)
        return () => window.removeEventListener('keydown', handler)
    }, [onEscape])
}

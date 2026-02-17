import { useEffect } from 'react'

/**
 * Lock or unlock body scroll (e.g. when modal is open).
 * @param {boolean} locked - when true, body overflow is hidden
 */
export function useBodyScrollLock(locked) {
    useEffect(() => {
        document.body.style.overflow = locked ? 'hidden' : ''
        return () => {
            document.body.style.overflow = ''
        }
    }, [locked])
}

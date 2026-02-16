import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import { useEffect } from 'react'

export default function ProjectModal({ project, onClose }) {
    /* Lock body scroll when open */
    useEffect(() => {
        document.body.style.overflow = 'hidden'
        return () => { document.body.style.overflow = '' }
    }, [])

    /* Close on Escape */
    useEffect(() => {
        const handler = (e) => e.key === 'Escape' && onClose()
        window.addEventListener('keydown', handler)
        return () => window.removeEventListener('keydown', handler)
    }, [onClose])

    if (!project) return null

    return (
        <AnimatePresence>
            {/* Backdrop */}
            <motion.div
                key="backdrop"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                onClick={onClose}
                style={{
                    position: 'fixed',
                    inset: 0,
                    zIndex: 100,
                    background: 'rgba(3, 7, 18, 0.85)',
                    backdropFilter: 'blur(6px)',
                    WebkitBackdropFilter: 'blur(6px)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '1rem',
                }}
            >
                {/* Modal */}
                <motion.div
                    key="modal"
                    initial={{ opacity: 0, scale: 0.92, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.92, y: 20 }}
                    transition={{ duration: 0.3, ease: 'easeOut' }}
                    onClick={(e) => e.stopPropagation()}
                    className="glass-card"
                    style={{
                        width: '100%',
                        maxWidth: '640px',
                        maxHeight: '80vh',
                        overflowY: 'auto',
                        padding: '2rem',
                        position: 'relative',
                        border: '1px solid rgba(0, 240, 255, 0.2)',
                        boxShadow: '0 0 60px rgba(0, 240, 255, 0.08)',
                    }}
                >
                    {/* Close button */}
                    <button
                        onClick={onClose}
                        style={{
                            position: 'absolute',
                            top: '1rem',
                            right: '1rem',
                            background: 'none',
                            border: 'none',
                            color: 'var(--text-body)',
                            cursor: 'pointer',
                            opacity: 0.5,
                            transition: 'opacity 0.2s',
                            padding: '4px',
                        }}
                        onMouseEnter={(e) => (e.currentTarget.style.opacity = 1)}
                        onMouseLeave={(e) => (e.currentTarget.style.opacity = 0.5)}
                    >
                        <X size={18} />
                    </button>

                    {/* Title */}
                    <h2
                        style={{
                            fontFamily: 'var(--font-mono)',
                            fontSize: '1.4rem',
                            fontWeight: 700,
                            color: 'var(--text-heading)',
                            marginBottom: '4px',
                            paddingRight: '2rem',
                        }}
                    >
                        {project.title}
                    </h2>

                    <p style={{ fontSize: '0.9rem', color: 'var(--text-body)', opacity: 0.8, marginBottom: '0.5rem' }}>
                        {project.oneLiner}
                    </p>

                    {/* Role */}
                    <p
                        style={{
                            fontFamily: 'var(--font-mono)',
                            fontSize: '0.75rem',
                            color: 'var(--neon-purple)',
                            marginBottom: '1.2rem',
                        }}
                    >
                        {'> '}{project.role}
                    </p>

                    {/* Tags */}
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '1.5rem' }}>
                        {project.tags.map((tag) => (
                            <span key={tag} className="neon-tag">{tag}</span>
                        ))}
                    </div>

                    {/* Divider */}
                    <div
                        style={{
                            height: '1px',
                            background: 'linear-gradient(90deg, transparent, rgba(0,240,255,0.15), transparent)',
                            marginBottom: '1.5rem',
                        }}
                    />

                    {/* Detail content */}
                    {project.detail && (
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                            {project.detail.sections.map((section, i) => (
                                <div key={i}>
                                    <h4
                                        style={{
                                            fontFamily: 'var(--font-mono)',
                                            fontSize: '0.85rem',
                                            fontWeight: 600,
                                            color: 'var(--neon-cyan)',
                                            marginBottom: '6px',
                                        }}
                                    >
                                        {section.heading}
                                    </h4>
                                    <p
                                        style={{
                                            fontSize: '0.84rem',
                                            color: 'var(--text-body)',
                                            opacity: 0.75,
                                            lineHeight: 1.8,
                                        }}
                                    >
                                        {section.content}
                                    </p>
                                </div>
                            ))}
                        </div>
                    )}

                    {/* Fallback: show highlights if no detail  */}
                    {!project.detail && (
                        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                            {project.highlights.map((h, i) => (
                                <li
                                    key={i}
                                    style={{
                                        fontSize: '0.84rem',
                                        color: 'var(--text-body)',
                                        opacity: 0.75,
                                        paddingLeft: '1rem',
                                        position: 'relative',
                                        lineHeight: 1.7,
                                    }}
                                >
                                    <span style={{ position: 'absolute', left: 0, color: 'var(--neon-cyan)', fontFamily: 'var(--font-mono)' }}>›</span>
                                    {h}
                                </li>
                            ))}
                        </ul>
                    )}
                </motion.div>
            </motion.div>
        </AnimatePresence>
    )
}

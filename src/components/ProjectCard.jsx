import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

export default function ProjectCard({ project, index, onOpenDetail }) {
    return (
        <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="glass-card-lift p-6 md:p-8"
        >
            {/* Header */}
            <div className="flex items-start justify-between mb-3">
                <div>
                    <h3
                        style={{
                            fontFamily: 'var(--font-mono)',
                            fontSize: '1.2rem',
                            fontWeight: 600,
                            color: 'var(--text-heading)',
                            marginBottom: '4px',
                        }}
                    >
                        {project.title}
                    </h3>
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-body)', opacity: 0.8 }}>
                        {project.oneLiner}
                    </p>
                </div>
            </div>

            {/* Role */}
            <p
                style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.75rem',
                    color: 'var(--neon-purple)',
                    marginBottom: '1rem',
                    opacity: 0.9,
                }}
            >
                {'> '}{project.role}
            </p>

            {/* Highlights */}
            <ul style={{ listStyle: 'none', marginBottom: '1.2rem', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                {project.highlights.map((h, i) => (
                    <li
                        key={i}
                        style={{
                            fontSize: '0.82rem',
                            color: 'var(--text-body)',
                            opacity: 0.75,
                            paddingLeft: '1rem',
                            position: 'relative',
                            lineHeight: 1.6,
                        }}
                    >
                        <span
                            style={{
                                position: 'absolute',
                                left: 0,
                                color: 'var(--neon-cyan)',
                                fontFamily: 'var(--font-mono)',
                            }}
                        >
                            ›
                        </span>
                        {h}
                    </li>
                ))}
            </ul>

            {/* Tags & Link */}
            <div className="flex flex-wrap items-center justify-between gap-3">
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                    {project.tags.map((tag) => (
                        <span key={tag} className="neon-tag">
                            {tag}
                        </span>
                    ))}
                </div>

                <button
                    onClick={() => onOpenDetail(project)}
                    className="neon-link"
                    style={{ background: 'none', border: 'none', cursor: 'pointer' }}
                >
                    阅读完整复盘 <ArrowUpRight size={13} />
                </button>
            </div>
        </motion.article>
    )
}

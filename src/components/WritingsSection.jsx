import { motion } from 'framer-motion'
import { BookOpen, ArrowUpRight, Clock } from 'lucide-react'
import { portfolioData } from '../data/portfolioData'

const { writings } = portfolioData

export default function WritingsSection() {
    return (
        <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
        >
            {/* Section Header */}
            <div className="flex items-center gap-3 mb-5">
                <BookOpen size={16} style={{ color: 'var(--neon-cyan)' }} />
                <span className="section-label">Writings</span>
            </div>

            {writings.map((writing) => (
                <article key={writing.id} className="glass-card-lift p-6 md:p-8">
                    <h3
                        style={{
                            fontFamily: 'var(--font-mono)',
                            fontSize: '1.1rem',
                            fontWeight: 600,
                            color: 'var(--text-heading)',
                            marginBottom: '8px',
                        }}
                    >
                        {writing.title}
                    </h3>

                    <p
                        style={{
                            fontSize: '0.88rem',
                            color: 'var(--text-body)',
                            opacity: 0.75,
                            marginBottom: '1rem',
                            lineHeight: 1.7,
                        }}
                    >
                        {writing.summary}
                    </p>

                    <div className="flex items-center justify-between flex-wrap gap-3">
                        <span
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '5px',
                                fontFamily: 'var(--font-mono)',
                                fontSize: '0.7rem',
                                color: 'var(--text-body)',
                                opacity: 0.5,
                            }}
                        >
                            <Clock size={11} /> {writing.readTime}
                        </span>

                        <a
                            href={writing.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="neon-link"
                        >
                            阅读笔记 <ArrowUpRight size={13} />
                        </a>
                    </div>
                </article>
            ))}
        </motion.section>
    )
}

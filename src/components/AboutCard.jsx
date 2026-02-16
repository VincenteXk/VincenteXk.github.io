import { motion } from 'framer-motion'
import { User, FileDown } from 'lucide-react'
import { portfolioData } from '../data/portfolioData'

const { about } = portfolioData

const timelineVariants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.15 } },
}

const phaseVariant = {
    hidden: { opacity: 0, x: -15 },
    show: { opacity: 1, x: 0, transition: { duration: 0.5 } },
}

export default function AboutCard() {
    return (
        <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
            className="glass-card p-6 md:p-10"
        >
            {/* Header */}
            <div className="flex items-center gap-3 mb-6">
                <User size={16} style={{ color: 'var(--neon-cyan)' }} />
                <span className="section-label">About</span>
            </div>

            {/* Timeline */}
            <motion.div
                variants={timelineVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                style={{ position: 'relative', paddingLeft: '1.5rem' }}
            >
                {/* Vertical line */}
                <div
                    style={{
                        position: 'absolute',
                        left: '5px',
                        top: '4px',
                        bottom: '4px',
                        width: '1px',
                        background: 'linear-gradient(180deg, var(--neon-cyan), var(--neon-purple), transparent)',
                        opacity: 0.3,
                    }}
                />

                {about.story.map((phase, i) => (
                    <motion.div
                        key={i}
                        variants={phaseVariant}
                        style={{
                            marginBottom: i === about.story.length - 1 ? 0 : '1.5rem',
                            position: 'relative',
                        }}
                    >
                        {/* Dot */}
                        <div
                            style={{
                                position: 'absolute',
                                left: '-1.5rem',
                                top: '6px',
                                width: '10px',
                                height: '10px',
                                borderRadius: '50%',
                                border: '2px solid var(--neon-cyan)',
                                background: 'var(--bg-deep)',
                            }}
                        />

                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                            <span style={{ fontSize: '1rem' }}>{phase.icon}</span>
                            <h4
                                style={{
                                    fontFamily: 'var(--font-mono)',
                                    fontSize: '0.9rem',
                                    fontWeight: 600,
                                    color: 'var(--text-heading)',
                                }}
                            >
                                {phase.phase}
                            </h4>
                        </div>

                        <p
                            style={{
                                fontSize: '0.84rem',
                                color: 'var(--text-body)',
                                opacity: 0.7,
                                lineHeight: 1.7,
                            }}
                        >
                            {phase.description}
                        </p>
                    </motion.div>
                ))}
            </motion.div>

            {/* Resume link */}
            <div style={{ marginTop: '2rem', paddingLeft: '1.5rem' }}>
                <a
                    href={about.resumeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="neon-link"
                >
                    <FileDown size={14} /> 查看完整简历
                </a>
            </div>
        </motion.section>
    )
}

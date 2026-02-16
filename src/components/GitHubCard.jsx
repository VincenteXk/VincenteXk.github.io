import { motion } from 'framer-motion'
import { ExternalLink, GitBranch, Star, Activity } from 'lucide-react'
import { portfolioData } from '../data/portfolioData'

const { github } = portfolioData

const languageColors = {
    React: '#61DAFB',
    TypeScript: '#3178C6',
    Vue: '#42B883',
    JavaScript: '#F7DF1E',
    Python: '#3776AB',
}

const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.1 } },
}

const item = {
    hidden: { opacity: 0, x: -10 },
    show: { opacity: 1, x: 0, transition: { duration: 0.4 } },
}

export default function GitHubCard() {
    return (
        <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
            className="glass-card p-6 md:p-10"
        >
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                    <Activity size={16} style={{ color: 'var(--neon-cyan)' }} />
                    <span className="section-label">Recent Activity</span>
                </div>
                <a
                    href={github.profileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="neon-link"
                >
                    @{github.username} <ExternalLink size={12} />
                </a>
            </div>

            {/* Activity summary */}
            <p
                style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.8rem',
                    color: 'var(--text-body)',
                    opacity: 0.7,
                    marginBottom: '1.5rem',
                }}
            >
                {'// '}{github.activitySummary}
            </p>

            {/* Repo list */}
            <motion.ul
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}
            >
                {github.repos.map((repo) => (
                    <motion.li
                        key={repo.name}
                        variants={item}
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            padding: '12px 16px',
                            borderRadius: '10px',
                            background: 'rgba(15, 23, 42, 0.5)',
                            border: '1px solid rgba(0, 240, 255, 0.06)',
                            flexWrap: 'wrap',
                            gap: '8px',
                        }}
                    >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', minWidth: 0 }}>
                            <GitBranch size={14} style={{ color: 'var(--neon-cyan)', flexShrink: 0 }} />
                            <span
                                style={{
                                    fontFamily: 'var(--font-mono)',
                                    fontSize: '0.85rem',
                                    color: 'var(--text-heading)',
                                    fontWeight: 500,
                                }}
                            >
                                {repo.name}
                            </span>
                            <span
                                style={{
                                    fontSize: '0.75rem',
                                    color: 'var(--text-body)',
                                    opacity: 0.6,
                                    display: 'none',
                                }}
                                className="sm:!inline"
                            >
                                {repo.description}
                            </span>
                        </div>

                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexShrink: 0 }}>
                            <span
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '4px',
                                    fontFamily: 'var(--font-mono)',
                                    fontSize: '0.7rem',
                                }}
                            >
                                <span
                                    style={{
                                        width: '8px',
                                        height: '8px',
                                        borderRadius: '50%',
                                        background: languageColors[repo.language] || '#888',
                                    }}
                                />
                                {repo.language}
                            </span>
                            {repo.stars > 0 && (
                                <span
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '3px',
                                        fontFamily: 'var(--font-mono)',
                                        fontSize: '0.7rem',
                                        color: 'var(--text-body)',
                                        opacity: 0.7,
                                    }}
                                >
                                    <Star size={10} /> {repo.stars}
                                </span>
                            )}
                            <span
                                style={{
                                    fontFamily: 'var(--font-mono)',
                                    fontSize: '0.65rem',
                                    color: 'var(--text-body)',
                                    opacity: 0.4,
                                }}
                            >
                                {repo.updatedAt}
                            </span>
                        </div>
                    </motion.li>
                ))}
            </motion.ul>
        </motion.section>
    )
}

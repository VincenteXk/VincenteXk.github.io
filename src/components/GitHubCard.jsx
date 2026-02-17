import { motion } from 'framer-motion'
import { GitBranch, Star } from 'lucide-react'
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
            className="glass-card"
        >
            <p className="typo-mono-sm mb-6">
                {'// '}{github.activitySummary}
            </p>

            <motion.ul
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="list-none flex flex-col gap-3"
            >
                {github.repos.map((repo) => (
                    <motion.li
                        key={repo.name}
                        variants={item}
                        className="repo-item flex items-center justify-between flex-wrap gap-2"
                    >
                        <div className="flex items-center gap-2.5 min-w-0">
                            <GitBranch size={14} className="icon-accent flex-shrink-0" />
                            <span className="typo-mono text-[0.85rem] font-medium text-[var(--text-heading)]">
                                {repo.name}
                            </span>
                            <span className="typo-mono-sm text-xs opacity-60 hidden sm:!inline">
                                {repo.description}
                            </span>
                        </div>

                        <div className="flex items-center gap-3 flex-shrink-0">
                            <span className="flex items-center gap-1 typo-mono text-[0.7rem]">
                                <span
                                    className="w-2 h-2 rounded-full"
                                    style={{ background: languageColors[repo.language] || '#888' }}
                                />
                                {repo.language}
                            </span>
                            {repo.stars > 0 && (
                                <span className="flex items-center gap-0.5 typo-mono text-[0.7rem] text-[var(--text-body)] opacity-70">
                                    <Star size={10} /> {repo.stars}
                                </span>
                            )}
                            <span className="typo-mono text-[0.65rem] text-[var(--text-body)] opacity-40">
                                {repo.updatedAt}
                            </span>
                        </div>
                    </motion.li>
                ))}
            </motion.ul>
        </motion.section>
    )
}

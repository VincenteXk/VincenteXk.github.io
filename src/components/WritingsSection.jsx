import { motion } from 'framer-motion'
import { ArrowUpRight, Clock } from 'lucide-react'
import { portfolioData } from '../data/portfolioData'

const { writings } = portfolioData

export default function WritingsSection() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6"
        >
                {writings.map((writing) => (
                    <article key={writing.id} className="glass-card-lift glass-card-lift-px-extra">
                        <h3 className="typo-heading text-[1.32rem] mb-2">
                            {writing.title}
                        </h3>
                        <p className="typo-body-sm text-[0.88rem] mb-4">
                            {writing.summary}
                        </p>
                        <div className="flex items-center justify-between flex-wrap gap-3">
                            <span className="flex items-center gap-1.5 typo-mono text-[0.7rem] text-[var(--text-body)] opacity-50">
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
        </motion.div>
    )
}

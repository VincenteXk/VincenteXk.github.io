import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

export default function ProjectCard({ project, index, onOpenDetail }) {
    return (
        <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="glass-card-lift glass-card-lift-px-extra"
        >
            <div className="flex items-start justify-between mb-3">
                <div>
                    <h3 className="typo-heading-lg mb-1">
                        {project.title}
                    </h3>
                    <p className="typo-body">
                        {project.oneLiner}
                    </p>
                </div>
            </div>

            <p className="typo-role mb-4">
                {'> '}{project.role}
            </p>

            <ul className="list-bullet-cyan flex flex-col gap-1.5 mb-5">
                {project.highlights.map((h, i) => (
                    <li key={i}>{h}</li>
                ))}
            </ul>

            <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                        <span key={tag} className="neon-tag">
                            {tag}
                        </span>
                    ))}
                </div>
                <button
                    type="button"
                    onClick={() => onOpenDetail(project)}
                    className="neon-link bg-transparent border-none cursor-pointer"
                >
                    阅读完整复盘 <ArrowUpRight size={13} />
                </button>
            </div>
        </motion.article>
    )
}

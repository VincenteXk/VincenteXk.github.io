import { motion } from 'framer-motion'
import { FileDown } from 'lucide-react'
import { portfolioData } from '../data/portfolioData'

const { hero, about } = portfolioData

export default function HeroCard() {
    return (
        <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="glass-card glass-card-px-extra text-left"
        >
            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-[0.95rem] leading-relaxed text-[var(--text-body)] opacity-[0.85]"
            >
                {hero.description}
            </motion.p>
            <div className="mt-8 flex justify-end">
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

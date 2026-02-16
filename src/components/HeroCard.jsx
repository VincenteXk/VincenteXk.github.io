import { motion } from 'framer-motion'
import { portfolioData } from '../data/portfolioData'

const { hero } = portfolioData

export default function HeroCard() {
    return (
        <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="glass-card p-8 md:p-14 text-center"
        >
            {/* Terminal-style label */}
            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.7 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="section-label mb-6"
            >
                {'> '}init portfolio.exe
            </motion.p>

            {/* Name with Glitch */}
            <h1
                className="glitch hero-title"
                data-text={hero.name}
                style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
                    fontWeight: 700,
                    color: 'var(--text-heading)',
                    lineHeight: 1.1,
                    marginBottom: '1rem',
                }}
            >
                {hero.name}
            </h1>

            {/* Subtitle */}
            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.9rem',
                    color: 'var(--neon-cyan)',
                    letterSpacing: '0.1em',
                    marginBottom: '1.5rem',
                }}
            >
                {hero.subtitle}
            </motion.p>

            {/* Tagline */}
            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.6 }}
                style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: 'clamp(0.9rem, 2vw, 1.1rem)',
                    color: 'var(--neon-purple)',
                    fontWeight: 500,
                    marginBottom: '1rem',
                }}
            >
                {hero.tagline}
            </motion.p>

            {/* Description */}
            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9, duration: 0.6 }}
                style={{
                    maxWidth: '36rem',
                    margin: '0 auto',
                    fontSize: '0.95rem',
                    lineHeight: 1.8,
                    color: 'var(--text-body)',
                    opacity: 0.85,
                }}
            >
                {hero.description}
            </motion.p>

            {/* Decorative line */}
            <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 1.1, duration: 0.8, ease: 'easeOut' }}
                style={{
                    height: '1px',
                    background: 'linear-gradient(90deg, transparent, var(--neon-cyan), transparent)',
                    marginTop: '2.5rem',
                    maxWidth: '200px',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                }}
            />
        </motion.section>
    )
}

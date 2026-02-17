import { motion } from 'framer-motion'
import { Sun, Moon } from 'lucide-react'
import { portfolioData } from '../data/portfolioData'
import { useTheme } from '../hooks/useTheme'
import { SECTION_NAV } from '../constants/sections'

export default function Navbar() {
    const { theme, toggleTheme } = useTheme()

    return (
        <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="nav-bar"
        >
            <div className="w-full px-8 flex items-center justify-between">
                <span className="typo-mono text-sm font-semibold text-[var(--text-heading)] tracking-wide whitespace-nowrap">
                    {portfolioData.hero.name}
                </span>

                <div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-6">
                    {SECTION_NAV.map(({ id, label }) => (
                        <a key={id} href={`#${id}`} className="nav-link">
                            {label}
                        </a>
                    ))}
                </div>

                <button
                    type="button"
                    onClick={toggleTheme}
                    className={`theme-toggle-btn ${theme === 'light' ? 'active' : ''}`}
                    title={theme === 'dark' ? '切换到浅色' : '切换到深色'}
                    aria-label={theme === 'dark' ? '切换到浅色模式' : '切换到深色模式'}
                >
                    {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
                </button>
            </div>
        </motion.nav>
    )
}

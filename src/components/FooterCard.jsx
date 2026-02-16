import { motion } from 'framer-motion'
import { Mail, Linkedin, Github, Code2 } from 'lucide-react'
import { portfolioData } from '../data/portfolioData'

const { footer } = portfolioData

export default function FooterCard() {
    return (
        <motion.footer
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6 }}
            className="glass-card p-6 md:p-8"
        >
            {/* Contact links */}
            <div
                className="flex flex-wrap items-center justify-center gap-6 mb-6"
            >
                <a
                    href={`mailto:${footer.email}`}
                    className="neon-link"
                    title="Email"
                >
                    <Mail size={15} /> Email
                </a>
                <a
                    href={footer.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="neon-link"
                    title="LinkedIn"
                >
                    <Linkedin size={15} /> LinkedIn
                </a>
                <a
                    href={footer.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="neon-link"
                    title="GitHub"
                >
                    <Github size={15} /> GitHub
                </a>
            </div>

            {/* Divider */}
            <div
                style={{
                    height: '1px',
                    background: 'linear-gradient(90deg, transparent, rgba(0,240,255,0.15), transparent)',
                    marginBottom: '1rem',
                }}
            />

            {/* Built with & source */}
            <div
                className="flex flex-wrap items-center justify-center gap-4"
                style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.68rem',
                    color: 'var(--text-body)',
                    opacity: 0.4,
                }}
            >
                <span>
                    Built with {footer.builtWith}
                </span>
                <span>·</span>
                <a
                    href={footer.sourceCode}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ display: 'flex', alignItems: 'center', gap: '4px', color: 'inherit', textDecoration: 'none' }}
                >
                    <Code2 size={11} /> Source
                </a>
                <span>·</span>
                <span>© {new Date().getFullYear()}</span>
            </div>
        </motion.footer>
    )
}

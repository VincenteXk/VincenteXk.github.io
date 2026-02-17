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
            className="glass-card"
        >
            <div className="flex flex-wrap items-center justify-center gap-6 mb-6">
                <a href={`mailto:${footer.email}`} className="neon-link" title="Email">
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

            <div className="divider-line-subtle mb-4" />

            <div className="typo-meta flex flex-wrap items-center justify-center gap-4">
                <span>Built with {footer.builtWith}</span>
                <span>·</span>
                <a
                    href={footer.sourceCode}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-inherit no-underline"
                >
                    <Code2 size={11} /> Source
                </a>
                <span>·</span>
                <span>© {new Date().getFullYear()}</span>
            </div>
        </motion.footer>
    )
}

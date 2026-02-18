import { motion } from 'framer-motion'
import { X } from 'lucide-react'
import { useBodyScrollLock } from '../hooks/useBodyScrollLock'
import { useEscapeKey } from '../hooks/useEscapeKey'

export default function ProjectModal({ project, onClose }) {
    useBodyScrollLock(!!project)
    useEscapeKey(onClose)

    if (!project) return null

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="modal-backdrop"
        >
            <motion.div
                initial={{ opacity: 0, scale: 0.92, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.92, y: 20 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                onClick={(e) => e.stopPropagation()}
                className="glass-card modal-card w-full max-w-[640px] max-h-[80vh] overflow-y-auto relative"
            >
                <button type="button" onClick={onClose} className="modal-close-btn" aria-label="关闭">
                    <X size={18} />
                </button>

                <h2 className="typo-heading text-[1.5rem] mb-1 pr-8">
                    {project.title}
                </h2>
                <p className="typo-body mb-0.5">
                    {project.oneLiner}
                </p>
                <p className="typo-role mb-5">
                    {'> '}{project.role}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.tags.map((tag) => (
                        <span key={tag} className="neon-tag">{tag}</span>
                    ))}
                </div>

                <div className="divider-line-subtle mb-6" />

                {project.detail && (
                    <div className="flex flex-col gap-5">
                        {project.detail.sections.map((section, i) => (
                            <div key={i}>
                                <h4 className="typo-detail-heading mb-1.5">
                                    {section.heading}
                                </h4>
                                <p className="typo-body-sm">
                                    {section.content}
                                </p>
                            </div>
                        ))}
                    </div>
                )}

                {!project.detail && (
                    <ul className="list-bullet-cyan flex flex-col gap-2">
                        {project.highlights.map((h, i) => (
                            <li key={i}>{h}</li>
                        ))}
                    </ul>
                )}
            </motion.div>
        </motion.div>
    )
}

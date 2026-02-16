import { useState } from 'react'
import { Layers } from 'lucide-react'
import HeroCard from './components/HeroCard'
import GitHubCard from './components/GitHubCard'
import ProjectCard from './components/ProjectCard'
import ProjectModal from './components/ProjectModal'
import WritingsSection from './components/WritingsSection'
import AboutCard from './components/AboutCard'
import FooterCard from './components/FooterCard'
import { portfolioData } from './data/portfolioData'

export default function App() {
    const [activeProject, setActiveProject] = useState(null)

    return (
        <>
            {/* Background layers */}
            <div className="grid-bg" />
            <div className="scanline-overlay" />

            {/* Main content */}
            <main
                style={{
                    position: 'relative',
                    zIndex: 2,
                    maxWidth: '720px',
                    margin: '0 auto',
                    padding: '2rem 1rem 3rem',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1.5rem',
                }}
            >
                {/* Hero */}
                <HeroCard />

                {/* GitHub Activity */}
                <GitHubCard />

                {/* Projects Section Header */}
                <div className="flex items-center gap-3" style={{ paddingLeft: '2px' }}>
                    <Layers size={16} style={{ color: 'var(--neon-cyan)' }} />
                    <span className="section-label">Projects</span>
                </div>

                {/* Project Cards */}
                {portfolioData.projects.map((project, i) => (
                    <ProjectCard
                        key={project.id}
                        project={project}
                        index={i}
                        onOpenDetail={setActiveProject}
                    />
                ))}

                {/* Writings */}
                <WritingsSection />

                {/* About */}
                <AboutCard />

                {/* Footer */}
                <FooterCard />
            </main>

            {/* Project Detail Modal */}
            {activeProject && (
                <ProjectModal
                    project={activeProject}
                    onClose={() => setActiveProject(null)}
                />
            )}
        </>
    )
}

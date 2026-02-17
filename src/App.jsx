import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import { Layers, Activity, ExternalLink, BookOpen, User, Mail, Linkedin, Github } from 'lucide-react'
import Navbar from './components/Navbar'
import HeroCard from './components/HeroCard'
import GitHubCard from './components/GitHubCard'
import ProjectCard from './components/ProjectCard'
import ProjectModal from './components/ProjectModal'
import WritingsSection from './components/WritingsSection'
import FooterCard from './components/FooterCard'
import SectionHeader from './components/SectionHeader'
import { portfolioData } from './data/portfolioData'
import { SECTION_IDS } from './constants/sections'

const { github, hero, footer } = portfolioData

export default function App() {
    const [activeProject, setActiveProject] = useState(null)

    return (
        <>
            <Navbar />

            <div className="grid-bg" />
            <div className="scanline-overlay" />

            <div className="relative z-[2] w-full flex justify-center">
                <div className="content-offset-top content-offset-bottom flex gap-6 md:gap-8 w-full max-w-[1152px] px-4">
                    <aside className="flex-shrink-0 w-48 md:w-64 flex flex-col items-center text-center sticky top-24">
                        <div className="sidebar-avatar w-full aspect-square max-w-[192px] md:max-w-[256px] rounded-full border-2 border-[var(--border-glass)] bg-[var(--bg-card)] overflow-hidden flex items-center justify-center">
                            {/* 替换为你的头像：<img src="..." alt="" className="w-full h-full object-cover" /> */}
                        </div>
                        <h2 className="sidebar-name text-[1.5rem] md:text-[1.8rem] font-semibold text-[var(--text-heading)]">
                            {hero.name}
                        </h2>
                        <p className="sidebar-role text-sm text-[var(--text-body)] opacity-80">
                            {hero.subtitle}
                        </p>
                        <p className="sidebar-tagline text-sm text-[var(--text-heading)] opacity-90">
                            {hero.tagline}
                        </p>
                        <div className="flex items-center justify-center gap-4">
                            <a href={`mailto:${footer.email}`} className="icon-accent hover:opacity-100 opacity-80 transition-opacity" title="Email" aria-label="Email">
                                <Mail size={20} />
                            </a>
                            <a href={footer.linkedin} target="_blank" rel="noopener noreferrer" className="icon-accent hover:opacity-100 opacity-80 transition-opacity" title="LinkedIn" aria-label="LinkedIn">
                                <Linkedin size={20} />
                            </a>
                            <a href={footer.github} target="_blank" rel="noopener noreferrer" className="icon-accent hover:opacity-100 opacity-80 transition-opacity" title="GitHub" aria-label="GitHub">
                                <Github size={20} />
                            </a>
                        </div>
                    </aside>
                    <main className="flex-1 min-w-0 max-w-[720px] main-content-scaled flex flex-col gap-[100px]">
                <section id={SECTION_IDS.HERO} className="scroll-target flex flex-col gap-6">
                    <SectionHeader icon={<User size={16} className="icon-accent" />} label="About me" />
                    <HeroCard />
                </section>

                <section id={SECTION_IDS.ACTIVITY} className="scroll-target flex flex-col gap-6">
                    <div className="flex items-center justify-between">
                        <SectionHeader icon={<Activity size={16} className="icon-accent" />} label="Recent Activity" />
                        <a href={github.profileUrl} target="_blank" rel="noopener noreferrer" className="neon-link">
                            @{github.username} <ExternalLink size={12} />
                        </a>
                    </div>
                    <GitHubCard />
                </section>

                <section id={SECTION_IDS.PROJECTS} className="scroll-target flex flex-col gap-6">
                    <SectionHeader icon={<Layers size={16} className="icon-accent" />} label="Projects" className="pl-0.5" />
                    {portfolioData.projects.map((project, i) => (
                        <ProjectCard
                            key={project.id}
                            project={project}
                            index={i}
                            onOpenDetail={setActiveProject}
                        />
                    ))}
                </section>

                <section id={SECTION_IDS.WRITINGS} className="scroll-target flex flex-col gap-6">
                    <SectionHeader icon={<BookOpen size={16} className="icon-accent" />} label="Writings" />
                    <WritingsSection />
                </section>

                <FooterCard />
                    </main>
                </div>
            </div>

            <AnimatePresence>
                {activeProject && (
                    <ProjectModal
                        key={activeProject.id}
                        project={activeProject}
                        onClose={() => setActiveProject(null)}
                    />
                )}
            </AnimatePresence>
        </>
    )
}

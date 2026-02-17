/**
 * portfolioData.js (Mock Version)
 * ──────────────────────────────
 * 集中管理所有文本内容。已替换为 Mock 数据。
 */

export const portfolioData = {
    /* ── Hero ── */
    hero: {
        name: 'NAME_HERE',
        tagline: '哲学思维 × 商业洞察 × AI驱动',
        subtitle: 'AI Product Manager Intern',
        description:
            '这里是一段关于你的简介。建议保留复合背景的描述，例如：从第一性原理出发，用AI重构产品体验。哲学训练逻辑，商业验证价值，技术实现可能。',
    },

    /* ── GitHub ── */
    github: {
        username: 'USERNAME',
        profileUrl: 'https://github.com/USERNAME',
        repos: [
            {
                name: 'mock-project-one',
                description: '这是一个示例仓库的描述文字',
                language: 'React',
                stars: 12,
                updatedAt: '2026-02',
            },
            {
                name: 'mock-project-two',
                description: '这是另一个示例仓库，展示你的代码活跃度',
                language: 'TypeScript',
                stars: 8,
                updatedAt: '2026-01',
            },
            {
                name: 'mock-project-three',
                description: '第三个示例项目，体现多模态或AI应用',
                language: 'Python',
                stars: 5,
                updatedAt: '2026-01',
            },
        ],
        activitySummary:
            '近期活跃于 AI 产品原型开发、自动化工具和数据分析应用。',
    },

    /* ── Projects ── */
    projects: [
        {
            id: 'project-1',
            title: '示例项目 A',
            oneLiner: '一句话描述该项目的核心价值点',
            role: '你的角色 (如：产品经理 & 独立开发)',
            highlights: [
                '关键亮点一：解决了什么问题，用了什么技术。',
                '关键亮点二：实现了具体的增长指标或效率改进。',
                '关键亮点三：在复杂的环境下进行了怎样的决策。',
            ],
            tags: ['AI', 'React', 'Product'],
            detail: {
                sections: [
                    { heading: '// 背景与动机', content: '描述项目的起源。你发现了什么问题？为什么决定要做这个项目？' },
                    { heading: '// 核心方案', content: '你设计了怎样的方案来解决这个问题？用了哪些技术或方法论？' },
                    { heading: '// 关键决策', content: '在项目过程中你做了哪些关键决策？为什么这么选择？' },
                    { heading: '// 成果与反思', content: '最终的结果如何？你学到了什么？如果重来你会做什么不同的事？' },
                ],
            },
        },
        {
            id: 'project-2',
            title: '示例项目 B',
            oneLiner: '针对特定垂直领域的 AI 解决方案',
            role: '产品策划 & 交互设计',
            highlights: [
                '痛点分析：观察到行业中存在的某个具体效率问题。',
                '解决方案：设计了双模态交互范式，降低了用户门槛。',
                '项目成果：上线后获得了初步的用户反馈和数据验证。',
            ],
            tags: ['UX', 'Design', 'LLM'],
            detail: {
                sections: [
                    { heading: '// 背景与动机', content: '描述你如何发现这个垂直领域的需求痛点。' },
                    { heading: '// 核心方案', content: '你设计的交互范式是什么？为什么选择双模态？' },
                    { heading: '// 关键决策', content: '在权衡用户体验和技术可行性时，你做了哪些取舍？' },
                    { heading: '// 成果与反思', content: '用户反馈如何？数据验证说明了什么？' },
                ],
            },
        },
        {
            id: 'project-3',
            title: '示例项目 C',
            oneLiner: '基于大模型的自动化工作流工具',
            role: '需求调研 & 项目管理',
            highlights: [
                '集成多个外部 API 实现了业务逻辑的闭环。',
                '性能优化：将原本耗时数小时的任务缩短至分钟级。',
                '跨团队协作：协调研发与测试资源，确保按时交付。',
            ],
            tags: ['Automation', 'Workflow', 'API'],
            detail: {
                sections: [
                    { heading: '// 背景与动机', content: '描述你在调研阶段发现的自动化需求。' },
                    { heading: '// 核心方案', content: '描述你选择的技术方案和系统架构。' },
                    { heading: '// 关键决策', content: '在跨团队协作中，你如何协调不同角色的优先级？' },
                    { heading: '// 成果与反思', content: '项目最终的效率提升数据和团队反馈。' },
                ],
            },
        },
    ],

    /* ── Writings ── */
    writings: [
        {
            id: 'writing-1',
            title: '如何从 PM 视角拆解一个 AI 产品',
            summary:
                '这是你的博客或笔记摘要。描述你对产品深度思考的文字。',
            readTime: '5 min',
            link: '#',
        },
    ],

    /* ── About (resume link used in Hero) ── */
    about: {
        resumeUrl: '#',
    },

    /* ── Footer ── */
    footer: {
        email: 'your-email@example.com',
        linkedin: 'https://linkedin.com/in/yourprofile',
        github: 'https://github.com/USERNAME',
        sourceCode: 'https://github.com/USERNAME/REPO_NAME',
        builtWith: 'Antigravity',
    },
}

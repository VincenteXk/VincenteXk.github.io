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
            link: '#',
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
            link: '#',
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
            link: '#',
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

    /* ── About ── */
    about: {
        story: [
            {
                phase: '教育背景 / 哲学',
                icon: '🎓',
                description:
                    '描述你的第一阶段背景。例如：分析哲学的训练中掌握了逻辑推理与批判性思维。',
            },
            {
                phase: '专业进修 / 商业',
                icon: '📊',
                description:
                    '描述第二阶段如何从数据驱动角度进行商业价值判断。',
            },
            {
                phase: '当前状态 / AI',
                icon: '🤖',
                description:
                    '定位为能从 0 到 1 构建 AI 产品的复合型人才，融合跨学科能力。',
            },
        ],
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

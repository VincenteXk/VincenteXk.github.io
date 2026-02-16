/**
 * portfolioData.js
 * ────────────────
 * 集中管理所有文本内容。修改此文件即可更新站点上的所有信息，
 * 无需深入 JSX 组件。
 */

export const portfolioData = {
    /* ── Hero ── */
    hero: {
        name: 'Xianker',
        tagline: '哲学思维 × 商业洞察 × AI驱动',
        subtitle: 'AI Product Manager Intern',
        description:
            '从第一性原理出发，用AI重构产品体验。哲学训练逻辑，商业验证价值，技术实现可能。',
    },

    /* ── GitHub ── */
    github: {
        username: 'Xianker',
        profileUrl: 'https://github.com/Xianker',
        repos: [
            {
                name: 'cyberpunk-portfolio',
                description: '赛博朋克极简主义个人作品集 SPA',
                language: 'React',
                stars: 0,
                updatedAt: '2026-02',
            },
            {
                name: 'chaos-dojo',
                description: '基于博弈论的AI对战游戏平台',
                language: 'TypeScript',
                stars: 3,
                updatedAt: '2026-01',
            },
            {
                name: 'deep-speak',
                description: '情感陪伴型AI语音助手 APP',
                language: 'Vue',
                stars: 1,
                updatedAt: '2026-01',
            },
        ],
        activitySummary:
            '近期活跃于 AI 产品原型开发、博弈论游戏平台和情感AI应用。',
    },

    /* ── Projects ── */
    projects: [
        {
            id: 'chaos-dojo',
            title: 'Chaos Dojo',
            oneLiner: '基于博弈论的多人AI策略对战平台',
            role: '产品经理 & 全栈开发',
            highlights: [
                '设计了"囚徒困境"核心玩法循环与AI对手策略模型',
                '用户留存率较MVP版本提升40%',
                '从 Next.js 迁移至 Expo/React Native 实现跨端',
            ],
            tags: ['博弈论', 'AI策略', 'React Native'],
            link: '#',
        },
        {
            id: 'deep-speak',
            title: 'DeepSpeak',
            oneLiner: '温暖的情感陪伴型AI语音助手',
            role: '产品设计 & 前端开发',
            highlights: [
                '定义了"治愈系"产品调性与情感交互范式',
                '实现了实时语音通话 + 文字日记双模态交互',
                '用户日均使用时长达到28分钟',
            ],
            tags: ['情感AI', '语音交互', 'Vue'],
            link: '#',
        },
        {
            id: 'ai-order-agent',
            title: 'AI点餐智能体',
            oneLiner: '基于语音识别与知识图谱的智能点餐系统',
            role: '算法工程 & 产品策划',
            highlights: [
                '集成 GraphRAG 实现用户偏好记忆',
                '语音识别准确率优化至 95%+',
                '支持"老样子"等模糊语义理解',
            ],
            tags: ['GraphRAG', '语音识别', 'Python'],
            link: '#',
        },
    ],

    /* ── Writings ── */
    writings: [
        {
            id: 'pm-notes-01',
            title: '从第一性原理思考AI产品设计',
            summary:
                '为什么哲学思维是AI PM最被低估的超能力？从苏格拉底式追问到产品需求拆解。',
            readTime: '8 min',
            link: '#',
        },
    ],

    /* ── About ── */
    about: {
        story: [
            {
                phase: '哲学本科',
                icon: '🎓',
                description:
                    '在分析哲学的训练中，掌握了逻辑推理与批判性思维。学会了"追问本质"而非"接受表象"。',
            },
            {
                phase: '商业分析硕士',
                icon: '📊',
                description:
                    '系统学习数据驱动决策、用户行为分析和商业模型设计。将抽象思维转化为可量化的商业洞察。',
            },
            {
                phase: 'AI PM Candidate',
                icon: '🤖',
                description:
                    '融合哲学的思维深度、商业的价值判断和AI的技术理解，定位为能从0到1构建AI产品的复合型产品人。',
            },
        ],
        resumeUrl: '#',
    },

    /* ── Footer ── */
    footer: {
        email: 'xianker@example.com',
        linkedin: 'https://linkedin.com/in/xianker',
        github: 'https://github.com/Xianker',
        sourceCode: 'https://github.com/Xianker/cyberpunk-portfolio',
        builtWith: 'Antigravity',
    },
}

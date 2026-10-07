import type { NavLink } from '@/config'
import type { ResourcesContent } from '@/data/en/resources'

const demo: NavLink = { label: '预约演示', href: '/contact' }
const apiAccess: NavLink = { label: '申请 API 访问', href: '/contact' }

export const resources: ResourcesContent = {
  menu: {
    label: '资源',
    groups: { platform: 'RunFleet 平台' },
    promo: {
      title: '7 天内即可上线',
      description: '借助 RunFleet EasyOnboard，上线团队会在第一周就把您的工作流程配置到 Fleet。',
      action: { label: '了解 EasyOnboard', href: '/resources/easyonboard' },
    },
  },
  pages: {
    contentLibrary: {
      label: '内容库',
      summary: '面向物业与设施团队的指南、观点与洞察。',
      meta: {
        title: '内容库 | Fleet',
        description: 'Fleet 团队撰写的维护、AI 与物业运营实用文章，免费阅读。',
      },
    },
    customerStories: {
      label: '客户故事',
      summary: '团队如何借助 Fleet 管好每个项目。',
      meta: {
        title: '客户故事 | Fleet',
        description: '了解物业、物流和零售团队如何借助 Fleet 减少被动维修，并在每个项目更快响应。',
      },
    },
    easyOnboard: {
      label: 'RunFleet EasyOnboard',
      summary: '上线、培训与支持，几天即可启用。',
      meta: {
        title: 'RunFleet EasyOnboard：上线、培训与支持 | Fleet',
        description: '7 天内启用 Fleet。我们的上线团队配置您的流程、导入数据并培训您的团队。',
      },
    },
    developers: {
      label: '开发者门户',
      summary: '通过 REST API 将 Fleet 连接到您的系统。',
      meta: {
        title: '开发者门户 | Fleet',
        description: '通过 REST API 和 20 多项集成，将 Fleet 连接到财务工具、ERP 和物业系统。',
      },
    },
  },
  contentLibrary: {
    title: '探索我们的内容库',
    description: 'Fleet 团队关于维护、AI 与物业运营的实用观点，免费阅读。',
    search: { label: '搜索文章', placeholder: '按关键词搜索', button: '搜索' },
    featured: { badge: '精选', action: '阅读文章' },
    topics: {
      label: '主题',
      all: '全部主题',
      items: {
        ai: 'AI 与自动化',
        maintenance: '维护',
        operations: '数字化运营',
        retail: '零售与购物中心',
      },
    },
    card: { type: '文章', action: '阅读文章', englishOnly: '英文' },
    empty: '换个关键词或主题，查看更多文章。',
    cta: {
      title: '准备好把这些想法付诸实践了吗？',
      description: '预约导览，了解 Fleet 如何把您的团队、资产和供应商连接在一起。',
      primaryAction: demo,
      secondaryAction: { label: '探索平台', href: '/platform' },
    },
  },
  customerStories: {
    hero: {
      eyebrow: '客户故事',
      title: '从容管理每个项目的团队',
      description: '了解物业、物流和零售团队如何借助 Fleet 减少被动维修、连接技术人员并更快响应。',
      action: { label: '查看全部故事', href: '#stories' },
    },
    spotlight: {
      label: '客户聚焦',
      previous: '上一个故事',
      next: '下一个故事',
      action: '阅读故事',
    },
    results: [
      { value: '最多 40%', label: '被动维修减少' },
      { value: '7 天内', label: '完成团队上线' },
      { value: '99.99%', label: '可用性，SLA 保障' },
      { value: '20+', label: '项集成对接您的系统' },
    ],
    filter: {
      label: '查找您的行业',
      all: '全部行业',
      sectors: {
        realEstate: '房地产',
        logistics: '物流与仓储',
        retail: '零售与购物中心',
      },
    },
    stories: [
      {
        sector: 'realEstate',
        organization: '综合体项目',
        metric: '近 40%',
        metricLabel: '被动维修工作量减少',
        title: '一个综合体项目如何把技术人员、资产记录和工单集中到一处',
        quote:
          'Fleet 让我们的被动维修工作量减少了近 40%。技术人员、资产记录和工单终于集中在了一处。',
        author: '物业运营负责人',
      },
      {
        sector: 'logistics',
        organization: '物流枢纽',
        metric: '量身打造',
        metricLabel: '支持响应更快的方案',
        title: '一个物流枢纽为何选择为自身运营打造的平台',
        quote: '其他平台要么太复杂，要么太通用。Fleet 为我们提供了量身打造的方案，支持响应也更快。',
        author: '维护总监',
      },
      {
        sector: 'retail',
        organization: '区域购物中心运营商',
        metric: '近 40%',
        metricLabel: '被动维修减少',
        title: '一家区域购物中心运营商如何看清每个项目',
        quote: 'Fleet 帮助我们把被动维修减少了近 40%。现在我们能看清所有项目的情况，响应也更快了。',
        author: '运营总监',
      },
    ],
    readStory: '阅读故事',
    serve: {
      title: '各类资产组合的团队都信赖 Fleet',
      description: '从三人的精干运营团队，到横跨多个城市、数百名员工的维护部门。',
      items: [
        { label: '房地产', detail: '商业、住宅与综合体', href: '/solutions/offices-mixed-use' },
        { label: '物流与仓储', detail: '枢纽、码头与车队', href: '/solutions/shipping-logistics' },
        {
          label: '教育与校园',
          detail: '学校、大学与校园',
          href: '/solutions/healthcare-education',
        },
        {
          label: '零售与多门店企业',
          detail: '购物中心、门店与分支',
          href: '/solutions/shopping-malls-retail',
        },
        {
          label: '非营利与市政设施',
          detail: '公共与社区建筑',
          href: '/solutions/facility-management',
        },
      ],
    },
    share: {
      title: '分享您的 Fleet 故事',
      description: '在 Fleet 上取得了出色成果？我们很乐意介绍您的团队。',
      action: { label: '联系我们', href: '/contact' },
    },
    cta: {
      title: '书写属于您的成功故事',
      description: '预约导览，了解 Fleet 如何支持您的团队、资产和供应商。',
      primaryAction: demo,
      secondaryAction: { label: '探索平台', href: '/platform' },
    },
  },
  easyOnboard: {
    hero: {
      eyebrow: 'RunFleet EasyOnboard',
      title: '7 天内用上 Fleet',
      description:
        '我们的上线团队配置您的流程、导入您的数据并培训您的员工，让每个项目从第一周起就准备就绪。',
      highlights: ['本地化上线', '覆盖每个角色的培训', '在线聊天支持'],
      primaryAction: demo,
      secondaryAction: { label: '浏览知识库', href: '#knowledge-base' },
    },
    stats: [
      { value: '7 天内', label: '开通供应商访问并启用工单流程' },
      { value: '第一周', label: '与上线团队完成流程配置' },
      { value: '每个角色', label: '从技术人员到管理层都接受培训' },
      { value: '在线聊天', label: '由我们团队直接提供支持' },
    ],
    steps: {
      title: '您使用 Fleet 的第一周',
      description: '从启动到上线的引导路径，贴合您的资产组合。',
      label: '步骤',
      items: [
        { title: '启动与设置', description: '为您的区域、项目和团队提供本地化上线与账户设置。' },
        { title: '配置流程', description: '上线团队把您的维护、巡检和供应商流程配置到 Fleet。' },
        { title: '导入数据', description: '通过数据导入、API 同步或协助上传，导入资产和文档。' },
        {
          title: '邀请团队与供应商',
          description: '为技术人员、管理者和供应商开通访问，工单流程随即可用。',
        },
        {
          title: '培训并上线',
          description: '按角色培训并提供数字化采用手册，让每个团队都能从容上手。',
        },
      ],
    },
    knowledge: {
      title: '知识库',
      description: '帮助每个团队充分用好 Fleet 的指南。',
      search: { label: '搜索知识库', placeholder: '搜索上线相关主题' },
      empty: '换个关键词，查看更多主题。',
      groups: {
        start: '从这里开始',
        maintenance: '维护',
        assets: '资产与合规',
        automation: '自动化与集成',
      },
      faqs: '常见问题',
    },
    training: {
      title: '建立信心的培训',
      description: '结构化培训让管理者和团队掌握管理每个物业所需的技能与 KPI。',
      items: [
        { title: '流程标准化', description: '覆盖维护、巡检和供应商管理。' },
        { title: 'KPI 配置', description: '覆盖响应时间、工单 SLA、关闭率和资产健康度。' },
        { title: '跨团队沟通', description: '实现物业运营的跨区域协同。' },
        { title: '数字化采用手册', description: '引导团队从线下或旧系统顺利过渡。' },
        { title: '管理层看板', description: '实时掌握各项目、区域和资产组的情况。' },
      ],
    },
    support: {
      title: '随时为您提供支持',
      description: '真实的人员，在上线之后依然持续支持您的团队。',
      items: [
        { title: '在线聊天支持', description: '友好的在线聊天，直接联系我们的团队。' },
        { title: '多时区团队', description: '跨时区的支持团队，服务多区域资产组合。' },
        { title: '培训资源', description: '专属支持团队，以及培训和上线资源。' },
      ],
    },
    faqTitle: '上线常见问题',
    faq: [
      {
        question: '上线 Fleet 需要多长时间？',
        answer: '大多数团队可在 7 天内上线 Fleet，并开通完整的供应商访问和工单流程。',
      },
      {
        question: '能迁移我们现有的数据吗？',
        answer: '可以。Fleet 支持定制迁移方式，包括资产数据导入、API 同步以及有协助的手动上传。',
      },
      {
        question: '谁来为我们的流程配置 Fleet？',
        answer:
          'Fleet 的可视化流程构建器让您的团队轻松完成配置，我们的上线团队也会在第一周协助您配置流程。',
      },
      {
        question: '技术人员和供应商如何访问？',
        answer: 'Fleet 可在任何移动浏览器中使用，技术人员和供应商可立即开始处理分派给他们的工作。',
      },
    ],
    cta: {
      title: '开启您使用 Fleet 的第一周',
      description: '预约导览，我们将根据您的资产组合规划上线路径。',
      primaryAction: demo,
      secondaryAction: { label: '联系我们的团队', href: '/contact' },
    },
  },
  developers: {
    hero: {
      eyebrow: '开发者门户',
      title: '面向开发者的 Fleet',
      description: '将 Fleet 连接到您的系统所需的一切，从财务工具到物业系统。',
      primaryAction: apiAccess,
      secondaryAction: { label: '探索集成', href: '/platform/integrations' },
    },
    cards: [
      {
        title: '构建您的集成',
        description: '通过 REST API 将会计、应付应收和 ERP 系统连接到 Fleet，我们的团队全程协助。',
        action: apiAccess,
      },
      {
        title: '探索集成',
        description: '了解 Fleet 如何连接财务工具、ERP、租户门户和楼宇系统。',
        action: { label: '查看集成', href: '/platform/integrations' },
      },
      {
        title: '获取最新动态',
        description: '在内容库关注 Fleet 团队的产品动态和观点。',
        action: { label: '访问内容库', href: '/insights' },
      },
    ],
    capabilities: {
      title: '集成能力',
      description: '团队连接 Fleet、简化运营的常见方式。',
      items: [
        {
          title: '工单',
          description: '将其他系统的请求引入 Fleet，并保持工单状态同步。',
          points: ['创建请求', '状态更新'],
        },
        {
          title: '资产数据',
          description: '导入并同步资产记录，让所有系统共享同一数据源。',
          points: ['资产导入', 'API 同步'],
        },
        {
          title: '财务与应付应收',
          description: '将维护工作与会计、应付应收和 ERP 工具打通，实现统一报表。',
          points: ['成本与发票', '统一报表'],
        },
        {
          title: '物业系统',
          description: '连接租户门户、门禁和楼宇管理系统。',
          points: ['租户门户', '楼宇管理系统'],
        },
      ],
    },
    platform: {
      title: '建立在安全可靠的平台之上',
      items: [
        { value: 'REST API', label: '对接财务工具、ERP 和物业系统' },
        { value: '20+', label: '项集成对接您的系统' },
        { value: '99.99%', label: '可用性，SLA 保障' },
        { value: '审计日志', label: '与加密存储' },
      ],
    },
    cta: {
      title: '准备好连接 Fleet 了吗？',
      description: '告诉我们您使用的系统，我们的团队将协助您规划集成。',
      primaryAction: apiAccess,
      secondaryAction: demo,
    },
  },
}

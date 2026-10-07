import type { NavLink } from '@/config'
import type { AboutContent } from '@/data/en/about'

const demo: NavLink = { label: '预约演示', href: '/contact' }

export const about: AboutContent = {
  menu: {
    label: '关于 Fleet',
    groups: { company: '公司' },
    promo: {
      title: '加入 Fleet 团队',
      description: '帮助世界各地的物业团队清晰、从容、可控地管理他们的建筑。',
      action: { label: '查看职位', href: '/about/careers' },
    },
  },
  pages: {
    story: {
      label: '公司故事',
      summary: '我们的使命、价值观以及我们服务的团队。',
      meta: {
        title: '关于 Fleet：我们的故事、使命与价值观 | Fleet',
        description:
          'Fleet 让物业团队、运营负责人和设施经理获得应有的清晰、掌控与从容。了解我们的故事、使命与价值观。',
      },
    },
    careers: {
      label: '加入我们',
      summary: '与一支塑造物业运营未来的团队一起成长。',
      meta: {
        title: '在 Fleet 工作 | Fleet',
        description:
          '与 Fleet 一起塑造物业运营的未来。了解我们的工作方式、办公地点以及如何加入团队。',
      },
    },
    partners: {
      label: '合作伙伴',
      summary: '推荐、实施或集成 Fleet。',
      meta: {
        title: '合作伙伴计划 | Fleet',
        description:
          '作为推荐、咨询与实施或技术合作伙伴与 Fleet 共同成长，帮助物业团队从容管理每个项目。',
      },
    },
  },
  offices: [
    { city: '曼谷', region: '泰国' },
    { city: '洛杉矶', region: '美国' },
    { city: '新加坡', region: '新加坡' },
  ],
  story: {
    hero: {
      eyebrow: '关于 Fleet',
      title: '认识 Fleet',
      description: '我们的使命，是让物业团队、运营负责人和设施经理获得应有的清晰、掌控与从容。',
      photos: [
        { id: 'officeTeam', alt: '同事们在明亮的办公室围桌交流' },
        { id: 'teamWorkshop', alt: '团队在白板前共同规划' },
        { id: 'officeCollaboration', alt: '同事们在开放式办公室协作' },
      ],
    },
    story: {
      eyebrow: '我们的故事',
      title: '为维持建筑运转的团队而生',
      chapters: [
        {
          label: '起点',
          title: '一个简单的观察',
          description: '我们看到维护团队依靠表格、邮件链和群聊维持建筑运转，Fleet 由此诞生。',
        },
        {
          label: '想法',
          title: '更好的工作方式',
          description: '我们希望打造与使用者一样快速、灵活的软件，覆盖每个项目和每项资产。',
        },
        {
          label: '平台',
          title: 'Fleet 成形',
          description:
            '一个基于云、移动优先、支持 iOS 和 Android 的平台，简化多项目、多资产的维护管理。',
        },
        {
          label: '如今',
          title: '各类资产组合的信赖之选',
          description: '从五栋写字楼到五十个学校校园，Fleet 帮助团队更快、更聪明地完成正确的工作。',
        },
      ],
    },
    mission: {
      eyebrow: '我们的使命',
      title: '用数字工具连接物理世界',
      description: '我们通过重塑不动产软件、用数字工具连接物理世界，构建可持续的未来。',
      photo: { id: 'propertyManager', alt: '手持平板的物业经理站在高楼前' },
      valuesTitle: '我们的价值观',
      values: [
        { title: '清晰优先', description: '维护数据应当清晰、易于行动。' },
        { title: '速度胜于复杂', description: '更快更好，尤其对运营团队而言。' },
        { title: '以用户为中心', description: '既为一线工作者打造，也为审阅者打造。' },
        { title: '默认信任', description: '我们构建的一切都安全、透明、负责。' },
      ],
    },
    offices: {
      eyebrow: '我们的办公室',
      title: '在这里找到我们',
      description: '我们的团队分布在三座城市，服务多个地区的资产组合。',
    },
    careers: {
      title: '与我们一起创造未来',
      description: '帮助物业团队清晰、自信地管理每栋建筑。了解在 Fleet 工作的样子。',
      action: { label: '查看职位', href: '/about/careers' },
    },
    cta: {
      title: '看看 Fleet 如何运作',
      description: '预约导览，根据您的资产组合和团队量身演示。',
      primaryAction: demo,
      secondaryAction: { label: '联系我们', href: '/contact' },
    },
  },
  careers: {
    hero: {
      eyebrow: '加入我们',
      title: '与我们一起塑造物业运营的未来',
      description: '加入一支团队，为全球物业与设施团队把维护的混乱变为清晰。',
      action: { label: '加入团队', href: '#join' },
      photos: [
        { id: 'welcomeHandshake', alt: '握手欢迎新同事' },
        { id: 'officeTeam', alt: '同事们在明亮的办公室围桌交流' },
        { id: 'teamWorkshop', alt: '团队在白板前共同规划' },
        { id: 'officeCollaboration', alt: '同事们在开放式办公室协作' },
      ],
    },
    growth: {
      title: '与我们服务的每栋建筑一同成长',
      description: 'Fleet 服务房地产、物流、教育、零售和公共设施团队，我们的团队也随之成长。',
      stats: [
        { value: '3', label: '个办公城市' },
        { value: '5', label: '个服务行业' },
        { value: '20+', label: '项支持的集成' },
        { value: '99.99%', label: '我们提供的可用性' },
      ],
    },
    culture: {
      eyebrow: '在 Fleet 工作',
      title: '我们的工作方式',
      description: '价值观塑造着我们打造 Fleet 的方式，也塑造着我们每天的协作方式。',
      items: [
        { title: '清晰优先', description: '我们公开分享信息，让每位同事都能自信决策。' },
        { title: '速度胜于复杂', description: '我们偏好简单方案，快速交付改进。' },
        { title: '以用户为中心', description: '我们与一线人员相处，为他们的日常而构建。' },
        { title: '默认信任', description: '我们彼此赋予主人翁责任，并对结果负责。' },
      ],
    },
    spotlight: {
      title: '由在乎工作的人打造',
      description:
        '每项功能都源自真实建筑里的真实团队。我们倾听技术人员、物业经理和供应商的声音，打造让他们工作更轻松的工具。',
      points: ['贴近每个地区的客户', '从想法到发布全程负责', '学习与成长的空间'],
      photo: { id: 'colleaguesTablets', alt: '两位同事在平板上查看工作' },
    },
    offices: {
      eyebrow: '我们的办公室',
      title: '您可以在这里工作',
      description: '在曼谷、洛杉矶和新加坡与同事们共事。',
    },
    join: {
      eyebrow: '如何加入',
      title: '加入 Fleet 的路径',
      label: '步骤',
      steps: [
        { title: '发送简历', description: '介绍您自己以及您热爱的工作。' },
        { title: '初步沟通', description: '轻松聊聊您的经验和期望。' },
        { title: '认识团队', description: '与未来的同事交流，共同了解这个岗位。' },
        { title: '欢迎加入', description: '获得所需的一切，从第一天起就发挥影响。' },
      ],
    },
    invite: {
      title: '准备好加入 Fleet 了吗？',
      description: '我们一直乐于结识有才华的人。发送简历，告诉我们您希望如何贡献力量。',
      primaryAction: { label: '发送简历', href: '/contact' },
      secondaryAction: { label: '阅读我们的故事', href: '/about' },
    },
  },
  partners: {
    hero: {
      eyebrow: '合作伙伴',
      title: '与 Fleet 共同成长',
      description:
        '成为 Fleet 的合作伙伴，帮助各地的物业团队从容管理每个项目。从简单推荐到长期合作，选择适合您业务的方式。',
      photos: [
        { id: 'blueprintPlanning', alt: '团队一起审阅建筑图纸' },
        { id: 'engineersRooftop', alt: '两位工程师在屋顶查看平板' },
        { id: 'welcomeHandshake', alt: '两位合作伙伴隔桌握手' },
      ],
    },
    programs: {
      eyebrow: '合作方式',
      title: '与 Fleet 合作',
      description: '三种共同成长的方式，每种都有我们团队的专属支持。',
      items: [
        {
          title: '推荐合作伙伴',
          description:
            '认识能用 Fleet 提升运营的团队？为我们引荐，演示、上线和支持由我们团队负责。',
          points: ['简单引荐', '每场演示由我们主导', '您只需投入少量精力'],
          action: { label: '提交推荐', href: '/contact' },
        },
        {
          title: '咨询与实施合作伙伴',
          description: '通过流程设计、数据迁移和培训，帮助客户规划、上线并扩展 Fleet。',
          points: ['上线与培训资源', '流程与 KPI 手册', '与我们团队联合交付'],
          action: { label: '申请成为咨询合作伙伴', href: '/contact' },
        },
        {
          title: '技术合作伙伴',
          description: '通过 REST API 将您的产品或平台与 Fleet 连接，触达物业与设施团队。',
          points: ['REST API 访问', '集成支持', '为共同客户创造价值'],
          action: { label: '申请成为技术合作伙伴', href: '/contact' },
        },
      ],
    },
    why: {
      title: '为什么与 Fleet 合作',
      description: '客户乐于使用的平台，加上全力支持您的团队。',
      items: [
        { title: '专为房地产打造', description: '为多项目的物业与设施团队设计。' },
        { title: '快速上线', description: '大多数团队 7 天内即可上线，工单流程随即可用。' },
        { title: '按用量计费', description: '客户按实际使用付费，账单透明。' },
        { title: '开放集成', description: 'REST API 和 20 多项集成将 Fleet 连接到现有系统。' },
        { title: '区域布局', description: '曼谷、洛杉矶和新加坡均有团队，提供本地化上线。' },
        {
          title: '移动优先',
          description: '可在 iOS 和 Android 的任何浏览器中使用，随时服务每位技术人员。',
        },
      ],
    },
    referral: {
      badge: '推荐合作伙伴',
      title: '认识需要 Fleet 的团队？',
      description: '为我们引荐，其余交给我们的团队。',
      action: { label: '提交推荐', href: '/contact' },
    },
    cta: {
      title: '让我们共同成长',
      description: '告诉我们您的业务，我们将找到最适合的合作方式。',
      primaryAction: { label: '成为合作伙伴', href: '/contact' },
      secondaryAction: { label: '阅读我们的故事', href: '/about' },
    },
  },
}

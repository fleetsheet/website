import type { NavLink } from '@/config'
import type { StatusItem } from '@/data/en/home'
import type {
  IntegrationCategory,
  IntegrationIcon,
  IntegrationItem,
  OverviewModule,
  OverviewVisual,
  PlatformEntry,
  PlatformPageContent,
  PreventiveIcon,
  RunnerAiIcon,
} from '@/data/en/platform'
import type { PlatformDetailId, PlatformGroup, TemplatePageId } from '@/platform'

export const menu = {
  label: '平台',
  groups: {
    platform: 'RunFleet 平台',
    features: '核心功能',
  } satisfies Record<PlatformGroup, string>,
  promo: {
    title: '亲身体验 Fleet',
    description: '根据您的资产组合，为您量身定制平台导览。',
    action: { label: '预约演示', href: '/contact' } satisfies NavLink,
  },
}

export const pageActions = {
  primary: { label: '预约演示', href: '/contact' },
  secondary: { label: '探索平台', href: '/platform' },
} satisfies Record<string, NavLink>

export const sectionLabels = {
  features: '核心功能',
  useCases: '应用场景',
  related: '了解更多',
  relatedTitle: '探索 Fleet 平台的更多功能',
  learnMore: '了解更多',
}

export const cta = {
  title: '亲身体验 Fleet',
  description: '预约演示，了解 Fleet 如何将每个站点、每项资产和每张工单汇集到同一处。',
  primaryAction: { label: '预约演示', href: '/contact' },
  secondaryAction: { label: '联系我们的团队', href: '/contact' },
}

export const pages: {
  overview: PlatformEntry
  webAndMobile: PlatformEntry
  integrations: PlatformEntry
  runnerAi: PlatformEntry
  fleetMail: PlatformEntry
  workflowBuilder: PlatformEntry
  preventiveMaintenance: PlatformEntry
  reactiveMaintenance: PlatformEntry
} & Record<TemplatePageId, PlatformPageContent> = {
  overview: {
    label: '平台概览',
    summary: '一个平台，统一管理每个站点的维护、资产和运营。',
    meta: {
      title: '平台概览 | Fleet',
      description:
        'Fleet 是一体化维护与运营平台，专为跨多个物业管理资产的房地产、设施和运营团队打造。',
    },
  },
  webAndMobile: {
    label: '网页与移动端',
    summary: '在办公室或设备机房，随时掌控运营。',
    meta: {
      title: '网页与移动端 | Fleet',
      description:
        'Fleet 支持电脑、平板和手机，兼容 iOS 与 Android，让技术人员和管理者无论身在何处都共享同一份实时数据。',
    },
  },
  integrations: {
    label: '20+ 项集成',
    summary: '将 Fleet 与财务、ERP、门禁和楼宇系统相连。',
    meta: {
      title: '集成 | Fleet',
      description:
        'Fleet 通过 20 多项集成和 REST API 连接会计及应付应收系统、ERP、门禁、租户门户和楼宇管理系统。',
    },
  },
  runnerAi: {
    label: 'RunnerAI',
    summary: '可获取数据、创建任务、编辑工作流并生成看板的 AI。',
    meta: {
      title: 'RunnerAI | Fleet',
      description:
        'RunnerAI 是 Fleet 为房地产和设施团队打造的安全、基于规则的 AI：用文字创建工作流，按需生成看板，实现运营自动化。',
    },
  },
  fleetMail: {
    label: 'Fleet Mail',
    summary: '把邮件变成工单，并通过邮件让每个人掌握进展。',
    meta: {
      title: 'Fleet Mail | Fleet',
      description:
        'Fleet Mail 将租户和供应商的来信转为可追踪的工单，并通过邮件发送提醒、审批和通知。',
    },
  },
  workflowBuilder: {
    label: 'Fleet 工作流构建器',
    summary: '按照您的运营方式设计审批、分派和升级流程。',
    meta: {
      title: 'Fleet 工作流构建器 | Fleet',
      description:
        '借助 Fleet 可视化工作流构建器，让维护运营契合您的组织结构、审批链、供应商政策和费用阈值。',
    },
  },
  preventiveMaintenance: {
    label: '预防性与预测性维护',
    summary: '安排周期性工作，及早响应预警信号。',
    meta: {
      title: '预防性与预测性维护 | Fleet',
      description:
        '为每项资产安排预防性维护，并借助基于规则的预测在故障发生前采取行动，覆盖资产组合中的每个站点。',
    },
  },
  reactiveMaintenance: {
    label: '被动维修',
    summary: '快速记录、分派并解决计划外维修。',
    meta: {
      title: '被动维修 | Fleet',
      description:
        '借助移动端更新、智能分派和实时 SLA 追踪，从报修到解决全程跟进每个物业的临时维修。',
    },
  },
  analyticsReporting: {
    label: '分析与报表',
    summary: '面向各个层级的实时看板和可导出报表。',
    meta: {
      title: '分析与报表 | Fleet',
      description:
        '借助实时看板、自定义 KPI 以及工单量、响应时间、合规和成本的可导出报表，做出数据驱动的决策。',
    },
    eyebrow: '分析与报表',
    title: '做出更明智的运营决策',
    description:
      'Fleet 将日常维护转化为可执行的洞察，为每个团队、站点和资产提供实时看板和可导出报表。',
    highlights: ['实时看板', '自定义 KPI', '一键导出'],
    features: {
      title: '各个层级的洞察',
      description: '从单项资产到整个资产组合，看清现状并明确下一步重点。',
      items: [
        {
          title: '实时指标',
          description: '随时追踪工单量、响应时间、合规情况和成本的变化。',
        },
        {
          title: '自定义看板',
          description: '为每个部门和角色搭建视图，从技术人员到管理层。',
        },
        {
          title: '深入分析',
          description: '几次点击即可按楼宇、资产、供应商或团队查看绩效。',
        },
        {
          title: '预算追踪',
          description: '按成本中心查看支出，并与各站点预算对比。',
        },
        {
          title: '可导出报表',
          description: '随时导出用于审计、董事会或团队例会的报表。',
        },
        {
          title: 'AI 生成看板',
          description: '向 RunnerAI 提问，即可基于实时数据获得现成看板。',
        },
      ],
    },
    details: [
      {
        title: '看清绩效驱动因素',
        description: '直观了解哪些楼宇问题反复出现、哪些资产占用预算最多、哪些团队达成 SLA。',
        points: [
          '按站点和资产分析重复问题',
          '按团队和供应商查看 SLA 表现',
          '资产停机与生命周期洞察',
        ],
      },
      {
        title: '报表随时就绪',
        description: '按时以合适的格式，将正确的数据分享给正确的人。',
        points: ['通过邮件发送定期报表', '用于审计和董事会材料的导出', '资产组合整体管理摘要'],
      },
    ],
    useCases: {
      title: '报表实践',
      description: '房地产团队每周用 Fleet 回答的问题。',
      items: [
        '上季度哪些站点的空调停机最多',
        '各区域供应商响应时间如何对比',
        '今年哪些维护支出超出预算',
        '哪些资产需要纳入更换规划',
        '上线以来 SLA 达成率提升了多少',
      ],
    },
  },
  assetManagement: {
    label: '资产管理',
    summary: '每项资产的实时台账，包含历史、成本和文档。',
    meta: {
      title: '资产管理 | Fleet',
      description:
        '为所有物业中的每项资产建立实时数字台账，将维护历史、成本、保修和文档集中在一处。',
    },
    eyebrow: '资产管理',
    title: '全面掌握您管理的每一项资产',
    description:
      '从数十栋楼的空调系统到水泵、电梯和照明，Fleet 为您提供每项资产的实时台账，随时随地可查。',
    highlights: ['数字化资产档案', '完整维修历史', '保修到期提醒'],
    features: {
      title: 'Fleet 资产管理的核心功能',
      description: '让资产数据成为提升效率、编制预算和主动规划的引擎。',
      items: [
        {
          title: '数字化资产档案',
          description: '记录品牌、型号、序列号、位置、购买日期和保修信息。',
        },
        {
          title: '文件与文档',
          description: '为每项资产关联手册、照片、检查报告和证书。',
        },
        {
          title: '维修历史与成本',
          description: '查看资产组合中每项资产做过什么、频率如何、花费多少。',
        },
        {
          title: '位置与区域',
          description: '按楼宇、楼层、房间或区域组织资产，适合多站点运营。',
        },
        {
          title: '关联工单与预防性维护',
          description: '将每项资产与维护计划关联，自动生成预防性工单。',
        },
        {
          title: '生命周期与停机洞察',
          description: '发现表现不佳的设备，预测更换需求并规划资本支出。',
        },
      ],
    },
    details: [
      {
        title: '随时随地访问资产',
        description: '技术人员在现场调出资产信息，实时记录检查，并用手机添加照片和备注。',
        points: ['搜索或扫码打开任意资产', '现场记录检查结果', '历史记录即时同步给整个团队'],
      },
      {
        title: '更好的数据，带来更好的维护',
        description: '准确、条理清晰的资产信息能延长设备寿命，让预算更有把握。',
        points: ['保修和合同到期前提醒', '用于年度预算的资产绩效报告', '基于实际使用的更换预测'],
      },
    ],
    useCases: {
      title: '资产管理实践',
      description: '从房地产资产组合到连锁酒店，团队借助 Fleet 深入了解关键基础设施。',
      items: [
        '集中管理多栋商业楼宇的空调资产数据',
        '将特定资产分配给现场技术人员定期检查',
        '用照片记录和证书追踪电梯维护历史',
        '导出资产绩效报告用于年度预算',
        '保修或合同临近到期时收到提醒',
      ],
    },
  },
  documentManagement: {
    label: '文档管理',
    summary: '每份手册、许可证和证书，井然有序、随时备审。',
    meta: {
      title: '文档管理 | Fleet',
      description:
        '在一处存储、整理和检索手册、保修、许可证和检查报告，并关联到对应的资产、工单和站点。',
    },
    eyebrow: '文档管理',
    title: '将维护文件集中到一个智能中心',
    description: '保修、供应商合同、合规清单和作业规程集中在一处，与相关工作关联，需要时随手可得。',
    highlights: ['版本控制', '关联资产与工单', '可直接用于审计的导出'],
    features: {
      title: 'Fleet 文档管理的核心功能',
      description: '所有相关文档，在需要的地方触手可及。',
      items: [
        {
          title: '版本控制与审计记录',
          description: '查看谁在何时上传了什么，完整修改历史，轻松回滚。',
        },
        {
          title: '随处附加文件',
          description: '将文档关联到资产、工单、位置、供应商或用户。',
        },
        {
          title: '标签与分类',
          description: '按类型、站点、部门或资产类别标记文件，快速查找。',
        },
        {
          title: '基于角色的权限',
          description: '控制谁可以查看、上传或编辑每份文档，保护敏感文件。',
        },
        {
          title: '工单内查看文档',
          description: '技术人员可直接在工单中打开作业规程、安装指南和过往报告。',
        },
        {
          title: '导出与共享',
          description: '下载文档包，用于审计、供应商交接或内部审查。',
        },
      ],
    },
    details: [
      {
        title: '融入您的维护生态',
        description: '每个文件都可通过全局搜索找到，并与看板和报表相关联。',
        points: ['跨所有站点的全局搜索', '文档关联资产、工单和供应商', '存储内置于 Fleet'],
      },
      {
        title: '随时准备好接受检查',
        description: '证书、许可证和报告始终保持最新，到期前自动提醒。',
        points: ['追踪许可证和合同到期', '带时间戳的合规日志', '紧急情况或审计时快速调取'],
      },
    ],
    useCases: {
      title: '文档管理实践',
      description: '为管理多个站点、多类资产和承包商的忙碌团队打造。',
      items: [
        '上传电梯维护规程，供技术人员现场查阅',
        '将消防检查证书关联到合规工作流',
        '存储供应商合同并追踪到期日',
        '将预算审批附到工单上，实现完整追溯',
        '维护空调、给排水和照明系统的数字手册',
      ],
    },
  },
  auditTracking: {
    label: '审计追踪与检查',
    summary: '带时间戳的记录和检查，让每个站点随时备审。',
    meta: {
      title: '审计追踪与检查 | Fleet',
      description:
        '为每项操作保留带时间戳的详细日志，并以数字化方式开展检查，让每个站点随时应对安全检查和合规审计。',
    },
    eyebrow: '审计追踪与检查',
    title: '始终合规，责任清晰',
    description:
      'Fleet 记录何时、由谁完成了什么，并以数字化方式执行检查，让每个站点随时应对内部或外部审计。',
    highlights: ['带时间戳的日志', '数字化检查', '可导出的审计报告'],
    features: {
      title: '审计追踪的核心功能',
      description: '让审计准备融入日常运营，在后台自动完成。',
      items: [
        {
          title: '带时间戳的操作日志',
          description: '从创建工单到完成和评论，每项操作都自动记录。',
        },
        {
          title: '责任到人',
          description: '按用户或角色追踪操作，从技术人员关闭工单到经理审批费用。',
        },
        {
          title: '数字化检查',
          description: '在移动端执行检查清单，附照片、读数和签名。',
        },
        {
          title: '工单与资产级日志',
          description: '深入查看任意资产或工单的完整历史、成本和文档。',
        },
        {
          title: '可配置的审批',
          description: '设置必经检查点，让每个站点以相同方式执行合规步骤。',
        },
        {
          title: '可导出的审计报告',
          description: '几次点击即可生成任意时间段或资产类型的详细日志。',
        },
      ],
    },
    details: [
      {
        title: '每天都准备好接受审计',
        description: 'Fleet 在工作进行时同步整理记录，让检查周从容有序。',
        points: [
          '每条记录附带证书和合规表单',
          '检查结果关联资产和位置',
          '物业交接时提供完整的数字记录',
        ],
      },
      {
        title: '清楚掌控谁做什么',
        description: '基于角色的访问保护关键字段，同时让监督团队全面可见。',
        points: ['编辑权限仅限授权人员', '管理层和审计人员可查看', '附备注和版本历史的变更日志'],
      },
    ],
    useCases: {
      title: '审计追踪实践',
      description: '从一个站点到一百个站点，Fleet 帮您证明团队始终在做正确的事。',
      items: [
        '证明所有站点的例行检查均按时完成',
        '向监管机构展示消防维护历史',
        '查看谁批准了一项高额维修',
        '在物业交接时提供数字记录',
        '导出日志用于年度合规审查',
      ],
    },
  },
}

export const overview = {
  hero: {
    eyebrow: 'Fleet 平台',
    title: '专为房地产团队打造的一体化维护平台',
    description:
      '在一个专为房地产、设施和运营团队打造的云平台中，管理每个物业的工单、资产、供应商、文档与合规。',
    primaryAction: { label: '预约演示', href: '/contact' },
    secondaryAction: { label: '联系我们的团队', href: '/contact' },
  },
  quote: {
    text: 'Fleet 让我们的被动维修工作量减少了近 40%。技术人员、资产记录和工单终于集中在了一处。',
    author: '综合体项目物业运营负责人',
  },
  learnMore: '了解更多',
  modules: [
    {
      id: 'reactiveMaintenance',
      tag: '被动维修',
      title: '维修更快，租户更满意',
      description: '附照片和位置记录每个问题，交给合适的团队，并按 SLA 跟进直至完成。',
      points: [
        '按站点和工种派给内部团队或供应商',
        '实时 SLA 追踪，截止前自动提醒',
        '现场实时更新并上传照片凭证',
      ],
      visual: {
        kind: 'jobs',
        title: '工单',
        items: [
          {
            title: '3B 单元漏水',
            location: 'Bayview Residences',
            status: '逾期 2 天',
            tone: 'overdue',
          },
          {
            title: '装卸口门维修',
            location: 'Westport DC · 07 号口',
            status: '4 小时后到期',
            tone: 'due',
          },
          { title: '电梯告警复位', location: 'Tower B · 核心电梯', status: '处理中', tone: 'info' },
          { title: '2 层照明故障', location: 'Northgate Mall', status: '已完成', tone: 'done' },
        ],
      },
    },
    {
      id: 'assetManagement',
      tag: '资产管理',
      title: '每项资产，触手可及',
      description: '为整个资产组合中的每项资产建立实时数字台账，历史、成本、保修和文档一点即达。',
      points: [
        '包含品牌、型号、序列号和保修的数字档案',
        '每项资产的维修历史与成本',
        '用生命周期数据规划更换与资本支出',
      ],
      visual: {
        kind: 'asset',
        title: '资产档案',
        name: '冷水机组 CH-02',
        location: 'Harbour Point · B2 机房',
        status: '运行中',
        facts: [
          { label: '上次保养', value: '9 月 12 日' },
          { label: '保修至', value: '2028 年 3 月' },
          { label: '年内成本', value: '$4,210' },
          { label: '未完成工单', value: '1' },
        ],
      },
    },
    {
      id: 'analyticsReporting',
      tag: '分析与报表',
      title: '让数据转化为决策',
      description: '实时看板和可导出报表告诉您该关注哪里，从单项资产到整个资产组合。',
      points: [
        '实时查看工单量、响应时间、合规和成本',
        '按楼宇、资产、供应商或团队深入分析',
        '可直接用于审计和董事会的导出',
      ],
      visual: {
        kind: 'chart',
        title: '各站点维护支出',
        stats: [
          { label: 'SLA 达成', value: '96.4%' },
          { label: '年内支出', value: '$184k' },
        ],
        bars: [
          { label: 'Harbour Point', value: 82 },
          { label: 'Tower B', value: 64 },
          { label: 'Northgate', value: 48 },
          { label: 'Bayview', value: 36 },
          { label: 'Westport', value: 22 },
        ],
      },
    },
  ] satisfies OverviewModule[],
  darkModules: [
    {
      id: 'workflowBuilder',
      tag: 'Fleet 工作流构建器',
      title: '与团队和供应商协同一致',
      description: '按照您的运营方式设计审批、分派和升级流程，让每项任务在正确的时间到达正确的人。',
      points: [
        '按站点、资产类型或优先级条件分派',
        '按费用和紧急程度多级审批',
        '供应商通过简单链接即时接入',
      ],
      visual: {
        kind: 'steps',
        title: '工作流',
        steps: [
          { kind: '触发', text: '维修报价超过 5,000 美元' },
          { kind: '如果', text: '区域经理已批准' },
          { kind: '那么', text: '创建工单并通知供应商' },
        ],
      },
    },
    {
      id: 'auditTracking',
      tag: '审计追踪与检查',
      title: '随时迎接每一次审计',
      description: '带时间戳的记录和数字化检查，让每个站点保持合规，每项操作可追溯。',
      points: [
        '按用户和角色自动记录每项操作',
        '附照片和签名的数字化检查清单',
        '可导出任意时段或资产类型的日志',
      ],
      visual: {
        kind: 'log',
        title: '审计日志',
        entries: [
          { when: '09:42', who: 'Aisha K.', what: '完成了 A 楼梯间防火门检查' },
          { when: '09:15', who: '工作流', what: '为 WO-2291 发起审批' },
          { when: '08:58', who: 'Marco L.', what: '上传了 Tower B 电梯证书' },
        ],
      },
    },
    {
      id: 'preventiveMaintenance',
      tag: '预防性与预测性维护',
      title: '今天就解决明天的问题',
      description: '周期性计划和基于规则的预测让设备持续运行，帮助团队及早行动。',
      points: [
        '自动生成暖通、给排水、电梯和消防的预防性工单',
        '预测性预警关联触发它的规则',
        '合规日历在每个到期日前提醒',
      ],
      visual: {
        kind: 'jobs',
        title: '计划工单',
        items: [
          {
            title: '更换空调滤网',
            location: 'Tower B · AHU-07',
            status: '4 小时后到期',
            tone: 'due',
          },
          { title: '电梯年检', location: '电梯 L1–L3', status: '已排期', tone: 'info' },
          { title: '应急照明测试', location: 'Northgate Mall', status: '已完成', tone: 'done' },
        ],
      },
    },
    {
      id: 'documentManagement',
      tag: '文档管理',
      title: '每份文件都在需要的地方',
      description: '手册、许可证、证书和合同井然有序，与相关工作关联，随时备查。',
      points: [
        '文档关联资产、工单、位置和供应商',
        '版本控制与完整修改历史',
        '许可证和合同到期前提醒',
      ],
      visual: {
        kind: 'files',
        title: '文档',
        items: [
          {
            title: '消防安全证书.pdf',
            location: 'Tower B · 许可证',
            status: '30 天后到期',
            tone: 'due',
          },
          {
            title: 'CH-02 运维手册.pdf',
            location: '冷水机组 CH-02 · 手册',
            status: '已关联',
            tone: 'info',
          },
          { title: 'Q3 电梯检查.pdf', location: '核心电梯 · 报告', status: '已核验', tone: 'done' },
        ],
      },
    },
  ] satisfies OverviewModule[],
  extend: {
    title: '按您的方式扩展 Fleet',
    description: '连接现有工具，让 AI 和邮件服务于整个运营。',
    items: [
      {
        id: 'integrations',
        title: '20+ 项集成',
        description: '通过现成集成和 REST API 连接财务、ERP、门禁、租户门户和楼宇系统。',
        action: '查看集成',
      },
      {
        id: 'runnerAi',
        title: 'RunnerAI',
        description: '在安全隔离的服务器上，用自然语言指令创建工作流和看板。',
        action: '了解 RunnerAI',
      },
      {
        id: 'fleetMail',
        title: 'Fleet Mail',
        description: '将来信转为可追踪的工单，并通过邮件让员工和供应商掌握进展。',
        action: '探索 Fleet Mail',
      },
    ] satisfies { id: PlatformDetailId; title: string; description: string; action: string }[],
  },
  audiences: {
    eyebrow: '网页与移动端',
    title: '人人适用的平台',
    description:
      'Fleet 支持电脑、平板和手机，提供 iOS 和 Android 应用，让每个人都能以合适的视角查看同一份实时数据。',
    action: { label: '探索网页与移动端', href: '/platform/web-and-mobile' },
    items: [
      {
        title: '面向管理者',
        description: '在实时看板上排程、审批费用并掌握每个站点。',
        screen: '资产组合 · 14 个站点',
        tasks: [
          { title: '审批维修报价', location: 'Harbour Point', status: '今天到期', tone: 'due' },
          { title: '9 月 SLA 报告', location: '所有区域', status: '已就绪', tone: 'done' },
        ],
      },
      {
        title: '面向现场团队',
        description: '在现场通过照片、检查清单和签名开始、更新并关闭工单。',
        screen: '今天 · 4 项任务',
        tasks: [
          { title: '防火门检查', location: '3 层 · A 楼梯间', status: '2 小时后到期', tone: 'due' },
          { title: '锅炉年度保养', location: 'B2 机房', status: '已排期', tone: 'info' },
        ],
      },
      {
        title: '面向租户和供应商',
        description: '附照片提交请求、接收进展，并通过简单链接查看分配的工单。',
        screen: '我的请求',
        tasks: [
          { title: '空调制冷不足', location: '1204 单元', status: '已分派', tone: 'info' },
          { title: '厨房水龙头漏水', location: '1204 单元', status: '已解决', tone: 'done' },
        ],
      },
    ] satisfies { title: string; description: string; screen: string; tasks: StatusItem[] }[],
  },
  why: {
    eyebrow: '为什么选择 Fleet',
    title: '为房地产打造，由专业团队支持',
    description:
      'Fleet 专为多站点房地产团队打造，上线迅速、按用量透明计费，并提供熟悉您所在区域的支持。',
    stats: [
      { value: '多达 40%', label: '被动维修减少' },
      { value: '7 天内', label: '团队即可上线' },
      { value: '99.99%', label: '可用性，SLA 保障' },
    ],
    points: [
      { title: '为多站点团队打造', description: '按物业、区域或资产组合设定规则、报表和权限。' },
      { title: '安全设计', description: '基于角色的访问、加密存储和完整的审计记录。' },
      {
        title: '及时的本地化支持',
        description: '通过在线聊天联系我们的团队，大多数请求一小时内回复。',
      },
    ],
  },
  industries: {
    eyebrow: '行业',
    title: '适用于各类物业的解决方案',
    items: [
      '购物中心与零售',
      '酒店与餐饮',
      '航运与物流',
      '住宅社区',
      '商业办公',
      '综合体项目',
      '学校与园区',
      '车队',
    ],
  },
}

export const webMobile = {
  hero: {
    eyebrow: '网页与移动端',
    title: '在每块屏幕上掌控运营',
    description:
      'Fleet 可在浏览器以及 iOS 和 Android 上运行：管理者在电脑前规划，技术人员在现场实时更新工单。',
    primaryAction: { label: '预约演示', href: '/contact' },
    highlights: ['iOS 与 Android', '支持任意浏览器', '实时同步'],
  },
  devices: {
    url: 'app.runfleet.com',
    greeting: '欢迎，John S.',
    scope: '资产组合 · 14 个站点',
    stats: [
      { label: '未完成工单', value: '128' },
      { label: 'SLA 达成', value: '96.4%' },
      { label: '待预防维护', value: '37' },
    ],
    listTitle: '工单',
    items: [
      {
        title: '冷水机组低压告警',
        location: 'Harbour Point · 机房',
        status: '逾期 2 天',
        tone: 'overdue',
      },
      { title: '更换空调滤网', location: 'Tower B · 14 层', status: '4 小时后到期', tone: 'due' },
      { title: '装卸口门维修', location: 'Westport DC · 07 号口', status: '已完成', tone: 'done' },
    ] satisfies StatusItem[],
    phoneTitle: '今天 · 4 项任务',
    phoneItems: [
      { title: '防火门检查', location: '3 层 · A 楼梯间', status: '2 小时后到期', tone: 'due' },
      { title: '锅炉年度保养', location: 'B2 机房', status: '已排期', tone: 'info' },
    ] satisfies StatusItem[],
    phoneActions: ['开始', '添加照片'],
  },
  audiences: {
    eyebrow: '人人适用的平台',
    title: '让维护运营更顺畅',
    description:
      'Fleet 连接运营中的每个人，为管理者、现场团队、租户和供应商提供量身定制的网页与移动端视图。',
  },
  rows: [
    {
      tag: '掌控',
      title: '在任何屏幕上全面掌握',
      description: '在电脑或手机上跟进每个站点、团队和供应商，工作一有变化，实时数据随即更新。',
      points: [
        '工单量、SLA 和成本的实时看板',
        '随时随地处理审批和提醒',
        '电脑、平板和手机上的数据完全一致',
      ],
      visual: {
        kind: 'chart',
        title: '资产组合一览',
        stats: [
          { label: 'SLA 达成', value: '96.4%' },
          { label: '未完成工单', value: '128' },
        ],
        bars: [
          { label: 'Harbour Point', value: 46 },
          { label: 'Tower B', value: 28 },
          { label: 'Northgate', value: 19 },
          { label: 'Bayview', value: 12 },
          { label: 'Westport', value: 7 },
        ],
      },
    },
    {
      tag: '现场资产',
      title: '扫一扫，打开任意资产',
      description: '扫描或搜索资产，几秒内即可在工作现场打开手册、历史记录和未完成工单。',
      points: [
        '现场查看资产信息、手册和历史',
        '附照片和读数记录检查结果',
        '历史记录即时同步给整个团队',
      ],
      visual: {
        kind: 'asset',
        title: '已扫描资产',
        name: '冷水机组 CH-02',
        location: 'Harbour Point · B2 机房',
        status: '运行中',
        facts: [
          { label: '上次保养', value: '9 月 12 日' },
          { label: '保修至', value: '2028 年 3 月' },
          { label: '手册', value: '运维手册.pdf' },
          { label: '未完成工单', value: '1' },
        ],
      },
    },
    {
      tag: '沟通',
      title: '与团队和租户清晰沟通',
      description: '请求附带照片和位置，所有相关人员都能在同一张工单上看到进展和回复。',
      points: [
        '租户可在任何设备上附照片提交请求',
        '更新和回复保存在工单历史中',
        '每次派单和完工都有通知',
      ],
      visual: {
        kind: 'chat',
        title: '请求 · 1204 单元',
        request: {
          title: '空调制冷不足',
          location: 'Bayview Residences · 1204 单元',
          status: '已分派',
          tone: 'info',
        },
        messages: [
          { from: '租户', text: '客厅的空调从今天早上开始一直吹热风。', time: '09:12', own: false },
          { from: 'Aisha K.', text: '谢谢您的照片，我 11:00 过去检查。', time: '09:20', own: true },
          { from: '租户', text: '好的，谢谢。', time: '09:21', own: false },
        ],
      },
    },
  ] satisfies Omit<OverviewModule, 'id'>[],
  field: {
    eyebrow: '为现场而生',
    title: '地下室、机房和偏远站点都能流畅使用',
    description:
      'Fleet 在弱网环境下依然快速流畅，技术人员无论身在何处都能更新工单、添加照片并完成工作。',
  },
  stories: {
    eyebrow: '客户故事',
    title: '听听房地产团队怎么说',
    items: [
      {
        quote:
          'Fleet 让我们的被动维修工作量减少了近 40%。技术人员、资产记录和工单终于集中在了一处。',
        author: '物业运营负责人',
        company: '综合体项目',
      },
      {
        quote:
          '其他平台对我们来说过于复杂或过于通用。Fleet 为我们提供了量身打造的方案和更快的支持。',
        author: '维护总监',
        company: '物流中心',
      },
    ],
  },
}

export const integrationsPage = {
  hero: {
    eyebrow: '集成',
    title: '将 Fleet 连接到您已在使用的工具',
    description:
      'Fleet 通过 20 多项集成和开放的 REST API 融入您的技术体系，让财务、楼宇和租户系统基于同一份实时数据工作。',
    primaryAction: { label: '预约演示', href: '/contact' },
    highlights: ['20+ 项集成', '开放 REST API', '专人协助配置'],
  },
  featured: {
    eyebrow: '亮点',
    title: '精选集成',
    items: [
      {
        icon: 'accounting',
        title: '会计与应付应收',
        description: '已审批的费用和发票直接进入财务系统，从首次报价到最终付款，预算始终准确。',
      },
      {
        icon: 'bms',
        title: '楼宇管理系统',
        description: 'BMS 告警和读数自动生成工单，让合适的团队在恰当时机行动。',
      },
      {
        icon: 'api',
        title: 'REST API',
        description: '通过有文档、安全且符合 IT 治理要求的 REST API 连接任何系统。',
      },
    ] satisfies { icon: IntegrationIcon; title: string; description: string }[],
    action: { label: '联系我们的团队', href: '/contact' },
  },
  directory: {
    title: '全部集成',
    searchLabel: '搜索集成',
    searchPlaceholder: '按系统或用途搜索',
    filterLabel: '类别',
    all: '全部',
    results: '{count} 项集成',
    empty: '试试其他关键词或类别，或与我们的团队聊聊您的系统。',
    action: { label: '联系我们的团队', href: '/contact' },
    categories: {
      finance: '财务',
      operations: '运营',
      building: '楼宇系统',
      tenants: '租户与沟通',
      developers: '开发者',
    } satisfies Record<IntegrationCategory, string>,
    items: [
      {
        icon: 'accounting',
        category: 'finance',
        title: '会计软件',
        description: '与会计系统同步已审批的费用和发票，保持预算准确。',
      },
      {
        icon: 'apAr',
        category: 'finance',
        title: '应付应收系统',
        description: '将已审批的维修费用直接送入应付和应收流程。',
      },
      {
        icon: 'finance',
        category: 'finance',
        title: '财务工具',
        description: '按楼宇、资产和供应商追踪维护支出，并与财务报表并列查看。',
      },
      {
        icon: 'erp',
        category: 'operations',
        title: 'ERP 软件',
        description: '与 ERP 共享资产、供应商和采购数据，实现统一报表。',
      },
      {
        icon: 'vendors',
        category: 'operations',
        title: '供应商门户',
        description: '让供应商信息、工单和文档与承包商使用的门户保持同步。',
      },
      {
        icon: 'access',
        category: 'building',
        title: '门禁系统',
        description: '自动记录现场到访和供应商出勤。',
      },
      {
        icon: 'bms',
        category: 'building',
        title: '楼宇管理系统',
        description: '在恰当时机将 BMS 告警和读数转为工单。',
      },
      {
        icon: 'tenants',
        category: 'tenants',
        title: '租户门户',
        description: '将租户请求记录为可追踪的工单，并向使用者同步进展。',
      },
      {
        icon: 'email',
        category: 'tenants',
        title: 'Fleet Mail 邮件',
        description: '将来信转为工单，并通过邮件发送更新和审批。',
      },
      {
        icon: 'api',
        category: 'developers',
        title: 'REST API',
        description: '通过有文档、安全的 REST API 与任何系统建立自定义连接。',
      },
    ] satisfies IntegrationItem[],
  },
  cta: {
    eyebrow: '开始使用',
    title: '准备好连接您的系统了吗？',
    description: '告诉我们您目前使用的系统，我们的团队会在上线期间规划 Fleet 与它们的连接方式。',
    action: { label: '预约演示', href: '/contact' },
    panelTitle: '已连接的系统',
    panelItems: [
      { title: '会计软件', location: '财务', status: '已连接', tone: 'done' },
      { title: '楼宇管理系统', location: '楼宇系统', status: '已连接', tone: 'done' },
      { title: '租户门户', location: '租户', status: '已连接', tone: 'done' },
      { title: 'ERP 软件', location: '运营', status: '配置中', tone: 'info' },
    ] satisfies StatusItem[],
  },
}

export const runnerAiPage = {
  hero: {
    eyebrow: 'RunnerAI',
    title: '驱动运营的智能',
    description:
      'RunnerAI 是 Fleet 为房地产和设施团队打造的安全、基于规则的 AI。输入您的需求，它就能为每个站点获取数据、创建任务、编辑工作流并生成看板。',
    primaryAction: { label: '预约演示', href: '/contact' },
    secondaryAction: { label: '咨询我们的专家', href: '/contact' },
    demo: {
      title: 'RunnerAI',
      context: '实时数据 · 14 个站点',
      prompt: '为每个美食广场设置每周清洁消毒流程，并由主管审批。',
      reply: '已完成。我为 4 个购物中心的 9 个美食广场创建了工作流。',
      steps: [
        { kind: '每周', text: '周一 06:00' },
        { kind: '然后', text: '为每个美食广场创建清洁检查清单' },
        { kind: '然后', text: '请主管附照片审批' },
      ],
      action: '部署到 9 个站点',
    },
  },
  challenge: {
    pressure: {
      title: '多站点运营节奏飞快',
      description:
        '零售门店、购物中心、物流枢纽和综合体项目涉及成千上万的环节，从维护、合规到报表和资产。',
      points: ['跨区域的数千项任务', '每个站点的本地规则', '分散在各团队的数据'],
    },
    answer: {
      title: 'RunnerAI 紧跟节奏',
      description: 'RunnerAI 预判下一步、规范工作流并即时呈现关键洞察，让团队把更多时间投入运营。',
    },
  },
  capabilities: {
    title: '帮助您提前规划的智能',
    description: 'RunnerAI 以四种方式助力团队，全部通过自然语言指令完成。',
    tabs: [
      {
        icon: 'data',
        label: '数据获取',
        title: '从实时数据中获得答案',
        description:
          '用自然语言提问，RunnerAI 从您的实时运营数据中获取答案，并附上相关的工单和资产。',
        points: ['询问成本、SLA、资产和供应商', '答案来自所有站点的实时数据', '每个答案都标注来源'],
        visual: {
          kind: 'chat',
          title: '向 RunnerAI 提问',
          request: {
            title: '实时数据 · 14 个站点',
            location: '来源：86 张工单 · 14 项资产',
            status: '已回答',
            tone: 'done',
          },
          messages: [
            {
              from: '您',
              text: '本月有哪些冷水机组需要保养？',
              time: '09:12',
              own: true,
            },
            {
              from: 'RunnerAI',
              text: '3 个站点共有 6 台冷水机组到期。Harbour Point 有 3 台，其中 CH-02 于 10 月 14 日到期。',
              time: '09:12',
              own: false,
            },
          ],
        },
      },
      {
        icon: 'tasks',
        label: '任务创建',
        title: '一句话创建任务',
        description:
          '描述工作内容，RunnerAI 即可创建工单或任务，并填写对应的资产、位置、负责人和截止日期。',
        points: [
          '用自然语言创建工单和任务',
          '分派给合适的团队或供应商',
          '自动添加检查清单、资产和截止日期',
        ],
        visual: {
          kind: 'jobs',
          title: 'RunnerAI 创建的任务',
          items: [
            {
              title: '检查 AHU-07 振动',
              location: 'Tower B · 14 层 · Aisha K.',
              status: '明天到期',
              tone: 'due',
            },
            {
              title: '更换大堂灯具',
              location: 'Bayview Residences · Marco L.',
              status: '已分派',
              tone: 'info',
            },
            {
              title: '防火门季度检查',
              location: 'Northgate Mall · 12 扇门',
              status: '已排期',
              tone: 'info',
            },
          ],
        },
      },
      {
        icon: 'workflows',
        label: '工作流编辑',
        title: '几秒内编辑工作流',
        description:
          '告诉 RunnerAI 要修改什么，它会更新步骤、触发条件和规则，并将更改部署到全部站点或选定区域。',
        points: [
          '用文字修改步骤、触发条件和规则',
          '将更新部署到全部或选定区域',
          '每次修改都有记录、可追溯',
        ],
        visual: {
          kind: 'steps',
          title: '工作流已更新',
          steps: [
            {
              kind: '触发',
              text: '收到维修报价',
            },
            {
              kind: '如果',
              text: '费用超过 3,000 美元（原为 5,000 美元）',
            },
            {
              kind: '那么',
              text: '请区域经理审批',
            },
          ],
        },
      },
      {
        icon: 'dashboards',
        label: '看板创建',
        title: '按需生成看板',
        description: '提出任意视图需求，RunnerAI 几秒内即基于实时运营数据生成，可直接分享或固定。',
        points: ['工单趋势与积压汇总', '供应商绩效与区域对比', '资产组合整体管理摘要'],
        visual: {
          kind: 'chart',
          title: '工单积压 · 30 天',
          stats: [
            {
              label: '未完成',
              value: '128',
            },
            {
              label: '已关闭',
              value: '412',
            },
          ],
          bars: [
            {
              label: 'Harbour Point',
              value: 34,
            },
            {
              label: 'Tower B',
              value: 27,
            },
            {
              label: 'Northgate',
              value: 25,
            },
            {
              label: 'Bayview',
              value: 22,
            },
            {
              label: 'Westport',
              value: 20,
            },
          ],
        },
      },
    ] satisfies (Omit<OverviewModule, 'id' | 'tag'> & { icon: RunnerAiIcon; label: string })[],
  },
  steps: {
    eyebrow: '工作原理',
    title: '从需求到运行中的工作流',
    items: [
      { title: '提出', description: '用自然语言说明需求，从新的例行流程到资产组合报告。' },
      { title: '构建', description: 'RunnerAI 基于您的数据和行业标准构建工作流或看板。' },
      { title: '部署', description: '即时部署到每个站点或选定区域，并适配当地规则。' },
      {
        title: '优化',
        description: '实时洞察和可追溯的预测指明调整方向，让每个站点遵循同一套标准。',
      },
    ],
  },
  rows: [
    {
      tag: '效率',
      title: '更少行政工作，更多运营时间',
      description: 'RunnerAI 自动创建和调整维护、合规、报表和资产管理背后的工作流。',
      points: ['用简单指令取代手动配置', '每个物业遵循同一套标准', '把更多时间留给现场工作'],
      visual: {
        kind: 'log',
        title: 'RunnerAI 动态',
        entries: [
          { when: '09:42', who: 'RunnerAI', what: '更新了阿联酋 4 个站点的检查工作流' },
          { when: '09:15', who: 'RunnerAI', what: '创建了每周供应商绩效看板' },
          { when: '08:58', who: 'RunnerAI', what: '为 6 台新冷水机组推荐了预防性维护计划' },
        ],
      },
    },
    {
      tag: '决策',
      title: '更快做出更好的决策',
      description: '提出问题即可获得实时答案，让管理层和现场团队基于最新数据从容行动。',
      points: ['答案来自您的实时运营数据', '按需获取停机和预算洞察', '几秒内完成区域对比'],
      visual: {
        kind: 'chart',
        title: '供应商绩效 · 阿联酋',
        stats: [
          { label: '按时完成', value: '94%' },
          { label: '平均响应', value: '2.4 小时' },
        ],
        bars: [
          { label: '暖通供应商', value: 96 },
          { label: '电梯供应商', value: 91 },
          { label: '电气供应商', value: 87 },
          { label: '给排水供应商', value: 82 },
        ],
      },
    },
    {
      tag: '可视化',
      title: '清晰掌握每个站点',
      description: '资产组合层面的摘要将运营的过去、现在和未来汇集在一处。',
      points: ['工单趋势与资产停机分析', '按站点的合规风险评分', '预算与预防性维护洞察'],
      visual: {
        kind: 'jobs',
        title: '前十购物中心 · 风险',
        items: [
          {
            title: 'Northgate Mall',
            location: '3 项合规事项待处理',
            status: '待复核',
            tone: 'due',
          },
          { title: 'Harbour Point', location: '所有检查已完成', status: '正常', tone: 'done' },
          {
            title: 'Marina Walk',
            location: '1 项资产接近使用寿命',
            status: '待规划',
            tone: 'info',
          },
        ],
      },
    },
  ] satisfies Omit<OverviewModule, 'id'>[],
  rules: {
    eyebrow: '基于规则的设计',
    title: '由您的规则塑造的智能',
    description: 'RunnerAI 在您设定的规则范围内运行，每项操作都可追溯、合规，并符合企业标准。',
    action: { label: '咨询我们的专家', href: '/contact' },
  },
  security: {
    eyebrow: '安全的 AI 框架',
    title: '在您边界内运行的 AI',
    description: 'RunnerAI 运行在为每位客户专属部署的服务器上，敏感信息始终留在您的组织内部。',
    items: [
      { title: '隔离计算', description: '每个组织都有独立环境。' },
      { title: '数据加密', description: '传输与存储全程加密。' },
      { title: '完整审计记录', description: '每项 AI 生成的操作都有记录、可追溯。' },
      { title: '灵活部署', description: '云端、本地或混合部署，支持 GDPR、PDPL 和 PDPA。' },
    ],
  },
  industries: {
    title: '适用于各类物业的解决方案',
    description: '从零售资产组合到物流枢纽，RunnerAI 适配您的资产和市场。',
  },
  integrate: {
    title: '为集成而生',
    description: 'RunnerAI 依托 Fleet 的 20 多项集成，结合财务、楼宇和租户数据，呈现完整全貌。',
    action: { label: '查看全部集成', href: '/platform/integrations' },
  },
}

export const fleetMailPage = {
  hero: {
    eyebrow: 'Fleet Mail',
    title: '每一封邮件，都是一张可追踪的工单',
    description:
      'Fleet Mail 在租户和供应商的请求到达时即刻生成工单，并通过自动邮件让每个人随时了解进展。',
    primaryAction: { label: '预约演示', href: '/contact' },
    secondaryAction: { label: '联系我们的团队', href: '/contact' },
    hub: { center: 'Fleet Mail', nodes: ['租户', '供应商', '技术人员', '管理者'] },
  },
  challenge: {
    pressure: {
      title: '请求来自四面八方',
      description:
        '租户、供应商和员工把请求、报价和更新发送到共享邮箱，每封邮件都承载着工单的一部分。',
      points: ['租户请求', '供应商报价', '共享邮箱'],
    },
    answer: {
      title: 'Fleet Mail 将它们汇聚一处',
      description:
        '每封邮件都成为同一份结构化记录的一部分，分派给合适的团队，并让每个人掌握最新进展。',
    },
  },
  intro: {
    title: '每段沟通顺畅推进，尽在一处',
    description:
      '请求、回复和审批都汇入整个团队可见的同一份记录，租户和供应商则继续使用熟悉的邮件。',
  },
  rows: [
    {
      tag: '共享邮箱',
      title: '井然有序的队列',
      description: '共享邮箱变成有序队列，每个请求都被记录、排定优先级并分派。',
      points: [
        '每个请求都记录发件人、附件和位置',
        '重复请求自动合并为一张工单',
        '按 SLA 追踪响应时间',
      ],
      visual: {
        kind: 'jobs',
        title: 'maintenance@ · 今天',
        items: [
          {
            title: '大堂灯不亮',
            location: '来自：1204 单元租户',
            status: '已创建工单',
            tone: 'info',
          },
          {
            title: '冷水机组保养报价',
            location: '来自：暖通供应商',
            status: '待审批',
            tone: 'due',
          },
          {
            title: '回复：厨房水龙头漏水',
            location: '来自：802 单元租户',
            status: '已解决',
            tone: 'done',
          },
        ],
      },
    },
    {
      tag: '邮件转工单',
      title: '请求即刻变为工单',
      description: '每封邮件都会生成工单，每条回复都会追加到工单历史，完整沟通始终有上下文。',
      points: ['照片和文档附在工单上', '按站点、类别和优先级智能分派', '回复自动保存到工单历史'],
      visual: {
        kind: 'chat',
        title: 'WO-2318 · 邮件往来',
        request: {
          title: '大堂灯不亮',
          location: 'Bayview Residences · 大堂',
          status: '已分派',
          tone: 'info',
        },
        messages: [
          { from: '租户', text: '大堂的主灯今晚不亮了。', time: '18:04', own: false },
          {
            from: 'Fleet Mail',
            text: '谢谢。工单 WO-2318 已创建并分派给 Marco L.。',
            time: '18:04',
            own: true,
          },
          { from: 'Marco L.', text: '已更换灯具，照片见附件。', time: '09:30', own: true },
        ],
      },
    },
    {
      tag: '审批',
      title: '一键审批',
      description: '管理者直接在邮件中批准或驳回费用，工单随即自动推进。',
      points: ['审批请求发送给对应审批人', '在收件箱中一键批准或驳回', '每项决定都记录在工单上'],
      visual: {
        kind: 'steps',
        title: '邮件审批',
        steps: [
          { kind: '邮件', text: '收到供应商报价：$3,800' },
          { kind: '审批', text: '财务经理在收件箱中批准' },
          { kind: '然后', text: '通知供应商并安排工单' },
        ],
      },
    },
    {
      tag: '更新',
      title: '每个人都掌握进展',
      description: 'Fleet 在恰当时机发送恰当的消息，让团队、供应商和租户始终清楚下一步。',
      points: ['派单与截止日期通知', '临近期限时自动升级', '附照片凭证的完工总结'],
      visual: {
        kind: 'log',
        title: '今日已发送邮件',
        entries: [
          { when: '09:31', who: '1204 单元租户', what: '收到附照片的完工总结' },
          { when: '08:00', who: 'Marco L.', what: '收到今天的 4 项任务' },
          { when: '07:45', who: '区域经理', what: '收到每周逾期工单摘要' },
        ],
      },
    },
  ] satisfies Omit<OverviewModule, 'id'>[],
  flow: {
    eyebrow: '工作原理',
    title: '从收件箱到工单解决',
    items: [
      { title: '接收', description: '租户和供应商照常发送邮件到您的维护邮箱。' },
      { title: '创建', description: 'Fleet Mail 将每封邮件转为附带照片和位置的工单。' },
      { title: '分派', description: '工单按站点、类别和优先级分派给合适的团队或供应商。' },
      { title: '通知', description: '每个人都会自动收到进展、审批和完工邮件。' },
    ],
  },
  banner: {
    eyebrow: '适合每位发件人',
    title: '人人适用的邮件体验',
    description: '租户和供应商继续使用熟悉的邮件，您的团队则基于结构化、可追踪的记录工作。',
    action: { label: '联系我们的团队', href: '/contact' },
  },
  connect: {
    title: '连接整个运营',
    description:
      'Fleet Mail 是 Fleet 平台的一部分，每封邮件都与您的资产、文档、工作流和报表相关联。',
    items: [
      {
        title: '所有人基于同一份记录',
        description: '租户、供应商和员工跟进同一张工单，每条消息都有上下文。',
      },
      { title: '清楚掌握每个请求', description: '查看所有站点的请求量、响应时间和未完成请求。' },
      {
        title: '把时间留给真正的工作',
        description: '自动记录和更新为团队节省时间，专注现场工作。',
      },
    ],
  },
  industries: {
    title: '适用于各类物业的解决方案',
    description: '从住宅社区到物流枢纽，Fleet Mail 适配每个物业的沟通方式。',
  },
  integrate: {
    title: '为集成而生',
    description: 'Fleet Mail 与 Fleet 的 20 多项集成协同工作，包括租户门户、财务工具和楼宇系统。',
    action: { label: '查看全部集成', href: '/platform/integrations' },
  },
}

export const workflowBuilderPage = {
  hero: {
    eyebrow: 'Fleet 工作流构建器',
    title: '贴合您运营方式的工作流',
    description:
      '通过人人都能上手的可视化构建器，让维护运营契合您的组织结构、审批链、供应商政策和费用阈值。',
    primaryAction: { label: '预约演示', href: '/contact' },
    highlights: ['可视化构建器', '多级审批', '首周即可上线'],
  },
  build: {
    eyebrow: 'Fleet 工作流构建器',
    title: '打造属于您的 Fleet',
    description: '由您定义流程，Fleet 负责执行，让任务每次都在正确的时间到达正确的人。',
    helpTitle: '我们协助您梳理每个流程',
    helpDescription: '我们的上线团队会在第一周与您一起，把审批、分派和升级流程配置到 Fleet。',
    action: { label: '联系我们的团队', href: '/contact' },
    center: '工作流',
    nodes: ['审批', '分派', '升级', '通知', '角色', '站点'],
  },
  panels: {
    blocks: {
      title: '所有构建模块，集中一处',
      description: '组合触发条件、规则和操作，匹配每个站点的标准作业流程。',
      panelTitle: '工作流构建模块',
      status: '已添加',
      items: [
        { title: '触发', description: '新请求、费用超出阈值或期限临近' },
        { title: '条件', description: '站点、资产类型、优先级、供应商或费用' },
        { title: '审批', description: '主管、管理层或财务审批' },
        { title: '操作', description: '分派、通知、升级或创建工单' },
      ],
    },
    integrations: {
      title: '集成是关键',
      description: '工作流作用于文档、资产、权限和供应商，并连接财务、楼宇和租户系统。',
      panelTitle: '与您的工作流相连',
      action: { label: '查看集成', href: '/platform/integrations' },
      items: [
        { title: '会计软件', location: '已审批费用自动同步', status: '已连接', tone: 'done' },
        { title: '楼宇管理系统', location: '告警触发工作流', status: '已连接', tone: 'done' },
        { title: 'Fleet Mail', location: '邮件审批', status: '已连接', tone: 'done' },
      ] satisfies StatusItem[],
    },
  },
  templates: {
    title: '所有流程，尽在一个平台',
    description: '从常见流程的现成工作流起步，再按您的站点、角色和阈值逐一调整。',
    tag: '模板',
    items: [
      { title: '超过 5,000 美元需审批', description: '排期前需主管批准' },
      { title: '按楼宇分派供应商', description: 'A 楼给排水交给供应商，B 楼由内部团队处理' },
      { title: '预防性与被动维修分流', description: '预防性交给专职人员，被动维修交给综合团队' },
      { title: 'SLA 期限提醒', description: '期限临近时提醒区域经理' },
      { title: '租户入驻', description: '检查、资产核查和文档' },
      { title: '合规文档核查', description: '关闭前须附上必需文档' },
    ],
  },
  benefits: {
    learnMore: '了解更多',
    items: [
      {
        href: '/features/audit-tracking',
        title: '一致性',
        description: '每张工单遵循相同步骤，运营准确且合规。',
      },
      {
        href: '/features/reactive-maintenance',
        title: '效率',
        description: '可复用的逻辑减少从创建到关闭的人工交接。',
      },
      {
        href: '/features/analytics-and-reporting',
        title: '洞察',
        description: '结构化的工作流带来更干净的数据和更有价值的报表。',
      },
    ],
  },
}

export const preventivePage = {
  hero: {
    eyebrow: '预防性与预测性维护',
    title: '始终领先于每一次故障',
    description:
      '为每项资产规划周期性维护，依据基于规则的预测及早行动，让每个站点的设备持续运行，被动维修减少多达 40%。',
    primaryAction: { label: '预约演示', href: '/contact' },
    secondaryAction: { label: '探索平台', href: '/platform' },
    highlights: ['周期性计划', '基于规则的预测', '合规日历'],
    prediction: {
      title: 'Fleet 预测',
      asset: 'AHU-07 · Tower B, 14 层',
      risk: '高风险',
      message: '振动已连续 9 天高于基线。请在 7 天内安排维护。',
      action: '创建工单',
    },
  },
  challenge: {
    pressure: {
      title: '每项资产都有自己的节奏',
      description: '暖通、电梯、给排水、照明和消防在每个站点都有各自的计划、检查清单和合规日期。',
      points: ['周期性计划', '法定检查', '多个站点'],
    },
    answer: {
      title: 'Fleet 让每个计划按时推进',
      description: 'Fleet 将维护计划变为自动排程，并借助实时数据告诉您下一步该在哪里行动。',
    },
  },
  capabilities: {
    title: '更智能地运行预防性维护计划',
    description: '从周期性排程到可追溯的预测，整个计划尽在一个平台。',
    tabs: [
      {
        icon: 'schedules',
        label: '排程',
        title: '周期性维护计划',
        description: '按时间或使用量为暖通、给排水、照明、电梯和消防安排预防性任务。',
        points: [
          '按时间和按使用量排程',
          '各类资产的最佳实践检查清单',
          '在技术人员和供应商之间均衡工作量',
        ],
        visual: {
          kind: 'jobs',
          title: '计划工单 · 本周',
          items: [
            {
              title: '更换空调滤网',
              location: 'Tower B · AHU-07',
              status: '4 小时后到期',
              tone: 'due',
            },
            { title: '电梯年检', location: '电梯 L1–L3', status: '已排期', tone: 'info' },
            { title: '应急照明测试', location: 'Northgate Mall', status: '已完成', tone: 'done' },
          ],
        },
      },
      {
        icon: 'workOrders',
        label: '工单',
        title: '自动生成工单',
        description: 'Fleet 根据每项资产的计划生成预防性工单，并附上检查清单分派给合适的团队。',
        points: ['依据每个维护计划生成工单', '分派给内部团队或供应商', '完成时记录照片凭证和读数'],
        visual: {
          kind: 'steps',
          title: '预防性维护自动化',
          steps: [
            { kind: '计划', text: '冷水机组 CH-02 · 季度保养' },
            { kind: '然后', text: '提前 14 天创建工单' },
            { kind: '然后', text: '分派给暖通供应商并附检查清单' },
          ],
        },
      },
      {
        icon: 'predictions',
        label: '预测',
        title: '可追溯的预测预警',
        description:
          '基于规则的机器学习结合实时与历史数据评估设备风险，每条预警都关联其背后的规则。',
        points: [
          '基于实时与历史数据评估设备风险',
          '每条预警都关联触发它的规则',
          '一键从预测生成工单',
        ],
        visual: {
          kind: 'jobs',
          title: '风险预警',
          items: [
            {
              title: 'AHU-07 振动上升',
              location: 'Tower B · 14 层',
              status: '高风险',
              tone: 'overdue',
            },
            {
              title: '水泵 P-03 压力偏移',
              location: 'Harbour Point',
              status: '中风险',
              tone: 'due',
            },
            {
              title: '冷水机组 CH-02 恢复正常',
              location: 'Harbour Point',
              status: '已解决',
              tone: 'done',
            },
          ],
        },
      },
      {
        icon: 'compliance',
        label: '合规',
        title: '每个站点的合规日历',
        description: '追踪法定检查和证书，在每个到期日前提醒，并把凭证保存在每条记录上。',
        points: [
          '每次检查和证书到期前提醒',
          '证书与每项资产一起保存',
          '每个站点随时备审的历史记录',
        ],
        visual: {
          kind: 'files',
          title: '即将到期的合规事项',
          items: [
            {
              title: '消防安全证书',
              location: 'Tower B · 10 月 30 日到期',
              status: '24 天后',
              tone: 'due',
            },
            {
              title: '电梯检查报告',
              location: '电梯 · 11 月 12 日到期',
              status: '已排期',
              tone: 'info',
            },
            {
              title: '军团菌风险评估',
              location: 'Bayview Residences',
              status: '最新',
              tone: 'done',
            },
          ],
        },
      },
    ] satisfies (Omit<OverviewModule, 'id' | 'tag'> & { icon: PreventiveIcon; label: string })[],
  },
  rows: [
    {
      tag: '基于规则的 AI',
      title: '防止停机的预测',
      description: 'Fleet 持续关注设备趋势并识别早期预警信号，让团队在影响租户之前采取行动。',
      points: [
        '读数高于基线时触发预警',
        '每条预警都附建议的下一步',
        '借助 RunnerAI 为新设备推荐计划',
      ],
      visual: {
        kind: 'log',
        title: '预测动态',
        entries: [
          { when: '09:42', who: 'Fleet', what: '发现 AHU-07 振动连续 9 天高于基线' },
          { when: '09:44', who: 'Aisha K.', what: '根据预警创建了工单' },
          { when: '08:58', who: 'RunnerAI', what: '为 6 台新冷水机组推荐了预防性维护计划' },
        ],
      },
    },
    {
      tag: '规划',
      title: '预防带来回报',
      description: '把工作从被动维修转向计划性维护，在可用性、成本和舒适度上看到差别。',
      points: [
        '并列追踪预防性与被动维修',
        '按资产生命周期规划维护支出',
        '把重复问题转为预防性任务',
      ],
      visual: {
        kind: 'chart',
        title: '计划性维护占比',
        stats: [
          { label: '计划性工作', value: '78%' },
          { label: '被动维修', value: '22%' },
        ],
        bars: [
          { label: 'Harbour Point', value: 84 },
          { label: 'Tower B', value: 80 },
          { label: 'Northgate', value: 76 },
          { label: 'Bayview', value: 72 },
          { label: 'Westport', value: 68 },
        ],
      },
    },
    {
      tag: '团队与供应商',
      title: '与团队和供应商无缝协作',
      description: '将每项预防性工单派给内部技术人员或签约供应商，并实时跟进进度。',
      points: [
        '按站点、工种和合同分派预防性工单',
        '供应商通过简单链接加入',
        '每次完工都有照片凭证和读数',
      ],
      visual: {
        kind: 'jobs',
        title: '本月预防性维护 · 按负责人',
        items: [
          {
            title: '内部暖通团队',
            location: '24 张工单 · 3 个站点',
            status: '已完成 92%',
            tone: 'done',
          },
          { title: '电梯供应商', location: '9 张工单 · 5 个站点', status: '正常', tone: 'info' },
          {
            title: '消防供应商',
            location: '12 张工单 · 4 个站点',
            status: '今天到期 2 张',
            tone: 'due',
          },
        ],
      },
    },
  ] satisfies Omit<OverviewModule, 'id'>[],
  steps: {
    eyebrow: '工作原理',
    title: '从计划到凭证',
    items: [
      { title: '计划', description: '导入资产和维护计划，或从最佳实践模板起步。' },
      { title: '排程', description: 'Fleet 在每个到期日前自动创建并分派工单。' },
      { title: '完成', description: '技术人员按检查清单作业，并在现场记录照片和读数。' },
      { title: '预测', description: '实时与历史数据及早揭示风险，让计划持续优化。' },
    ],
  },
  banner: {
    eyebrow: '开始使用',
    title: '扎实规划预防性维护',
    description: '我们的团队会在上线期间与您一起导入资产和维护计划，让排程从第一周起就开始运行。',
    action: { label: '预约演示', href: '/contact' },
  },
  trust: {
    title: '值得信赖的预防性维护',
    description: 'Fleet 专为跨多个物业管理复杂资产的房地产团队打造。',
    items: [
      { title: '为房地产打造', description: '按物业、区域或资产组合设定规则和计划。' },
      {
        title: '现场移动办公',
        description: '技术人员可在任意手机或平板上完成检查清单，支持 iOS 和 Android。',
      },
      { title: '随时备审的记录', description: '每次检查和保养都带有时间戳并记录负责人。' },
    ],
  },
  quote: {
    text: 'Fleet 让我们的被动维修工作量减少了近 40%。技术人员、资产记录和工单终于集中在了一处。',
    author: '物业运营负责人',
    company: '综合体项目',
  },
  industries: {
    title: '适用于各类物业的预防性维护',
    description: '从购物中心到物流枢纽，Fleet 适配您的资产和市场。',
  },
  integrate: {
    title: '为集成而生',
    description: '连接楼宇管理系统，让告警和读数融入预防性计划，并可搭配另外 20 多项集成。',
    action: { label: '查看全部集成', href: '/platform/integrations' },
  },
}

export const reactivePage = {
  hero: {
    eyebrow: '被动维修',
    title: '每一次维修，都快速解决',
    description: '在问题发生的第一时间记录，交给合适的团队，并按 SLA 跟进每项维修直至完成。',
    primaryAction: { label: '预约演示', href: '/contact' },
    secondaryAction: { label: '探索平台', href: '/platform' },
    highlights: ['实时 SLA 追踪', '带照片报修', '智能分派'],
    visual: {
      kind: 'jobs',
      title: '工单 · 今天',
      items: [
        {
          title: '3B 单元漏水',
          location: 'Bayview Residences · 已附照片',
          status: '逾期 2 小时',
          tone: 'overdue',
        },
        {
          title: '装卸口门维修',
          location: 'Westport DC · 签约供应商',
          status: '已分派',
          tone: 'info',
        },
        {
          title: '冷水机组告警',
          location: 'Harbour Point · 值班工程师',
          status: '处理中',
          tone: 'due',
        },
        { title: '2 层照明故障', location: 'Northgate Mall', status: '已完成', tone: 'done' },
      ],
    } satisfies OverviewVisual,
  },
  columns: [
    {
      title: '每张工单状态清晰',
      description: '从报修到验收，每个请求的实时状态、SLA 计时和照片凭证都集中在一处。',
    },
    {
      title: '每位相关人员都能获知进展',
      description: '租户、技术人员、供应商和管理者在恰当时机通过应用或邮件收到恰当的更新。',
    },
    {
      title: '记录保存在云端',
      description: '每张工单、每张照片和每项审批都安全存储，团队在任何地方、任何设备上都能查看。',
    },
  ],
  rows: [
    {
      tag: '工单管理',
      title: '端到端的被动维修',
      description: '从首次报修到最终验收，每项维修都遵循清晰路径，每一步都通知到相关人员。',
      points: [
        '按站点、工种和紧急程度派给内部团队或供应商',
        '超过阈值的费用自动提交给相应审批人',
        '所有物业的未完成、逾期和已完成工单一目了然',
      ],
      visual: {
        kind: 'jobs',
        title: '工单看板 · 所有站点',
        items: [
          { title: '42 张未完成工单', location: '分布于 14 个站点', status: '实时', tone: 'info' },
          {
            title: '3 张工单临近 SLA 期限',
            location: '已提醒主管',
            status: '即将到期',
            tone: 'due',
          },
          {
            title: '超过 3,000 美元的维修报价',
            location: '已提交财务审批',
            status: '审批中',
            tone: 'due',
          },
          {
            title: '本周关闭 118 张工单',
            location: '每张工单都有照片凭证',
            status: '已完成',
            tone: 'done',
          },
        ],
      },
    },
    {
      tag: '沟通',
      title: '直奔重点',
      description: '请求附带照片、位置和资产信息，技术人员到场前就能了解问题。',
      points: [
        '报修人提供的照片和视频',
        '每张工单附带资产历史和手册',
        '回复和更新保存在工单历史中',
      ],
      visual: {
        kind: 'chat',
        title: 'WO-2291 · 漏水',
        request: {
          title: '3B 单元漏水',
          location: 'Bayview Residences · 立管阀门 V-12',
          status: '已分派',
          tone: 'info',
        },
        messages: [
          { from: '租户', text: '浴室天花板在漏水，照片见附件。', time: '08:12', own: false },
          {
            from: 'Marco L.',
            text: '马上到。V-12 阀门六月保养过，我先检查它。',
            time: '08:20',
            own: true,
          },
          {
            from: 'Marco L.',
            text: '已更换密封件，漏水已修复，照片已添加到工单。',
            time: '11:05',
            own: true,
          },
        ],
      },
    },
    {
      tag: '位置',
      title: '每张工单都定位到具体地点',
      description: '每项维修都关联楼宇、楼层、房间和资产，让合适的人员直接前往正确位置。',
      points: [
        '按楼宇、楼层、房间或区域组织工单',
        '同一位置的工单自动归组',
        '按楼宇和资产突出显示重复问题',
      ],
      visual: {
        kind: 'asset',
        title: '工单位置',
        name: '立管阀门 V-12',
        location: 'Bayview Residences · 3 层 · 3B 单元',
        status: '维修中',
        facts: [
          { label: '楼宇', value: 'Bayview Residences' },
          { label: '楼层', value: '3 层' },
          { label: '上次保养', value: '6 月 14 日' },
          { label: '今年工单', value: '2' },
        ],
      },
    },
  ] satisfies Omit<OverviewModule, 'id'>[],
  happy: {
    eyebrow: '服务质量',
    title: '一切运转良好，人人满意',
    description:
      '快速且记录完整的维修让租户舒心、团队尽责。实时 SLA 追踪显示服务的强项以及需要介入的地方。',
    points: ['实时衡量响应与解决时间', '截止前发出提醒', '每月按楼宇复盘 SLA 表现'],
    visual: {
      kind: 'chart',
      title: '各楼宇 SLA 达成率 · 9 月',
      stats: [
        { label: 'SLA 达成', value: '96.4%' },
        { label: '平均响应', value: '1.8 小时' },
      ],
      bars: [
        { label: 'Harbour Point', value: 98 },
        { label: 'Tower B', value: 97 },
        { label: 'Northgate', value: 96 },
        { label: 'Bayview', value: 95 },
        { label: 'Westport', value: 93 },
      ],
    } satisfies OverviewVisual,
  },
}

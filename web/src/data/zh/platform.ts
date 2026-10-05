import type { NavLink } from '@/config'
import type { StatusItem } from '@/data/en/home'
import type { OverviewModule, PlatformEntry, PlatformPageContent } from '@/data/en/platform'
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

export const pages: { overview: PlatformEntry; webAndMobile: PlatformEntry } & Record<
  TemplatePageId,
  PlatformPageContent
> = {
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
    eyebrow: '集成',
    title: '将 Fleet 连接到您已在使用的工具',
    description:
      'Fleet 通过 20 多项集成和开放的 REST API 融入您的技术体系，打造端到端互联的运营生态。',
    highlights: ['20+ 项集成', '开放 REST API', '专人协助配置'],
    features: {
      title: '覆盖整个运营的集成',
      description: '汇聚财务、物业和楼宇数据，让每个团队基于同一份记录工作。',
      items: [
        {
          title: '会计与应付应收',
          description: '与财务工具同步成本、发票和审批，保持预算准确。',
        },
        {
          title: 'ERP 系统',
          description: '与 ERP 共享资产、供应商和采购数据，实现统一报表。',
        },
        {
          title: '门禁系统',
          description: '连接门禁系统，自动记录现场到访和供应商出勤。',
        },
        {
          title: '租户门户',
          description: '将租户请求转为可追踪的工单，并向使用者同步进展。',
        },
        {
          title: '楼宇管理系统',
          description: '将 BMS 告警和读数接入 Fleet，在恰当时机触发工单。',
        },
        {
          title: 'REST API',
          description: '通过有文档、安全的 REST API 与任何系统建立自定义连接。',
        },
      ],
    },
    details: [
      {
        title: '财务与运营同步',
        description: '从第一份报价到最后一张发票，维护与财务始终保持一致。',
        points: [
          '费用审批直接进入您的应付流程',
          '按楼宇、资产和供应商追踪预算',
          '可导出的财务及董事会报告',
        ],
      },
      {
        title: '默认安全',
        description: '每项集成都遵循您的 IT 治理要求，权限清晰，全程可追溯。',
        points: ['传输与存储全程加密', '符合 IT 政策的白名单接口', '每条同步记录均有审计记录'],
      },
    ],
    useCases: {
      title: '集成实践',
      description: '团队通过连接 Fleet 免去重复录入，让每个系统保持最新。',
      items: [
        '将已审批的维修费用推送到会计系统',
        '根据 BMS 告警自动创建工单',
        '在 Fleet 与 ERP 之间同步供应商信息',
        '将租户门户中的请求记录为工单',
        '将 Fleet 数据接入企业 BI 看板',
      ],
    },
  },
  runnerAi: {
    label: 'RunnerAI',
    summary: '用自然语言创建工作流和看板的 AI 智能体。',
    meta: {
      title: 'RunnerAI | Fleet',
      description:
        'RunnerAI 是 Fleet 为房地产和设施团队打造的安全、基于规则的 AI：用文字创建工作流，按需生成看板，实现运营自动化。',
    },
    eyebrow: 'RunnerAI',
    title: '为房地产与设施管理打造的 AI 智能体',
    description:
      'RunnerAI 通过简单的文字指令创建工作流、提供洞察并生成看板，让团队把更多时间投入现场工作。',
    highlights: ['自然语言指令', '基于规则、可追溯', '按组织隔离数据'],
    features: {
      title: 'RunnerAI 能做什么',
      description: '内置运营智能，预判下一步、规范工作流，并即时呈现关键洞察。',
      items: [
        {
          title: '文字指令创建工作流',
          description: '输入您想完成的事，RunnerAI 即可将其转化为适用于每个站点的标准工作流。',
        },
        {
          title: '实时调整',
          description: '几秒内修改步骤、触发条件和规则，并部署到全部或选定区域。',
        },
        {
          title: '行业标准模板',
          description: '从适合您物业类型、资产构成和市场的最佳实践工作流起步。',
        },
        {
          title: '按需生成看板',
          description: '提出任意需求，例如即将到达使用寿命的设备，几秒内获得实时看板。',
        },
        {
          title: '基于规则的机器学习',
          description: '预测遵循既定规则，每项操作都可追溯、合规且一致。',
        },
        {
          title: '支持您的语言',
          description: '用英语或您的母语创建和调整工作流，并适配当地法规。',
        },
      ],
    },
    details: [
      {
        title: '看板随叫随到',
        description: '提出问题，RunnerAI 即基于实时运营数据生成看板，可直接分享或固定。',
        points: [
          '工单趋势与积压汇总',
          '资产停机分析与合规风险评分',
          '供应商绩效与区域对比',
          '资产组合整体管理摘要',
        ],
      },
      {
        title: '在您边界内运行的 AI',
        description: 'RunnerAI 运行在为每位客户专属部署的服务器上，敏感数据始终留在您的组织内部。',
        points: [
          '每个组织独立的计算环境',
          '传输与存储全程加密',
          '每项 AI 生成操作均有审计记录',
          '支持 GDPR、PDPL、PDPA 以及本地或混合部署',
        ],
      },
    ],
    useCases: {
      title: '向 RunnerAI 提问',
      description: '房地产团队每天向 RunnerAI 提出的一些请求。',
      items: [
        '列出所有站点中即将到达使用寿命的设备',
        '汇总过去 30 天的工单积压情况',
        '给我阿联酋区域的供应商绩效',
        '为我们排名前十的购物中心创建风险看板',
        '为每个美食广场设置每周清洁消毒流程',
      ],
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
    eyebrow: 'Fleet Mail',
    title: '每一封邮件，都是一张可追踪的工单',
    description:
      'Fleet Mail 在租户和供应商的请求到达时即刻生成工单，并通过自动邮件让员工和供应商随时了解进展。',
    highlights: ['邮件转工单', '回复归档到工单', '自动更新'],
    features: {
      title: '与运营相连的收件箱',
      description: '请求、回复和审批都汇入同一份结构化记录，整个团队一目了然。',
      items: [
        {
          title: '邮件转工单',
          description: '每封来信都会生成工单，并带上发件人、附件和位置。',
        },
        {
          title: '完整的沟通记录',
          description: '回复自动追加到工单历史，每段沟通都有上下文。',
        },
        {
          title: '智能分派',
          description: '根据站点、类别和优先级，将请求分派给合适的团队或供应商。',
        },
        {
          title: '邮件提醒',
          description: '员工和供应商直接在收件箱中收到派单、截止日期和逾期提醒。',
        },
        {
          title: '邮件审批',
          description: '管理者在邮件中一键批准或驳回费用。',
        },
        {
          title: '向请求人同步进度',
          description: '租户会收到确认和进展通知，直到请求处理完毕。',
        },
      ],
    },
    details: [
      {
        title: '来信即刻井然有序',
        description: '共享邮箱变成有序队列，每个请求都被记录、排定优先级并分派。',
        points: ['照片和文档附在工单上', '重复请求自动合并为一张工单', '按 SLA 追踪响应时间'],
      },
      {
        title: '把更新送到对的人手中',
        description: 'Fleet 在恰当时机发送恰当的消息，让团队和供应商始终清楚下一步。',
        points: ['派单与截止日期通知', '临近期限时自动升级', '附照片凭证的完工总结'],
      },
    ],
    useCases: {
      title: 'Fleet Mail 实践',
      description: '邮件依旧是大家熟悉的方式，如今背后有完整的追踪。',
      items: [
        '租户发邮件报修灯具，系统自动创建工单',
        '供应商回复报价，自动归入工单历史',
        '财务经理直接在收件箱中批准维修费用',
        '技术人员每晚通过邮件收到次日任务',
        '区域经理每周收到逾期工单的邮件摘要',
      ],
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
    eyebrow: 'Fleet 工作流构建器',
    title: '贴合您运营方式的工作流',
    description:
      '通过人人都能上手的可视化构建器，让维护运营契合您的组织结构、审批链、供应商政策和费用阈值。',
    highlights: ['可视化构建器', '多级审批', '首周即可上线'],
    features: {
      title: '一次搭建，处处运行',
      description: '由您定义流程，Fleet 负责执行，让任务在正确的时间到达正确的人。',
      items: [
        {
          title: '条件分派',
          description: '按位置、类型、优先级或资产类别分派工单，例如电梯问题交给指定供应商。',
        },
        {
          title: '多级审批',
          description: '根据费用、紧急程度或范围，要求管理层或财务审批。',
        },
        {
          title: '基于角色的职责',
          description: '为技术人员、主管和供应商设定谁可以查看、审批、分派或关闭任务。',
        },
        {
          title: '通知与升级',
          description: '截止日期临近或工单待分派时，自动提醒相关团队。',
        },
        {
          title: '按站点定制工作流',
          description: '为每栋楼或每个区域匹配各自的标准作业流程。',
        },
        {
          title: '与所有模块相连',
          description: '工作流可在同一系统中作用于文档、资产、权限和供应商。',
        },
      ],
    },
    details: [
      {
        title: '配置简单，执行有力',
        description: '拖放即可发布。我们的上线团队会在第一周帮助您把现有流程映射到 Fleet。',
        points: ['为运营团队设计的可视化构建器', '常见流程的现成模板', '上线前先测试变更'],
      },
      {
        title: '一致、高效、有洞察',
        description: '每张工单都遵循相同步骤，运营更精准，报表更清晰。',
        points: [
          '自动执行文档核查等合规步骤',
          '从创建到关闭减少人工交接',
          '结构化数据带来更有价值的报表',
        ],
      },
    ],
    useCases: {
      title: '团队搭建的工作流',
      description: '房地产团队在第一个月常用的工作流。',
      items: [
        'A 楼的给排水工单交给供应商，B 楼交给内部团队',
        '超过 5,000 美元的工单需主管审批',
        '预防性工单交给专职人员，被动维修交给综合团队',
        'SLA 期限临近时提醒区域经理',
        '为新租户入驻设置检查、资产核查和文档流程',
      ],
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
    eyebrow: '预防性与预测性维护',
    title: '始终领先于每一次故障',
    description:
      '为每项资产规划周期性维护，借助基于规则的预测及早发现风险，让设备稳定运行、租户安心满意。',
    highlights: ['周期性计划', '基于规则的预测', '被动维修减少多达 40%'],
    features: {
      title: '从容规划维护',
      description: '将维护计划变为自动排程，让实时数据告诉您下一步该在哪里行动。',
      items: [
        {
          title: '周期性维护计划',
          description: '按时间或使用量为暖通、给排水、照明、电梯和消防安排预防性任务。',
        },
        {
          title: '自动生成工单',
          description: 'Fleet 根据每项资产的计划生成维护工单，并分派给合适的团队。',
        },
        {
          title: '预测性预警',
          description: '读数高于基线时触发可追溯的预警，并给出建议的下一步。',
        },
        {
          title: '行业标准模板',
          description: '从各类资产的最佳实践检查清单起步，并按站点调整。',
        },
        {
          title: '工作量规划',
          description: '在技术人员和供应商之间平衡排程，一眼看清后续工作。',
        },
        {
          title: '合规日历',
          description: '追踪法定检查和证书，在每个到期日前提醒。',
        },
      ],
    },
    details: [
      {
        title: '从排程到验收完成',
        description: '每项预防性任务都附带检查清单、资产历史和相关文档，技术人员到场即准备就绪。',
        points: ['每项任务附带检查清单和作业规程', '完成时记录照片凭证和读数', '逾期任务自动升级'],
      },
      {
        title: '可追溯的预测',
        description: 'Fleet 基于规则的机器学习会解释每条建议，让团队放心行动。',
        points: [
          '基于实时与历史数据评估设备风险',
          '每条预警都关联触发它的规则',
          '一键从预测生成工单',
        ],
      },
    ],
    useCases: {
      title: '预防性维护实践',
      description: '房地产团队如何让关键系统保持最佳状态。',
      items: [
        '每栋楼按季度更换空调滤网',
        '电梯年检，提前 30 天提醒',
        '每月应急照明测试并拍照记录',
        '通过预测性预警监测冷水机组振动',
        '按楼层和楼梯间安排防火门检查',
      ],
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
    eyebrow: '被动维修',
    title: '每一次维修，都快速解决',
    description: '在问题发生的第一时间记录，交给合适的团队，并按 SLA 跟进每项维修直至完成。',
    highlights: ['实时 SLA 追踪', '带照片报修', '智能分派'],
    features: {
      title: '从报修到解决',
      description: '每项维修都有清晰路径，每一步都通知到相关人员。',
      items: [
        {
          title: '快速报修',
          description: '员工和租户可在任何设备上附照片、位置和优先级提交问题。',
        },
        {
          title: '智能分派',
          description: '根据站点、工种和紧急程度，将工单派给内部团队或供应商。',
        },
        {
          title: 'SLA 追踪',
          description: '实时衡量响应与解决时间，并在截止前发出提醒。',
        },
        {
          title: '实时更新',
          description: '技术人员在现场直接更新状态、添加备注并上传凭证。',
        },
        {
          title: '费用审批',
          description: '超过设定阈值的报价和费用会自动提交给相应审批人。',
        },
        {
          title: '集中工单看板',
          description: '在一个视图中掌握所有物业的未完成、逾期和已完成工单。',
        },
      ],
    },
    details: [
      {
        title: '每个问题都有完整上下文',
        description: '每项维修都关联资产、位置和历史，技术人员到场前就能了解问题。',
        points: ['每张工单附带资产历史和手册', '报修人提供的照片和视频', '相关工单自动归组'],
      },
      {
        title: '从每次维修中学习',
        description: '被动维修数据揭示问题反复出现的地方，帮助您把更多工作转为预防性计划。',
        points: [
          '按楼宇和资产突出显示重复问题',
          '按站点、工种和供应商追踪维修成本',
          '用洞察优化预防性计划',
        ],
      },
    ],
    useCases: {
      title: '被动维修实践',
      description: '日常维修处理迅速、全程透明。',
      items: [
        '3B 单元漏水附照片上报，当天修复',
        '装卸口门维修派给签约供应商',
        '冷水机组告警升级给值班工程师',
        '高额维修提交财务审批',
        '每月按楼宇复盘 SLA 表现',
      ],
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

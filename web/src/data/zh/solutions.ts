import type { NavLink } from '@/config'
import type { PlatformEntry } from '@/data/en/platform'
import type { CategoryPageContent, SolutionsShared } from '@/data/en/solutions'
import type { CategoryPageId, SolutionGroup, SolutionPageId } from '@/solutions'

export const menu = {
  label: '解决方案',
  groups: {
    category: '按类别',
  } satisfies Record<SolutionGroup, string>,
  promo: {
    title: '找到适合您的方案',
    description: '了解 Fleet 如何适配您的运营、资产组合和团队。',
    action: {
      label: '预约演示',
      href: '/contact',
    } satisfies NavLink,
  },
}

export const pages: Record<SolutionPageId, PlatformEntry> = {
  cafm: {
    label: 'CAFM/CMMS',
    summary: '维护、资产和设施的一体化系统。',
    meta: {
      title: '面向多项目团队的 CAFM 与 CMMS 软件 | Fleet',
      description:
        'Fleet 是基于云的 CAFM 与 CMMS 平台，为每个项目整合工单、预防性维护、资产与合规。',
    },
  },
  pms: {
    label: 'PMS/REMS',
    summary: '物业与不动产运营的实时全景。',
    meta: {
      title: '物业与不动产管理软件 | Fleet',
      description: '用 Fleet 管理整个资产组合的物业运营，预算、文档、维护和报表集中在一个平台。',
    },
  },
  workOrders: {
    label: '工单管理',
    summary: '创建、分派并关闭每张工单，全程可见。',
    meta: {
      title: '工单管理软件 | Fleet',
      description: '在所有项目中创建、分派、跟踪并关闭工单，支持移动端更新、SLA 跟踪和照片凭证。',
    },
  },
  fieldService: {
    label: '现场服务优化',
    summary: '合适的技术人员，及时到达合适的现场。',
    meta: {
      title: '现场服务优化软件 | Fleet',
      description:
        '在所有项目中排程、分派并跟踪现场团队和外包商，支持移动检查清单、实时状态和绩效报表。',
    },
  },
  tenants: {
    label: '租户与住户管理',
    summary: '住户看得见的报修、进度与服务。',
    meta: {
      title: '租户与住户管理软件 | Fleet',
      description:
        '用 Fleet 接收租户和住户的报修，及时同步进度，并在每栋楼、每个单元快速解决问题。',
    },
  },
  vendors: {
    label: '供应商与承包商管理',
    summary: '承包商、报价、合同与绩效集中管理。',
    meta: {
      title: '供应商与承包商管理软件 | Fleet',
      description: '在一个平台中协调承包商和供应商，报价、审批、合同、证书与绩效评分全部留档。',
    },
  },
}

export const shared: SolutionsShared = {
  actions: {
    primary: {
      label: '预约演示',
      href: '/contact',
    },
    secondary: {
      label: '探索平台',
      href: '/platform',
    },
  },
  results: {
    eyebrow: '成效',
    title: '每个项目都有可衡量的成效',
    description: '物业与设施团队使用 Fleet 减少被动维修、快速上线，并保持运营稳定。',
    items: [
      {
        value: '最多 40%',
        label: '被动维修减少',
      },
      {
        value: '7 天内',
        label: '完成团队上线',
      },
      {
        value: '99.99%',
        label: '可用性，SLA 保障',
      },
      {
        value: '20+',
        label: '项集成对接您的系统',
      },
    ],
  },
  why: {
    title: '团队为什么选择 Fleet',
    description: 'Fleet 专为多项目的不动产与设施团队打造，以可配置为核心。',
    items: [
      {
        title: '灵活',
        description: '按物业、区域或资产组合配置工作流、规则和看板。',
      },
      {
        title: '智能',
        description: 'RunnerAI 和基于规则的预测为每个团队指出下一步重点。',
      },
      {
        title: '协作',
        description: '内部团队、供应商和管理者在任何设备上共享同一份实时记录。',
      },
    ],
  },
  industries: {
    title: '一个平台，服务各行各业',
    description: 'Fleet 适配您所在行业的资产、团队与标准。',
    items: [
      {
        label: '设施管理',
        photo: {
          id: 'inspectionClipboard',
          alt: '检查员在夹板上填写检查清单',
        },
      },
      {
        label: '购物中心与零售',
        photo: {
          id: 'mallAtrium',
          alt: '购物中心中庭里的人群',
        },
      },
      {
        label: '酒店与餐饮',
        photo: {
          id: 'hotelHousekeeping',
          alt: '客房服务员整理房间',
        },
      },
      {
        label: '航运与物流',
        photo: {
          id: 'warehouseTeam',
          alt: '仓储团队在货架间核对库存',
        },
      },
      {
        label: '数据中心',
        photo: {
          id: 'dataCenter',
          alt: '数据中心里成排的服务器机柜',
        },
      },
      {
        label: '暖通、电梯与扶梯',
        photo: {
          id: 'hvacTechnicians',
          alt: '暖通技术人员维护屋顶机组',
        },
      },
    ],
  },
  integrate: {
    title: 'Fleet 与您的系统无缝集成',
    description:
      '通过 20 多项集成和开放的 REST API，连接财务系统、ERP、楼宇管理系统、租户门户和门禁系统。',
    action: {
      label: '查看全部集成',
      href: '/platform/integrations',
    },
  },
  faqTitle: '常见问题',
  cta: {
    title: '从容管理每一个项目',
    description: '预约导览，了解 Fleet 如何根据您的资产组合，把团队、资产和供应商连接在一起。',
    primaryAction: {
      label: '预约演示',
      href: '/contact',
    },
    secondaryAction: {
      label: '探索平台',
      href: '/platform',
    },
    photo: {
      id: 'techniciansPanel',
      alt: '两位技术人员检查设备面板',
    },
  },
}

export const categories: Record<CategoryPageId, CategoryPageContent> = {
  cafm: {
    hero: {
      eyebrow: 'CAFM/CMMS',
      title: '让运营互联互通的 CAFM 与 CMMS 软件',
      description:
        'Fleet 把楼宇、资产、人员和合规记录集中到一个云平台，让每个项目都基于实时信息运转。',
      highlights: ['工单与预防性维护', '资产历史', '可直接审计的记录'],
      visual: {
        kind: 'jobs',
        title: '工单 · Harbour Point',
        items: [
          {
            title: '冷水机组低压报警',
            location: 'B2 机房',
            status: '进行中',
            tone: 'info',
          },
          {
            title: '消防泵季度测试',
            location: '水泵房',
            status: '今日到期',
            tone: 'due',
          },
          {
            title: '大堂照明维修',
            location: '1 层',
            status: '已完成',
            tone: 'done',
          },
        ],
      },
    },
    challenge: {
      pressure: {
        title: '设施管理日益复杂',
        description: '楼宇、资产、供应商和合规节点越来越多，各有各的记录、排程和标准。',
        points: ['多个项目', '多套系统', '多项标准'],
      },
      answer: {
        title: '一个 CAFM 连接一切',
        description: 'Fleet 将资产、团队、供应商和工作流整合到一个专为多项目不动产打造的灵活平台。',
      },
    },
    capabilities: {
      title: '满足设施管理的全部需求',
      description: '从第一条报修到最终报表，所有维护工作集中一处。',
      tabs: [
        {
          icon: 'workOrders',
          label: '工单',
          title: '更快解决被动维修',
          description: '创建、分派并跟踪临时维修，附带照片、优先级和现场实时更新。',
          points: ['报修附带照片和位置', '工单派给内部团队或供应商', '每张工单都有 SLA 计时'],
          visual: {
            kind: 'jobs',
            title: '被动维修 · Tower B',
            items: [
              {
                title: '漏水',
                location: '12 层 · 3B 单元',
                status: '超时 2 小时',
                tone: 'overdue',
              },
              {
                title: '空调不制冷',
                location: '8 层 · 办公室',
                status: '已分派',
                tone: 'info',
              },
              {
                title: '闭门器故障',
                location: '大堂',
                status: '已解决',
                tone: 'done',
              },
            ],
          },
        },
        {
          icon: 'preventive',
          label: '预防性',
          title: '提前规划，延长资产寿命',
          description: '按时间或使用量为暖通、给排水、照明和消防安排周期性维护。',
          points: ['按资产类型设置周期计划', '每次巡检都有检查清单', '到期前自动生成工单'],
          visual: {
            kind: 'steps',
            title: '预防性计划',
            steps: [
              {
                kind: '计划',
                text: 'AHU-07 · 月度保养',
              },
              {
                kind: '然后',
                text: '提前 7 天创建工单',
              },
              {
                kind: '然后',
                text: '派给暖通团队并附检查清单',
              },
            ],
          },
        },
        {
          icon: 'assets',
          label: '资产',
          title: '每项资产完整建档',
          description: '为每项资产建立实时台账，记录维护历史、成本、保修和手册。',
          points: ['每项资产都有数字档案', '维修历史与成本变化', '保修和合同到期提醒'],
          visual: {
            kind: 'asset',
            title: '资产档案',
            name: '冷水机组 CH-02',
            location: 'Harbour Point · B2 机房',
            status: '运行中',
            facts: [
              {
                label: '上次保养',
                value: '9月12日',
              },
              {
                label: '保修',
                value: '2028年3月',
              },
              {
                label: '本年成本',
                value: '$4,210',
              },
              {
                label: '未完成工单',
                value: '1',
              },
            ],
          },
        },
        {
          icon: 'analytics',
          label: '报表',
          title: '基于实时数据做决策',
          description: '了解哪些楼宇问题反复出现、哪些资产占用预算最多、哪些团队达成 SLA。',
          points: ['按项目和团队的实时看板', '为每个角色定制 KPI', '用于审计和董事会的导出'],
          visual: {
            kind: 'chart',
            title: '各项目 SLA 达成率 · 第三季度',
            stats: [
              {
                label: 'SLA 达成',
                value: '96.4%',
              },
              {
                label: '未完成工单',
                value: '128',
              },
            ],
            bars: [
              {
                label: 'Harbour Point',
                value: 96,
              },
              {
                label: 'Tower B',
                value: 92,
              },
              {
                label: 'Northgate',
                value: 89,
              },
              {
                label: 'Bayview',
                value: 94,
              },
              {
                label: 'Westport',
                value: 90,
              },
            ],
          },
        },
      ],
    },
    rows: [
      {
        tag: '自动化',
        title: '可规模化的智能运营',
        description: '用工作流构建器自动处理日常事务，让 RunnerAI 提示下一步需要关注的事项。',
        points: [
          '周期模板与智能通知',
          '按成本、项目或资产流转审批',
          'RunnerAI 基于实时数据给出建议',
        ],
        visual: {
          kind: 'log',
          title: 'RunnerAI 动态',
          entries: [
            {
              when: '09:42',
              who: 'RunnerAI',
              what: '为 6 台新冷水机组建议了预防性计划',
            },
            {
              when: '09:15',
              who: 'RunnerAI',
              what: '标记了 3 个暖通故障反复出现的项目',
            },
          ],
        },
        photo: {
          id: 'hvacTechnicians',
          alt: '暖通技术人员维护屋顶机组',
        },
      },
      {
        tag: '合规',
        title: '每个项目都有可审计的记录',
        description: '内置审计追踪、文档存储和版本控制，让每份服务记录、许可和检查都井然有序。',
        points: ['每项操作都带时间戳', '证书随资产保存', '几次点击即可导出审计资料'],
        visual: {
          kind: 'files',
          title: '合规 · Tower B',
          items: [
            {
              title: '消防安全证书.pdf',
              location: '有效至 2027年6月',
              status: '有效',
              tone: 'done',
            },
            {
              title: '第三季度电梯检验.pdf',
              location: '核心筒电梯',
              status: '已核验',
              tone: 'done',
            },
          ],
        },
        photo: {
          id: 'inspectionClipboard',
          alt: '检查员在夹板上填写检查清单',
        },
      },
      {
        tag: '协作',
        title: '所有团队共享同一份记录',
        description: '内部技术人员、供应商和管理者在手机、平板或电脑上使用同一份实时记录。',
        points: ['实时共享更新', '每张完成的工单都有照片凭证', '供应商快速接入'],
        visual: {
          kind: 'jobs',
          title: '团队动态',
          items: [
            {
              title: 'Marco L. · 内部',
              location: '关闭了 WO-2291',
              status: '已完成',
              tone: 'done',
            },
            {
              title: 'CoolAir · 供应商',
              location: '接受了 WO-2304',
              status: '已接受',
              tone: 'info',
            },
          ],
        },
        photo: {
          id: 'colleaguesTablets',
          alt: '两位同事用平板查看工作',
        },
      },
    ],
    quote: {
      text: 'Fleet 让我们的被动维修工作量减少了近 40%。技术人员、资产记录和工单终于集中在了一处。',
      author: '物业运营负责人',
      company: '综合体项目',
      photo: {
        id: 'factoryTechnician',
        alt: '技术人员用平板检查设备',
      },
    },
    faq: [
      {
        question: '什么是 CAFM 软件？',
        answer:
          'CAFM（计算机辅助设施管理）软件把楼宇、资产、维护、文档和人员整合到一个系统中，帮助设施团队规划、运营并汇报每个项目。',
      },
      {
        question: 'CAFM 和 CMMS 有什么区别？',
        answer:
          'CMMS 侧重维护工作和资产，CAFM 覆盖更广的设施运营。Fleet 兼具两者：工单、预防性维护、资产、文档和报表集中在一个平台。',
      },
      {
        question: 'Fleet 能管理多个项目吗？',
        answer:
          '可以。Fleet 原生支持多项目管理：按物业设置规则和工作流，指派区域主管，并汇总整个资产组合的报表。',
      },
      {
        question: 'Fleet 能与现有系统集成吗？',
        answer:
          '可以。Fleet 通过 20 多项集成和开放的 REST API，连接财务系统、ERP、楼宇管理系统、租户门户和门禁系统。',
      },
      {
        question: '实施 Fleet 需要多久？',
        answer: '大多数团队在 7 天内即可上线。我们的上线团队会协助您导入资产、维护计划和用户。',
      },
    ],
  },
  pms: {
    hero: {
      eyebrow: 'PMS/REMS',
      title: '物业与不动产管理，一个平台全搞定',
      description: 'Fleet 为不动产团队提供每处物业的实时视图，从预算和文档到维护、供应商与合规。',
      highlights: ['资产组合视图', '预算跟踪', '董事会报表'],
      visual: {
        kind: 'asset',
        title: '物业档案',
        name: 'Harbour Point',
        location: '综合体 · 14 层',
        status: '运营中',
        facts: [
          {
            label: '未完成工单',
            value: '12',
          },
          {
            label: 'SLA 达成',
            value: '96.4%',
          },
          {
            label: '本年支出',
            value: '$184k',
          },
          {
            label: '预算使用',
            value: '71%',
          },
        ],
      },
    },
    challenge: {
      pressure: {
        title: '每处物业都有自己的节奏',
        description: '租约、预算、维护、供应商和合规节点在每栋楼里各自推进。',
        points: ['组合数据', '物业预算', '业主报告'],
      },
      answer: {
        title: '资产组合的唯一可信数据源',
        description: 'Fleet 统一每处物业的运营数据，让资产经理、物业经理和业主看到同一组实时数字。',
      },
    },
    capabilities: {
      title: '清晰掌控您的资产组合',
      description: '物业运营、财务与维护在一个平台中相连。',
      tabs: [
        {
          icon: 'portfolio',
          label: '组合',
          title: '一眼看清每处物业',
          description: '在一张地图和一个看板上查看每处物业的未完成工作、支出和合规状态。',
          points: [
            '所有物业的地图与列表视图',
            '按楼栋、区域或业主查看状态',
            '从组合层级下钻到单项资产',
          ],
          visual: {
            kind: 'chart',
            title: '各物业支出 · 年初至今',
            stats: [
              {
                label: '支出',
                value: '$184k',
              },
              {
                label: '物业',
                value: '14',
              },
            ],
            bars: [
              {
                label: 'Harbour Point',
                value: 82,
              },
              {
                label: 'Tower B',
                value: 64,
              },
              {
                label: 'Northgate',
                value: 48,
              },
              {
                label: 'Bayview',
                value: 36,
              },
              {
                label: 'Westport',
                value: 22,
              },
            ],
          },
        },
        {
          icon: 'budget',
          label: '预算',
          title: '预算与成本尽在掌控',
          description: '按物业、成本中心和供应商对比预算跟踪维护支出，超过设定阈值的费用需审批。',
          points: ['每处物业的预算与实际', '按成本中心和供应商的支出', '超阈值费用审批'],
          visual: {
            kind: 'jobs',
            title: '各物业预算',
            items: [
              {
                title: 'Harbour Point',
                location: '$62k / $80k',
                status: '已用 78%',
                tone: 'info',
              },
              {
                title: 'Tower B',
                location: '$31k / $35k',
                status: '已用 89%',
                tone: 'due',
              },
              {
                title: 'Bayview',
                location: '$18k / $30k',
                status: '已用 60%',
                tone: 'done',
              },
            ],
          },
        },
        {
          icon: 'documents',
          label: '文档',
          title: '从租约到服务报告',
          description: '存储租约、合同、许可和服务报告，并关联到对应的物业、单元和资产。',
          points: ['文件关联物业和单元', '每份文档都有版本历史', '许可和合同到期前提醒'],
          visual: {
            kind: 'files',
            title: '文档 · Harbour Point',
            items: [
              {
                title: '2026 租约清单.pdf',
                location: '租赁',
                status: '最新',
                tone: 'done',
              },
              {
                title: '消防许可.pdf',
                location: '30 天后到期',
                status: '续期',
                tone: 'due',
              },
              {
                title: '暖通服务报告.pdf',
                location: 'B2 机房',
                status: '已核验',
                tone: 'done',
              },
            ],
          },
        },
        {
          icon: 'analytics',
          label: '报表',
          title: '董事会级报表',
          description: '与业主和董事会共享只读看板，并为各方定时发送报表。',
          points: ['面向业主的只读看板', '邮件定时报表', '整个组合的管理摘要'],
          visual: {
            kind: 'steps',
            title: '业主报告',
            steps: [
              {
                kind: '数据',
                text: '支出、SLA 和未完成工作',
              },
              {
                kind: '筛选',
                text: 'Harbour Point · 上季度',
              },
              {
                kind: '发送',
                text: '每月第一个周一',
              },
            ],
          },
        },
      ],
    },
    rows: [
      {
        tag: '维护',
        title: '维护与每处物业相连',
        description: '工单、预防性计划和资产历史汇总到每处物业，让您看清整个组合的运营状况。',
        points: ['按物业的未完成与逾期工作', '按楼栋的预防性维护达成', '资产成本汇总到组合'],
        visual: {
          kind: 'jobs',
          title: '组合运营状况',
          items: [
            {
              title: 'Harbour Point',
              location: '12 张未完成工单',
              status: '正常',
              tone: 'done',
            },
            {
              title: 'Tower B',
              location: '3 张逾期工单',
              status: '需复核',
              tone: 'due',
            },
          ],
        },
        photo: {
          id: 'apartmentBuilding',
          alt: '带景观花园的现代住宅楼',
        },
      },
      {
        tag: '多项目',
        title: '从一栋楼扩展到整个组合',
        description: '按物业设置规则和工作流，指派区域团队，汇总所有地点的报表。',
        points: ['按物业设置规则与工作流', '区域团队与权限', '组合级汇总报表'],
        visual: {
          kind: 'steps',
          title: '区域推广',
          steps: [
            {
              kind: '区域',
              text: '阿联酋 · 6 处物业',
            },
            {
              kind: '然后',
              text: '应用审批规则',
            },
            {
              kind: '然后',
              text: '汇总每周报告',
            },
          ],
        },
        photo: {
          id: 'engineersRooftop',
          alt: '两位工程师在屋顶查看平板',
        },
      },
      {
        tag: 'RunnerAI',
        title: '几秒获得组合答案',
        description:
          '向 RunnerAI 询问各区域供应商表现或重点物业的风险看板，它会基于实时数据生成答案。',
        points: ['用日常语言提问', '几秒生成看板', '基于实时组合数据作答'],
        visual: {
          kind: 'log',
          title: 'RunnerAI 动态',
          entries: [
            {
              when: '10:05',
              who: '您',
              what: '询问了阿联酋的供应商表现',
            },
            {
              when: '10:05',
              who: 'RunnerAI',
              what: '为 6 处物业生成了看板',
            },
          ],
        },
        photo: {
          id: 'warehouseAnalytics',
          alt: '主管在屏幕上查看绩效图表',
        },
      },
    ],
    quote: {
      text: 'Fleet 帮助我们把被动维修减少了近 40%。现在我们能看清所有项目的情况，响应也更快了。',
      author: '运营总监',
      company: '区域购物中心运营商',
      photo: {
        id: 'mallAtrium',
        alt: '购物中心中庭里的人群',
      },
    },
    faq: [
      {
        question: '什么是 PMS 或 REMS？',
        answer:
          '物业管理系统（PMS）或不动产管理系统（REMS）把物业相关信息集中起来，从预算和文档到维护和供应商，帮助团队运营并汇报资产组合。',
      },
      {
        question: 'Fleet 如何支持物业管理团队？',
        answer:
          'Fleet 为每处物业连接维护、资产、文档、供应商和预算，看板可从单项资产汇总到整个组合。',
      },
      {
        question: '业主和董事会能查看绩效吗？',
        answer: '可以。与业主、委员会和董事会共享只读看板，并通过邮件定时发送报表。',
      },
      {
        question: 'Fleet 能连接我的物业管理或财务系统吗？',
        answer: '可以。Fleet 通过 20 多项集成和开放的 REST API，与财务、ERP 和物业管理工具集成。',
      },
      {
        question: 'Fleet 能随资产组合扩展吗？',
        answer: '可以。无论一栋楼还是数百栋，Fleet 都支持按物业设规则、区域团队和组合级报表。',
      },
    ],
  },
  workOrders: {
    hero: {
      eyebrow: '工单管理',
      title: '让每张工单持续推进的工单管理',
      description: '在所有项目中创建、分派、跟踪并关闭每张工单，现场实时更新，管理者全程可见。',
      highlights: ['移动端更新', 'SLA 跟踪', '照片凭证'],
      visual: {
        kind: 'jobs',
        title: '工单 · 今日',
        items: [
          {
            title: '锅炉年度保养',
            location: 'Northgate · 机房',
            status: '4 小时后到期',
            tone: 'due',
          },
          {
            title: '3B 单元漏水',
            location: 'Tower B · 12 层',
            status: '进行中',
            tone: 'info',
          },
          {
            title: '应急照明测试',
            location: 'Bayview · 所有楼层',
            status: '已完成',
            tone: 'done',
          },
        ],
      },
    },
    challenge: {
      pressure: {
        title: '每条报修都需要清晰的路径',
        description: '报修通过电话、邮件和聊天进来，每一条都需要负责人、优先级和截止时间。',
        points: ['多个渠道', '多个团队', '多种优先级'],
      },
      answer: {
        title: '从报修到解决，一条流程',
        description: 'Fleet 把每条报修变成可跟踪的工单，派给合适的团队，并内置 SLA 和状态更新。',
      },
    },
    capabilities: {
      title: '每张工单，从头到尾',
      description: '在一条连贯流程中接收、分派、完成并分析工单。',
      tabs: [
        {
          icon: 'requests',
          label: '报修',
          title: '从任何渠道接收报修',
          description: '员工、租户和邮件的报修自动变成工单，并附带照片和位置。',
          points: [
            '用 Fleet Mail 将邮件转为工单',
            '每条报修附带照片和位置',
            '任何渠道的报修都能记录',
          ],
          visual: {
            kind: 'steps',
            title: '新报修',
            steps: [
              {
                kind: '邮件',
                text: '8 层空调不制冷',
              },
              {
                kind: '然后',
                text: '创建工单 WO-2310',
              },
              {
                kind: '然后',
                text: '派给暖通团队',
              },
            ],
          },
        },
        {
          icon: 'routing',
          label: '分派',
          title: '每张工单派给合适的团队',
          description: '按位置、工种或供应商分派，设置优先级并自动通知。',
          points: ['按项目和工种设置分派规则', '带 SLA 目标的优先级', '分派后立即通知'],
          visual: {
            kind: 'jobs',
            title: '分派队列',
            items: [
              {
                title: '空调不制冷',
                location: '8 层 · 暖通',
                status: '暖通团队',
                tone: 'info',
              },
              {
                title: '电梯门故障',
                location: '核心筒电梯 · 电梯',
                status: 'LiftCo',
                tone: 'info',
              },
              {
                title: '水龙头漏水',
                location: '1204 单元 · 给排水',
                status: '内部',
                tone: 'done',
              },
            ],
          },
        },
        {
          icon: 'mobile',
          label: '移动端',
          title: '现场直接更新',
          description: '技术人员在任何手机或平板（iOS 和 Android）上接单、上传照片并关闭工单。',
          points: ['在手机上接单', '完工时添加照片和备注', '状态即时同步给团队'],
          visual: {
            kind: 'log',
            title: 'WO-2310 动态',
            entries: [
              {
                when: '09:12',
                who: 'Fleet',
                what: '根据邮件创建了工单',
              },
              {
                when: '09:20',
                who: 'Marco L.',
                what: '已接单，前往 8 层',
              },
              {
                when: '10:05',
                who: 'Marco L.',
                what: '附 3 张照片关闭了工单',
              },
            ],
          },
        },
        {
          icon: 'analytics',
          label: 'SLA',
          title: '每张工单都跟踪 SLA',
          description: '在一个看板上掌握未完成工单、响应时间和逾期工作。',
          points: ['响应与解决时间', '逾期工作突出显示', '按项目和团队的 SLA 结果'],
          visual: {
            kind: 'chart',
            title: '平均响应时间 · 小时',
            stats: [
              {
                label: 'SLA 达成',
                value: '96.4%',
              },
              {
                label: '未完成工单',
                value: '128',
              },
            ],
            bars: [
              {
                label: '周一',
                value: 3,
              },
              {
                label: '周二',
                value: 2,
              },
              {
                label: '周三',
                value: 4,
              },
              {
                label: '周四',
                value: 2,
              },
              {
                label: '周五',
                value: 3,
              },
            ],
          },
        },
      ],
    },
    rows: [
      {
        tag: '模板',
        title: '周期性工作自动运行',
        description: '周期模板按计划生成例行工单，并附带检查清单和负责人。',
        points: ['例行工作的模板', '自动附加检查清单', '按项目和工种指定负责人'],
        visual: {
          kind: 'steps',
          title: '周期工单',
          steps: [
            {
              kind: '每',
              text: '周一 06:00',
            },
            {
              kind: '然后',
              text: '为每层创建清洁检查清单',
            },
          ],
        },
        photo: {
          id: 'engineersRooftop',
          alt: '两位工程师在屋顶查看平板',
        },
      },
      {
        tag: '审批',
        title: '内置费用审批',
        description: '超过设定阈值的报价会送到合适的审批人，每个决定都记录在工单上。',
        points: ['按项目或类别设置阈值', '在手机或邮箱中审批', '每个决定都有记录'],
        visual: {
          kind: 'jobs',
          title: '待审批',
          items: [
            {
              title: '冷水机组维修报价',
              location: '$6,800 · Harbour Point',
              status: '待批准',
              tone: 'due',
            },
            {
              title: '更换电梯门',
              location: '$2,100 · Tower B',
              status: '已批准',
              tone: 'done',
            },
          ],
        },
        photo: {
          id: 'acFilterService',
          alt: '技术人员更换空调滤网',
        },
      },
      {
        tag: '报表',
        title: '从每张工单中学习',
        description: '按楼宇、资产或供应商发现反复出现的问题，并据此优化预防性策略。',
        points: ['按资产统计反复故障', '每张工单和每个项目的成本', '长期趋势'],
        visual: {
          kind: 'chart',
          title: '反复故障 · 第三季度',
          stats: [
            {
              label: '重复故障',
              value: '14',
            },
            {
              label: '项目',
              value: '5',
            },
          ],
          bars: [
            {
              label: '暖通',
              value: 46,
            },
            {
              label: '电梯',
              value: 28,
            },
            {
              label: '给排水',
              value: 19,
            },
            {
              label: '照明',
              value: 12,
            },
            {
              label: '门',
              value: 7,
            },
          ],
        },
        photo: {
          id: 'warehouseAnalytics',
          alt: '主管在屏幕上查看绩效图表',
        },
      },
    ],
    quote: {
      text: '其他平台要么太复杂，要么太通用。Fleet 为我们提供了量身打造的方案，支持响应也更快。',
      author: '维护总监',
      company: '物流枢纽',
      photo: {
        id: 'hvacTechnicians',
        alt: '暖通技术人员维护屋顶机组',
      },
    },
    faq: [
      {
        question: '什么是工单管理软件？',
        answer:
          '工单管理软件跟踪每项维护工作从报修到完成的全过程，包括负责人、优先级、截止时间、成本和完工凭证。',
      },
      {
        question: '报修如何变成工单？',
        answer:
          '员工、租户和邮件的报修会自动变成工单。使用 Fleet Mail，发送到维护邮箱的邮件会生成附带详情的工单。',
      },
      {
        question: '供应商能接收和更新工单吗？',
        answer: '可以。供应商通过快速访问接收工单，然后接单、更新，并附照片和备注关闭工单。',
      },
      {
        question: '技术人员需要专用设备吗？',
        answer:
          'Fleet 可在任何手机、平板或电脑上运行，支持 iOS 和 Android，技术人员可以立即开始工作。',
      },
      {
        question: 'Fleet 如何跟踪 SLA？',
        answer: '每张工单都设有响应和解决的 SLA 目标，看板按项目、团队和供应商展示结果。',
      },
    ],
  },
  fieldService: {
    hero: {
      eyebrow: '现场服务优化',
      title: '面向移动团队的现场服务优化',
      description: '把合适的技术人员和合适的信息送到合适的现场，从首次到场到工单关闭全程实时跟进。',
      highlights: ['智能分派', '移动检查清单', '实时状态'],
      visual: {
        kind: 'log',
        title: '现场动态 · 今日',
        entries: [
          {
            when: '08:10',
            who: 'Aisha K.',
            what: '已到达 Northgate · 机房',
          },
          {
            when: '09:35',
            who: 'CoolAir',
            what: '完成了 AHU-07 保养并记录读数',
          },
          {
            when: '10:20',
            who: 'Marco L.',
            what: '开始在 Tower B 进行电梯检查',
          },
        ],
      },
    },
    challenge: {
      pressure: {
        title: '现场团队覆盖的范围越来越大',
        description: '技术人员每天在不同项目、工种和供应商之间奔走，每次到场都需要掌握正确的信息。',
        points: ['多个项目', '多个工种', '严格的 SLA'],
      },
      answer: {
        title: '每次到场都准备就绪',
        description:
          'Fleet 让技术人员在手机上掌握工单详情、资产历史和检查清单，也让管理者实时看到每个团队。',
      },
    },
    capabilities: {
      title: '优化每一次现场服务',
      description: '在整个资产组合中规划、分派、完成并衡量现场工作。',
      tabs: [
        {
          icon: 'scheduling',
          label: '排程',
          title: '从容安排每一天',
          description: '按项目、工种和空闲情况安排预防性和被动维修，在团队与供应商之间均衡工作量。',
          points: ['按项目、工种和空闲排程', '团队间工作量均衡', '预防性与被动维修统一安排'],
          visual: {
            kind: 'jobs',
            title: '今日 · Northgate',
            items: [
              {
                title: 'AHU-07 月度保养',
                location: '08:00 · Aisha K.',
                status: '已排期',
                tone: 'info',
              },
              {
                title: '防火门检查',
                location: '11:00 · Marco L.',
                status: '已排期',
                tone: 'info',
              },
              {
                title: '水泵房检查',
                location: '14:00 · CoolAir',
                status: '已确认',
                tone: 'done',
              },
            ],
          },
        },
        {
          icon: 'routing',
          label: '分派',
          title: '按位置和工种分派',
          description: '按楼栋、区域或任务类型，把工单派给最近的合格技术人员或供应商。',
          points: ['按楼栋和区域分派', '技能与工单匹配', '供应商纳入同一流程'],
          visual: {
            kind: 'steps',
            title: '分派规则',
            steps: [
              {
                kind: '触发',
                text: 'Northgate 的暖通工单',
              },
              {
                kind: '如果',
                text: '优先级为高',
              },
              {
                kind: '然后',
                text: '派给最近的暖通技术人员',
              },
            ],
          },
        },
        {
          icon: 'mobile',
          label: '现场',
          title: '技术人员现场所需一应俱全',
          description: '资产历史、手册和检查清单可从工单直接打开，现场记录照片、读数和签名。',
          points: ['搜索或扫码打开资产', '附照片和读数的检查清单', '完工时签名确认'],
          visual: {
            kind: 'asset',
            title: '现场资产',
            name: '电梯 L2',
            location: 'Northgate Mall · 核心筒电梯',
            status: '待保养',
            facts: [
              {
                label: '上次检查',
                value: '8月2日',
              },
              {
                label: '证书',
                value: '有效至 2027年1月',
              },
              {
                label: '手册',
                value: '电梯 L2 手册.pdf',
              },
              {
                label: '未完成工单',
                value: '2',
              },
            ],
          },
        },
        {
          icon: 'analytics',
          label: '绩效',
          title: '跟踪现场绩效',
          description: '按技术人员、团队和供应商查看响应时间、首次修复率和 SLA 结果。',
          points: ['按团队的响应时间', '首次到场修复率', '按供应商的 SLA 结果'],
          visual: {
            kind: 'chart',
            title: '首次修复率 · 第三季度',
            stats: [
              {
                label: '首次修复',
                value: '87%',
              },
              {
                label: 'SLA 达成',
                value: '96.4%',
              },
            ],
            bars: [
              {
                label: '暖通',
                value: 88,
              },
              {
                label: '电梯',
                value: 84,
              },
              {
                label: '电气',
                value: 91,
              },
              {
                label: '给排水',
                value: 86,
              },
              {
                label: '消防',
                value: 93,
              },
            ],
          },
        },
      ],
    },
    rows: [
      {
        tag: '移动端',
        title: '适应各种现场环境',
        description: 'Fleet 在机房、地下室和停车场等低带宽区域也能稳定运行，更新随时送达团队。',
        points: [
          '低带宽环境下稳定运行',
          '任何手机或平板，支持 iOS 和 Android',
          '照片和读数同步到工单',
        ],
        visual: {
          kind: 'jobs',
          title: '现场更新',
          items: [
            {
              title: '地下室水泵检查',
              location: 'B2 停车场',
              status: '已同步',
              tone: 'done',
            },
            {
              title: '屋顶 AHU 保养',
              location: '屋顶层',
              status: '已同步',
              tone: 'done',
            },
          ],
        },
        photo: {
          id: 'factoryTechnician',
          alt: '技术人员用平板检查设备',
        },
      },
      {
        tag: '沟通',
        title: '实时提醒与审批',
        description: '技术人员即时收到新工单、审批和更新，管理者在状态变化的那一刻就能看到。',
        points: ['即时工单通知', '现场即可审批', '管理者实时掌握状态'],
        visual: {
          kind: 'log',
          title: '提醒',
          entries: [
            {
              when: '09:02',
              who: 'Fleet',
              what: '向 Aisha K. 发送了紧急工单 WO-2318',
            },
            {
              when: '09:06',
              who: 'Aisha K.',
              what: '已接单，正在前往',
            },
          ],
        },
        photo: {
          id: 'technicianPlantRoom',
          alt: '技术人员在机房维护设备',
        },
      },
      {
        tag: '供应商',
        title: '承包商纳入同一流程',
        description: '外部技术人员通过快速访问接单、更新并关闭工单，与内部团队协同工作。',
        points: ['供应商快速访问', '相同的检查清单与标准', '供应商工单在同一看板'],
        visual: {
          kind: 'jobs',
          title: '供应商工单',
          items: [
            {
              title: 'CoolAir · 暖通',
              location: '今日 4 张工单',
              status: '正常',
              tone: 'done',
            },
            {
              title: 'LiftCo · 电梯',
              location: '今日 2 张工单',
              status: '1 张到期',
              tone: 'due',
            },
          ],
        },
        photo: {
          id: 'hvacTechnicians',
          alt: '暖通技术人员维护屋顶机组',
        },
      },
    ],
    quote: {
      text: 'Fleet 让我们的被动维修工作量减少了近 40%。技术人员、资产记录和工单终于集中在了一处。',
      author: '物业运营负责人',
      company: '综合体项目',
      photo: {
        id: 'warehouseTeam',
        alt: '仓储团队在货架间核对库存',
      },
    },
    faq: [
      {
        question: '什么是现场服务优化？',
        answer:
          '现场服务优化是指高效地规划、分派和完成现场工作，让技术人员带着正确的信息到达正确的工单，并让管理者跟踪结果。',
      },
      {
        question: 'Fleet 如何分派工单？',
        answer: '分派规则按楼栋、区域、工种或供应商分配工单，每张工单都有优先级和 SLA 目标。',
      },
      {
        question: 'Fleet 能在信号弱的地方使用吗？',
        answer: 'Fleet 专为机房、地下室和停车场等低带宽区域设计，能够稳定运行。',
      },
      {
        question: '外部承包商可以使用 Fleet 吗？',
        answer: '可以。供应商可快速访问自己的工单，并遵循与内部团队相同的检查清单和标准。',
      },
      {
        question: '管理者能实时看到什么？',
        answer: '管理者可以实时看到所有项目的工单状态、技术人员动态、逾期工作和 SLA 结果。',
      },
    ],
  },
  tenants: {
    hero: {
      eyebrow: '租户与住户管理',
      title: '赢得信任的租户与住户管理',
      description: '为租户和住户提供简单的报修方式，在每一步同步进度，并在每栋楼快速解决问题。',
      highlights: ['报修简单', '进度清晰', '解决更快'],
      visual: {
        kind: 'jobs',
        title: '住户报修 · Bayview',
        items: [
          {
            title: '厨房水龙头漏水',
            location: '1204 单元',
            status: '已解决',
            tone: 'done',
          },
          {
            title: '空调不制冷',
            location: '806 单元',
            status: '技术人员在路上',
            tone: 'info',
          },
          {
            title: '大堂灯不亮',
            location: 'A 座 · 大堂',
            status: '已排期',
            tone: 'due',
          },
        ],
      },
    },
    challenge: {
      pressure: {
        title: '住户期待快速、可见的服务',
        description: '给排水、空调和照明报修每天都有，住户希望知道由谁处理、何时处理。',
        points: ['每日报修', '众多单元', '公共区域'],
      },
      answer: {
        title: '每条报修都跟踪到解决',
        description: 'Fleet 把每条报修变成状态清晰的工单，让住户、管理者和技术人员看到同一视图。',
      },
    },
    capabilities: {
      title: '更好的居住与办公体验',
      description: '从第一条报修到关闭，提供住户和租户都能跟进的服务。',
      tabs: [
        {
          icon: 'requests',
          label: '报修',
          title: '报修简单方便',
          description: '报修可通过邮件、租户门户或前台提交，并自动变成工单。',
          points: ['用 Fleet Mail 将邮件转为工单', '租户门户集成', '前台几秒即可登记'],
          visual: {
            kind: 'steps',
            title: '住户报修',
            steps: [
              {
                kind: '邮件',
                text: '1204 单元厨房水龙头漏水',
              },
              {
                kind: '然后',
                text: '创建附照片的工单',
              },
              {
                kind: '然后',
                text: '今日派给水电工',
              },
            ],
          },
        },
        {
          icon: 'communication',
          label: '进度',
          title: '每一步状态清晰',
          description: 'Fleet 从首次报修到工单关闭全程同步进度，工作推进时及时更新。',
          points: ['每个阶段都有更新', '完工附照片凭证', '前台也能看到状态'],
          visual: {
            kind: 'log',
            title: '报修进度',
            entries: [
              {
                when: '09:10',
                who: 'Fleet',
                what: '收到 1204 单元的报修',
              },
              {
                when: '09:25',
                who: 'Fleet',
                what: '派给内部水电工',
              },
              {
                when: '11:40',
                who: 'Marco L.',
                what: '修好漏水并上传照片',
              },
            ],
          },
        },
        {
          icon: 'assets',
          label: '单元',
          title: '每个单元都有历史',
          description: '记录每个单元和公共资产的维护历史，从电梯和水泵到大堂和停车场。',
          points: ['单元级维护历史', '公共资产按计划维护', '按单元和区域核算成本'],
          visual: {
            kind: 'asset',
            title: '单元档案',
            name: '1204 单元',
            location: 'Bayview · A 座',
            status: '已入住',
            facts: [
              {
                label: '本年报修',
                value: '4',
              },
              {
                label: '上次上门',
                value: '9月18日',
              },
              {
                label: '未完成工单',
                value: '0',
              },
              {
                label: '本年成本',
                value: '$640',
              },
            ],
          },
        },
        {
          icon: 'analytics',
          label: '报表',
          title: '业委会可见的解决时效',
          description: '按楼栋、区域或单元跟踪解决时间和支出，并与业委会和管理委员会共享只读看板。',
          points: ['按楼栋的解决时间', '按区域和单元的支出', '面向业委会的只读看板'],
          visual: {
            kind: 'chart',
            title: '平均解决时间 · 天',
            stats: [
              {
                label: '已解决',
                value: '312',
              },
              {
                label: '处理中',
                value: '8',
              },
            ],
            bars: [
              {
                label: 'A 座',
                value: 2,
              },
              {
                label: 'B 座',
                value: 3,
              },
              {
                label: '别墅',
                value: 2,
              },
              {
                label: '裙楼',
                value: 1,
              },
              {
                label: '停车场',
                value: 2,
              },
            ],
          },
        },
      ],
    },
    rows: [
      {
        tag: '前台',
        title: '前台、安保与维修协同一致',
        description: '按角色定制的视图让礼宾、安保和维修团队获得快速行动所需的信息。',
        points: ['按角色定制视图', '前台登记报修', '交接备注跨班次共享'],
        visual: {
          kind: 'jobs',
          title: '前台',
          items: [
            {
              title: '包裹室照明',
              location: '礼宾登记',
              status: '已分派',
              tone: 'info',
            },
            {
              title: '闸口门禁故障',
              location: '安保登记',
              status: '已解决',
              tone: 'done',
            },
          ],
        },
        photo: {
          id: 'supportAgent',
          alt: '佩戴耳机的客服人员',
        },
      },
      {
        tag: '公共区域',
        title: '公共资产保持最佳状态',
        description: '计划任务、实时提醒和审计追踪让电梯、水泵、消防系统和配套设施持续运转。',
        points: ['公共资产预防性计划', '故障实时提醒', '每次巡检都有审计追踪'],
        visual: {
          kind: 'jobs',
          title: '公共资产 · Bayview',
          items: [
            {
              title: '电梯 L1 月度检查',
              location: 'A 座',
              status: '已完成',
              tone: 'done',
            },
            {
              title: '泳池水泵保养',
              location: '配套设施',
              status: '今日到期',
              tone: 'due',
            },
          ],
        },
        photo: {
          id: 'apartmentBuilding',
          alt: '带景观花园的现代住宅楼',
        },
      },
      {
        tag: '服务',
        title: '酒店级服务水准',
        description: '客房清洁、保洁和维修按计划进行，让每个空间都为住户和访客准备就绪。',
        points: ['清洁与客房计划', '附照片凭证的检查清单', '所有楼栋统一标准'],
        visual: {
          kind: 'steps',
          title: '入住交接清单',
          steps: [
            {
              kind: '单元',
              text: '806 单元 · 周五入住',
            },
            {
              kind: '然后',
              text: '深度清洁与验收',
            },
            {
              kind: '然后',
              text: '钥匙在前台备好',
            },
          ],
        },
        photo: {
          id: 'hotelHousekeeping',
          alt: '客房服务员整理房间',
        },
      },
    ],
    quote: {
      text: 'Fleet 让我们的被动维修工作量减少了近 40%。技术人员、资产记录和工单终于集中在了一处。',
      author: '物业运营负责人',
      company: '综合体项目',
      photo: {
        id: 'technicianDrill',
        alt: '技术人员用电钻安装部件',
      },
    },
    faq: [
      {
        question: '租户和住户如何提交报修？',
        answer:
          '报修可通过 Fleet Mail 邮件、集成的租户门户，或由前台和安保人员提交，每条报修都会变成工单。',
      },
      {
        question: '如何让住户了解进度？',
        answer: 'Fleet 从首次报修到关闭全程同步进度，工作推进时及时更新，完成后附照片凭证。',
      },
      {
        question: '能按单元跟踪维护吗？',
        answer: '可以。Fleet 记录每个单元和公共资产在所有楼栋和区域的维护历史与成本。',
      },
      {
        question: '业委会和管理委员会能查看绩效吗？',
        answer: '可以。与业委会和管理委员会共享只读看板，展示各楼栋的解决时间和支出。',
      },
      {
        question: 'Fleet 也适用于商业租户吗？',
        answer: '适用。Fleet 在一个平台中支持住宅社区、写字楼、零售和综合体项目。',
      },
    ],
  },
  vendors: {
    hero: {
      eyebrow: '供应商与承包商管理',
      title: '覆盖所有项目的供应商与承包商管理',
      description:
        '在一个平台中协调承包商、报价、合同和绩效，每张工单、每次审批和每份文档都有记录。',
      highlights: ['供应商评分', '报价审批', '合同跟踪'],
      visual: {
        kind: 'jobs',
        title: '供应商 · 本月',
        items: [
          {
            title: 'CoolAir · 暖通',
            location: '42 张工单 · 准时率 98%',
            status: '优选',
            tone: 'done',
          },
          {
            title: 'LiftCo · 电梯',
            location: '18 张工单 · 准时率 91%',
            status: '待复核',
            tone: 'due',
          },
          {
            title: 'BrightSpark · 电气',
            location: '27 张工单 · 准时率 95%',
            status: '续约中',
            tone: 'info',
          },
        ],
      },
    },
    challenge: {
      pressure: {
        title: '合作伙伴驱动您的运营',
        description: '暖通、电梯、保洁和安保合作伙伴各有自己的合同、报价、证书和服务水平。',
        points: ['众多承包商', '众多合同', '众多报价'],
      },
      answer: {
        title: '所有合作伙伴共用一套流程',
        description: 'Fleet 让供应商快速访问自己的工单，也让您全面掌握成本、质量与合规。',
      },
    },
    capabilities: {
      title: '管理每一段供应商关系',
      description: '从入驻到评分，供应商协同集中一处。',
      tabs: [
        {
          icon: 'vendors',
          label: '名录',
          title: '完整的供应商名录',
          description: '在一个地方保存每个供应商的联系人、工种、服务区域、证书和费率。',
          points: ['工种与服务区域', '费率与合同条款', '证书与保险存档'],
          visual: {
            kind: 'jobs',
            title: '供应商名录',
            items: [
              {
                title: 'CoolAir',
                location: '暖通 · 所有项目',
                status: '合作中',
                tone: 'done',
              },
              {
                title: 'LiftCo',
                location: '电梯 · 阿联酋区域',
                status: '合作中',
                tone: 'done',
              },
              {
                title: 'SafeGuard',
                location: '消防 · Tower B',
                status: '入驻中',
                tone: 'info',
              },
            ],
          },
        },
        {
          icon: 'approvals',
          label: '报价',
          title: '报价与审批顺畅流转',
          description: '供应商直接在工单上提交报价，审批按成本、项目或类别流转。',
          points: ['报价附在工单上', '按阈值流转审批', '每个决定都有记录'],
          visual: {
            kind: 'steps',
            title: '报价审批',
            steps: [
              {
                kind: '报价',
                text: 'CoolAir · 冷水机组维修 $3,800',
              },
              {
                kind: '审批',
                text: '财务经理在邮箱中批准',
              },
              {
                kind: '然后',
                text: '通知供应商并排期',
              },
            ],
          },
        },
        {
          icon: 'documents',
          label: '合同',
          title: '合同与证书按时管理',
          description: '跟踪合同条款、保险和证书，到期前自动提醒。',
          points: ['每个供应商的合同条款', '跟踪保险与证书', '到期前提醒'],
          visual: {
            kind: 'files',
            title: '供应商文档',
            items: [
              {
                title: 'LiftCo 服务合同.pdf',
                location: '30 天后续约',
                status: '续约',
                tone: 'due',
              },
              {
                title: 'CoolAir 保险.pdf',
                location: '有效至 2027年3月',
                status: '有效',
                tone: 'done',
              },
              {
                title: 'SafeGuard 证书.pdf',
                location: '今日上传',
                status: '待审核',
                tone: 'info',
              },
            ],
          },
        },
        {
          icon: 'analytics',
          label: '绩效',
          title: '每个供应商都有评分',
          description: '按供应商和区域对比响应时间、SLA 结果和成本。',
          points: ['按供应商的响应时间', '按区域的 SLA 结果', '单张工单成本对比'],
          visual: {
            kind: 'chart',
            title: '准时完成率 · 第三季度',
            stats: [
              {
                label: '供应商',
                value: '24',
              },
              {
                label: '准时',
                value: '95%',
              },
            ],
            bars: [
              {
                label: 'CoolAir',
                value: 98,
              },
              {
                label: 'LiftCo',
                value: 91,
              },
              {
                label: 'BrightSpark',
                value: 95,
              },
              {
                label: 'SafeGuard',
                value: 93,
              },
              {
                label: 'CleanPro',
                value: 96,
              },
            ],
          },
        },
      ],
    },
    rows: [
      {
        tag: '访问',
        title: '供应商几分钟即可入驻',
        description: '供应商快速访问自己的工单和文档，新合作伙伴第一天就能开始工作。',
        points: ['设置简单，快速访问', '供应商只看到自己的工单', '与内部团队相同的标准'],
        visual: {
          kind: 'jobs',
          title: '供应商入驻',
          items: [
            {
              title: 'SafeGuard',
              location: '已授权访问',
              status: '合作中',
              tone: 'done',
            },
            {
              title: 'CleanPro',
              location: '已发送邀请',
              status: '待接受',
              tone: 'info',
            },
          ],
        },
        photo: {
          id: 'partnerMeeting',
          alt: '团队与合作伙伴围桌开会',
        },
      },
      {
        tag: '供应方',
        title: '供应方与资产关联',
        description: '把供应方与其负责的资产和合同关联，每张工单都能看到保修和服务详情。',
        points: ['供应方关联资产', '每张工单显示保修信息', '按供应方查看服务历史'],
        visual: {
          kind: 'asset',
          title: '供应方关联',
          name: '冷水机组 CH-02',
          location: '供应方 · CoolAir',
          status: '保修期内',
          facts: [
            {
              label: '保修',
              value: '2028年3月',
            },
            {
              label: '本年工单',
              value: '6',
            },
            {
              label: '本年成本',
              value: '$4,210',
            },
            {
              label: '合同',
              value: '年度',
            },
          ],
        },
        photo: {
          id: 'stockCheck',
          alt: '协调员在货架前核对库存',
        },
      },
      {
        tag: '沟通',
        title: '与每个合作伙伴清晰沟通',
        description:
          '更新、照片和审批在您的团队与供应商之间实时流转，可在 Fleet 中或通过 Fleet Mail 邮件完成。',
        points: ['实时共享更新和照片', '通过邮件或 Fleet 审批', '每张工单都有完整历史'],
        visual: {
          kind: 'log',
          title: '供应商沟通 · WO-2304',
          entries: [
            {
              when: '09:14',
              who: 'CoolAir',
              what: '提交了 $3,800 的报价',
            },
            {
              when: '09:40',
              who: '财务',
              what: '通过邮件批准了报价',
            },
          ],
        },
        photo: {
          id: 'colleaguesTablets',
          alt: '两位同事用平板查看工作',
        },
      },
    ],
    quote: {
      text: '其他平台要么太复杂，要么太通用。Fleet 为我们提供了量身打造的方案，支持响应也更快。',
      author: '维护总监',
      company: '物流枢纽',
      photo: {
        id: 'warehouseTeam',
        alt: '仓储团队在货架间核对库存',
      },
    },
    faq: [
      {
        question: '供应商如何访问 Fleet？',
        answer: '供应商只需简单设置即可快速访问自己的工单和文档，支持任何手机、平板或电脑。',
      },
      {
        question: '供应商能在 Fleet 中提交报价吗？',
        answer: '可以。供应商把报价附在工单上，审批会按成本、项目或类别送到合适的人。',
      },
      {
        question: 'Fleet 如何跟踪供应商绩效？',
        answer: 'Fleet 记录每张工单的响应时间、SLA 结果和成本，并按区域和工种对比供应商评分。',
      },
      {
        question: 'Fleet 能跟踪供应商合同和证书吗？',
        answer: '可以。为每个供应商保存合同、保险和证书，到期前自动提醒。',
      },
      {
        question: 'Fleet 支持跨区域的供应商吗？',
        answer: '支持。按区域设置服务范围和规则，并在整个资产组合中对比供应商绩效。',
      },
    ],
  },
}

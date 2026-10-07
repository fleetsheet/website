import type { NavLink } from '@/config'
import type { PlatformEntry } from '@/data/en/platform'
import type { CategoryPageContent, SolutionsShared } from '@/data/en/solutions'
import type { CategoryPageId, IndustryPageId, SolutionGroup, SolutionPageId } from '@/solutions'

export const menu = {
  label: '解决方案',
  groups: {
    category: '按类别',
    industry: '按行业',
  } satisfies Record<SolutionGroup, string>,
  contact: '没有找到您的行业？欢迎联系我们',
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
  facilityManagement: {
    label: '设施管理',
    summary: '每栋楼、每项资产和每个团队尽在一个控制台。',
    meta: {
      title: '设施管理软件 | Fleet',
      description:
        '用 Fleet 管理每个项目的设施运营：工单、预防性维护、资产、供应商与合规集中在一个平台。',
    },
  },
  retail: {
    label: '购物中心与零售',
    summary: '门店和公共区域每天都以最佳状态迎客。',
    meta: {
      title: '购物中心与零售维护软件 | Fleet',
      description:
        '借助快速工单、电梯与暖通预防性计划、租户协同和支出跟踪，让购物中心和零售项目随时迎客。',
    },
  },
  hospitality: {
    label: '酒店与餐饮',
    summary: '前台与后场，为每位客人做好准备。',
    meta: {
      title: '酒店与餐饮维护软件 | Fleet',
      description: '通过移动工单、厨房设备检查、安全合规和预防性维护，守护酒店与餐饮的宾客体验。',
    },
  },
  healthcareEducation: {
    label: '医疗与教育',
    summary: '为患者和学生提供安全合规的建筑。',
    meta: {
      title: '医疗与教育设施维护软件 | Fleet',
      description:
        '通过预防性维护、可随时审计的记录和快速维修，让医院、诊所、学校和校园保持安全合规。',
    },
  },
  logistics: {
    label: '航运与物流',
    summary: '码头、设备和车辆持续运转。',
    meta: {
      title: '物流与仓储维护软件 | Fleet',
      description:
        '通过移动工单、预防性计划和停机跟踪，让每个枢纽的装卸口、输送线、叉车和车辆持续运转。',
    },
  },
  hvacLifts: {
    label: '暖通、电梯与扶梯',
    summary: '关键楼宇系统按计划运行并持证合规。',
    meta: {
      title: '暖通、电梯与扶梯维护软件 | Fleet',
      description:
        '通过周期计划、证书管理、供应商协同和停机分析，规划并证明暖通、电梯与扶梯的维护。',
    },
  },
  dataCenters: {
    label: '数据中心',
    summary: '制冷、电力和可用性尽在掌控。',
    meta: {
      title: '数据中心设施维护软件 | Fleet',
      description:
        '通过制冷与电力系统的预防性计划、联动 BMS 的告警、严格的变更记录和供应商协同，保障可用性。',
    },
  },
  fitness: {
    label: '健身与康养中心',
    summary: '为会员提供干净、安全、运转良好的空间。',
    meta: {
      title: '健身与康养中心维护软件 | Fleet',
      description:
        '通过设备检查、保洁计划和快速响应会员报修，让健身房、水疗和康养中心干净、安全、运转良好。',
    },
  },
  mep: {
    label: '机电维护',
    summary: '机械、电气和给排水工作在一个流程中完成。',
    meta: {
      title: '机电（MEP）维护软件 | Fleet',
      description:
        '通过预防性计划、按工种派单和合规记录，管理整个资产组合的机械、电气和给排水维护。',
    },
  },
  offices: {
    label: '写字楼与综合体',
    summary: '高效的办公场所与顺畅的公共空间。',
    meta: {
      title: '写字楼与综合体维护软件 | Fleet',
      description: '通过租户报修、预防性维护、供应商协同和全组合报表，运营写字楼与综合体项目。',
    },
  },
  industrial: {
    label: '工厂与工业园区管理',
    summary: '生产资产维护到位，实现最高可用性。',
    meta: {
      title: '工厂与工业维护软件 | Fleet',
      description: '通过资产台账、预防性与按用量维护、安全检查和停机分析，最大化工厂的设备可用性。',
    },
  },
  vehicles: {
    label: '车辆管理',
    summary: '从采购到报废，管理每一辆车。',
    meta: {
      title: '车队车辆管理软件 | Fleet',
      description:
        '在一个平台管理每一辆车：采购、维护、年检、理赔、罚单和使用率，记录随时可供审计。',
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
        id: 'facilityManagement',
        photo: {
          id: 'inspectionClipboard',
          alt: '检查员在夹板上填写检查清单',
        },
      },
      {
        id: 'retail',
        photo: {
          id: 'mallAtrium',
          alt: '购物中心中庭里的人群',
        },
      },
      {
        id: 'hospitality',
        photo: {
          id: 'hotelHousekeeping',
          alt: '客房服务员整理房间',
        },
      },
      {
        id: 'healthcareEducation',
        photo: {
          id: 'cleanerCorridor',
          alt: '保洁员在走廊为门把手消毒',
        },
      },
      {
        id: 'logistics',
        photo: {
          id: 'warehouseTeam',
          alt: '仓储团队在货架间核对库存',
        },
      },
      {
        id: 'hvacLifts',
        photo: {
          id: 'hvacTechnicians',
          alt: '暖通技术人员维护屋顶机组',
        },
      },
      {
        id: 'dataCenters',
        photo: {
          id: 'dataCenter',
          alt: '数据中心里成排的服务器机柜',
        },
      },
      {
        id: 'fitness',
        photo: {
          id: 'acFilterService',
          alt: '技术人员更换空调滤网',
        },
      },
      {
        id: 'mep',
        photo: {
          id: 'electricianPanel',
          alt: '电工在控制柜前作业',
        },
      },
      {
        id: 'offices',
        photo: {
          id: 'officeFloor',
          alt: '开放式办公区里工作的人们',
        },
      },
      {
        id: 'industrial',
        photo: {
          id: 'plantManagers',
          alt: '工厂经理向戴安全帽的工程师讲解',
        },
      },
      {
        id: 'vehicles',
        photo: {
          id: 'fleetVans',
          alt: '停在仓库外的配送货车',
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
      id: 'cityTowers',
      alt: '蓝天下的玻璃幕墙写字楼',
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

export const industries: Record<IndustryPageId, CategoryPageContent> = {
  facilityManagement: {
    hero: {
      eyebrow: '设施管理',
      title: '适用于每个项目的设施管理软件',
      description: 'Fleet 是您设施运营的数字控制台，从日常维护到突发维修，让每栋建筑保持最佳状态。',
      highlights: ['集中管控', '工单自动化', '资产跟踪'],
      visual: {
        kind: 'jobs',
        title: '设施 · 今日',
        items: [
          {
            title: '更换暖通滤网',
            location: 'Tower B · 4 层',
            status: '进行中',
            tone: 'info',
          },
          {
            title: '灭火器检查',
            location: 'Harbour Point · 全楼层',
            status: '今日到期',
            tone: 'due',
          },
          {
            title: '大堂门维修',
            location: 'Northgate · 入口',
            status: '已完成',
            tone: 'done',
          },
        ],
      },
    },
    challenge: {
      pressure: {
        title: '设施团队要管理的事务逐年增加',
        description: '一个或多个项目中的建筑、设备、供应商和员工，各有自己的计划、预算和合规要求。',
        points: ['建筑众多', '承包商众多', '标准众多'],
      },
      answer: {
        title: '一个平台管理所有设施',
        description: 'Fleet 把维护、资产、供应商和合规整合到一个云平台，让团队从容掌控每个项目。',
      },
    },
    capabilities: {
      title: '为现代设施团队打造',
      description: '创建、跟踪并关闭工单，同时与预算、合规和现场实际保持一致。',
      tabs: [
        {
          icon: 'preventive',
          label: '预防性维护',
          title: '覆盖每个系统的预防性计划',
          description: '按时间或用量排程并自动执行暖通、给排水、照明和消防的维护。',
          points: ['按资产类型的周期计划', '每次巡检都有检查清单', '到期前自动生成工单'],
          visual: {
            kind: 'steps',
            title: '预防性计划',
            steps: [
              {
                kind: '计划',
                text: '消防 · 每月检查',
              },
              {
                kind: '然后',
                text: '提前 7 天创建工单',
              },
              {
                kind: '然后',
                text: '附检查清单分派给安全团队',
              },
            ],
          },
        },
        {
          icon: 'workOrders',
          label: '维修',
          title: '临时维修全程跟踪',
          description: '分派并跟踪维修，每张工单都支持上传照片、移动端更新和 SLA 计时。',
          points: ['报修附照片和位置', '工单分派给团队或供应商', 'SLA 达成情况一屏掌握'],
          visual: {
            kind: 'jobs',
            title: '待处理维修',
            items: [
              {
                title: '管道漏水',
                location: 'Tower B · 地下室',
                status: '已分派',
                tone: 'info',
              },
              {
                title: '窗锁损坏',
                location: 'Harbour Point · 7 层',
                status: '今日到期',
                tone: 'due',
              },
              {
                title: '光感器故障',
                location: 'Northgate · 2 层',
                status: '已解决',
                tone: 'done',
              },
            ],
          },
        },
        {
          icon: 'assets',
          label: '资产',
          title: '每项资产都有维保记录',
          description: '按建筑、楼层或设备记录并保存维保历史，附带成本和文档。',
          points: ['按建筑、楼层和资产查看历史', '每项资产的成本与停机', '附带手册和证书'],
          visual: {
            kind: 'asset',
            title: '资产档案',
            name: '锅炉 B-01',
            location: 'Northgate · 机房',
            status: '运行中',
            facts: [
              {
                label: '上次保养',
                value: '9月3日',
              },
              {
                label: '下次保养',
                value: '12月3日',
              },
              {
                label: '本年成本',
                value: '$2,940',
              },
              {
                label: '未完成工单',
                value: '0',
              },
            ],
          },
        },
        {
          icon: 'analytics',
          label: '报表',
          title: '更明智的运营决策',
          description: '查看哪些建筑重复问题最多、哪些资产占用预算最多、哪些团队达成了 SLA。',
          points: ['按建筑查看重复问题', '按资产和成本中心查看支出', '按团队查看 SLA 结果'],
          visual: {
            kind: 'chart',
            title: '各项目未完成工单',
            stats: [
              {
                label: '未完成工单',
                value: '128',
              },
              {
                label: 'SLA 达成',
                value: '96.4%',
              },
            ],
            bars: [
              {
                label: 'Harbour Point',
                value: 34,
              },
              {
                label: 'Tower B',
                value: 29,
              },
              {
                label: 'Northgate',
                value: 26,
              },
              {
                label: 'Bayview',
                value: 22,
              },
              {
                label: 'Westport',
                value: 17,
              },
            ],
          },
        },
      ],
    },
    rows: [
      {
        tag: '合规',
        title: '合规可控，责任清晰',
        description:
          '内置审计轨迹、文档存储和版本控制，让每条维保记录、许可证和检查结果都有据可查。',
        points: ['每项操作都有审计轨迹', '许可证和证书留档', '检查结果关联到资产'],
        visual: {
          kind: 'files',
          title: '合规 · Harbour Point',
          items: [
            {
              title: '消防安全证书.pdf',
              location: '有效至 2027年6月',
              status: '有效',
              tone: 'done',
            },
            {
              title: '电梯许可证.pdf',
              location: '30 天后续期',
              status: '续期',
              tone: 'due',
            },
          ],
        },
        photo: {
          id: 'inspectionClipboard',
          alt: '检查员在夹板上填写检查清单',
        },
      },
      {
        tag: '移动端',
        title: '随时随地实时维护',
        description:
          'Fleet 支持手机、平板和电脑。随时提交工单，任务逾期时收到提醒，完成后收到照片凭证。',
        points: ['任何设备都能提交工单', '逾期工作及时提醒', '完成时附照片凭证'],
        visual: {
          kind: 'log',
          title: '现场动态',
          entries: [
            {
              when: '09:20',
              who: 'Marco L.',
              what: '上传 4 张照片，完成锅炉检查',
            },
            {
              when: '09:05',
              who: 'Fleet',
              what: '标记 Tower B 有 2 张逾期工单',
            },
          ],
        },
        photo: {
          id: 'technicianPlantRoom',
          alt: '技术人员在机房维护设备',
        },
      },
      {
        tag: '多项目',
        title: '跨地点轻松扩展',
        description: '按物业设置不同规则和流程，指派区域主管，并汇总报表，清晰掌握整个资产组合。',
        points: ['按物业设置规则和流程', '区域主管', '全组合报表'],
        visual: {
          kind: 'jobs',
          title: '资产组合 · 本周',
          items: [
            {
              title: 'Harbour Point',
              location: '34 张工单 · 97% 按时',
              status: '进展正常',
              tone: 'done',
            },
            {
              title: 'Tower B',
              location: '29 张工单 · 89% 按时',
              status: '需复核',
              tone: 'due',
            },
          ],
        },
        photo: {
          id: 'officeCorridor',
          alt: '人们走过明亮的办公走廊',
        },
      },
    ],
    quote: {
      text: 'Fleet 让我们的被动维修工作量减少了近 40%。技术人员、资产记录和工单终于集中在了一处。',
      author: '物业运营负责人',
      company: '综合体项目',
      photo: {
        id: 'hvacTechnicians',
        alt: '暖通技术人员维护屋顶机组',
      },
    },
    faq: [
      {
        question: '什么是设施管理软件？',
        answer:
          '设施管理软件把建筑、资产、维护、供应商和合规记录整合到一个系统，帮助团队规划、运营并汇报每个项目。',
      },
      {
        question: 'Fleet 能管理学校校园、写字楼和综合体吗？',
        answer: '可以。Fleet 支持各类设施，从单栋建筑到校园和多项目组合，都在一个云平台上管理。',
      },
      {
        question: 'Fleet 如何帮助合规？',
        answer:
          'Fleet 内置审计轨迹、文档存储和版本控制，每条维保记录、许可证和检查结果都可随时复核。',
      },
      {
        question: 'Fleet 能连接我们的其他系统吗？',
        answer:
          '可以。Fleet 通过 20 多项集成和开放的 REST API，连接财务系统、门禁、租户门户和楼宇管理系统。',
      },
    ],
  },
  retail: {
    hero: {
      eyebrow: '购物中心与零售',
      title: '让每家门店随时迎客的购物中心与零售维护',
      description:
        'Fleet 帮助购物中心和零售团队在门店、公共区域和后场主动维护，让每次到访都体现您的标准。',
      highlights: ['快速工单', '租户协同', '按楼层和租户统计支出'],
      visual: {
        kind: 'jobs',
        title: 'Northgate Mall · 今日',
        items: [
          {
            title: '扶梯 E3 异响',
            location: '1 层 · 中庭',
            status: '进行中',
            tone: 'info',
          },
          {
            title: '美食广场空调检查',
            location: '3 层',
            status: '今日到期',
            tone: 'due',
          },
          {
            title: '214 号店照明',
            location: '2 层 · 服饰区',
            status: '已完成',
            tone: 'done',
          },
        ],
      },
    },
    challenge: {
      pressure: {
        title: '每一次延误顾客都看得见',
        description: '高客流让电梯、扶梯、空调和照明全天运转，租户期待快速可靠的服务。',
        points: ['高客流', '租户众多', '供应商众多'],
      },
      answer: {
        title: '每个项目都主动运营',
        description: 'Fleet 结合快速工单、预防性计划和按租户的维修历史，让团队始终领先于问题。',
      },
    },
    capabilities: {
      title: '为高客流零售量身打造',
      description: '从被动维修到预防性维护和租户协同，全部在一个平台。',
      tabs: [
        {
          icon: 'workOrders',
          label: '工单',
          title: '快速分派工单',
          description: '团队成员可在任何设备上即时登记工单，内置通知、审批和升级。',
          points: ['任何设备登记工单', '紧急问题自动升级', '第三方工作需审批'],
          visual: {
            kind: 'jobs',
            title: '今日已分派',
            items: [
              {
                title: '天花板漏水',
                location: '2 层 · B 走廊',
                status: '给排水团队',
                tone: 'info',
              },
              {
                title: '卷帘门故障',
                location: '118 号店',
                status: 'CoolAir',
                tone: 'info',
              },
              {
                title: '清理洒落物',
                location: '1 层 · 中庭',
                status: '已完成',
                tone: 'done',
              },
            ],
          },
        },
        {
          icon: 'preventive',
          label: '预防性维护',
          title: '扶梯、电梯和暖通按计划保养',
          description: '自动执行扶梯、电梯和空调的预防性任务，技术人员可在现场打开 SOP。',
          points: ['扶梯、电梯和暖通的计划保养', '现场可查看 SOP', '按资产类型分派供应商'],
          visual: {
            kind: 'steps',
            title: '扶梯计划',
            steps: [
              {
                kind: '计划',
                text: '扶梯 E1–E6 · 每月保养',
              },
              {
                kind: '然后',
                text: '附检查清单分派给 LiftCo',
              },
              {
                kind: '然后',
                text: '将证书记录到每项资产',
              },
            ],
          },
        },
        {
          icon: 'tenants',
          label: '租户',
          title: '按门店和铺位记录维修历史',
          description: '按门店、品牌或铺位标记维修历史，并通过共享看板与安保和保洁团队协同。',
          points: ['按门店、品牌和铺位查看历史', '团队共享看板', '租户报修跟踪到关闭'],
          visual: {
            kind: 'asset',
            title: '铺位档案',
            name: '214 号店',
            location: 'Northgate Mall · 2 层',
            status: '营业中',
            facts: [
              {
                label: '本年报修',
                value: '7',
              },
              {
                label: '上次上门',
                value: '9月14日',
              },
              {
                label: '未完成工单',
                value: '1',
              },
              {
                label: '本年成本',
                value: '$1,860',
              },
            ],
          },
        },
        {
          icon: 'analytics',
          label: '预算',
          title: '更清晰的可见性，更明智的预算',
          description: '按地点、资产类别或供应商比较表现，优先安排资本性和运营支出。',
          points: ['按楼层、租户和资产统计支出', '按区域查看重复问题', '比较供应商表现'],
          visual: {
            kind: 'chart',
            title: '各楼层维护支出 · 第三季度',
            stats: [
              {
                label: '第三季度支出',
                value: '$62k',
              },
              {
                label: '重复问题',
                value: '11',
              },
            ],
            bars: [
              {
                label: '1 层',
                value: 82,
              },
              {
                label: '2 层',
                value: 64,
              },
              {
                label: '3 层',
                value: 58,
              },
              {
                label: '停车场',
                value: 31,
              },
              {
                label: '屋顶',
                value: 24,
              },
            ],
          },
        },
      ],
    },
    rows: [
      {
        tag: '公共区域',
        title: '公共区域随时迎接每位访客',
        description: '通过计划任务和快速维修，中庭、走廊、洗手间和美食广场始终干净、运转良好。',
        points: ['保洁与巡检计划', '明显问题快速修复', '完成时附照片凭证'],
        visual: {
          kind: 'jobs',
          title: '公共区域 · 今日',
          items: [
            {
              title: '2 层洗手间检查',
              location: '每 2 小时',
              status: '进展正常',
              tone: 'done',
            },
            {
              title: '中庭照明',
              location: '1 层',
              status: '已排期',
              tone: 'info',
            },
          ],
        },
        photo: {
          id: 'mallAtrium',
          alt: '购物中心中庭里的人群',
        },
      },
      {
        tag: '垂直交通',
        title: '值得信赖的电梯和扶梯',
        description: '预防性计划、SOP 和证书让垂直交通为顾客安全运行。',
        points: ['每月保养计划', '证书关联到资产', '按设备跟踪停机'],
        visual: {
          kind: 'asset',
          title: '资产档案',
          name: '扶梯 E3',
          location: 'Northgate Mall · 中庭',
          status: '待保养',
          facts: [
            {
              label: '上次保养',
              value: '9月2日',
            },
            {
              label: '证书',
              value: '有效至 2027年2月',
            },
            {
              label: '第三季度停机',
              value: '3 小时',
            },
            {
              label: '供应商',
              value: 'LiftCo',
            },
          ],
        },
        photo: {
          id: 'liftTechnician',
          alt: '技术人员在电梯轿厢内作业',
        },
      },
      {
        tag: '团队',
        title: '安保、保洁和维护协同一致',
        description: '共享看板让安保、保洁和维护团队在每个未解决问题上保持一致。',
        points: ['共享看板', '任何团队都可登记问题', '每张工单责任明确'],
        visual: {
          kind: 'log',
          title: '共享动态',
          entries: [
            {
              when: '10:12',
              who: '安保',
              what: '登记了 C 入口闸门损坏',
            },
            {
              when: '10:20',
              who: '维护',
              what: '将闸门维修分派给 CoolAir',
            },
          ],
        },
        photo: {
          id: 'cleanerCorridor',
          alt: '保洁员在走廊为门把手消毒',
        },
      },
    ],
    quote: {
      text: 'Fleet 帮助我们把被动维修减少了近 40%。现在我们能看清所有项目的情况，响应也更快了。',
      author: '运营总监',
      company: '区域购物中心运营商',
      photo: {
        id: 'acFilterService',
        alt: '技术人员更换空调滤网',
      },
    },
    faq: [
      {
        question: 'Fleet 如何帮助购物中心运营？',
        answer:
          'Fleet 把工单、电梯扶梯和暖通的预防性维护、租户协同和支出跟踪整合到一个平台，服务每个项目。',
      },
      {
        question: '能按租户或铺位跟踪维护吗？',
        answer: '可以。按门店、品牌或铺位标记维修历史，并按楼层、租户或资产监控维护支出。',
      },
      {
        question: '第三方技术人员能使用 Fleet 吗？',
        answer: '可以。供应商可快速查看自己的工单，权限和审批层级由您的团队设置。',
      },
      {
        question: 'Fleet 能扩展到多个购物中心吗？',
        answer:
          '可以。无论一个购物中心还是 30 个零售物业，Fleet 都支持按物业和区域设置规则和报表。',
      },
    ],
  },
  hospitality: {
    hero: {
      eyebrow: '酒店与餐饮',
      title: '守护每一次宾客体验的酒店维护',
      description:
        'Fleet 帮助酒店、度假村和餐厅在客房、厨房和公共区域主动维护，配备移动工单和内置合规。',
      highlights: ['按客房跟踪', '厨房设备检查', '安全合规'],
      visual: {
        kind: 'jobs',
        title: '酒店报修 · 今日',
        items: [
          {
            title: '空调不制冷',
            location: '1204 房',
            status: '技术人员在途',
            tone: 'info',
          },
          {
            title: '水龙头滴水',
            location: '806 房',
            status: '已解决',
            tone: 'done',
          },
          {
            title: '冷库告警',
            location: '主厨房',
            status: '紧急',
            tone: 'overdue',
          },
        ],
      },
    },
    challenge: {
      pressure: {
        title: '客人留意每一个细节',
        description: '空调噪音、水龙头滴水或电梯故障都会影响入住体验，厨房则依赖每台冰箱和炸炉。',
        points: ['客房', '厨房', '公共区域'],
      },
      answer: {
        title: '幕后的卓越运营',
        description: 'Fleet 协调客房部、工程部、餐饮和供应商，快速解决问题，让客人尽享每一刻。',
      },
    },
    capabilities: {
      title: '为酒店运营打造',
      description: '前场与后场的维护集中在一个平台。',
      tabs: [
        {
          icon: 'requests',
          label: '报修',
          title: '随时随地快速报修',
          description: '员工可用平板或手机，按客房、套房或区域报告滴水的水龙头或空调故障。',
          points: ['按客房和区域派单', '任何员工都可报修', '避开高峰时段排程'],
          visual: {
            kind: 'steps',
            title: '宾客报修',
            steps: [
              {
                kind: '报修',
                text: '1204 房空调不制冷',
              },
              {
                kind: '然后',
                text: '创建工单并定位',
              },
              {
                kind: '然后',
                text: '分派技术人员，告知客人',
              },
            ],
          },
        },
        {
          icon: 'preventive',
          label: '预防性维护',
          title: '厨房和设施保持良好状态',
          description: '自动安排暖通、冰箱、烤箱和电梯的保养，每次上门都有检查清单。',
          points: ['厨房设备检查', '暖通和电梯计划', '附照片凭证的检查清单'],
          visual: {
            kind: 'jobs',
            title: '厨房检查 · 本周',
            items: [
              {
                title: '冷库保养',
                location: '主厨房',
                status: '已完成',
                tone: 'done',
              },
              {
                title: '隔油池清理',
                location: '后场',
                status: '已排期',
                tone: 'info',
              },
              {
                title: '万能蒸烤箱检查',
                location: '宴会厨房',
                status: '今日到期',
                tone: 'due',
              },
            ],
          },
        },
        {
          icon: 'compliance',
          label: '合规',
          title: '健康、安全与食品标准',
          description: '跟踪消防检查和食品储存审计，每次检查都有记录。',
          points: ['消防检查', '食品储存审计', '每次检查都有记录'],
          visual: {
            kind: 'files',
            title: '合规 · Harbour Hotel',
            items: [
              {
                title: '消防检查.pdf',
                location: '9月12日完成',
                status: '有效',
                tone: 'done',
              },
              {
                title: '食品仓库审计.pdf',
                location: '7 天后',
                status: '待办',
                tone: 'due',
              },
              {
                title: '电梯证书.pdf',
                location: '有效至 2027年1月',
                status: '有效',
                tone: 'done',
              },
            ],
          },
        },
        {
          icon: 'analytics',
          label: '成本',
          title: '更少停机，更低运营成本',
          description: '跟踪维修历史和维护最多的设备，规划更换和预算。',
          points: ['按资产查看历史', '按客房、厨房和区域统计支出', '更换预测'],
          visual: {
            kind: 'chart',
            title: '各区域维护支出 · 第三季度',
            stats: [
              {
                label: '第三季度支出',
                value: '$48,000',
              },
              {
                label: '已服务客房',
                value: '312',
              },
            ],
            bars: [
              {
                label: '客房',
                value: 74,
              },
              {
                label: '厨房',
                value: 61,
              },
              {
                label: '公共区域',
                value: 38,
              },
              {
                label: '水疗与泳池',
                value: 27,
              },
              {
                label: '后场',
                value: 22,
              },
            ],
          },
        },
      ],
    },
    rows: [
      {
        tag: '前场',
        title: '每间客房都为入住做好准备',
        description: '客房部和工程部共享每间客房的状态，在下一位客人入住前完成维修。',
        points: ['共享客房状态', '按入住情况安排维修', '完成时附照片凭证'],
        visual: {
          kind: 'jobs',
          title: '客房 · 12 层',
          items: [
            {
              title: '1204 房',
              location: '空调维修',
              status: '进行中',
              tone: 'info',
            },
            {
              title: '1210 房',
              location: '可入住',
              status: '已就绪',
              tone: 'done',
            },
          ],
        },
        photo: {
          id: 'hotelReception',
          alt: '客人在酒店前台办理入住',
        },
      },
      {
        tag: '后场',
        title: '每一餐都不掉链子的厨房',
        description: '计划检查和快速维修让冰箱、炸炉和排烟系统在每次出餐时正常运转。',
        points: ['每次出餐前检查', '专业系统由供应商负责', '按设备统计停机'],
        visual: {
          kind: 'log',
          title: '厨房动态',
          entries: [
            {
              when: '06:10',
              who: 'Ana 主厨',
              what: '报告冷库告警',
            },
            {
              when: '06:18',
              who: 'Fleet',
              what: '将 CoolAir 列为紧急分派',
            },
          ],
        },
        photo: {
          id: 'chefManager',
          alt: '厨师和经理在厨房查看平板',
        },
      },
      {
        tag: '客房部',
        title: '客房部与工程部协同一致',
        description: '客房部、工程部、餐饮和前台各有视图，让每个团队专注于合适的工作。',
        points: ['每个团队都有专属视图', '打扫时即可登记问题', '班次交接备注'],
        visual: {
          kind: 'steps',
          title: '客房周转',
          steps: [
            {
              kind: '清扫',
              text: '806 房 · 11:00 退房',
            },
            {
              kind: '然后',
              text: '客房部报告水龙头滴水',
            },
            {
              kind: '然后',
              text: '在 15:00 入住前修好',
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
        id: 'busyKitchen',
        alt: '厨师们在繁忙的商业厨房工作',
      },
    },
    faq: [
      {
        question: 'Fleet 如何帮助酒店和餐厅？',
        answer: 'Fleet 在一个平台提供移动工单、厨房与设施的预防性计划、合规跟踪和报表。',
      },
      {
        question: '员工能在客房里报修吗？',
        answer: '可以。任何员工都能用手机或平板，按客房、套房或区域附照片报修。',
      },
      {
        question: 'Fleet 能跟踪食品安全和消防合规吗？',
        answer: '可以。Fleet 跟踪消防检查、食品储存审计和其他合规任务，并保留记录。',
      },
      {
        question: '能根据客人情况安排维护吗？',
        answer: '可以。将工作安排在高峰时段以外，并协调客房部与工程部，避免打扰客人。',
      },
    ],
  },
  healthcareEducation: {
    hero: {
      eyebrow: '医疗与教育',
      title: '值得信赖的医疗与教育设施维护',
      description:
        '通过预防性计划、快速维修和可随时审计的记录，让医院、诊所、学校和校园安全、合规、舒适。',
      highlights: ['预防性计划', '可审计的记录', '快速维修'],
      visual: {
        kind: 'jobs',
        title: '校园报修 · 今日',
        items: [
          {
            title: '3 层病区暖通检查',
            location: '东翼 · 3 层',
            status: '进行中',
            tone: 'info',
          },
          {
            title: '防火门检查',
            location: '科学楼',
            status: '今日到期',
            tone: 'due',
          },
          {
            title: '教室投影仪',
            location: 'B12 教室',
            status: '已完成',
            tone: 'done',
          },
        ],
      },
    },
    challenge: {
      pressure: {
        title: '关键空间需要可靠的设施',
        description: '暖通、电梯、消防和卫生保护着患者、员工和学生，每次检查都需要记录。',
        points: ['患者区域', '教室', '严格标准'],
      },
      answer: {
        title: '每天都安全合规的建筑',
        description: 'Fleet 规划维护、跟踪每次维修并保存记录，让团队专注于医护和教学。',
      },
    },
    capabilities: {
      title: '为安全合规的设施打造',
      description: '从空气质量到消防，每个系统都有计划、有凭证。',
      tabs: [
        {
          icon: 'preventive',
          label: '预防性维护',
          title: '关键系统的计划',
          description: '安排暖通、电梯、发电机和消防的维护，每次上门都有检查清单。',
          points: ['关键系统计划', '附读数的检查清单', '到期前生成工单'],
          visual: {
            kind: 'steps',
            title: '预防性计划',
            steps: [
              {
                kind: '计划',
                text: '病区暖通 · 每月更换滤网',
              },
              {
                kind: '然后',
                text: '提前 7 天创建工单',
              },
              {
                kind: '然后',
                text: '附检查清单分派给暖通团队',
              },
            ],
          },
        },
        {
          icon: 'compliance',
          label: '合规',
          title: '检查与证书留档',
          description: '跟踪检查、证书和许可证，到期前自动提醒。',
          points: ['按建筑查看检查', '证书关联到资产', '到期前提醒'],
          visual: {
            kind: 'files',
            title: '合规 · 东翼',
            items: [
              {
                title: '防火门检查.pdf',
                location: '9月3日完成',
                status: '有效',
                tone: 'done',
              },
              {
                title: '电梯证书.pdf',
                location: '30 天后续期',
                status: '续期',
                tone: 'due',
              },
              {
                title: '发电机测试记录.pdf',
                location: '每月',
                status: '已核验',
                tone: 'done',
              },
            ],
          },
        },
        {
          icon: 'workOrders',
          label: '维修',
          title: '快速响应每个报修',
          description: '员工和教师可在任何设备上报修，工单按优先级和 SLA 送达合适的团队。',
          points: ['任何设备都能报修', '关键区域优先', '每张工单都有 SLA 时限'],
          visual: {
            kind: 'jobs',
            title: '待处理报修',
            items: [
              {
                title: '实验室通风柜',
                location: '科学楼',
                status: '紧急',
                tone: 'overdue',
              },
              {
                title: '洗手池漏水',
                location: '2 层病区',
                status: '已分派',
                tone: 'info',
              },
              {
                title: '椅子损坏',
                location: 'A04 教室',
                status: '已解决',
                tone: 'done',
              },
            ],
          },
        },
        {
          icon: 'analytics',
          label: '报表',
          title: '清晰的管理层报表',
          description: '向管理层和监管机构展示响应时间、合规状态和各建筑支出。',
          points: ['按建筑查看响应时间', '合规状态一目了然', '导出用于审查'],
          visual: {
            kind: 'chart',
            title: '计划工作完成率 · 第三季度',
            stats: [
              {
                label: '按时',
                value: '97%',
              },
              {
                label: '检查',
                value: '186',
              },
            ],
            bars: [
              {
                label: '东翼',
                value: 98,
              },
              {
                label: '西翼',
                value: 96,
              },
              {
                label: '科学楼',
                value: 95,
              },
              {
                label: '图书馆',
                value: 99,
              },
              {
                label: '体育馆',
                value: 94,
              },
            ],
          },
        },
      ],
    },
    rows: [
      {
        tag: '卫生',
        title: '每个班次都洁净',
        description: '附检查清单和照片凭证的保洁计划，让病区、教室和洗手间保持标准。',
        points: ['按区域的保洁计划', '附照片凭证的检查清单', '巡查时登记问题'],
        visual: {
          kind: 'jobs',
          title: '保洁巡查',
          items: [
            {
              title: '3 层洗手间',
              location: '每 2 小时',
              status: '进展正常',
              tone: 'done',
            },
            {
              title: '食堂深度清洁',
              location: '每天 · 15:00',
              status: '已排期',
              tone: 'info',
            },
          ],
        },
        photo: {
          id: 'cleanerCorridor',
          alt: '保洁员在走廊为门把手消毒',
        },
      },
      {
        tag: '空气质量',
        title: '舒适健康的空气',
        description: '暖通计划让滤网、空调箱和制冷保持最佳状态，服务患者和学生。',
        points: ['按计划更换滤网', '每次上门记录读数', '及早发现故障'],
        visual: {
          kind: 'steps',
          title: '空气质量计划',
          steps: [
            {
              kind: '每',
              text: '月 · 所有空调箱',
            },
            {
              kind: '然后',
              text: '更换滤网并记录读数',
            },
          ],
        },
        photo: {
          id: 'acFilterService',
          alt: '技术人员更换空调滤网',
        },
      },
      {
        tag: '电力与安全',
        title: '电力与安全随时就绪',
        description: '发电机、配电柜和消防系统按计划测试，每个结果都有记录。',
        points: ['发电机和配电柜测试', '消防系统检查', '结果关联到每项资产'],
        visual: {
          kind: 'asset',
          title: '资产档案',
          name: '发电机 G-01',
          location: '东翼 · 机房',
          status: '已测试',
          facts: [
            {
              label: '上次测试',
              value: '10月1日',
            },
            {
              label: '下次测试',
              value: '11月1日',
            },
            {
              label: '运行小时',
              value: '412',
            },
            {
              label: '未完成工单',
              value: '0',
            },
          ],
        },
        photo: {
          id: 'electricianPanel',
          alt: '电工在控制柜前作业',
        },
      },
    ],
    quote: {
      text: 'Fleet 让我们的被动维修工作量减少了近 40%。技术人员、资产记录和工单终于集中在了一处。',
      author: '物业运营负责人',
      company: '综合体项目',
      photo: {
        id: 'officeCorridor',
        alt: '人们走过明亮的办公走廊',
      },
    },
    faq: [
      {
        question: 'Fleet 适合医院、诊所和学校吗？',
        answer: '适合。Fleet 服务各种规模的医疗和教育机构，从单个诊所或学校到多校区园区。',
      },
      {
        question: 'Fleet 如何帮助检查和审计？',
        answer: 'Fleet 保存检查、证书和许可证及审计轨迹，并在每次到期前提醒。',
      },
      {
        question: '员工和教师能报修吗？',
        answer: '可以。任何受邀用户都能用手机或平板报修，报修自动转为带优先级和 SLA 的工单。',
      },
      {
        question: '能向管理层汇报吗？',
        answer: '可以。看板和导出功能展示各建筑的响应时间、合规状态和支出。',
      },
    ],
  },
  logistics: {
    hero: {
      eyebrow: '航运与物流',
      title: '让每一票货物持续流转的物流维护',
      description:
        'Fleet 帮助物流团队让仓库、装卸口、设备和车辆持续运转，在每个枢纽快速报修并执行预防性计划。',
      highlights: ['快速报修', '全车队预防性维护', '停机跟踪'],
      visual: {
        kind: 'jobs',
        title: 'Westport DC · 今日',
        items: [
          {
            title: '4 号装卸门故障',
            location: '装卸区',
            status: '紧急',
            tone: 'overdue',
          },
          {
            title: 'C2 输送线保养',
            location: '分拣区',
            status: '进行中',
            tone: 'info',
          },
          {
            title: '叉车 FL-07 检查',
            location: '场院',
            status: '已完成',
            tone: 'done',
          },
        ],
      },
    },
    challenge: {
      pressure: {
        title: '每小时停机都会引发连锁反应',
        description: '装卸门故障或输送线停转，会影响客户、承运商和团队的时间安排。',
        points: ['装卸口', '输送线', '车辆'],
      },
      answer: {
        title: '用主动维护守护产能',
        description: 'Fleet 从现场登记问题、安排预防性维护并跟踪每项资产，让货物准时送达。',
      },
    },
    capabilities: {
      title: '为快节奏物流打造',
      description: '仓库、设备和车辆尽在一个看板。',
      tabs: [
        {
          icon: 'workOrders',
          label: '现场报修',
          title: '从作业现场快速报修',
          description: '技术人员和主管用手机登记问题，工单按区域或角色送达内部团队或供应商。',
          points: ['手机登记问题', '按区域或角色派单', '供应商在同一流程中'],
          visual: {
            kind: 'jobs',
            title: '待处理工单',
            items: [
              {
                title: '登车桥卡住',
                location: '6 号装卸口',
                status: '已分派',
                tone: 'info',
              },
              {
                title: '货架损坏',
                location: '14 号通道',
                status: '需检查',
                tone: 'due',
              },
              {
                title: '充电器故障',
                location: '叉车区',
                status: '已解决',
                tone: 'done',
              },
            ],
          },
        },
        {
          icon: 'preventive',
          label: '预防性维护',
          title: '关键检查一项不落',
          description: '按里程、使用小时或时间，自动安排车辆、输送线和升降设备的保养。',
          points: ['按小时、里程或时间触发', '自动检查提醒', '减少紧急维修'],
          visual: {
            kind: 'steps',
            title: '按用量计划',
            steps: [
              {
                kind: '触发',
                text: '叉车 FL-07 达到 500 小时',
              },
              {
                kind: '然后',
                text: '创建保养工单',
              },
              {
                kind: '然后',
                text: '分派给车队维修车间',
              },
            ],
          },
        },
        {
          icon: 'assets',
          label: '设备',
          title: '每项资产的成本与历史',
          description: '按叉车、车辆或系统查看历史和成本，找出瓶颈。',
          points: ['按资产查看历史', '按叉车和系统统计成本', '突出显示瓶颈'],
          visual: {
            kind: 'asset',
            title: '资产档案',
            name: '输送线 C2',
            location: 'Westport DC · 分拣区',
            status: '运行中',
            facts: [
              {
                label: '运行小时',
                value: '6,420',
              },
              {
                label: '上次保养',
                value: '9月18日',
              },
              {
                label: '第三季度停机',
                value: '5 小时',
              },
              {
                label: '本年成本',
                value: '$7,850',
              },
            ],
          },
        },
        {
          icon: 'analytics',
          label: '分析',
          title: '停机与响应时间',
          description: '监控所有地点的停机和响应时间，及早发现预警信号。',
          points: ['按地点和资产查看停机', '按团队查看响应时间', '及早预警的趋势'],
          visual: {
            kind: 'chart',
            title: '各枢纽停机小时 · 第三季度',
            stats: [
              {
                label: '第三季度停机',
                value: '38 小时',
              },
              {
                label: 'SLA 达成',
                value: '95.1%',
              },
            ],
            bars: [
              {
                label: 'Westport DC',
                value: 14,
              },
              {
                label: 'Harbour hub',
                value: 9,
              },
              {
                label: 'Northgate DC',
                value: 7,
              },
              {
                label: '机场',
                value: 5,
              },
              {
                label: 'Bayview',
                value: 3,
              },
            ],
          },
        },
      ],
    },
    rows: [
      {
        tag: '仓库',
        title: '仓库与装卸口为每个班次做好准备',
        description: '装卸口、门、货架和照明按计划检查，故障快速登记并解决。',
        points: ['装卸口和门的检查', '定期货架检查', '现场快速修复'],
        visual: {
          kind: 'jobs',
          title: '装卸口检查 · 今日',
          items: [
            {
              title: '1–8 号装卸门',
              location: '每日检查',
              status: '已完成',
              tone: 'done',
            },
            {
              title: '6 号登车桥',
              location: '已登记故障',
              status: '已分派',
              tone: 'info',
            },
          ],
        },
        photo: {
          id: 'warehouseTeam',
          alt: '仓储团队在货架间核对库存',
        },
      },
      {
        tag: '车辆',
        title: '车辆随时可用且合规',
        description: '卡车、货车和服务车辆共用一个看板，从保养记录到年检和检验。',
        points: ['按里程和小时保养', '检验和年检提醒', '可随时审计的记录'],
        visual: {
          kind: 'log',
          title: '车辆提醒',
          entries: [
            {
              when: '08:00',
              who: 'Fleet',
              what: '为货车 V-12 安排 30,000 公里保养',
            },
            {
              when: '08:05',
              who: 'Fleet',
              what: '标记卡车 T-03 需续期年检',
            },
          ],
        },
        photo: {
          id: 'fleetManager',
          alt: '车队经理拿着平板站在卡车前',
        },
      },
      {
        tag: '分析',
        title: '更少中断，更多产能',
        description: '趋势显示哪些设备拖慢运营，帮助您及时规划更换。',
        points: ['造成瓶颈的设备', '更换规划', '所有地点一览无余'],
        visual: {
          kind: 'chart',
          title: '主要停机原因 · 第三季度',
          stats: [],
          bars: [
            {
              label: '装卸门',
              value: 12,
            },
            {
              label: '输送线',
              value: 9,
            },
            {
              label: '叉车',
              value: 7,
            },
            {
              label: '货架',
              value: 4,
            },
            {
              label: '照明',
              value: 2,
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
        id: 'stockCheck',
        alt: '物资协调员在货架前清点库存',
      },
    },
    faq: [
      {
        question: 'Fleet 如何帮助物流和仓储？',
        answer:
          'Fleet 支持从现场登记问题，为装卸口、输送线、升降设备和车辆安排预防性维护，并跟踪每个枢纽的停机。',
      },
      {
        question: '能按用量触发维护吗？',
        answer: '可以。按里程、使用小时或时间设置触发条件，自动提醒检查和保养。',
      },
      {
        question: 'Fleet 也能管理我们的车辆吗？',
        answer: '可以。Fleet 的车辆管理提供同样的可见性，从保养记录、年检到司机信息。',
      },
      {
        question: '供应商能在 Fleet 中工作吗？',
        answer: '可以。按区域或角色将工单分派给内部团队或供应商，访问权限、审批和 SLA 由您掌控。',
      },
    ],
  },
  hvacLifts: {
    hero: {
      eyebrow: '暖通、电梯与扶梯',
      title: '按计划执行的暖通、电梯与扶梯维护',
      description: '在每栋建筑中规划、执行并证明空调、电梯和扶梯的维护，内置证书管理和供应商协同。',
      highlights: ['周期计划', '证书留档', '供应商协同'],
      visual: {
        kind: 'jobs',
        title: '关键系统 · 今日',
        items: [
          {
            title: '冷水机组 CH-02 保养',
            location: 'Harbour Point · 机房',
            status: '进行中',
            tone: 'info',
          },
          {
            title: '电梯 L2 月检',
            location: 'Tower B · 核心筒',
            status: '今日到期',
            tone: 'due',
          },
          {
            title: '扶梯 E3 检查',
            location: 'Northgate Mall',
            status: '已完成',
            tone: 'done',
          },
        ],
      },
    },
    challenge: {
      pressure: {
        title: '关键系统每天都在运行',
        description: '制冷、电梯和扶梯每天运行，都需要定期保养、证书和故障时的快速响应。',
        points: ['冷水机组与空调箱', '电梯与扶梯', '专业供应商'],
      },
      answer: {
        title: '每个系统都有计划、有凭证',
        description: 'Fleet 安排每次保养，分派给合适的专业供应商，并将证书保存在资产上。',
      },
    },
    capabilities: {
      title: '让楼宇系统持续运行',
      description: '预防性计划、专业供应商和证书集中管理。',
      tabs: [
        {
          icon: 'preventive',
          label: '计划',
          title: '每台设备的周期保养',
          description: '按时间或用量安排冷水机组、空调箱、电梯和扶梯的保养，配备最佳实践检查清单。',
          points: ['按时间或用量的计划', '按系统类型的检查清单', '到期前生成工单'],
          visual: {
            kind: 'steps',
            title: '电梯保养计划',
            steps: [
              {
                kind: '计划',
                text: '电梯 L1–L4 · 每月保养',
              },
              {
                kind: '然后',
                text: '附检查清单分派给 LiftCo',
              },
              {
                kind: '然后',
                text: '附上保养证书',
              },
            ],
          },
        },
        {
          icon: 'vendors',
          label: '供应商',
          title: '自动分派专业供应商',
          description: '按项目和系统将暖通和电梯工作分派给合适的专业供应商，每张工单都有 SLA。',
          points: ['按系统和项目选择供应商', '每张工单都有 SLA', '报价和审批在流程中'],
          visual: {
            kind: 'jobs',
            title: '专业工单',
            items: [
              {
                title: 'CoolAir · 暖通',
                location: '今日 6 张工单',
                status: '进展正常',
                tone: 'done',
              },
              {
                title: 'LiftCo · 电梯',
                location: '今日 3 张工单',
                status: '1 张到期',
                tone: 'due',
              },
              {
                title: 'Escalift · 扶梯',
                location: '今日 2 张工单',
                status: '已排期',
                tone: 'info',
              },
            ],
          },
        },
        {
          icon: 'assets',
          label: '资产',
          title: '每台设备的证书与历史',
          description: '每台设备的保养历史、证书、手册和停机都在一个档案中。',
          points: ['证书关联到每台设备', '保养历史与成本', '现场可查看手册'],
          visual: {
            kind: 'asset',
            title: '资产档案',
            name: '电梯 L2',
            location: 'Tower B · 核心筒电梯',
            status: '待保养',
            facts: [
              {
                label: '上次保养',
                value: '9月2日',
              },
              {
                label: '证书',
                value: '有效至 2027年1月',
              },
              {
                label: '第三季度停机',
                value: '4 小时',
              },
              {
                label: '供应商',
                value: 'LiftCo',
              },
            ],
          },
        },
        {
          icon: 'analytics',
          label: '停机',
          title: '按系统分析停机',
          description: '发现反复故障的设备，并用生命周期数据规划更换。',
          points: ['按系统和项目查看停机', '突出显示反复故障', '更换预测'],
          visual: {
            kind: 'chart',
            title: '各系统停机小时 · 第三季度',
            stats: [
              {
                label: '总停机',
                value: '61 小时',
              },
              {
                label: '风险设备',
                value: '5',
              },
            ],
            bars: [
              {
                label: '冷水机组',
                value: 22,
              },
              {
                label: '空调箱',
                value: 15,
              },
              {
                label: '电梯',
                value: 12,
              },
              {
                label: '扶梯',
                value: 8,
              },
              {
                label: '分体机',
                value: 4,
              },
            ],
          },
        },
      ],
    },
    rows: [
      {
        tag: '暖通',
        title: '制冷始终满足需求',
        description: '冷水机组、空调箱和屋顶机组按计划保养，每次上门都记录读数。',
        points: ['现场记录读数', '滤网和盘管计划', '及早发现故障'],
        visual: {
          kind: 'jobs',
          title: '暖通计划 · 10月',
          items: [
            {
              title: '屋顶机组 RTU 1–12',
              location: 'Harbour Point',
              status: '已排期',
              tone: 'info',
            },
            {
              title: 'AHU-07 更换滤网',
              location: 'Tower B',
              status: '已完成',
              tone: 'done',
            },
          ],
        },
        photo: {
          id: 'rooftopUnits',
          alt: '商业楼屋顶的空调机组',
        },
      },
      {
        tag: '电梯',
        title: '电梯与扶梯持证且安全',
        description: '每台设备的月检、法定检验和证书都按时完成。',
        points: ['供应商执行月检', '跟踪法定检验', '证书按时续期'],
        visual: {
          kind: 'files',
          title: '电梯证书',
          items: [
            {
              title: '电梯 L1 证书.pdf',
              location: '有效至 2027年3月',
              status: '有效',
              tone: 'done',
            },
            {
              title: '电梯 L2 证书.pdf',
              location: '30 天后续期',
              status: '续期',
              tone: 'due',
            },
          ],
        },
        photo: {
          id: 'liftShaft',
          alt: '技术人员在电梯井道内作业',
        },
      },
      {
        tag: '响应',
        title: '故障出现时快速响应',
        description: '来自 BMS 告警或员工报告的故障，会转为优先工单并送达合适的专业人员。',
        points: ['BMS 告警转为工单', '按系统和项目设定优先级', '即时通知供应商'],
        visual: {
          kind: 'log',
          title: '故障响应',
          entries: [
            {
              when: '14:02',
              who: 'BMS',
              what: '报告 AHU-07 温度过高',
            },
            {
              when: '14:03',
              who: 'Fleet',
              what: '为 CoolAir 创建紧急工单',
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
        id: 'liftTechnician',
        alt: '技术人员在电梯轿厢内作业',
      },
    },
    faq: [
      {
        question: 'Fleet 能同时管理暖通和电梯维护吗？',
        answer:
          '可以。Fleet 在一个平台规划并跟踪暖通、电梯和扶梯维护，每台设备都有计划、供应商和证书。',
      },
      {
        question: 'Fleet 能保存电梯证书吗？',
        answer: '可以。证书关联到每台电梯或扶梯，并在到期前提醒。',
      },
      {
        question: 'BMS 告警能创建工单吗？',
        answer: '可以。通过楼宇管理系统集成，告警和读数可接入维护计划并创建工单。',
      },
      {
        question: '专业供应商如何使用 Fleet？',
        answer: '供应商接收其负责系统和项目的工单，提交报价，并附照片和证书完成工作。',
      },
    ],
  },
  dataCenters: {
    hero: {
      eyebrow: '数据中心',
      title: '保障可用性的数据中心设施维护',
      description:
        '通过预防性计划、联动 BMS 的告警和完整的变更记录，让制冷、电力和安全系统保持最佳状态。',
      highlights: ['制冷与电力计划', '联动 BMS 的告警', '完整的变更记录'],
      visual: {
        kind: 'jobs',
        title: '机房 · 今日',
        items: [
          {
            title: 'CRAH 4 号机更换滤网',
            location: 'A 机房',
            status: '进行中',
            tone: 'info',
          },
          {
            title: 'UPS 电池检查',
            location: '2 号配电室',
            status: '今日到期',
            tone: 'due',
          },
          {
            title: '发电机带载测试',
            location: '室外场地',
            status: '已完成',
            tone: 'done',
          },
        ],
      },
    },
    challenge: {
      pressure: {
        title: '可用性取决于建筑本身',
        description: '制冷、配电和灭火系统全天候运行，每次操作都需要计划和记录。',
        points: ['制冷', '电力', '灭火'],
      },
      answer: {
        title: '每个系统都精准维护',
        description: 'Fleet 安排每项任务，分派给有资质的团队，并为审计和 SLA 记录每一次变更。',
      },
    },
    capabilities: {
      title: '为关键任务设施打造',
      description: '计划维护、受控变更和完整可追溯。',
      tabs: [
        {
          icon: 'preventive',
          label: '预防性维护',
          title: '制冷与电力计划',
          description:
            '按时间或运行小时安排 CRAH、冷水机组、UPS 和发电机的保养，配备详细检查清单。',
          points: ['按时间或运行小时的计划', '详细的检查清单和读数', '在维护窗口前规划工作'],
          visual: {
            kind: 'steps',
            title: '发电机计划',
            steps: [
              {
                kind: '每',
                text: '月 · 第一个周二',
              },
              {
                kind: '然后',
                text: '带载测试 60 分钟',
              },
              {
                kind: '然后',
                text: '将读数记录到 G-01 历史',
              },
            ],
          },
        },
        {
          icon: 'approvals',
          label: '变更',
          title: '受控变更',
          description: '审批节点确保每次操作在开工前已计划、审批并记录。',
          points: ['开工前审批', '遵守维护窗口', '每次变更都有记录'],
          visual: {
            kind: 'jobs',
            title: '变更申请',
            items: [
              {
                title: 'UPS 模块更换',
                location: '2 号配电室',
                status: '待审批',
                tone: 'due',
              },
              {
                title: 'CRAH 固件升级',
                location: 'A 机房',
                status: '已批准',
                tone: 'done',
              },
              {
                title: 'PDU 检查',
                location: 'B 机房',
                status: '已排期',
                tone: 'info',
              },
            ],
          },
        },
        {
          icon: 'assets',
          label: '资产',
          title: '完整的资产历史',
          description: '每台冷水机组、UPS、PDU 和发电机都保存保养历史、读数和文档。',
          points: ['按资产查看读数和历史', '保修与合同信息', '现场可查看手册'],
          visual: {
            kind: 'asset',
            title: '资产档案',
            name: 'UPS-2B',
            location: '2 号配电室',
            status: '运行中',
            facts: [
              {
                label: '上次保养',
                value: '8月15日',
              },
              {
                label: '电池年限',
                value: '3 年',
              },
              {
                label: '负载',
                value: '62%',
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
          title: '满足 SLA 的报表',
          description: '向客户和审计方展示计划工作完成率、响应时间和变更历史。',
          points: ['计划工作完成率', '按优先级查看响应时间', '导出用于审计'],
          visual: {
            kind: 'chart',
            title: '计划工作完成率 · 第三季度',
            stats: [
              {
                label: '按时',
                value: '99.2%',
              },
              {
                label: '变更',
                value: '84',
              },
            ],
            bars: [
              {
                label: '制冷',
                value: 99,
              },
              {
                label: '电力',
                value: 100,
              },
              {
                label: '消防',
                value: 98,
              },
              {
                label: '安防',
                value: 99,
              },
              {
                label: '建筑',
                value: 97,
              },
            ],
          },
        },
      ],
    },
    rows: [
      {
        tag: '制冷',
        title: '制冷系统持续受控',
        description: 'BMS 告警和读数接入预防性计划，在性能下降前完成保养。',
        points: ['BMS 读数接入计划', '滤网和盘管计划', '告警转为工单'],
        visual: {
          kind: 'log',
          title: '制冷告警',
          entries: [
            {
              when: '02:14',
              who: 'BMS',
              what: '报告 CRAH 4 送风温度上升',
            },
            {
              when: '02:15',
              who: 'Fleet',
              what: '为值班工程师创建优先工单',
            },
          ],
        },
        photo: {
          id: 'dataCenter',
          alt: '数据中心里成排的服务器机柜',
        },
      },
      {
        tag: '电力',
        title: '电力系统经过测试随时就绪',
        description: 'UPS、电池、PDU 和发电机按计划测试，每个结果都有记录。',
        points: ['UPS 和电池检查', '发电机带载测试', '结果关联到每项资产'],
        visual: {
          kind: 'jobs',
          title: '电力检查 · 10月',
          items: [
            {
              title: '发电机 G-01 带载测试',
              location: '每月',
              status: '已完成',
              tone: 'done',
            },
            {
              title: 'UPS-2B 电池检查',
              location: '每季度',
              status: '今日到期',
              tone: 'due',
            },
          ],
        },
        photo: {
          id: 'electricianPanel',
          alt: '电工在控制柜前作业',
        },
      },
      {
        tag: '团队',
        title: '工程师与供应商在同一流程',
        description: '内部工程师和专业供应商遵循相同的流程、审批和记录。',
        points: ['所有团队流程一致', '供应商可查看自己的工单', '每张工单都有完整历史'],
        visual: {
          kind: 'jobs',
          title: '今日团队',
          items: [
            {
              title: '驻场工程师',
              location: '6 张工单',
              status: '进展正常',
              tone: 'done',
            },
            {
              title: 'CoolAir · 制冷',
              location: '2 张工单',
              status: '已排期',
              tone: 'info',
            },
          ],
        },
        photo: {
          id: 'techniciansPanel',
          alt: '两位技术人员检查设备面板',
        },
      },
    ],
    quote: {
      text: '其他平台要么太复杂，要么太通用。Fleet 为我们提供了量身打造的方案，支持响应也更快。',
      author: '维护总监',
      company: '物流枢纽',
      photo: {
        id: 'factoryTechnician',
        alt: '技术人员用平板检查设备',
      },
    },
    faq: [
      {
        question: 'Fleet 能支持数据中心设施团队吗？',
        answer: '可以。Fleet 规划并跟踪制冷、电力和消防系统的维护，附审批、读数和完整的变更记录。',
      },
      {
        question: '维护能按运行小时安排吗？',
        answer: '可以。按时间或用量安排工作，例如发电机和 UPS 的运行小时。',
      },
      {
        question: 'BMS 告警能创建工单吗？',
        answer: '可以。楼宇管理系统集成让告警和读数接入预防性计划并创建工单。',
      },
      {
        question: '能向客户展示 SLA 表现吗？',
        answer: '可以。看板和导出功能展示计划工作完成率、响应时间和变更历史。',
      },
    ],
  },
  fitness: {
    hero: {
      eyebrow: '健身与康养中心',
      title: '会员看得见的健身与康养中心维护',
      description:
        '通过设备检查、保洁计划和快速维修，让健身房、工作室、泳池和水疗干净、安全、运转良好。',
      highlights: ['设备检查', '保洁计划', '快速维修'],
      visual: {
        kind: 'jobs',
        title: '会所报修 · 今日',
        items: [
          {
            title: '跑步机 T-08 跑带',
            location: '有氧区',
            status: '进行中',
            tone: 'info',
          },
          {
            title: '泳池 pH 检测',
            location: '泳池馆',
            status: '今日到期',
            tone: 'due',
          },
          {
            title: '桑拿加热器',
            location: '水疗区',
            status: '已完成',
            tone: 'done',
          },
        ],
      },
    },
    challenge: {
      pressure: {
        title: '会员期待一切运转正常',
        description: '器械、淋浴、泳池和空调持续使用，会员会注意到每一块“暂停使用”的牌子。',
        points: ['器械', '泳池与水疗', '繁忙时段'],
      },
      answer: {
        title: '每个空间都为会员准备就绪',
        description: 'Fleet 安排检查、收集员工和会员反馈的问题，并在每家会所快速完成维修。',
      },
    },
    capabilities: {
      title: '为繁忙的会所和工作室打造',
      description: '器械、保洁和楼宇系统集中管理。',
      tabs: [
        {
          icon: 'preventive',
          label: '器械',
          title: '按计划检查器械',
          description: '规划跑步机、单车、综合训练架和力量器械的检查与保养，配备检查清单。',
          points: ['按器械类型的保养计划', '每日安全检查', '每台器械都有历史'],
          visual: {
            kind: 'steps',
            title: '有氧器械计划',
            steps: [
              {
                kind: '每',
                text: '周 · 周一 06:00',
              },
              {
                kind: '然后',
                text: '检查所有有氧器械',
              },
              {
                kind: '然后',
                text: '将问题登记为工单',
              },
            ],
          },
        },
        {
          icon: 'requests',
          label: '报修',
          title: '故障器械快速修复',
          description: '员工用手机几秒钟即可登记故障器械，维修送达合适的技术人员或供应商。',
          points: ['几秒钟登记问题', '每个故障都有照片', '专业器械由供应商负责'],
          visual: {
            kind: 'jobs',
            title: '待处理报修',
            items: [
              {
                title: '划船机 R-02',
                location: '有氧区',
                status: '已分派',
                tone: 'info',
              },
              {
                title: '淋浴排水',
                location: '男更衣室',
                status: '紧急',
                tone: 'overdue',
              },
              {
                title: '工作室音箱',
                location: '2 号工作室',
                status: '已解决',
                tone: 'done',
              },
            ],
          },
        },
        {
          icon: 'compliance',
          label: '泳池与水疗',
          title: '水质与安全检查留档',
          description: '记录泳池、桑拿和蒸汽房的检查及读数，每天达标。',
          points: ['每日水质读数', '桑拿和蒸汽房检查', '可随时检查的记录'],
          visual: {
            kind: 'files',
            title: '每日记录 · 泳池馆',
            items: [
              {
                title: '泳池水质读数.pdf',
                location: '今日已记录 3 次',
                status: '完成',
                tone: 'done',
              },
              {
                title: '救生设备检查.pdf',
                location: '每日',
                status: '完成',
                tone: 'done',
              },
              {
                title: '水疗安全检查.pdf',
                location: '5 天后到期',
                status: '待办',
                tone: 'due',
              },
            ],
          },
        },
        {
          icon: 'analytics',
          label: '报表',
          title: '每家会所的设备可用率',
          description: '按会所查看设备可用率、维修成本和反复故障，规划升级。',
          points: ['按会所查看可用率', '按器械统计维修成本', '升级规划'],
          visual: {
            kind: 'chart',
            title: '各会所设备可用率 · 第三季度',
            stats: [
              {
                label: '可用率',
                value: '97.8%',
              },
              {
                label: '维修',
                value: '46',
              },
            ],
            bars: [
              {
                label: 'Harbour',
                value: 98,
              },
              {
                label: 'Northgate',
                value: 97,
              },
              {
                label: 'Tower B',
                value: 99,
              },
              {
                label: 'Bayview',
                value: 96,
              },
              {
                label: 'Westport',
                value: 98,
              },
            ],
          },
        },
      ],
    },
    rows: [
      {
        tag: '空气与舒适',
        title: '新鲜空气与舒适温度',
        description: '暖通预防性计划让工作室和训练区在每节课都保持舒适。',
        points: ['按计划更换滤网', '每次上门记录读数', '及早发现故障'],
        visual: {
          kind: 'jobs',
          title: '暖通 · 本月',
          items: [
            {
              title: '1 号工作室空调保养',
              location: 'Harbour 会所',
              status: '已完成',
              tone: 'done',
            },
            {
              title: '训练区空调箱滤网',
              location: 'Northgate 会所',
              status: '已排期',
              tone: 'info',
            },
          ],
        },
        photo: {
          id: 'acFilterService',
          alt: '技术人员更换空调滤网',
        },
      },
      {
        tag: '保洁',
        title: '更衣室每小时都干净',
        description: '附检查清单和照片凭证的保洁巡查，让更衣室、淋浴间和工作室保持清新。',
        points: ['每小时保洁巡查', '附照片凭证的检查清单', '巡查时登记问题'],
        visual: {
          kind: 'steps',
          title: '保洁巡查',
          steps: [
            {
              kind: '每',
              text: '小时 · 06:00 至 22:00',
            },
            {
              kind: '然后',
              text: '清洁更衣室并上传照片',
            },
          ],
        },
        photo: {
          id: 'cleanerCorridor',
          alt: '保洁员在走廊为门把手消毒',
        },
      },
      {
        tag: '设施',
        title: '淋浴、泳池和机房正常运转',
        description: '给排水、水泵和热水器按计划保养，漏水时快速响应。',
        points: ['水泵和热水器保养', '漏水快速响应', '每项资产都有历史'],
        visual: {
          kind: 'asset',
          title: '资产档案',
          name: '泳池水泵 PP-1',
          location: 'Harbour 会所 · 机房',
          status: '运行中',
          facts: [
            {
              label: '上次保养',
              value: '9月20日',
            },
            {
              label: '下次保养',
              value: '12月20日',
            },
            {
              label: '运行小时',
              value: '2,140',
            },
            {
              label: '未完成工单',
              value: '0',
            },
          ],
        },
        photo: {
          id: 'plumberRepair',
          alt: '水管工维修厨房水槽',
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
        question: 'Fleet 适合健身房和康养中心吗？',
        answer:
          '适合。Fleet 帮助健身房、工作室、泳池和水疗维护器械和楼宇系统，提供快速维修和保洁计划。',
      },
      {
        question: '员工能报告器械故障吗？',
        answer: '可以。员工用手机附照片登记故障器械，维修会送达合适的技术人员或供应商。',
      },
      {
        question: '能记录泳池和水疗检查吗？',
        answer: '可以。记录泳池、桑拿和蒸汽房的每日读数和安全检查，可随时接受检查。',
      },
      {
        question: '能管理多家会所吗？',
        answer: '可以。Fleet 支持多门店运营商，按会所和区域设置规则、看板和报表。',
      },
    ],
  },
  mep: {
    hero: {
      eyebrow: '机电维护',
      title: '覆盖整个资产组合的机电维护',
      description:
        '在一个流程中管理机械、电气和给排水工作，每栋建筑都有预防性计划、按工种派单和合规记录。',
      highlights: ['按工种派单', '预防性计划', '合规记录'],
      visual: {
        kind: 'jobs',
        title: '机电工单 · 今日',
        items: [
          {
            title: '配电箱 DB-3',
            location: 'Tower B · 6 层',
            status: '进行中',
            tone: 'info',
          },
          {
            title: '增压泵保养',
            location: 'Harbour Point · 地下室',
            status: '今日到期',
            tone: 'due',
          },
          {
            title: 'AHU-07 更换皮带',
            location: 'Northgate · 屋顶',
            status: '已完成',
            tone: 'done',
          },
        ],
      },
    },
    challenge: {
      pressure: {
        title: '三个工种，一栋建筑',
        description: '机械、电气和给排水系统相互依存，每个工种都有自己的计划、专业人员和标准。',
        points: ['机械', '电气', '给排水'],
      },
      answer: {
        title: '机电工作在一个协同流程中',
        description: 'Fleet 规划每个工种，将工单分派给合适的专业人员，并为每个系统保留统一记录。',
      },
    },
    capabilities: {
      title: '每个工种协同一致',
      description: '机械、电气和给排水系统的计划、派单和记录。',
      tabs: [
        {
          icon: 'preventive',
          label: '预防性维护',
          title: '每个机电系统都有计划',
          description: '按时间或用量安排暖通、配电柜、水泵和供水系统的保养，按工种配备检查清单。',
          points: ['按工种的检查清单', '按时间或用量的计划', '到期前生成工单'],
          visual: {
            kind: 'steps',
            title: '电气计划',
            steps: [
              {
                kind: '计划',
                text: '配电箱 · 每季度',
              },
              {
                kind: '然后',
                text: '红外测温并紧固端子',
              },
              {
                kind: '然后',
                text: '将结果记录到每个配电箱',
              },
            ],
          },
        },
        {
          icon: 'routing',
          label: '派单',
          title: '按工种派单',
          description: '报修按工种、项目和优先级送达合适的内部技术人员或专业供应商。',
          points: ['按工种和项目派单', '带 SLA 目标的优先级', '供应商在同一流程中'],
          visual: {
            kind: 'jobs',
            title: '派单 · 今日',
            items: [
              {
                title: '没有热水',
                location: 'Harbour Point · 9 层',
                status: '给排水',
                tone: 'info',
              },
              {
                title: '断路器跳闸',
                location: 'Tower B · 6 层',
                status: '电气',
                tone: 'info',
              },
              {
                title: '空调箱噪音',
                location: 'Northgate · 屋顶',
                status: '机械',
                tone: 'done',
              },
            ],
          },
        },
        {
          icon: 'assets',
          label: '资产',
          title: '所有系统一个台账',
          description: '水泵、配电柜、锅炉和空调箱共用一个台账，附历史、成本和文档。',
          points: ['按资产查看历史和成本', '单线图和手册', '每张工单附保修信息'],
          visual: {
            kind: 'asset',
            title: '资产档案',
            name: '增压泵 P-03',
            location: 'Harbour Point · 地下室',
            status: '待保养',
            facts: [
              {
                label: '上次保养',
                value: '7月10日',
              },
              {
                label: '运行小时',
                value: '8,310',
              },
              {
                label: '本年成本',
                value: '$1,420',
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
          title: '按工种查看工作量',
          description: '平衡机械、电气和给排水团队的工作量和支出。',
          points: ['按工种和项目统计工单', '按工种统计支出', '按系统查看反复故障'],
          visual: {
            kind: 'chart',
            title: '各工种工单 · 第三季度',
            stats: [
              {
                label: '第三季度工单',
                value: '642',
              },
              {
                label: 'SLA 达成',
                value: '95.8%',
              },
            ],
            bars: [
              {
                label: '机械',
                value: 248,
              },
              {
                label: '电气',
                value: 196,
              },
              {
                label: '给排水',
                value: 158,
              },
              {
                label: '消防',
                value: 40,
              },
            ],
          },
        },
      ],
    },
    rows: [
      {
        tag: '电气',
        title: '电气系统经过测试且安全',
        description: '配电柜、照明和应急系统按计划测试，每个结果都有记录。',
        points: ['配电柜和照明测试', '应急照明检查', '结果关联到每项资产'],
        visual: {
          kind: 'jobs',
          title: '电气检查',
          items: [
            {
              title: '应急照明测试',
              location: '全楼层',
              status: '已完成',
              tone: 'done',
            },
            {
              title: 'DB-3 红外测温',
              location: 'Tower B · 6 层',
              status: '已排期',
              tone: 'info',
            },
          ],
        },
        photo: {
          id: 'electricianPanel',
          alt: '电工在控制柜前作业',
        },
      },
      {
        tag: '给排水',
        title: '给排水畅通无阻',
        description: '水泵、热水器和排水系统按计划保养，漏水快速响应。',
        points: ['水泵和热水器保养', '漏水快速响应', '供水系统记录'],
        visual: {
          kind: 'log',
          title: '给排水动态',
          entries: [
            {
              when: '07:40',
              who: '前台',
              what: '报告 9 层没有热水',
            },
            {
              when: '07:45',
              who: 'Fleet',
              what: '将内部水管工列为紧急分派',
            },
          ],
        },
        photo: {
          id: 'plumberRepair',
          alt: '水管工维修厨房水槽',
        },
      },
      {
        tag: '机械',
        title: '机械系统保持最佳性能',
        description: '空调箱、风机和冷水机组保养时记录读数，性能始终稳定。',
        points: ['现场记录读数', '更换皮带和滤网', '及早发现故障'],
        visual: {
          kind: 'steps',
          title: '空调箱保养',
          steps: [
            {
              kind: '每',
              text: '季度 · 所有空调箱',
            },
            {
              kind: '然后',
              text: '更换皮带和滤网，记录读数',
            },
          ],
        },
        photo: {
          id: 'acFilterService',
          alt: '技术人员更换空调滤网',
        },
      },
    ],
    quote: {
      text: 'Fleet 让我们的被动维修工作量减少了近 40%。技术人员、资产记录和工单终于集中在了一处。',
      author: '物业运营负责人',
      company: '综合体项目',
      photo: {
        id: 'hvacTechnicians',
        alt: '暖通技术人员维护屋顶机组',
      },
    },
    faq: [
      {
        question: '什么是机电维护？',
        answer:
          '机电（MEP）维护涵盖建筑的机械、电气和给排水系统，例如暖通、配电、照明、水泵和供水系统。',
      },
      {
        question: 'Fleet 能按工种派单吗？',
        answer: '可以。派单规则按工种、项目和优先级将工单送达合适的内部技术人员或专业供应商。',
      },
      {
        question: '能在 Fleet 中保存机电文档吗？',
        answer: '可以。在每项资产上保存手册、图纸、证书和测试结果，现场随时可查。',
      },
      {
        question: 'Fleet 适合机电承包商吗？',
        answer: '适合。承包商可管理多个客户项目的维护，按客户设置规则、报表和访问权限。',
      },
    ],
  },
  offices: {
    hero: {
      eyebrow: '写字楼与综合体',
      title: '打造高效办公场所的写字楼与综合体维护',
      description: '通过租户报修、预防性计划和全组合报表，让写字楼、公共空间和综合体项目顺畅运行。',
      highlights: ['租户报修', '预防性计划', '组合报表'],
      visual: {
        kind: 'jobs',
        title: 'Tower B · 今日',
        items: [
          {
            title: '会议室空调',
            location: '14 层',
            status: '进行中',
            tone: 'info',
          },
          {
            title: '电梯 L3 月检',
            location: '核心筒电梯',
            status: '今日到期',
            tone: 'due',
          },
          {
            title: '茶水间龙头漏水',
            location: '9 层 · 茶水间',
            status: '已完成',
            tone: 'done',
          },
        ],
      },
    },
    challenge: {
      pressure: {
        title: '办公离不开舒适与稳定运行',
        description: '空调、电梯、照明和公共设施决定着租户和员工每天的体验。',
        points: ['租户', '公共空间', '楼宇系统'],
      },
      answer: {
        title: '每层楼都顺畅运营',
        description: 'Fleet 连接租户报修、预防性维护和供应商，让每层楼舒适高效。',
      },
    },
    capabilities: {
      title: '为写字楼与综合体打造',
      description: '从租户报修到楼宇系统，每层楼都在一个平台管理。',
      tabs: [
        {
          icon: 'requests',
          label: '报修',
          title: '租户报修跟踪到关闭',
          description: '报修通过邮件、租户门户或前台提交，并自动转为工单。',
          points: ['用 Fleet Mail 将邮件转为工单', '对接租户门户', '每一步都同步状态'],
          visual: {
            kind: 'steps',
            title: '租户报修',
            steps: [
              {
                kind: '邮件',
                text: '14 层会议室太热',
              },
              {
                kind: '然后',
                text: '创建并分派工单',
              },
              {
                kind: '然后',
                text: '完成后通知租户',
              },
            ],
          },
        },
        {
          icon: 'preventive',
          label: '预防性维护',
          title: '楼宇系统按计划运行',
          description: '按时间或用量规划每栋楼的暖通、电梯、照明和消防维护。',
          points: ['每个系统都有计划', '每次上门都有检查清单', '避开办公时间安排工作'],
          visual: {
            kind: 'jobs',
            title: '本周计划',
            items: [
              {
                title: '电梯 L1–L4 保养',
                location: '核心筒电梯',
                status: '已排期',
                tone: 'info',
              },
              {
                title: '火灾报警测试',
                location: '全楼层',
                status: '已完成',
                tone: 'done',
              },
              {
                title: '空调箱更换滤网',
                location: '屋顶',
                status: '今日到期',
                tone: 'due',
              },
            ],
          },
        },
        {
          icon: 'tenants',
          label: '租户',
          title: '按楼层和租户查看历史',
          description: '按楼层、租户和公共空间跟踪工作和成本，支持费用分摊和规划。',
          points: ['按楼层和租户查看历史', '用于分摊的成本', '公共空间维护'],
          visual: {
            kind: 'asset',
            title: '租户档案',
            name: '14 层 · Northwind Ltd',
            location: 'Tower B',
            status: '已入驻',
            facts: [
              {
                label: '本年报修',
                value: '9',
              },
              {
                label: '上次上门',
                value: '9月28日',
              },
              {
                label: '未完成工单',
                value: '1',
              },
              {
                label: '本年成本',
                value: '$2,310',
              },
            ],
          },
        },
        {
          icon: 'analytics',
          label: '报表',
          title: '全组合报表',
          description: '比较各建筑的响应时间、支出和租户报修，并与业主共享看板。',
          points: ['按建筑查看响应时间', '按建筑和楼层统计支出', '业主只读看板'],
          visual: {
            kind: 'chart',
            title: '各建筑租户报修 · 第三季度',
            stats: [
              {
                label: '报修',
                value: '486',
              },
              {
                label: '按时解决',
                value: '96%',
              },
            ],
            bars: [
              {
                label: 'Tower B',
                value: 142,
              },
              {
                label: 'Harbour Point',
                value: 118,
              },
              {
                label: 'Northgate',
                value: 96,
              },
              {
                label: 'Bayview',
                value: 74,
              },
              {
                label: 'Westport',
                value: 56,
              },
            ],
          },
        },
      ],
    },
    rows: [
      {
        tag: '办公区',
        title: '舒适高效的楼层',
        description: '空调、照明和会议室按计划维护，问题快速解决。',
        points: ['舒适度问题快速解决', '会议室每日检查', '办公时间外执行计划工作'],
        visual: {
          kind: 'jobs',
          title: '14 层 · 今日',
          items: [
            {
              title: '会议室空调',
              location: '已分派给 CoolAir',
              status: '进行中',
              tone: 'info',
            },
            {
              title: '茶水间龙头漏水',
              location: '内部水管工',
              status: '已完成',
              tone: 'done',
            },
          ],
        },
        photo: {
          id: 'officeFloor',
          alt: '开放式办公区里工作的人们',
        },
      },
      {
        tag: '公共空间',
        title: '大堂和公共设施随时就绪',
        description: '大堂、电梯、停车场和公共设施对每位访客都干净、安全、运转良好。',
        points: ['大堂和电梯检查', '停车场照明和道闸', '附照片凭证的保洁计划'],
        visual: {
          kind: 'steps',
          title: '大堂例行检查',
          steps: [
            {
              kind: '每',
              text: '天 · 07:00',
            },
            {
              kind: '然后',
              text: '检查大堂、电梯和入口闸机',
            },
          ],
        },
        photo: {
          id: 'officeCorridor',
          alt: '人们走过明亮的办公走廊',
        },
      },
      {
        tag: '前台',
        title: '前台与维护协同一致',
        description: '前台和安保为租户和访客登记问题，每张工单都跟踪到关闭。',
        points: ['前台登记问题', '与租户同步进展', '班次交接备注'],
        visual: {
          kind: 'log',
          title: '前台记录',
          entries: [
            {
              when: '09:05',
              who: '前台',
              what: '登记了 B 入口闸机损坏',
            },
            {
              when: '09:12',
              who: 'Fleet',
              what: '将闸机维修分派给安防系统供应商',
            },
          ],
        },
        photo: {
          id: 'supportAgent',
          alt: '佩戴耳机的客服人员',
        },
      },
    ],
    quote: {
      text: 'Fleet 让我们的被动维修工作量减少了近 40%。技术人员、资产记录和工单终于集中在了一处。',
      author: '物业运营负责人',
      company: '综合体项目',
      photo: {
        id: 'acFilterService',
        alt: '技术人员更换空调滤网',
      },
    },
    faq: [
      {
        question: 'Fleet 如何帮助写字楼和综合体？',
        answer: 'Fleet 连接租户报修、预防性维护、供应商和报表，让每层楼和公共空间舒适且运转良好。',
      },
      {
        question: '租户如何提交报修？',
        answer: '通过 Fleet Mail 发送邮件、经集成的租户门户提交，或通过前台和安保人员登记。',
      },
      {
        question: '能按租户跟踪成本吗？',
        answer: '可以。按楼层和租户跟踪工作和成本，支持费用分摊和预算规划。',
      },
      {
        question: '业主能查看建筑表现吗？',
        answer: '可以。与业主和董事会共享只读看板，展示各建筑的响应时间和支出。',
      },
    ],
  },
  industrial: {
    hero: {
      eyebrow: '工厂与工业园区管理',
      title: '为最高可用性打造的工厂维护',
      description:
        '通过资产台账、预防性与按用量计划以及停机分析，让生产资产、公用设施和安全系统持续运行。',
      highlights: ['按用量计划', '安全检查', '停机分析'],
      visual: {
        kind: 'jobs',
        title: '1 号工厂 · 今日',
        items: [
          {
            title: '空压机 C-2 保养',
            location: '公用设施',
            status: '进行中',
            tone: 'info',
          },
          {
            title: '3 号线防护装置检查',
            location: '生产区',
            status: '今日到期',
            tone: 'due',
          },
          {
            title: '锅炉水处理',
            location: '锅炉房',
            status: '已完成',
            tone: 'done',
          },
        ],
      },
    },
    challenge: {
      pressure: {
        title: '生产依赖每一项资产',
        description: '生产线、空压机、锅炉和安全系统依次运转，每次停机都会影响产量和交期。',
        points: ['生产线', '公用设施', '安全系统'],
      },
      answer: {
        title: '可用性提前规划',
        description: 'Fleet 把资产数据转化为预防性和按用量计划，让团队在故障停产前采取行动。',
      },
    },
    capabilities: {
      title: '为工业运营打造',
      description: '每个工厂的资产、计划、安全和分析。',
      tabs: [
        {
          icon: 'assets',
          label: '资产',
          title: '每台设备都有台账',
          description: '为设备、公用设施和安全系统建立数字档案，按工厂、产线和区域组织。',
          points: ['按工厂、产线和区域建档', '历史、成本和手册', '每项资产标注备件'],
          visual: {
            kind: 'asset',
            title: '资产档案',
            name: '空压机 C-2',
            location: '1 号工厂 · 公用设施',
            status: '运行中',
            facts: [
              {
                label: '运行小时',
                value: '12,840',
              },
              {
                label: '上次保养',
                value: '9月9日',
              },
              {
                label: '第三季度停机',
                value: '2 小时',
              },
              {
                label: '本年成本',
                value: '$5,620',
              },
            ],
          },
        },
        {
          icon: 'preventive',
          label: '按用量',
          title: '按小时或循环次数维护',
          description: '按运行小时、循环次数或时间触发维护，让保养与设备实际使用相匹配。',
          points: ['按小时或循环次数触发', '按设备类型的检查清单', '减少紧急维修'],
          visual: {
            kind: 'steps',
            title: '按用量计划',
            steps: [
              {
                kind: '触发',
                text: '空压机 C-2 达到 13,000 小时',
              },
              {
                kind: '然后',
                text: '创建保养工单',
              },
              {
                kind: '然后',
                text: '分派给公用设施团队',
              },
            ],
          },
        },
        {
          icon: 'compliance',
          label: '安全',
          title: '安全检查留档',
          description: '安排防护装置检查、压力系统检验和消防测试，每个结果都有记录。',
          points: ['防护与联锁检查', '压力系统检验', '可随时审计的记录'],
          visual: {
            kind: 'files',
            title: '安全记录 · 1 号工厂',
            items: [
              {
                title: '压力系统检验.pdf',
                location: '9月12日完成',
                status: '有效',
                tone: 'done',
              },
              {
                title: '3 号线防护检查.pdf',
                location: '今日到期',
                status: '待办',
                tone: 'due',
              },
              {
                title: '灭火系统测试.pdf',
                location: '有效至 2027年3月',
                status: '有效',
                tone: 'done',
              },
            ],
          },
        },
        {
          icon: 'analytics',
          label: '停机',
          title: '按产线分析停机',
          description: '查看哪些产线和资产停机最多，以及投资方向。',
          points: ['按产线和资产查看停机', '维修成本趋势', '更换规划'],
          visual: {
            kind: 'chart',
            title: '各产线停机小时 · 第三季度',
            stats: [
              {
                label: '第三季度停机',
                value: '27 小时',
              },
              {
                label: '计划工作',
                value: '94%',
              },
            ],
            bars: [
              {
                label: '1 号线',
                value: 4,
              },
              {
                label: '2 号线',
                value: 6,
              },
              {
                label: '3 号线',
                value: 9,
              },
              {
                label: '公用设施',
                value: 5,
              },
              {
                label: '包装',
                value: 3,
              },
            ],
          },
        },
      ],
    },
    rows: [
      {
        tag: '生产',
        title: '产线一班接一班持续运行',
        description: '操作员在现场报告故障，维护团队以合适的优先级和备件响应。',
        points: ['现场报告故障', '按产线影响设定优先级', '维修跟踪到关闭'],
        visual: {
          kind: 'log',
          title: '3 号线动态',
          entries: [
            {
              when: '13:20',
              who: '操作员',
              what: '报告 3 号线灌装机卡料',
            },
            {
              when: '13:22',
              who: 'Fleet',
              what: '将当班技术人员列为紧急分派',
            },
          ],
        },
        photo: {
          id: 'factoryTechnician',
          alt: '技术人员用平板检查设备',
        },
      },
      {
        tag: '公用设施',
        title: '公用设施紧跟生产节奏',
        description: '空压机、锅炉和冷水机组按用量保养，每次上门都记录读数。',
        points: ['按运行小时保养', '现场记录读数', '及早发现故障'],
        visual: {
          kind: 'jobs',
          title: '公用设施 · 本周',
          items: [
            {
              title: '锅炉 B-1 检查',
              location: '锅炉房',
              status: '已完成',
              tone: 'done',
            },
            {
              title: '冷水机组 CH-5 保养',
              location: '公用设施',
              status: '已排期',
              tone: 'info',
            },
          ],
        },
        photo: {
          id: 'techniciansPanel',
          alt: '两位技术人员检查设备面板',
        },
      },
      {
        tag: '管理层',
        title: '工厂表现一目了然',
        description: '工厂经理可查看每个工厂的停机、计划工作完成率和维护支出。',
        points: ['按工厂和产线查看停机', '计划工作完成率', '按成本中心统计支出'],
        visual: {
          kind: 'jobs',
          title: '工厂 · 第三季度',
          items: [
            {
              title: '1 号工厂',
              location: '计划工作完成 94%',
              status: '进展正常',
              tone: 'done',
            },
            {
              title: '2 号工厂',
              location: '计划工作完成 88%',
              status: '需复核',
              tone: 'due',
            },
          ],
        },
        photo: {
          id: 'plantManagers',
          alt: '工厂经理向戴安全帽的工程师讲解',
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
        question: 'Fleet 适合工厂吗？',
        answer:
          '适合。Fleet 管理生产资产、公用设施和安全系统，提供预防性与按用量计划以及停机分析。',
      },
      {
        question: '维护能按运行小时或循环次数安排吗？',
        answer: '可以。按运行小时、循环次数或时间触发维护，让保养与设备实际使用相匹配。',
      },
      {
        question: 'Fleet 能跟踪安全检查吗？',
        answer: '可以。安排并记录防护装置检查、压力系统检验和消防测试，可随时接受审计。',
      },
      {
        question: '能比较不同工厂的表现吗？',
        answer: '可以。看板展示各工厂和产线的停机、计划工作完成率和支出。',
      },
    ],
  },
  vehicles: {
    hero: {
      eyebrow: '车辆管理',
      title: '从采购到报废的车辆管理',
      description: '在一个平台管理每一辆车，从订购、上牌到维护、理赔和处置，记录随时可供审计。',
      highlights: ['完整生命周期视图', '按里程维护', '理赔与罚单'],
      visual: {
        kind: 'jobs',
        title: '车队车辆 · 今日',
        items: [
          {
            title: '货车 V-12 保养',
            location: '30,000 公里到期',
            status: '已排期',
            tone: 'info',
          },
          {
            title: '卡车 T-03 年检',
            location: '14 天后续期',
            status: '待办',
            tone: 'due',
          },
          {
            title: '货车 V-07 更换轮胎',
            location: '维修车间',
            status: '已完成',
            tone: 'done',
          },
        ],
      },
    },
    challenge: {
      pressure: {
        title: '每辆车都有一长串待办事项',
        description: '采购、年检、保养、罚单和理赔涉及不同的团队、文件和期限。',
        points: ['采购', '维护', '合规'],
      },
      answer: {
        title: '每辆车、每个阶段，集中管理',
        description: 'Fleet 为采购、运营和财务提供每辆车的统一视图，每条记录都可随时审计。',
      },
    },
    capabilities: {
      title: '完整的车辆生命周期管理',
      description: '从购置到报废，每一次变动都有记录，随时可出报表。',
      tabs: [
        {
          icon: 'assets',
          label: '生命周期',
          title: '每辆车、每个阶段',
          description: '跟踪每辆车的订购、交付、入队、使用和报废。',
          points: ['采购与入队', '在用、闲置和退役状态', '处置记录'],
          visual: {
            kind: 'asset',
            title: '车辆档案',
            name: '货车 V-12',
            location: 'Westport DC · 配送',
            status: '在用',
            facts: [
              {
                label: '里程',
                value: '29,640 公里',
              },
              {
                label: '下次保养',
                value: '30,000 公里',
              },
              {
                label: '年检',
                value: '有效至 2027年3月',
              },
              {
                label: '本年成本',
                value: '$3,180',
              },
            ],
          },
        },
        {
          icon: 'preventive',
          label: '维护',
          title: '按里程和时间维护',
          description: '按里程、发动机小时或时间安排预防性维护，并自动跟踪维修。',
          points: ['按里程或时间触发', '自动分派技术人员', '维修跟踪到关闭'],
          visual: {
            kind: 'steps',
            title: '保养计划',
            steps: [
              {
                kind: '触发',
                text: '货车 V-12 达到 30,000 公里',
              },
              {
                kind: '然后',
                text: '预约维修车间保养',
              },
              {
                kind: '然后',
                text: '将发票记录到车辆历史',
              },
            ],
          },
        },
        {
          icon: 'compliance',
          label: '合规',
          title: '年检、罚单与理赔',
          description: '通过提醒、照片和成本汇总，管理续期、罚单和保险理赔。',
          points: ['续期提醒', '罚单期限与缴费', '在路上登记理赔'],
          visual: {
            kind: 'files',
            title: '合规 · 本月',
            items: [
              {
                title: '卡车 T-03 年检',
                location: '14 天后续期',
                status: '续期',
                tone: 'due',
              },
              {
                title: '停车罚单 #4471',
                location: '10月2日已缴',
                status: '已关闭',
                tone: 'done',
              },
              {
                title: '货车 V-05 理赔',
                location: '定损中',
                status: '处理中',
                tone: 'info',
              },
            ],
          },
        },
        {
          icon: 'analytics',
          label: '使用率',
          title: '使用率与成本控制',
          description: '监控使用、里程和闲置时长，发现利用不足的车辆并提升回报。',
          points: ['使用与闲置时长', '每辆车成本', '突出显示利用不足的资产'],
          visual: {
            kind: 'chart',
            title: '各车型使用率 · 第三季度',
            stats: [
              {
                label: '车辆',
                value: '86',
              },
              {
                label: '使用率',
                value: '78%',
              },
            ],
            bars: [
              {
                label: '货车',
                value: 84,
              },
              {
                label: '卡车',
                value: 79,
              },
              {
                label: '轿车',
                value: 64,
              },
              {
                label: '叉车',
                value: 88,
              },
              {
                label: '服务车辆',
                value: 71,
              },
            ],
          },
        },
      ],
    },
    rows: [
      {
        tag: '路上',
        title: '在路上即时登记事故',
        description: '司机附照片和备注登记事故并关联到车辆，管理者即时收到通知。',
        points: ['移动端事故报告', '附照片和备注', '即时通知管理者'],
        visual: {
          kind: 'log',
          title: '事故记录',
          entries: [
            {
              when: '16:40',
              who: '司机',
              what: '报告货车 V-05 车门刮伤',
            },
            {
              when: '16:41',
              who: 'Fleet',
              what: '创建理赔并通知车队经理',
            },
          ],
        },
        photo: {
          id: 'vanDriver',
          alt: '面带微笑驾驶货车的司机',
        },
      },
      {
        tag: '检查',
        title: '每辆车都适合上路',
        description: '定期检查和检查清单让每辆车安全、合规，随时准备下一趟行程。',
        points: ['出车前检查清单', '缺陷转为工单', '每辆车的检查历史'],
        visual: {
          kind: 'jobs',
          title: '检查 · 今日',
          items: [
            {
              title: '货车 V-01 至 V-12',
              location: '出车前检查',
              status: '已完成',
              tone: 'done',
            },
            {
              title: '卡车 T-03',
              location: '制动检查',
              status: '已排期',
              tone: 'info',
            },
          ],
        },
        photo: {
          id: 'fleetInspection',
          alt: '检查员拿着平板检查一排货车',
        },
      },
      {
        tag: '财务',
        title: '财务与运营协同一致',
        description: '维护、燃油和使用数据汇总到一个看板，用于预算和合同决策。',
        points: ['按车辆和车型统计成本', '比较供应商和合同', '预算跟踪'],
        visual: {
          kind: 'chart',
          title: '各车型成本 · 本年',
          stats: [],
          bars: [
            {
              label: '卡车',
              value: 48,
            },
            {
              label: '货车',
              value: 36,
            },
            {
              label: '轿车',
              value: 18,
            },
            {
              label: '叉车',
              value: 14,
            },
            {
              label: '服务车辆',
              value: 22,
            },
          ],
        },
        photo: {
          id: 'fleetVans',
          alt: '停在仓库外的配送货车',
        },
      },
    ],
    quote: {
      text: '其他平台要么太复杂，要么太通用。Fleet 为我们提供了量身打造的方案，支持响应也更快。',
      author: '维护总监',
      company: '物流枢纽',
      photo: {
        id: 'fleetManager',
        alt: '车队经理拿着平板站在卡车前',
      },
    },
    faq: [
      {
        question: 'Fleet 的车辆管理涵盖哪些内容？',
        answer: '车辆的完整生命周期：采购、入队、维护、年检、罚单、理赔、使用率和报废。',
      },
      {
        question: '能按里程安排维护吗？',
        answer: '可以。按里程、发动机小时或时间安排预防性维护，并自动分派技术人员。',
      },
      {
        question: '司机能报告事故吗？',
        answer: '可以。司机在路上附照片和备注登记事故，管理者即时收到通知。',
      },
      {
        question: '车辆管理能连接我们的财务工具吗？',
        answer: '可以。Fleet 与财务工具和 ERP 集成，维护和使用成本汇入统一报表。',
      },
    ],
  },
}

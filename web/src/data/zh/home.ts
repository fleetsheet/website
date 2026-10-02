import type { BadgeTone } from '@/components/ui/Badge.astro'

export type StatusItem = {
  title: string
  location?: string
  status: string
  tone: BadgeTone
}

export const meta = {
  title: 'Fleet | 为房地产打造统一的数据与智能',
  description: 'Fleet 是专为战略、运营和维护打造的商业地产管理平台。',
}

export const hero = {
  announcement: {
    label: '新功能',
    text: '面向多站点资产组合的规则驱动型 AI 智能体',
    href: '/#ai',
  },
  title: '为房地产打造统一的数据与智能',
  description:
    'Fleet 是专为战略、运营和维护打造的商业地产管理平台——所有物业、资产和工单，尽在一处。',
  primaryAction: { label: '预约演示', href: '/contact' },
  secondaryAction: { label: '了解平台', href: '/#platform' },
  highlights: ['支持 iOS 和 Android', '内置审计日志', '各组织数据独立隔离'],
}

export const showcase = {
  greeting: '欢迎，John S.',
  scope: '资产组合 · 14 个地点',
  filters: ['所有区域', '近 30 天'],
  stats: [
    { label: '未完成工单', value: '128' },
    { label: 'SLA 达成率', value: '96.4%' },
    { label: '待执行预防性维护', value: '37' },
  ],
  workOrders: [
    {
      id: 'WO-2291',
      title: '冷水机组低压报警',
      location: 'Harbour Point · 机房',
      status: '已逾期 2 天',
      tone: 'overdue',
    },
    {
      id: 'WO-2304',
      title: '更换暖通空调过滤网',
      location: 'Tower B · 14 层',
      status: '4 小时后到期',
      tone: 'due',
    },
    {
      id: 'WO-2310',
      title: '防火门季度检查',
      location: 'Northgate Mall · A 号楼梯',
      status: '已排期',
      tone: 'info',
    },
    {
      id: 'WO-2288',
      title: '装卸区卷帘门维修',
      location: 'Westport DC · 07 号泊位',
      status: '已完成',
      tone: 'done',
    },
  ] satisfies (StatusItem & { id: string })[],
  prediction: {
    title: 'Fleet 预测',
    asset: 'AHU-07 · Tower B，14 层',
    risk: '高风险',
    message: '振动值已连续 9 天高于基线。请在 7 天内安排预防性维护。',
    trend: [30, 34, 32, 38, 36, 42, 40, 48, 55, 60, 66, 72, 80, 92],
    alertFrom: 9,
    rule: '规则 R-114 · 可追溯',
    action: '创建工单',
  },
  audit: [
    { who: 'Aisha K.', what: '关闭了 WO-2288', when: '2 分钟前' },
    { who: '工作流', what: '将 WO-2291 升级至供应商', when: '1 小时前' },
    { who: 'Marco L.', what: '上传了消防许可证', when: '3 小时前' },
  ],
}

export const unifiedModel = {
  eyebrow: '唯一可信数据源',
  title: '从零散工具到统一运营模式',
  description:
    '电子表格、收件箱、共享盘和供应商门户各自掌握着部分信息。Fleet 将它们整合为一份结构化记录，让每一项决策都基于完整的背景信息。',
  sources: ['电子表格', '邮件往来', '共享盘', '供应商门户', '纸质检查表'],
  outputs: ['实时仪表板', '资产履历', '审计追踪', '预测分析'],
}

export const platform = {
  eyebrow: '平台',
  title: '不只是又一款 CMMS，而是专为多站点房地产打造',
  description:
    '只启用团队所需的模块。所有模块共享同一数据模型，地点、资产、人员和历史记录始终互联互通。',
  workOrders: {
    title: '工单与 SLA',
    description: '安排预防性任务、跟踪临时维修，并将工作派发给内部团队或供应商。',
    items: [
      { initials: 'AK', title: '锅炉年度保养', status: '4 小时后到期', tone: 'due' },
      { initials: 'ML', title: '3B 单元漏水', status: '已逾期 2 天', tone: 'overdue' },
      { initials: 'JT', title: '应急照明测试', status: '已完成', tone: 'done' },
    ] satisfies (StatusItem & { initials: string })[],
  },
  assets: {
    title: '资产管理',
    description: '为每项资产建立数字档案，涵盖维护历史、成本、保修和手册，并关联到具体楼宇和房间。',
    asset: {
      name: '冷水机组 CH-02',
      location: 'Harbour Point · B2 机房',
      status: '运行中',
      facts: [
        { label: '上次保养', value: '9 月 12 日' },
        { label: '保修期至', value: '2028 年 3 月' },
        { label: '年初至今成本', value: '$4,210' },
      ],
    },
  },
  documents: {
    title: '文档管理',
    description: '手册、保修单、检查报告和许可证随时可供审计，跨站点均可访问。',
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
      {
        title: 'Q3 电梯检查.pdf',
        location: '核心筒电梯 · 报告',
        status: '已核验',
        tone: 'done',
      },
    ] satisfies StatusItem[],
  },
  workflows: {
    title: '自定义工作流',
    description: '自动将请求转化为行动。审批通过后即可触发工单和供应商通知，无需人工交接。',
    steps: [
      { kind: '触发', text: '提交设备升级申请' },
      { kind: '如果', text: '物业经理已批准' },
      { kind: '则', text: '创建工单并通知供应商' },
    ],
  },
  auditLogs: {
    title: '审计日志',
    description: '每次变更都带有时间戳并记录操作人。轻松满足合规要求，无需四处追查纸质记录。',
    entries: [
      { when: '09:42', who: 'Aisha K.', what: '将 WO-2304 的状态更改为进行中' },
      { when: '09:15', who: '工作流', what: '将 WO-2310 分配给 Northgate 设施管理团队' },
      { when: '08:58', who: 'Marco L.', what: '为 CH-02 附加了检查报告' },
    ],
  },
  mobile: {
    title: '面向现场的移动端',
    description:
      '技术人员和租户均可使用 iOS 和 Android 应用。提交报修时可附带照片、备注和关联资产。',
    heading: '今天 · 4 项任务',
    task: {
      title: '防火门检查',
      location: '3 层 · A 号楼梯间',
      status: '2 小时后到期',
      tone: 'due',
    } satisfies StatusItem,
    actions: ['开始', '添加照片'],
  },
}

export const aiAgents = {
  eyebrow: 'Fleet AI 智能体',
  title: '关于您的资产组合，尽管提问',
  description:
    'Fleet 的 AI 智能体基于您的实时资产组合数据，用通俗易懂的语言回答问题，并为每个答案生成配套仪表板。无需数据透视表，也无需提交报表申请。',
  points: [
    {
      title: '通俗易懂的回答',
      description:
        '询问成本、SLA、资产或供应商相关问题，答案来自您的实时数据，而非上个月导出的报表。',
    },
    {
      title: '即时生成仪表板',
      description: '每个答案都附带图表，您可以进一步调整、分享或固定到团队仪表板。',
    },
    {
      title: '每个答案均可追溯',
      description: '答案会注明所依据的工单和资产，并在每个组织独立隔离的环境中运行。',
    },
  ],
  chat: {
    assistant: 'Fleet 助手',
    context: '实时数据 · 14 个地点',
    question: '上季度哪些物业的暖通空调停机时间最长？造成了多少损失？',
    answer: {
      lead: 'Harbour Point',
      body: '以 46 小时的暖通空调停机时间居首，主要源于冷水机组 CH-02。所有物业的暖通空调停机成本合计',
      cost: '$38,400',
      tail: '（Q3），较 Q2 上升 18%。',
    },
    chartTitle: '各物业暖通空调停机时间 · Q3',
    chartBadge: '已生成仪表板',
    stats: [
      { label: '总时长（小时）', value: '112' },
      { label: '成本', value: '$38.4k' },
      { label: '较 Q2', value: '+18%', trend: 'up' },
    ],
    rows: [
      { site: 'Harbour Point', hours: 46 },
      { site: 'Tower B', hours: 28 },
      { site: 'Northgate Mall', hours: 19 },
      { site: 'Bayview Hotel', hours: 12 },
      { site: 'Westport DC', hours: 7 },
    ],
    sources: '数据来源：86 张工单 · 14 项资产',
    action: '固定到仪表板',
    followUps: ['按资产细分', '与去年对比', '涉及哪些供应商？'],
    placeholder: '询问任意物业、资产或供应商…',
  },
}

export const solutions = {
  eyebrow: '解决方案',
  title: '一个平台，适配您的行业',
  sectors: [
    {
      label: '商业办公',
      title: '商业写字楼',
      site: 'Harbour Point · 22 层',
      description:
        '通过预防性维护计划、供应商协同和覆盖每个楼层的 SLA 仪表板，确保多租户写字楼平稳运行。',
      points: ['租户请求按楼层和工种自动派发', '按合同跟踪供应商绩效', '按楼宇生成预算报告'],
      tasks: [
        {
          title: '更换暖通空调过滤网',
          location: '14 层 · AHU-07',
          status: '4 小时后到期',
          tone: 'due',
        },
        {
          title: '电梯年度检验',
          location: '核心筒电梯 L1–L3',
          status: '已排期',
          tone: 'info',
        },
        {
          title: '大堂照明故障',
          location: '首层',
          status: '已完成',
          tone: 'done',
        },
      ],
    },
    {
      label: '零售',
      title: '零售',
      site: 'Northgate Mall · 180 个商铺',
      description:
        '借助计划任务、SLA 跟踪和实时仪表板，并辅以自定义工作流，让店面和公共区域时刻保持迎客状态。',
      points: ['公共区域按计划巡检', '与租户协调非营业时间施工', '按承包商跟踪 SLA'],
      tasks: [
        {
          title: '自动扶梯深度清洁',
          location: '中庭 · E2',
          status: '2 小时后到期',
          tone: 'due',
        },
        {
          title: '美食广场隔油池',
          location: '2 层',
          status: '已逾期 1 天',
          tone: 'overdue',
        },
        { title: '停车场照明检查', location: 'P1–P3', status: '已完成', tone: 'done' },
      ],
    },
    {
      label: '酒店',
      title: '酒店',
      site: 'Bayview Hotel · 312 间客房',
      description:
        '管理预防性检查、供应商记录和合规要求，以完整的审计追踪保障宾客安全，从容应对监管。',
      points: ['客房就绪状态与维护联动', '消防安全检查自动记录', '优先处理影响宾客的问题'],
      tasks: [
        {
          title: '1204 房空调不制冷',
          location: '12 层',
          status: '1 小时后到期',
          tone: 'due',
        },
        { title: '泳池化学品记录', location: '5 层平台', status: '已完成', tone: 'done' },
        {
          title: '厨房排烟罩检查',
          location: '主厨房',
          status: '已排期',
          tone: 'info',
        },
      ],
    },
    {
      label: '物流',
      title: '物流',
      site: 'Westport DC · 14 个泊位',
      description: '利用实时资产状况数据并直接关联维修排期，消除装卸区和设备的停机时间。',
      points: [
        '按泊位统计月台和门的正常运行时间',
        '叉车及物料搬运设备保养记录',
        '按资产统计停机成本',
      ],
      tasks: [
        {
          title: '登车桥液压泄漏',
          location: '07 号泊位',
          status: '已逾期 3 小时',
          tone: 'overdue',
        },
        {
          title: '快速卷帘门保养',
          location: '1–6 号泊位',
          status: '6 小时后到期',
          tone: 'due',
        },
        {
          title: '喷淋系统流量测试',
          location: 'A 号仓库',
          status: '已完成',
          tone: 'done',
        },
      ],
    },
    {
      label: '住宅',
      title: '住宅',
      site: 'Parkside Residences · 4 栋楼',
      description: '兼顾公共区域维护、单元交接和住户报修，让社区安全、满意且合规。',
      points: ['住户通过手机提交报修', '单元交接检查清单', '按楼栋记录合规日志'],
      tasks: [
        { title: '3B 单元水龙头漏水', location: 'C 栋', status: '5 小时后到期', tone: 'due' },
        { title: '健身器材检查', location: '会所', status: '已完成', tone: 'done' },
        { title: '7A 单元交接', location: 'A 栋', status: '已排期', tone: 'info' },
      ],
    },
    {
      label: '车队',
      title: '车辆管理',
      site: 'Metro 车场 · 64 辆车',
      description: '维护、维修、使用情况和理赔集中于一个仪表板，财务与运营数据保持同步。',
      points: ['里程、使用情况与怠速时长', '现场拍照提交理赔', '按里程执行预防性保养'],
      tasks: [
        {
          title: '货车 V-218 刹车保养',
          location: '车场 2 号工位',
          status: '3 小时后到期',
          tone: 'due',
        },
        {
          title: '保险理赔 #4471',
          location: '关联：V-102',
          status: '审核中',
          tone: 'info',
        },
        { title: '轮胎换位 · 6 辆', location: '车场', status: '已完成', tone: 'done' },
      ],
    },
  ] satisfies {
    label: string
    title: string
    site: string
    description: string
    points: string[]
    tasks: StatusItem[]
  }[],
}

export const consultancy = {
  eyebrow: 'Fleet 咨询服务',
  title: '繁重工作，交给我们',
  description: '每个阶段都与运营成效挂钩，让管理层清楚看到部署带来的可衡量成果。',
  action: { label: '咨询顾问 →', href: '/contact' },
  phases: [
    {
      title: '评估',
      description: '明确您的需求，规划从零散工具迁移到统一平台的路径。',
    },
    {
      title: '影响建模',
      description: '量化人工效率、停机时间、预防性维护和供应商绩效。',
    },
    {
      title: '试点',
      description: '在全面推广前，与管理人员和现场团队共同验证工作流和 KPI。',
    },
    {
      title: '部署',
      description: '在每栋楼宇和每个区域推行标准化工作流和资产治理。',
    },
  ],
}

export const demoCta = {
  title: '在一处纵览您的全部资产组合',
  description: '无论是五栋写字楼还是五十个园区，都能获得围绕您的物业和资产量身定制的产品演示。',
  primaryAction: { label: '预约演示', href: '/contact' },
}

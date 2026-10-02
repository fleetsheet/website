export type FaqItem = {
  question: string
  answer: string
  points?: string[]
}

export const faqPage = {
  meta: {
    title: '常见问题 | Fleet',
    description: '关于 Fleet 的常见问题解答：产品功能、适用对象、上线部署、安全、集成与定价。',
  },
  eyebrow: 'Fleet 常见问题',
  title: '您的问题，我们来解答',
  description: '团队在选择 Fleet 前最常问的问题都在这里。没有找到答案？欢迎联系我们。',
  items: [
    {
      question: 'Fleet 是什么？',
      answer:
        'Fleet 是一个基于云的房地产平台，旨在简化多站点的设施管理、维护和运营。除了强大的 CMMS/CAFM 功能外，它还帮助团队在一个集中的设施管理仪表板中管理工单、资产、供应商、租户以及账单与收款。',
    },
    {
      question: 'Fleet 是 CMMS 还是 CAFM？',
      answer:
        'Fleet 最初是一款基于云的 CMMS（计算机化维护管理系统），如今已具备 CAFM（计算机辅助设施管理）的核心功能。我们已发展成为领先的综合性房地产运营平台，将维护、资产管理、文档、通过自定义工作流进行的供应商协调，以及基于审计日志的合规追踪融为一体。',
    },
    {
      question: 'Fleet 适合哪些用户？',
      answer:
        'Fleet 专为房地产、零售、物流、酒店、教育和医疗等行业的多站点运营方设计，也覆盖特定行业场景，例如购物中心与零售、酒店与餐饮、航运与物流以及住宅社区。',
    },
    {
      question: 'Fleet 如何帮助减少停机时间？',
      answer:
        'Fleet 支持预防性维护排程、实时工单追踪和即时提醒，全部在设施管理中完成。这些功能减少了被动维修，保持设备的高可用性。',
    },
    {
      question: 'Fleet 能否跨多个物业或地点使用？',
      answer:
        '可以。Fleet 的多站点管理系统让您按楼宇、区域乃至整个大区管理和追踪维护工作，并支持基于地点的权限设置。',
    },
    {
      question: 'Fleet 支持移动端吗？',
      answer:
        '当然。Fleet 是移动优先的平台，兼容 iOS 和 Android。您可以在任何设备上实时登记、分派和追踪工单。',
    },
    {
      question: 'Fleet 能与我们现有的系统集成吗？',
      answer: '可以。Fleet 可灵活集成主流的应付/应收账款系统、财务工具、ERP 软件和供应商门户。',
    },
    {
      question: '我可以用 Fleet 管理哪些类型的维护？',
      answer: '您可以管理被动维修、计划性维护和预测性维护，以及巡检、审计、供应商服务和费用审批。',
    },
    {
      question: 'Fleet 如何支持资产管理？',
      answer:
        'Fleet 在资产管理中为每项资产建立数字档案，追踪其生命周期、成本历史、保修信息和各地点的使用情况。',
    },
    {
      question: '我们可以为用户分配不同的访问权限吗？',
      answer: '可以。Fleet 为技术人员、经理、供应商和管理员提供基于角色的权限。',
    },
    {
      question: 'Fleet 支持文档存储吗？',
      answer:
        '支持。您可以上传手册、保修文件、服务记录和安全检查清单，并直接关联到资产或工单，在文档管理中随时查阅。',
    },
    {
      question: 'Fleet 如何支持合规与审计？',
      answer:
        'Fleet 通过审计日志记录并保存工单历史、文档变更和完成情况，全程可追溯，让合规变得轻松。',
    },
    {
      question: 'Fleet 与其他 CMMS 软件有何不同？',
      answer:
        'Fleet 专为多站点房地产团队打造，提供免安装应用的移动访问、快速上线、按使用量计费，以及为物业团队而非工厂设计的强大报表功能。',
    },
    {
      question: '是否提供免费试用或演示？',
      answer: '提供。预约一次免费的个性化演示，了解 Fleet 如何适应您团队的工作流程和所在行业。',
    },
    {
      question: '上线 Fleet 需要多长时间？',
      answer: '大多数团队可在 7 天内完成 Fleet 上线，供应商访问和工单流程全部就绪。',
    },
    {
      question: 'Fleet 安全吗？',
      answer: '安全。Fleet 采用安全的云基础设施和加密的数据处理，并支持访问日志和用户操作追溯。',
    },
    {
      question: 'Fleet 支持计划性预防维护（PPM）吗？',
      answer: '支持。您可以创建周期性计划，将其关联到资产或地点，并通过仪表板提醒监控执行情况。',
    },
    {
      question: 'Fleet 的报表系统包含哪些内容？',
      answer: 'Fleet 提供实时仪表板、可导出报表、预算追踪以及用于绩效分析的自定义 KPI。',
    },
    {
      question: 'Fleet 能帮助我们降低运营成本吗？',
      answer: '能。Fleet 通过以下方式降低运营支出：',
      points: [
        '减少技术人员的延误',
        '降低第三方物业管理费用（通常占收入的 6–8%）',
        '延长资产寿命并追踪资产表现',
      ],
    },
    {
      question: '我可以通过 Fleet 管理多个供应商吗？',
      answer: '可以。您可以邀请、标记、分派和监控供应商工单，并获得自动通知和服务记录。',
    },
    {
      question: 'Fleet 支持不同的语言和地区吗？',
      answer: '支持。Fleet 已被亚洲、欧洲和北美的团队使用，支持多语言和本地时区。',
    },
    {
      question: '我们可以从其他 CMMS 或 CAFM 工具迁移过来吗？',
      answer: '可以。Fleet 支持定制化迁移，包括资产数据导入、API 同步以及在我们协助下的手动上传。',
    },
    {
      question: 'Fleet 支持库存或备件管理吗？',
      answer: '即将推出。Fleet 正在开发备件管理、库存记录以及基于用量的库存提醒功能。',
    },
    {
      question: '哪些行业最能从 Fleet 中受益？',
      answer: 'Fleet 非常适合：',
      points: [
        '购物中心与零售连锁',
        '酒店与餐饮运营',
        '航运、物流与交通枢纽',
        '住宅及综合用途社区',
      ],
    },
    {
      question: '如何联系 Fleet 了解更多信息？',
      answer: '您可以预约演示、访问我们的联系页面，或直接发送电子邮件给我们的团队。',
    },
  ] satisfies FaqItem[],
  cta: {
    title: '还有其他问题？',
    description: '与 Fleet 团队聊聊您的站点、资产和工作流程。',
    primaryAction: { label: '预约演示', href: '/contact' },
    secondaryAction: { label: '了解平台', href: '/#platform' },
  },
}

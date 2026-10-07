import type { NavLink } from '@/config'

export const tagline = '为房地产打造统一的数据与智能。'

export const description = 'Fleet 是专为战略、运营和维护打造的商业地产管理平台。'

export const actions = {
  signIn: { label: '登录', href: '#' },
  bookDemo: { label: '预约演示', href: '/contact' },
} satisfies Record<string, NavLink>

export const headerLinks: NavLink[] = [{ label: '常见问题', href: '/faqs' }]

export const footerColumns: { title: string; links: NavLink[] }[] = [
  {
    title: '平台',
    links: [
      { label: '平台概览', href: '/platform' },
      { label: '资产管理', href: '/features/asset-management' },
      { label: '文档管理', href: '/features/document-management' },
      { label: '审计追踪与检查', href: '/features/audit-tracking' },
      { label: 'RunnerAI', href: '/platform/runner-ai' },
    ],
  },
  {
    title: '公司',
    links: [
      { label: '常见问题', href: '/faqs' },
      { label: 'AI 智能体', href: '/#ai' },
      { label: '联系我们', href: '/contact' },
    ],
  },
]

export const labels = {
  skipToContent: '跳至正文',
  home: 'Fleet 首页',
  mainNav: '主导航',
  mobileNav: '移动端导航',
  openMenu: '打开菜单',
  closeMenu: '关闭菜单',
  language: '语言',
  optional: '（选填）',
  emailPrompt: '更喜欢发邮件？请写信至',
  productPreview: '产品预览',
  auditLog: '审计日志',
  beforeFleet: '使用 Fleet 之前',
  withFleet: '使用 Fleet 之后',
}

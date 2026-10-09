export type ContactField = {
  name: string
  label: string
  type: 'text' | 'email' | 'textarea'
  autocomplete: string
  required: boolean
}

export const contactForm = {
  actionUrl: 'https://submit-form.com/Scb6CnrE2',
  redirectPath: '/contact/thanks',
  submitLabel: '发送消息',
  pendingLabel: '发送中…',
  successMessage: '感谢来信，我们已收到您的消息。Fleet 团队将尽快回复您。',
  errorMessage: '出了点问题。请重试，或发送邮件至 admin@runfleet.com。',
  captchaMessage: '请先完成验证再发送。',
  fields: [
    { name: 'name', label: '姓名', type: 'text', autocomplete: 'name', required: true },
    { name: 'email', label: '工作邮箱', type: 'email', autocomplete: 'email', required: true },
    {
      name: 'company',
      label: '公司',
      type: 'text',
      autocomplete: 'organization',
      required: false,
    },
    { name: 'message', label: '留言', type: 'textarea', autocomplete: 'off', required: true },
  ] satisfies ContactField[],
}

export const contactPage = {
  meta: {
    title: '联系 Fleet | 预约演示与咨询',
    description:
      '欢迎联系我们，了解 Fleet 如何简化您的资产与工单管理、实现工作流自动化并减少停机时间。',
  },
  eyebrow: '联系我们',
  title: '与我们取得联系',
  description: '预约演示、咨询服务，或向我们介绍您的资产组合。我们会尽快回复您。',
  highlights: [
    '围绕您的物业和资产量身定制的产品演示',
    '解答定价、部署与集成相关问题',
    '无需任何承诺',
  ],
}

export const contactThanks = {
  meta: {
    title: '感谢您的联系 | Fleet',
    description: '您的消息已发送给 Fleet 团队。',
  },
  title: '感谢来信，我们已收到您的消息',
  description: 'Fleet 团队将尽快回复至您提供的邮箱。',
  action: { label: '返回首页', href: '/' },
}

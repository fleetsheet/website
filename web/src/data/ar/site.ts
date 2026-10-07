import type { NavLink } from '@/config'

export const tagline = 'بيانات وذكاء موحّدان للقطاع العقاري.'

export const description =
  'Fleet هي منصة إدارة العقارات التجارية المصممة خصيصًا للاستراتيجية والعمليات والصيانة.'

export const actions = {
  signIn: { label: 'تسجيل الدخول', href: '#' },
  bookDemo: { label: 'احجز عرضًا توضيحيًا', href: '/contact' },
} satisfies Record<string, NavLink>

export const headerLinks: NavLink[] = [
  { label: 'وكلاء الذكاء الاصطناعي', href: '/#ai' },
  { label: 'الأسئلة الشائعة', href: '/faqs' },
  { label: 'رؤى', href: '/insights' },
]

export const footerColumns: { title: string; links: NavLink[] }[] = [
  {
    title: 'المنصة',
    links: [
      { label: 'نظرة عامة', href: '/platform' },
      { label: 'إدارة الأصول', href: '/features/asset-management' },
      { label: 'إدارة المستندات', href: '/features/document-management' },
      { label: 'تتبع التدقيق والفحوصات', href: '/features/audit-tracking' },
      { label: 'RunnerAI', href: '/platform/runner-ai' },
    ],
  },
  {
    title: 'الشركة',
    links: [
      { label: 'رؤى', href: '/insights' },
      { label: 'الأسئلة الشائعة', href: '/faqs' },
      { label: 'وكلاء الذكاء الاصطناعي', href: '/#ai' },
      { label: 'تواصل معنا', href: '/contact' },
    ],
  },
]

export const labels = {
  skipToContent: 'تخطَّ إلى المحتوى',
  home: 'الصفحة الرئيسية لـ Fleet',
  mainNav: 'الرئيسية',
  mobileNav: 'الجوال',
  openMenu: 'فتح القائمة',
  closeMenu: 'إغلاق القائمة',
  language: 'اللغة',
  optional: '(اختياري)',
  emailPrompt: 'تفضّل البريد الإلكتروني؟ راسلنا على',
  productPreview: 'معاينة المنتج',
  auditLog: 'سجل التدقيق',
  beforeFleet: 'قبل Fleet',
  withFleet: 'مع Fleet',
}

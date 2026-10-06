import type { NavLink } from '@/config'

export const tagline = 'Datos e inteligencia unificados para el sector inmobiliario.'

export const description =
  'Fleet es la plataforma de gestión inmobiliaria comercial diseñada para la estrategia, las operaciones y el mantenimiento.'

export const actions = {
  signIn: { label: 'Iniciar sesión', href: '#' },
  bookDemo: { label: 'Solicitar demo', href: '/contact' },
} satisfies Record<string, NavLink>

export const headerLinks: NavLink[] = [
  { label: 'Agentes de IA', href: '/#ai' },
  { label: 'Preguntas frecuentes', href: '/faqs' },
  { label: 'Insights', href: '/insights' },
]

export const footerColumns: { title: string; links: NavLink[] }[] = [
  {
    title: 'Plataforma',
    links: [
      { label: 'Visión general', href: '/platform' },
      { label: 'Gestión de activos', href: '/features/asset-management' },
      { label: 'Gestión documental', href: '/features/document-management' },
      { label: 'Auditorías e inspecciones', href: '/features/audit-tracking' },
      { label: 'RunnerAI', href: '/platform/runner-ai' },
    ],
  },
  {
    title: 'Empresa',
    links: [
      { label: 'Insights', href: '/insights' },
      { label: 'Preguntas frecuentes', href: '/faqs' },
      { label: 'Agentes de IA', href: '/#ai' },
      { label: 'Contacto', href: '/contact' },
    ],
  },
]

export const labels = {
  skipToContent: 'Ir al contenido',
  home: 'Inicio de Fleet',
  mainNav: 'Principal',
  mobileNav: 'Móvil',
  openMenu: 'Abrir menú',
  closeMenu: 'Cerrar menú',
  language: 'Idioma',
  optional: '(opcional)',
  emailPrompt: '¿Prefiere el correo? Escriba a',
  productPreview: 'Vista previa del producto',
  auditLog: 'Registro de auditoría',
  beforeFleet: 'Antes de Fleet',
  withFleet: 'Con Fleet',
}

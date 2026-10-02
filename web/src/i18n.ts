export const locales = ['en', 'de', 'ar', 'fr', 'zh', 'es'] as const

export type Locale = (typeof locales)[number]

export const defaultLocale: Locale = 'en'

type Language = {
  name: string
  englishName: string
  hreflang: string
  dateLocale: string
  ogLocale: string
  dir: 'ltr' | 'rtl'
}

export const languages: Record<Locale, Language> = {
  en: {
    name: 'English',
    englishName: 'English',
    hreflang: 'en',
    dateLocale: 'en-US',
    ogLocale: 'en_US',
    dir: 'ltr',
  },
  de: {
    name: 'Deutsch',
    englishName: 'German',
    hreflang: 'de',
    dateLocale: 'de-DE',
    ogLocale: 'de_DE',
    dir: 'ltr',
  },
  ar: {
    name: 'العربية',
    englishName: 'Arabic',
    hreflang: 'ar',
    dateLocale: 'ar',
    ogLocale: 'ar_AR',
    dir: 'rtl',
  },
  fr: {
    name: 'Français',
    englishName: 'French',
    hreflang: 'fr',
    dateLocale: 'fr-FR',
    ogLocale: 'fr_FR',
    dir: 'ltr',
  },
  zh: {
    name: '中文 (简体)',
    englishName: 'Chinese (Simplified)',
    hreflang: 'zh-Hans',
    dateLocale: 'zh-CN',
    ogLocale: 'zh_CN',
    dir: 'ltr',
  },
  es: {
    name: 'Español',
    englishName: 'Spanish',
    hreflang: 'es',
    dateLocale: 'es-ES',
    ogLocale: 'es_ES',
    dir: 'ltr',
  },
}

export const isLocale = (value: string | undefined): value is Locale =>
  locales.some((locale) => locale === value)

export const getLocale = (url: URL): Locale => {
  const [firstSegment] = url.pathname.split('/').filter(Boolean)
  return isLocale(firstSegment) ? firstSegment : defaultLocale
}

export const stripLocale = (pathname: string) => {
  const [firstSegment, ...rest] = pathname.split('/').filter(Boolean)
  const segments = isLocale(firstSegment) ? rest : [firstSegment, ...rest].filter(Boolean)
  return `/${segments.join('/')}`
}

export const localizePath = (path: string, locale: Locale) => {
  if (locale === defaultLocale || !path.startsWith('/') || path.startsWith('//')) {
    return path
  }
  if (isLocale(path.split(/[/#?]/)[1])) {
    return path
  }
  if (path === '/') {
    return `/${locale}`
  }
  if (path.startsWith('/#')) {
    return `/${locale}${path.slice(1)}`
  }
  return `/${locale}${path}`
}

export const localeParams = (locale: Locale) => ({
  lang: locale === defaultLocale ? undefined : locale,
})

export const localeStaticPaths = () => locales.map((locale) => ({ params: localeParams(locale) }))

import { languages, type Locale } from '@/i18n'

export const formatDate = (date: Date, locale: Locale) =>
  new Intl.DateTimeFormat(languages[locale].dateLocale, {
    dateStyle: 'long',
    timeZone: 'UTC',
  }).format(date)

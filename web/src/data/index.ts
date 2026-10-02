import type { Locale } from '@/i18n'
import * as ar from './ar'
import * as de from './de'
import * as en from './en'
import * as es from './es'
import * as fr from './fr'
import * as zh from './zh'

export type Content = typeof en

const content: Record<Locale, Content> = { en, de, ar, fr, zh, es }

export const getContent = (locale: Locale) => content[locale]

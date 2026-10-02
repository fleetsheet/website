export type PageMeta = {
  title: string
  description?: string | null
  image?: string | null
  imageAlt?: string | null
  noIndex?: boolean | null
  type?: 'website' | 'article'
  publishedTime?: string | null
  modifiedTime?: string | null
  alternatePaths?: {
    hreflang: string
    path: string
  }[]
}

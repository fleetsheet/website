export type PageMeta = {
  title: string
  description?: string | null
  image?: string | null
  noIndex?: boolean | null
  alternatePaths?: {
    hreflang: string
    path: string
  }[]
}

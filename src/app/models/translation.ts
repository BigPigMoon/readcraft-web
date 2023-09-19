export type Translations = Variant[];

export interface Variant {
  featured: boolean
  text: string
  pos: string
  forms: any[]
  grammar_info: any
  audio_links: AudioLink[] | null
  translations: Translation[]
}

export interface AudioLink {
  url: string
  lang: string
}

export interface Translation {
  featured: boolean
  text: string
  pos: string
  audio_links: any
  examples: Example[]
  usage_frequency: any
}

export interface Example {
  src: string
  dst: string
}

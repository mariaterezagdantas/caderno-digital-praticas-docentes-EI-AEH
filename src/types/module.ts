import type { LucideIcon } from 'lucide-react'

export type ModuleAccent = 'sage' | 'mist' | 'terracotta' | 'beige'

export interface RepositoryModule {
  id: string
  title: string
  description: string
  path: string
  icon: LucideIcon
  accent: ModuleAccent
  keywords: string[]
}

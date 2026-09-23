import { useMemo, useState } from 'react'
import type { RepositoryModule } from '../types/module'
import { normalizeSearchText } from '../utils/normalizeSearchText'

export function useModuleSearch(modules: RepositoryModule[]) {
  const [query, setQuery] = useState('')

  const filteredModules = useMemo(() => {
    const normalizedQuery = normalizeSearchText(query)
    if (!normalizedQuery) return modules

    return modules.filter((module) => {
      const searchableText = [module.title, module.description, ...module.keywords].join(' ')
      return normalizeSearchText(searchableText).includes(normalizedQuery)
    })
  }, [modules, query])

  return { query, setQuery, filteredModules }
}

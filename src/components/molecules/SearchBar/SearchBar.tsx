import { Search, X } from 'lucide-react'
import type { ChangeEvent } from 'react'
import { Button, Icon, VisuallyHidden } from '../../atoms'
import styles from './SearchBar.module.css'

export interface SearchBarProps {
  value: string
  onChange: (value: string) => void
  suggestions: readonly string[]
}

export function SearchBar({ value, onChange, suggestions }: SearchBarProps) {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => onChange(event.target.value)

  return (
    <div className={styles.wrapper} role="search">
      <div className={styles.field}>
        <Icon icon={Search} size="md" />
        <VisuallyHidden>
          <label htmlFor="repository-search">Pesquisar no Caderno Digital</label>
        </VisuallyHidden>
        <input
          autoComplete="off"
          className={styles.input}
          id="repository-search"
          onChange={handleChange}
          placeholder="Pesquisar..."
          type="search"
          value={value}
        />
        {value && (
          <Button
            aria-label="Limpar pesquisa"
            className={styles.clear}
            onClick={() => onChange('')}
            size="sm"
            variant="ghost"
          >
            <Icon icon={X} />
          </Button>
        )}
      </div>
      <div aria-label="Sugestões de pesquisa" className={styles.suggestions}>
        {suggestions.map((term) => (
          <button className={styles.suggestion} key={term} onClick={() => onChange(term)} type="button">
            {term}
          </button>
        ))}
      </div>
    </div>
  )
}

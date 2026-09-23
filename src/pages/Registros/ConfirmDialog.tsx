import { useEffect, useRef } from 'react'
import { Button } from '../../components/atoms'
import styles from './Registros.module.css'

interface Props {
  title: string
  description: string
  confirmLabel: string
  onConfirm: () => void
  onCancel: () => void
}

export function ConfirmDialog({ title, description, confirmLabel, onConfirm, onCancel }: Props) {
  const dialog = useRef<HTMLDialogElement>(null)
  const cancel = useRef<HTMLButtonElement>(null)
  useEffect(() => {
    const element = dialog.current!
    const previous = document.activeElement as HTMLElement | null
    element.showModal()
    cancel.current?.focus()
    return () => { element.close(); if (previous?.isConnected) previous.focus() }
  }, [])
  return (
    <dialog ref={dialog} className={styles.dialog} aria-labelledby="confirmation-title" aria-describedby="confirmation-description"
      onCancel={event => { event.preventDefault(); onCancel() }}
      onKeyDown={event => {
        if (event.key !== 'Tab') return
        const buttons = event.currentTarget.querySelectorAll<HTMLButtonElement>('button:not(:disabled)')
        const first = buttons[0]
        const last = buttons[buttons.length - 1]
        if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last?.focus() }
        else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first?.focus() }
      }}>
      <h2 id="confirmation-title">{title}</h2>
      <p id="confirmation-description">{description}</p>
      <div className={styles.actions}>
        <button ref={cancel} className={styles.cancelButton} type="button" onClick={onCancel}>Continuar aqui</button>
        <Button onClick={onConfirm} className={styles.danger}>{confirmLabel}</Button>
      </div>
    </dialog>
  )
}

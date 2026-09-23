export type RecordMode = 'free' | 'guided'

export interface PersonalRecord {
  id: string
  version: 1
  mode: RecordMode
  title: string
  text: string
  answers: Record<string, string>
  createdAt: string
  updatedAt: string
}

export type RecordDraft = Pick<PersonalRecord, 'mode' | 'title' | 'text' | 'answers'>

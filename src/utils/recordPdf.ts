import { jsPDF } from 'jspdf'
import { formatRecordDate, recordModeLabel, recordPrompts } from '../data/recordPrompts'
import type { PersonalRecord } from '../types/record'

/** Entirely local: writes text to a PDF, without HTML rendering, URLs or remote services. */
export function createRecordsPdf(records: PersonalRecord[]) {
  if (!records.length) throw new Error('Não há registros para exportar.')
  const pdf = new jsPDF({ unit: 'mm', format: 'a4', compress: true, putOnlyUsedFonts: true })
  const left = 20
  const right = 190
  const bottom = 273
  const width = right - left
  let y = 40
  pdf.setProperties({ title: 'Meu Espaço de Registros', author: '', subject: 'Escrita pessoal — Caderno Digital', creator: 'Caderno Digital' })

  function header() {
    pdf.setFillColor('#f5f8f6')
    pdf.rect(0, 0, 210, 29, 'F')
    pdf.setTextColor('#526d59')
    pdf.setFont('helvetica', 'bold'); pdf.setFontSize(9)
    pdf.text('CADERNO DIGITAL', left, 12)
    pdf.setFont('helvetica', 'normal'); pdf.setFontSize(8)
    pdf.text('Práticas Docentes na Educação Infantil em Contexto Hospitalar', left, 18)
    pdf.setDrawColor('#c8d9cc'); pdf.line(left, 25, right, 25)
    y = 39
  }
  function nextPage() { pdf.addPage(); header() }
  function space(height: number) { if (y + height > bottom) nextPage() }
  function text(value: string, size = 11, font = 'helvetica', style = 'normal', color = '#363c40', gap = 4) {
    pdf.setFont(font, style); pdf.setFontSize(size); pdf.setTextColor(color)
    const lineHeight = size * 0.3528 * 1.55
    // Preserve paragraph breaks and accents; splitTextToSize also wraps unbroken long words.
    const paragraphs = value.normalize('NFC').replace(/\r\n?/g, '\n').replace(/\t/g, '    ').split('\n')
    for (const paragraph of paragraphs) {
      const lines: string[] = paragraph ? pdf.splitTextToSize(paragraph, width) : ['']
      for (const line of lines) {
        space(lineHeight)
        // header() changes font state after a page break.
        pdf.setFont(font, style); pdf.setFontSize(size); pdf.setTextColor(color)
        pdf.text(line, left, y)
        y += lineHeight
      }
    }
    y += gap
  }

  records.forEach((record, index) => {
    if (index) nextPage(); else header()
    text('Meu Espaço de Registros', 23, 'times', 'normal', '#526d59', 5)
    text(recordModeLabel[record.mode], 9, 'helvetica', 'bold', '#526d59', 4)
    text(record.title, 20, 'times', 'normal', '#24292c', 4)
    text(`Criado em ${formatRecordDate(record.createdAt)}`, 9, 'helvetica', 'normal', '#626a70', 1)
    if (record.updatedAt !== record.createdAt) text(`Última edição em ${formatRecordDate(record.updatedAt)}`, 9, 'helvetica', 'normal', '#626a70', 1)
    y += 7
    if (record.mode === 'free') text(record.text || 'Este registro ainda não tem texto.')
    else recordPrompts.forEach(prompt => {
      space(34)
      text(prompt.title, 15, 'times', 'bold', '#526d59', 2)
      text(prompt.question, 10, 'helvetica', 'normal', '#626a70', 3)
      text(record.answers[prompt.id] || 'Sem resposta registrada.', 11, 'helvetica', 'normal', '#363c40', 8)
    })
  })
  const pages = pdf.getNumberOfPages()
  for (let page = 1; page <= pages; page++) {
    pdf.setPage(page); pdf.setDrawColor('#c8d9cc'); pdf.line(left, 282, right, 282)
    pdf.setFont('helvetica', 'normal'); pdf.setFontSize(8); pdf.setTextColor('#626a70')
    pdf.text('Meu Espaço de Registros · escrita pessoal', left, 288)
    pdf.text(`${page} / ${pages}`, right, 288, { align: 'right' })
  }
  return pdf
}

export async function downloadRecordsPdf(records: PersonalRecord[]) {
  const name = records.length === 1
    ? records[0].title.normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-zA-Z0-9]+/g, '-').replace(/^-|-$/g, '').slice(0, 70) || 'registro'
    : 'todos-os-registros'
  await createRecordsPdf(records).save(`caderno-${name}.pdf`, { returnPromise: true })
}

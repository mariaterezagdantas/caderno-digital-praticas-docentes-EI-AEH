import assert from 'node:assert/strict'
import { mkdir, writeFile } from 'node:fs/promises'
import { resolve } from 'node:path'

// Uses an isolated browser context: no personal browser profile or real records are opened.
const { chromium } = await import(process.env.PLAYWRIGHT_MODULE || 'playwright')
const base = process.env.REGISTROS_BASE_URL || 'http://127.0.0.1:5173'
const output = resolve('tmp/registros-qa')
await mkdir(output, { recursive: true })
const browser = await chromium.launch({ headless: true, ...(process.env.CHROME_PATH ? { executablePath: process.env.CHROME_PATH } : {}) })
const context = await browser.newContext({ viewport: { width: 1440, height: 1000 }, locale: 'pt-BR', timezoneId: 'America/Fortaleza', acceptDownloads: true })
const page = await context.newPage()
const errors = []
const checks = []
const requests = []
page.on('pageerror', error => errors.push(error.message))
page.on('request', request => requests.push({ url: request.url(), method: request.method(), body: request.postData() }))
page.setDefaultTimeout(12000)
const check = label => { checks.push(label); console.log(`PASS ${label}`) }
const visible = async locator => { await locator.waitFor({ state: 'visible' }); assert(await locator.isVisible()) }
const saved = async () => visible(page.getByRole('status').filter({ hasText: 'Registro salvo neste navegador' }))
const list = async () => { await page.getByRole('button', { name: 'Meus registros', exact: true }).click(); await visible(page.getByRole('button', { name: '+ Novo registro', exact: true })) }
const newRecord = async mode => {
  await page.getByRole('button', { name: '+ Novo registro', exact: true }).click()
  await page.getByRole('button', { name: mode === 'free' ? 'Começar escrita livre' : 'Começar reflexão orientada', exact: true }).click()
}
const save = async () => { await page.getByRole('button', { name: 'Salvar registro', exact: true }).click(); await saved() }
const download = async (button, file) => {
  const pending = page.waitForEvent('download')
  await button.click()
  const result = await pending
  assert.equal(await result.failure(), null)
  await result.saveAs(resolve(output, file))
}
const noOverflow = async () => assert(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth + 1))

try {
  await page.goto(`${base}/meus-registros`, { waitUntil: 'domcontentloaded' })
  await visible(page.getByRole('heading', { name: 'Uma página à sua espera' }))
  await visible(page.getByText('Seus registros são pessoais e não são enviados à pesquisadora.', { exact: true }))
  await noOverflow()
  await page.screenshot({ path: resolve(output, '01-empty-desktop.png'), fullPage: true })
  check('Estado vazio, avisos de privacidade e desktop sem rolagem horizontal')

  await newRecord('free')
  assert.equal(await page.locator(':focus').getAttribute('tabindex'), '-1')
  await page.getByLabel('Título do registro').fill('Escuta, vínculo e acolhimento — João')
  await page.getByLabel('Minha escrita').fill('A criança escolheu não continuar.\nRetomamos a brincadeira com imaginação, atenção e flexibilidade.\n<script>alert("não executar")</script>')
  await page.getByRole('button', { name: 'Cancelar edição' }).click()
  await visible(page.getByRole('dialog', { name: 'Sair sem salvar?' }))
  assert.equal(await page.locator(':focus').textContent(), 'Continuar aqui')
  await page.keyboard.press('Shift+Tab')
  assert.equal(await page.locator(':focus').textContent(), 'Sair sem salvar')
  await page.keyboard.press('Tab')
  assert.equal(await page.locator(':focus').textContent(), 'Continuar aqui')
  await page.keyboard.press('Escape')
  assert.match(await page.getByLabel('Minha escrita').inputValue(), /A criança escolheu/)
  check('Cancelamento com confirmação, Escape, foco e preservação do rascunho')
  await save()
  await visible(page.getByRole('heading', { name: 'Escuta, vínculo e acolhimento — João', exact: true }))
  assert.equal(await page.getByText(/Última edição em/).count(), 0)
  await page.reload({ waitUntil: 'domcontentloaded' })
  await page.getByRole('button', { name: 'Abrir registro: Escuta, vínculo e acolhimento — João', exact: true }).click()
  await visible(page.getByText('<script>alert("não executar")</script>', { exact: false }))
  check('Escrita livre, salvamento, persistência após recarga, acentos e HTML tratado como texto')

  await page.getByRole('button', { name: 'Editar registro', exact: true }).click()
  await page.getByLabel('Título do registro').fill('Escuta revisitada')
  await page.getByLabel('Minha escrita').fill('Uma aprendizagem: escutar também é uma ação pedagógica. A criança pôde escolher.\nNova reflexão sobre o vínculo e a participação.')
  await save()
  await visible(page.getByText(/Última edição em/))
  await download(page.getByRole('button', { name: 'Baixar em PDF', exact: true }), 'individual.pdf')
  check('Edição, data da última edição e download individual em PDF')

  // Trigger the actual print handler; emulate only the OS dialog which is unavailable headlessly.
  await page.evaluate(() => { window.__printCalls = 0; window.print = () => { window.__printCalls++ } })
  await page.getByRole('button', { name: 'Imprimir', exact: true }).click()
  assert.equal(await page.evaluate(() => window.__printCalls), 1)
  await page.emulateMedia({ media: 'print' })
  assert.equal(await page.getByRole('button', { name: 'Editar registro', exact: true }).isVisible(), false)
  assert.equal(await page.locator('#root > div > header').isVisible(), false)
  await page.pdf({ path: resolve(output, 'impressao.pdf'), preferCSSPageSize: true, printBackground: true })
  await page.screenshot({ path: resolve(output, '02-print.png'), fullPage: true })
  await page.emulateMedia({ media: 'screen' })
  await page.evaluate(() => window.dispatchEvent(new Event('afterprint')))
  check('Botão Imprimir aciona window.print; CSS de impressão contém só o registro e sua identidade')

  await list(); await newRecord('guided')
  assert.equal(await page.locator('textarea').count(), 7)
  assert.equal(await page.locator('[required]').count(), 0)
  await page.getByLabel('Título do registro').fill('Reflexão orientada — participação')
  await page.getByLabel('Que situação da sua prática você gostaria de registrar?').fill('Uma pausa se tornou parte do encontro.')
  await page.getByLabel('O que essa experiência fez você perceber ou repensar sobre sua prática docente?').fill('A escuta acolheu escolhas, silêncios e novas possibilidades.')
  await page.screenshot({ path: resolve(output, '03-guided-desktop.png'), fullPage: true })
  await save()
  await download(page.getByRole('button', { name: 'Baixar em PDF', exact: true }), 'orientada.pdf')
  await list()
  assert.equal(await page.getByRole('button', { name: /^Abrir registro:/ }).count(), 2)
  await download(page.getByRole('button', { name: 'Baixar todos os registros', exact: true }), 'todos.pdf')
  check('Reflexão orientada com respostas opcionais, múltiplos registros e PDF de todos')

  for (const width of [390, 768, 1152, 1440]) {
    await page.setViewportSize({ width, height: 950 })
    await noOverflow()
    await page.evaluate(() => { document.activeElement?.blur(); window.scrollTo({ top: 0, behavior: 'instant' }) })
    await page.screenshot({ path: resolve(output, `04-list-${width}.png`), fullPage: true })
  }
  await page.setViewportSize({ width: 390, height: 844 })
  await page.getByRole('button', { name: 'Abrir menu' }).click()
  await visible(page.getByRole('link', { name: 'Meu Espaço de Registros', exact: true }))
  await page.getByRole('button', { name: 'Fechar menu' }).click()
  await newRecord('free')
  await page.getByLabel('Título do registro').fill('Texto longo — ação, educação, infância')
  const paragraph = 'A criança escolheu: ação, atenção, educação, infância, vínculo, reflexão, João, São Luís, à disposição, órgão, avó, avô. Cada encontro tem sua própria história e a professora pode retomar suas aprendizagens. '
  const longText = Array.from({ length: 90 }, (_, i) => `${i + 1}. ${paragraph}`).join('\n\n') + '\n' + 'palavrasemespaco'.repeat(65) + '\nFIM DO TEXTO LONGO — coração e participação.'
  await page.getByLabel('Minha escrita').fill(longText)
  await noOverflow()
  await page.screenshot({ path: resolve(output, '05-editor-mobile.png'), fullPage: true })
  await page.getByLabel('Título do registro').focus()
  await page.keyboard.press('Tab')
  assert.equal(await page.locator(':focus').getAttribute('id'), 'record-text')
  const focus = await page.locator(':focus').evaluate(element => ({ style: getComputedStyle(element).outlineStyle, width: getComputedStyle(element).outlineWidth }))
  assert.notEqual(focus.style, 'none'); assert.notEqual(focus.width, '0px')
  await page.keyboard.press('Tab')
  assert.equal(await page.locator(':focus').textContent(), 'Salvar registro')
  await page.keyboard.press('Enter'); await saved()
  await download(page.getByRole('button', { name: 'Baixar em PDF', exact: true }), 'longo.pdf')
  await page.reload({ waitUntil: 'domcontentloaded' })
  await page.getByRole('button', { name: 'Abrir registro: Texto longo — ação, educação, infância', exact: true }).click()
  await visible(page.getByText('FIM DO TEXTO LONGO — coração e participação.', { exact: false }))
  check('390/768/1152/1440px, menu móvel, texto longo, palavra extensa, português e teclado com foco visível')

  await page.getByRole('button', { name: 'Excluir registro', exact: true }).click()
  await page.keyboard.press('Escape')
  await visible(page.getByRole('heading', { name: 'Texto longo — ação, educação, infância', exact: true }))
  await page.getByRole('button', { name: 'Excluir registro', exact: true }).click()
  await page.getByRole('button', { name: 'Excluir definitivamente' }).click()
  await visible(page.getByRole('status').filter({ hasText: 'Registro excluído' }))
  await page.reload({ waitUntil: 'domcontentloaded' })
  assert.equal(await page.getByRole('button', { name: 'Abrir registro: Texto longo — ação, educação, infância', exact: true }).count(), 0)
  await visible(page.getByRole('button', { name: 'Abrir registro: Escuta revisitada', exact: true }))
  check('Exclusão confirmada, cancelamento seguro, persistência da exclusão e preservação dos outros registros')

  await page.getByRole('button', { name: 'Abrir registro: Escuta revisitada', exact: true }).click()
  await page.getByRole('button', { name: 'Editar registro', exact: true }).click()
  await page.getByLabel('Minha escrita').fill('Alteração ainda não salva nesta aba.')
  await page.getByRole('link', { name: 'Consultar o módulo 9 — Experiências docentes', exact: true }).click()
  await visible(page.getByRole('dialog', { name: 'Sair sem salvar?' }))
  await page.getByRole('button', { name: 'Continuar aqui', exact: true }).click()
  assert.match(page.url(), /meus-registros/)
  const second = await context.newPage()
  await second.goto(`${base}/meus-registros`, { waitUntil: 'domcontentloaded' })
  await second.getByRole('button', { name: 'Abrir registro: Escuta revisitada', exact: true }).click()
  await second.getByRole('button', { name: 'Editar registro', exact: true }).click()
  await second.getByLabel('Minha escrita').fill('Versão salva pela segunda aba.')
  await second.getByRole('button', { name: 'Salvar registro', exact: true }).click()
  await visible(second.getByRole('status').filter({ hasText: 'Registro salvo' }))
  await page.getByRole('button', { name: 'Salvar registro', exact: true }).click()
  await visible(page.getByRole('alert').filter({ hasText: 'outra aba' }))
  assert.equal(await page.getByLabel('Minha escrita').inputValue(), 'Alteração ainda não salva nesta aba.')
  await download(page.getByRole('button', { name: 'Baixar texto atual em PDF', exact: true }), 'rascunho.pdf')
  await page.getByRole('button', { name: 'Meus registros', exact: true }).click()
  await page.getByRole('button', { name: 'Sair sem salvar', exact: true }).click()
  await page.getByRole('button', { name: 'Abrir registro: Escuta revisitada', exact: true }).click()
  await visible(page.getByText('Versão salva pela segunda aba.', { exact: true }))
  await second.close()
  check('Saída protegida, conflito entre abas sem sobrescrita e exportação de rascunho não salvo')

  await page.getByRole('link', { name: 'Consultar o módulo 9 — Experiências docentes', exact: true }).click()
  await visible(page.getByRole('heading', { level: 1, name: 'Experiências docentes: princípios para documentação e compartilhamento' }))
  await page.getByRole('link', { name: 'Abrir Meu Espaço de Registros', exact: true }).click()
  await visible(page.getByRole('heading', { name: 'Meu Espaço de Registros', level: 1 }))
  check('Conexão de ida e volta com o módulo 9')

  await newRecord('guided'); await save()
  await visible(page.getByRole('heading', { name: 'Registro sem título', exact: true }))
  check('Registro sem título e sem respostas permitido, sem validação prescritiva')

  await list(); await newRecord('free')
  await page.getByLabel('Minha escrita').fill('Texto preservado se o navegador estiver sem espaço.')
  await page.evaluate(() => {
    window.__originalPut = IDBObjectStore.prototype.put
    IDBObjectStore.prototype.put = function () { throw new DOMException('Quota excedida', 'QuotaExceededError') }
  })
  await page.getByRole('button', { name: 'Salvar registro', exact: true }).click()
  await visible(page.getByRole('alert').filter({ hasText: 'sem espaço' }))
  assert.equal(await page.getByLabel('Minha escrita').inputValue(), 'Texto preservado se o navegador estiver sem espaço.')
  await page.evaluate(() => { IDBObjectStore.prototype.put = window.__originalPut })
  await save()
  check('Falha por falta de espaço preserva a escrita e permite tentar salvar novamente')

  // Simulate closing and reopening the tab while keeping the same browser profile.
  const reopened = await context.newPage()
  await reopened.goto(`${base}/meus-registros`, { waitUntil: 'domcontentloaded' })
  await visible(reopened.getByRole('button', { name: 'Abrir registro: Escuta revisitada', exact: true }))
  await reopened.close()
  check('Registros disponíveis ao abrir uma nova aba do mesmo navegador')

  const unavailable = await browser.newContext()
  await unavailable.addInitScript(() => { Object.defineProperty(window, 'indexedDB', { value: undefined }) })
  const unavailablePage = await unavailable.newPage()
  await unavailablePage.goto(`${base}/meus-registros`, { waitUntil: 'domcontentloaded' })
  await visible(unavailablePage.getByRole('alert'))
  assert(await unavailablePage.getByRole('button', { name: '+ Novo registro', exact: true }).isDisabled())
  assert.equal(await unavailablePage.getByText('Uma página à sua espera', { exact: true }).count(), 0)
  await unavailable.close()
  check('Armazenamento indisponível mostra erro, sem falsa lista vazia ou falso salvamento')

  assert.deepEqual(errors, [])
  assert.equal(requests.filter(request => request.method !== 'GET').length, 0)
  assert.equal(requests.filter(request => /Escuta|Jo%C3%A3o|FIM.DO.TEXTO|pausa|segunda.aba/.test(request.url + (request.body || ''))).length, 0)
  check('Nenhum erro JavaScript, POST ou conteúdo de registro transmitido pela aplicação')
  await writeFile(resolve(output, 'results.json'), JSON.stringify({ checks, pageErrors: errors, requests, completedAt: new Date().toISOString() }, null, 2))
} catch (error) {
  await page.screenshot({ path: resolve(output, 'failure.png'), fullPage: true }).catch(() => {})
  await writeFile(resolve(output, 'failure.txt'), `${error.stack}\n\n${await page.locator('body').innerText().catch(() => '')}`)
  throw error
} finally { await context.close(); await browser.close() }

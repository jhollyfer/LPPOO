// Renumera os exemplos (A001, A002...) e exercícios (E001, E002...) do curso
// inteiro, na ordem das aulas e dos assuntos. Rode depois de criar, apagar ou
// mover um assunto:  node renumerar.mjs
import { readdirSync, readFileSync, writeFileSync, renameSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const RAIZ = join(dirname(fileURLToPath(import.meta.url)), '..')
const aulas = readdirSync(RAIZ).filter((n) => /^\d{8}$/.test(n)).sort((a, b) => {
  const data = (d) => d.slice(4) + d.slice(2, 4) + d.slice(0, 2) // ddmmaaaa -> aaaammdd
  return data(a).localeCompare(data(b))
})

const mapa = [] // [pasta, nomeVelho, nomeNovo]
const contador = { A: 0, E: 0 }
for (const aula of aulas) {
  for (const assunto of readdirSync(join(RAIZ, aula)).filter((n) => /^\d{4}-/.test(n)).sort()) {
    const pasta = join(RAIZ, aula, assunto)
    for (const letra of ['A', 'E']) {
      for (const arquivo of readdirSync(pasta).filter((a) => new RegExp(`^${letra}\\d{3}\\.ts$`).test(a)).sort()) {
        contador[letra]++
        mapa.push([pasta, arquivo, `${letra}${String(contador[letra]).padStart(3, '0')}.ts`])
      }
    }
  }
}

// dois passos (nome temporário), para um nome novo não pisar num velho
for (const [pasta, velho] of mapa) renameSync(join(pasta, velho), join(pasta, `_${velho}`))
for (const [pasta, velho, novo] of mapa) {
  const caminho = join(pasta, novo)
  renameSync(join(pasta, `_${velho}`), caminho)
  const nomeVelho = velho.replace('.ts', '')
  const nomeNovo = novo.replace('.ts', '')
  // atualiza o código no cabeçalho e as menções ao próprio arquivo
  const texto = readFileSync(caminho, 'utf8')
    .replace(new RegExp(`^// ${nomeVelho} · `, 'm'), `// ${nomeNovo} · `)
    .replace(new RegExp(`^// Exercício ${nomeVelho}$`, 'm'), `// Exercício ${nomeNovo}`)
    .replaceAll(`/${velho}`, `/${novo}`)
  writeFileSync(caminho, texto)
}

const mudou = mapa.filter(([, v, n]) => v !== n).length
console.log(`${contador.A} exemplos e ${contador.E} exercícios; ${mudou} arquivos mudaram de nome`)

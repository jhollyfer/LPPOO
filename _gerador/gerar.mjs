// Gera o README de cada aula e os desenhos de cada assunto, tudo a partir de
// aulas/<data>/:
//
//   aulas/15102026/aula.md                   começo e fim do README da aula
//   aulas/15102026/0015-.../texto.md         o texto do assunto
//   aulas/15102026/0015-.../desenhos.mjs     o diagrama da ideia e o fluxograma
//
// Saída: 15102026/README.md, 15102026/legenda.svg e, em cada pasta,
// ideia.svg e fluxograma.svg.
//
//   npm run gerar          tudo
//   npm run gerar -- 0016  só os desenhos das pastas com "0016" (o README sai inteiro)
//
// No texto.md, {{ideia}}, {{fluxograma}} e {{pratique}} viram a imagem ou o
// rodapé do assunto. No aula.md, {{indice}} e {{assuntos}} viram a lista e os
// assuntos.
import { readFileSync, writeFileSync, readdirSync, existsSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'
import { desenharIdeia } from './tipos/ideia.mjs'
import { desenharFluxograma } from './tipos/fluxograma.mjs'
import { desenharLegenda } from './tipos/legenda.mjs'

const AQUI = dirname(fileURLToPath(import.meta.url))
const RAIZ = join(AQUI, '..')
const filtro = process.argv[2] ?? ''

// mesma regra do GitHub para o link de um título
const ancora = (titulo) =>
  titulo
    .toLowerCase()
    .replace(/[^\p{L}\p{N}\- ]/gu, '')
    .replaceAll(' ', '-')

// todas as imagens na mesma escala, para a letra ter o mesmo tamanho em todas
const ESCALA = 0.58
const imagem = (src, alt, svg) => {
  const largura = Number(svg.match(/width="(\d+(?:\.\d+)?)"/)[1])
  return `<p align="center"><img src="${src}" alt="${alt}" width="${Math.round(largura * ESCALA)}"></p>`
}

// "Hora de praticar": cada exemplo (A) com enunciado, código e comando; cada
// exercício (E) com enunciado, dicas e comando
const comando = (caminho) => ['```bash', `tsx ~/LPPOO/${caminho}`, '```']

// exemplo: a 1ª linha "// A001 · título" é o enunciado, o resto é o código
const exemplo = (caminho, nome) => {
  const [cabeca, ...resto] = readFileSync(join(RAIZ, caminho), 'utf8').trimEnd().split('\n')
  while (resto[0]?.trim() === '') resto.shift()
  const titulo = cabeca.replace(/^\/\/\s*/, '').replace(/^A\d{3}\s*·\s*/, '')
  return [`**Exemplo ${nome.slice(0, 4)} · ${titulo}**`, '', '```ts', ...resto, '```', '', ...comando(caminho)]
}

// exercício: o comentário do arquivo traz o enunciado e as dicas
const exercicio = (caminho, nome) => {
  const linhas = readFileSync(join(RAIZ, caminho), 'utf8')
    .split('\n')
    .filter((l) => l.startsWith('//'))
    .map((l) => l.replace(/^\/\/ ?/, ''))
  const fim = (rotulo) => {
    const i = linhas.findIndex((l) => l.startsWith(rotulo))
    return i < 0 ? linhas.length : i
  }
  const inicio = linhas.findIndex((l) => /^Exercício E\d{3}/.test(l)) + 1
  const fimEnunciado = Math.min(fim('Dicas:'), fim('Para ler dados'), fim('Escreva sua resposta'))
  const enunciado = linhas.slice(inicio, fimEnunciado)
  const dicas = linhas.slice(fim('Dicas:') + 1, Math.min(fim('Para ler dados'), fim('Escreva sua resposta')))
  // linhas com recuo no enunciado são código: viram um bloco ts
  const corpo = []
  for (const l of enunciado) {
    const codigo = l.startsWith('  ')
    if (codigo && corpo.at(-1) !== 'CODIGO') corpo.push('', '```ts', 'CODIGO')
    if (!codigo && corpo.at(-1) === 'CODIGO') corpo.splice(-1, 1, '```', '')
    if (codigo) corpo.splice(-1, 0, l.slice(2))
    else corpo.push(l)
  }
  if (corpo.at(-1) === 'CODIGO') corpo.splice(-1, 1, '```')
  const listaDicas = dicas.filter((l) => l.trim())
  return [
    `**Exercício ${nome.slice(0, 4)}**`,
    '',
    ...corpo.join('\n').trim().split('\n'),
    '',
    ...(listaDicas.length
      ? ['<details><summary>Dicas</summary>', '', ...listaDicas, '', '</details>', '']
      : []),
    ...comando(caminho),
  ]
}

const pratique = (data, pasta) => {
  const arquivos = readdirSync(join(RAIZ, data, pasta)).sort()
  const blocos = [
    ...arquivos.filter((a) => /^A\d{3}\.ts$/.test(a)).map((a) => exemplo(`${data}/${pasta}/${a}`, a)),
    ...arquivos.filter((a) => /^E\d{3}\.ts$/.test(a)).map((a) => exercicio(`${data}/${pasta}/${a}`, a)),
  ]
  return [
    '### Hora de praticar',
    '',
    `Os arquivos ficam em [\`${pasta}/\`](${pasta}/). Os comandos funcionam de qualquer pasta do terminal. Nos exemplos, rode, mude, quebre e rode de novo. Nos exercícios, a resposta vai dentro do próprio arquivo.`,
    '',
    blocos.map((b) => b.join('\n')).join('\n\n'),
  ].join('\n')
}

for (const data of readdirSync(join(AQUI, 'aulas'))) {
  const origem = join(AQUI, 'aulas', data)
  const destino = join(RAIZ, data)
  const assuntos = readdirSync(origem).filter((n) => /^\d{4}-/.test(n))
  const indice = []
  const partes = []

  for (const pasta of assuntos) {
    if (!existsSync(join(destino, pasta))) throw new Error(`pasta ${data}/${pasta} não encontrada`)
    const texto = readFileSync(join(origem, pasta, 'texto.md'), 'utf8').trim()
    const titulo = texto.match(/^## (.+)$/m)?.[1]
    if (!titulo) throw new Error(`${pasta}/texto.md precisa começar com "## título"`)
    const [numero, assunto] = titulo.split(' · ')
    const { ideia, fluxograma } = await import(pathToFileURL(join(origem, pasta, 'desenhos.mjs')))

    const svgIdeia = desenharIdeia(`Ideia: ${assunto}`, ideia)
    const svgFluxo = desenharFluxograma(`Fluxograma: ${assunto}`, fluxograma)
    if (pasta.includes(filtro)) {
      writeFileSync(join(destino, pasta, 'ideia.svg'), svgIdeia)
      writeFileSync(join(destino, pasta, 'fluxograma.svg'), svgFluxo)
      console.log(`ok  ${data}/${pasta}/ideia.svg e fluxograma.svg`)
    }

    indice.push(`| [${numero}](#${ancora(titulo)}) | ${assunto} | [\`${pasta}/\`](${pasta}/) |`)
    partes.push(
      texto
        .replace('{{ideia}}', () => imagem(`${pasta}/ideia.svg`, `Diagrama da ideia: ${assunto}`, svgIdeia))
        .replace('{{fluxograma}}', () => imagem(`${pasta}/fluxograma.svg`, `Fluxograma: ${assunto}`, svgFluxo))
        .replace('{{pratique}}', () => pratique(data, pasta)),
    )
  }

  const aula = readFileSync(join(origem, 'aula.md'), 'utf8')
    .replace('{{indice}}', () => ['| # | Assunto | Pasta |', '| --- | --- | --- |', ...indice].join('\n'))
    .replace('{{assuntos}}', () => partes.join('\n\n---\n\n'))
  const aviso = `<!-- Gerado por _gerador. Para mudar este arquivo, edite _gerador/aulas/${data}/ e rode: cd _gerador && npm run gerar -->\n\n`
  writeFileSync(join(destino, 'README.md'), aviso + aula)
  writeFileSync(join(destino, 'legenda.svg'), desenharLegenda())
  console.log(`ok  ${data}/README.md`)
}

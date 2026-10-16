// Gera o README de cada aula e os desenhos de cada assunto, tudo a partir de
// aulas/<data>/:
//
//   aulas/15102026/aula.md                   começo e fim do README da aula
//   aulas/15102026/0016-.../texto.md         o texto do assunto
//   aulas/15102026/0016-.../desenhos.mjs     a ideia, o fluxograma e a memória
//
// Saída: 15102026/README.md, 15102026/legenda.svg e, em cada pasta,
// ideia.svg, fluxograma.svg e memoria.svg.
//
//   npm run gerar          tudo
//   npm run gerar -- 0017  só os desenhos das pastas com "0017" (o README sai inteiro)
//
// No texto.md, {{ideia}}, {{fluxograma}}, {{memoria}} e {{pratique}} viram a imagem ou o
// rodapé do assunto. No aula.md, {{indice}} e {{assuntos}} viram a lista e os
// assuntos.
import { readFileSync, writeFileSync, readdirSync, existsSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'
import { desenharIdeia } from './tipos/ideia.mjs'
import { desenharFluxograma } from './tipos/fluxograma.mjs'
import { desenharLegenda } from './tipos/legenda.mjs'
import { desenharMemoria } from './tipos/memoria.mjs'

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
    const { ideia, fluxograma, memoria } = await import(pathToFileURL(join(origem, pasta, 'desenhos.mjs')))

    const svgIdeia = desenharIdeia(`Ideia: ${assunto}`, ideia)
    const svgFluxo = desenharFluxograma(`Fluxograma: ${assunto}`, fluxograma)
    const svgMemoria = desenharMemoria(`Memória: ${assunto}`, memoria)
    if (pasta.includes(filtro)) {
      writeFileSync(join(destino, pasta, 'ideia.svg'), svgIdeia)
      writeFileSync(join(destino, pasta, 'fluxograma.svg'), svgFluxo)
      writeFileSync(join(destino, pasta, 'memoria.svg'), svgMemoria)
      console.log(`ok  ${data}/${pasta}/ideia.svg, fluxograma.svg e memoria.svg`)
    }

    indice.push(`| [${numero}](#${ancora(titulo)}) | ${assunto} | [\`${pasta}/\`](${pasta}/) |`)
    partes.push(
      texto
        .replace('{{ideia}}', imagem(`${pasta}/ideia.svg`, `Diagrama da ideia: ${assunto}`, svgIdeia))
        .replace('{{fluxograma}}', imagem(`${pasta}/fluxograma.svg`, `Fluxograma: ${assunto}`, svgFluxo))
        .replace('{{memoria}}', imagem(`${pasta}/memoria.svg`, `Memória: ${assunto}`, svgMemoria))
        .replace(
          '{{pratique}}',
          `> [!NOTE]\n> **Hora de praticar:** os exemplos e os exercícios deste assunto estão em [\`${pasta}/\`](${pasta}/).\n>\n> \`\`\`bash\n> pnpm tsx ${data}/${pasta}/exemplo-1.ts\n> \`\`\``,
        ),
    )
  }

  const aula = readFileSync(join(origem, 'aula.md'), 'utf8')
    .replace('{{indice}}', ['| # | Assunto | Pasta |', '| --- | --- | --- |', ...indice].join('\n'))
    .replace('{{assuntos}}', partes.join('\n\n---\n\n'))
  const aviso = `<!-- Gerado por _gerador. Para mudar este arquivo, edite _gerador/aulas/${data}/ e rode: cd _gerador && npm run gerar -->\n\n`
  writeFileSync(join(destino, 'README.md'), aviso + aula)
  writeFileSync(join(destino, 'legenda.svg'), desenharLegenda())
  console.log(`ok  ${data}/README.md`)
}

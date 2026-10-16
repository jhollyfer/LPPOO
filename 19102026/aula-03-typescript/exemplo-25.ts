// Aula 03 · Exemplo 25 · Type guards e satisfies
// Confere uma lista de notas que veio de qualquer lugar (unknown).

function ehNota(x: unknown): x is number {
  return typeof x === 'number' && x >= 0 && x <= 10
}

const MENSAGENS = {
  invalida: 'nota fora de 0 a 10',
  vazia: 'nenhuma nota válida',
} satisfies Record<string, string>

const recebidas: unknown[] = [8, 11, 'nove', 7, -1]
const validas = recebidas.filter(ehNota) // number[]

for (const x of recebidas) {
  if (!ehNota(x)) console.log(`${String(x)}: ${MENSAGENS.invalida}`)
}

if (validas.length === 0) console.log(MENSAGENS.vazia)
else console.log(`Média: ${validas.reduce((s, n) => s + n, 0) / validas.length}`)

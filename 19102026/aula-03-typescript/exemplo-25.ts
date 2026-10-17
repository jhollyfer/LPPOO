// Aula 03 · Exemplo 25 · Type guards e satisfies
// Confere notas que vieram de qualquer lugar (unknown).

function ehNota(x: unknown): x is number {
  return typeof x === 'number' && x >= 0 && x <= 10
}

const MENSAGENS = { invalida: 'nota fora de 0 a 10' } satisfies Record<string, string>

const recebidas: unknown[] = [8, 11, 'nove']
for (const x of recebidas) {
  if (ehNota(x)) console.log(`${x}: ok`) // aqui x é number
  else console.log(`${String(x)}: ${MENSAGENS.invalida}`)
}

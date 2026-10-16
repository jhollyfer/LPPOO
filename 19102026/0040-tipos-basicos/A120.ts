// A120 · unknown na prática: o erro do catch

function dividir(a: number, b: number): number {
  if (b === 0) throw new Error('Não dá para dividir por zero')
  return a / b
}

try {
  console.log(dividir(10, 0))
} catch (erro) {
  // o erro do catch é unknown: confira antes de usar
  if (erro instanceof Error) {
    console.log(`Deu erro: ${erro.message}`)
  }
}

// A076 · O perigo do any

// eslint-disable-next-line @typescript-eslint/no-explicit-any -- só para mostrar o perigo
const qualquer: any = 'um texto'

try {
  console.log(qualquer.toFixed(2)) // o TypeScript deixou passar...
} catch (erro) {
  // ...e quebrou com o programa rodando
  console.log(`Quebrou: ${erro instanceof Error ? erro.message : erro}`)
}

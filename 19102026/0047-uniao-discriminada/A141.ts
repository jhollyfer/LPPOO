// A141 · Deu certo ou deu erro

type Resultado = { ok: true; valor: number } | { ok: false; erro: string }

function dividir(a: number, b: number): Resultado {
  if (b === 0) return { ok: false, erro: 'divisão por zero' }
  return { ok: true, valor: a / b }
}

const r = dividir(10, 0)
if (r.ok) {
  console.log(`Resultado: ${r.valor}`)
} else {
  console.log(`Erro: ${r.erro}`) // Erro: divisão por zero
}

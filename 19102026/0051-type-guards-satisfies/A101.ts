// A101 · Lanche ou bebida?

type Lanche = { nome: string; recheio: string }
type Bebida = { nome: string; ml: number }

function ehBebida(item: Lanche | Bebida): item is Bebida {
  return 'ml' in item
}

function descrever(item: Lanche | Bebida): string {
  if (ehBebida(item)) return `${item.nome} de ${item.ml} ml` // aqui item é Bebida
  return `${item.nome} de ${item.recheio}` // aqui item é Lanche
}

console.log(descrever({ nome: 'Suco de taperebá', ml: 300 })) // Suco de taperebá de 300 ml
console.log(descrever({ nome: 'Pastel', recheio: 'queijo' })) // Pastel de queijo

const precos = { suco: 5, pastel: 7 } satisfies Record<string, number>
console.log(precos.suco + precos.pastel) // 12: o satisfies conferiu e lembrou das chaves

// Com a anotação no lugar do satisfies, as chaves são esquecidas:
// const precos2: Record<string, number> = { suco: 5, pastel: 7 }
// console.log(precos2.suco + precos2.pastel)
// erro: 'precos2.suco' is possibly 'undefined'.

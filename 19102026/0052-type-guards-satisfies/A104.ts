// A104 · satisfies: confere o valor e lembra das chaves

const precos = { suco: 5, pastel: 7 } satisfies Record<string, number>
console.log(precos.suco + precos.pastel) // 12

// Com a anotação no lugar do satisfies, as chaves são esquecidas:
// const precos2: Record<string, number> = { suco: 5, pastel: 7 }
// console.log(precos2.suco + precos2.pastel)
// erro: 'precos2.suco' is possibly 'undefined'.

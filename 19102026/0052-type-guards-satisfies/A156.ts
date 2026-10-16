// A156 · satisfies confere e não esquece

const precos = { acai: 15, tapioca: 8, suco: 6 } satisfies Record<string, number>

// o TypeScript sabe que acai existe e é number (sem o | undefined)
console.log(`Açaí: R$ ${precos.acai.toFixed(2)}`)

type Configuracao = { escola: string; vagas: number }
const config = { escola: 'CETAM', vagas: 30 } satisfies Configuracao

console.log(`${config.escola}: ${config.vagas} vagas`)

// A084 · find com textos

const cidades: string[] = ['Manaus', 'Tabatinga', 'Benjamin Constant']

const comecaComB = cidades.find((c) => c.startsWith('B'))
console.log(comecaComB ?? 'nenhuma') // Benjamin Constant

const comecaComZ = cidades.find((c) => c.startsWith('Z'))
console.log(comecaComZ ?? 'nenhuma') // nenhuma

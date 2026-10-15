// Exemplo 3 - Inferência de tipo

let cidade = 'Benjamin Constant' // o TS entende que é string
console.log(cidade)

cidade = 'Tabatinga' // pode: continua sendo texto
console.log(cidade)

// cidade = 10 // erro: Type 'number' is not assignable to type 'string'

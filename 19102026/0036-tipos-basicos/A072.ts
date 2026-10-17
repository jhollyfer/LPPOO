// A072 · O perigo do any

// eslint-disable-next-line @typescript-eslint/no-explicit-any -- só para mostrar o perigo
const qualquer: any = 'dez'
console.log(qualquer * 2) // NaN: o TypeScript deixou passar a conta com texto

const texto: string = 'dez'
console.log(texto.length) // 3

// Com o tipo certo, ele barra a mesma conta. Tire o // e veja:
// console.log(texto * 2)
// erro: The left-hand side of an arithmetic operation must be of type 'any',
//       'number', 'bigint' or an enum type.

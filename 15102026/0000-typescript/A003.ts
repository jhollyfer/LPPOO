// A003 · Erro de digitação que o TypeScript pega

const cidade = 'Benjamin Constant'
console.log(cidade.toUpperCase()) // BENJAMIN CONSTANT

// Tire o // da linha abaixo. Repare que nem precisou escrever ": string":
// o TypeScript descobriu sozinho que cidade é texto.
// console.log(cidade.toUppercase())
// erro: Property 'toUppercase' does not exist on type 'string'.
//       Did you mean 'toUpperCase'?

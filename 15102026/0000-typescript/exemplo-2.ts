// Exemplo 2 - Os tipos somem na hora de rodar

const nome: string = 'Ana'
const idade: number = 17

console.log(nome, idade) // Ana 17
console.log(typeof nome, typeof idade) // string number

// O Node não entende ": string" nem ": number". Antes de rodar, o TypeScript
// apaga os tipos, e o que o Node recebe é isto:
//
// const nome = 'Ana'
// const idade = 17

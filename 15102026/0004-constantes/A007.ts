// A007 · let muda, const não

const ANO_FORMATURA = 2027
let turma = 'Turma A'
console.log(`A ${turma} se forma em ${ANO_FORMATURA}`) // A Turma A se forma em 2027

turma = 'Turma B' // com let, pode trocar
console.log(`A ${turma} se forma em ${ANO_FORMATURA}`) // A Turma B se forma em 2027

// ANO_FORMATURA = 2028
// erro: Cannot assign to 'ANO_FORMATURA' because it is a constant.

// Execute com:
// tsx ~/LPPOO/15102026/0004-constantes/A007.ts

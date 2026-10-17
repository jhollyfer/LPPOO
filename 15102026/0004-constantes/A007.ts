// A007 · let muda, const não

const ANO_FORMATURA = 2027
let turma = 'Turma A'

turma = 'Turma B' // trocou de turma: com let, pode
console.log(`A ${turma} se forma em ${ANO_FORMATURA}`) // A Turma B se forma em 2027

// ANO_FORMATURA = 2028
// erro: Cannot assign to 'ANO_FORMATURA' because it is a constant.

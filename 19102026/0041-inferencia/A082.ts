// A082 · const e let inferem coisas diferentes

const turnoFixo = 'noite' // tipo: 'noite'
let turnoQueMuda = 'noite' // tipo: string

console.log(turnoFixo, turnoQueMuda)
turnoQueMuda = 'manhã' // pode: é string
console.log(turnoQueMuda)
// Passe o mouse em cima das duas variáveis no editor e compare os tipos.

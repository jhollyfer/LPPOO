// A080 · O time do interclasse: um objeto com uma lista dentro

const time = { nome: 'Tubarões', gols: 0, jogadores: ['Ana', 'Caio'] }

time.gols += 2 // dois gols no primeiro tempo
time.jogadores.push('Davi') // entrou mais um

console.log(`${time.nome}: ${time.gols} gols`) // Tubarões: 2 gols
console.log(time.jogadores.length) // 3

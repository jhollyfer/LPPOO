// A101 · O bloco do if também tem escopo

const nota = 8

if (nota >= 6) {
  const recado = 'Parabéns!'
  console.log(recado)
}

// console.log(recado) // erro: Cannot find name 'recado'.

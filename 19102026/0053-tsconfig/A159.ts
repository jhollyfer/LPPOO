// A159 · strict: null precisa ser tratado

function buscar(nomes: string[], alvo: string): string | null {
  for (const nome of nomes) {
    if (nome.toLowerCase() === alvo.toLowerCase()) return nome
  }
  return null
}

const achado = buscar(['Ana', 'Bia', 'Caio'], 'bia')

// achado.toUpperCase() direto daria erro: achado pode ser null
if (achado !== null) {
  console.log(achado.toUpperCase()) // BIA
}

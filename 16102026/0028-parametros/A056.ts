// A056 · O crachá do evento (opcional e void)

function imprimirCracha(nome: string, apelido?: string): void {
  const chamada = apelido === undefined ? nome : apelido // não veio? usa o nome
  console.log(`Olá, meu nome é ${chamada}`)
}

imprimirCracha('Ana Beatriz') // Olá, meu nome é Ana Beatriz
imprimirCracha('Francisco', 'Chico') // Olá, meu nome é Chico

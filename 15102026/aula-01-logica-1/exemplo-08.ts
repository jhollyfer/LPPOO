// Aula 01 · Exemplo 08 · Condicionais if / else / else if
// Temperatura em Manaus: o programa diz como está o dia.

const temperatura = 36

if (temperatura < 25) {
  console.log('Dia fresco')
} else if (temperatura <= 32) {
  console.log('Dia quente')
} else {
  console.log('Calor de Manaus!') // 36 cai aqui
}

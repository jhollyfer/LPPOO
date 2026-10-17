// A033 · Bateria do celular

const bateria = 15

if (bateria >= 50) {
  console.log('Tranquilo, dá para o dia todo')
} else if (bateria >= 20) {
  console.log('Bom carregar no intervalo')
} else {
  console.log('Bateria fraca! Procure uma tomada') // 15 cai aqui
}

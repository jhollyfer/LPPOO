// A045 · O ônibus até a escola

for (let parada = 1; parada <= 10; parada++) {
  if (parada === 3) continue // parada em obra: o ônibus passa direto
  console.log(`Parada ${parada}`) // 1, 2, 4, 5, 6
  if (parada === 6) {
    console.log('Desci na escola!')
    break // não precisa ir até a 10
  }
}

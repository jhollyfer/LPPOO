// A071 · O primeiro múltiplo de 7 depois de 50

for (let i = 51; i <= 100; i++) {
  if (i % 7 === 0) {
    console.log(`Achei: ${i}`) // 56
    break
  }
}

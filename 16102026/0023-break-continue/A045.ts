// A045 · Pula os pares, para depois do 7

for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) continue
  if (i > 7) break
  console.log(i)
}

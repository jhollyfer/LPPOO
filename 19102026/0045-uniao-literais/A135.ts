// A135 · Literais de número também valem

type Dado = 1 | 2 | 3 | 4 | 5 | 6

function rolar(): Dado {
  return (Math.floor(Math.random() * 6) + 1) as Dado
}

const resultado: Dado = rolar()
console.log(`Saiu ${resultado}`)

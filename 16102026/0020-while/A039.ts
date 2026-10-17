// A039 · A notícia que se espalha no grupo

let pessoas = 1 // só quem postou sabe
let horas = 0

while (pessoas < 500) {
  pessoas *= 2 // a cada hora, quem sabe conta para mais um
  horas++
}

console.log(`Em ${horas} horas, ${pessoas} pessoas já sabiam`) // Em 9 horas, 512 pessoas já sabiam

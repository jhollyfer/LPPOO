// A140 · O default com never vigia os casos esquecidos

type Forma = { tipo: 'quadrado'; lado: number } | { tipo: 'circulo'; raio: number }

function area(f: Forma): number {
  switch (f.tipo) {
    case 'quadrado':
      return f.lado ** 2
    case 'circulo':
      return Math.PI * f.raio ** 2
    default: {
      const esquecido: never = f // se surgir um tipo novo, o erro aparece aqui
      return esquecido
    }
  }
}

console.log(area({ tipo: 'quadrado', lado: 3 })) // 9
console.log(area({ tipo: 'circulo', raio: 1 }).toFixed(2)) // 3.14

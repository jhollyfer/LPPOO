// A094 · O never vigia os casos esquecidos

type Forma = { tipo: 'quadrado'; lado: number } | { tipo: 'circulo'; raio: number }

function area(f: Forma): number {
  if (f.tipo === 'quadrado') return f.lado ** 2
  if (f.tipo === 'circulo') return 3.14 * f.raio ** 2
  const esquecido: never = f // se surgir um tipo novo, o erro aparece aqui
  return esquecido
}

console.log(area({ tipo: 'quadrado', lado: 3 })) // 9
console.log(area({ tipo: 'circulo', raio: 1 })) // 3.14

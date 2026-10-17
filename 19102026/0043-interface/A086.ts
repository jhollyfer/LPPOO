// A086 · Interface com uma função dentro

interface Botao {
  texto: string
  aoClicar: () => string // o tipo de função da 0039
}

const enviar: Botao = {
  texto: 'Enviar',
  aoClicar: () => 'Mensagem enviada!',
}

console.log(`[ ${enviar.texto} ]`) // [ Enviar ]
console.log(enviar.aoClicar()) // Mensagem enviada!

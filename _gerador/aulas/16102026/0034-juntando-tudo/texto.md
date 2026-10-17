## 0034 · Juntando tudo: as notas da turma

Hora de juntar tudo num programa só. Esse é o fechamento da aula.

O programa pede notas até você responder `n` e guarda tudo num array. Depois
ele mostra a média, as notas de 6 para cima, as notas dobradas e a lista
numerada.

Cada parte usa uma seção desta aula. Olha só:

| Parte do programa                    | Seção                                  |
| ------------------------------------ | -------------------------------------- |
| `do...while` pedindo as notas        | [0021](#0021--laço-dowhile)            |
| `notas: number[]` e `push`           | [0024](#0024--arrays-vetores) e [0026](#0026--inserir-e-remover-push-pop-unshift-shift-splice) |
| `calcularMedia` com `reduce`         | [0027](#0027--funções) e [0032](#0032--transformar-map-filter-reduce-foreach) |
| `filter`, `map` e `join`             | [0032](#0032--transformar-map-filter-reduce-foreach) e [0033](#0033--organizar-sort-reverse-slice-join-concat) |
| `for` com índice                     | [0022](#0022--laço-for)                |

Vamos ver na prática. Você digita 8, 5 e 9, e depois `n`:

{{ideia}}

```ts
import { input } from '#core/input.ts'

const notas: number[] = []
let resposta: string

do {
  const nota = Number(input('Digite uma nota: '))
  notas.push(nota)
  resposta = input('Outra nota? (s/n) ')
} while (resposta === 's')

function calcularMedia(valores: number[]): number {
  const soma = valores.reduce((acc, v) => acc + v, 0)
  return soma / valores.length
}

const aprovadas = notas.filter((n) => n >= 6)
const dobradas = notas.map((n) => n * 2)

console.log(`Média: ${calcularMedia(notas).toFixed(2)}`)
console.log(`Notas de 6 para cima: ${aprovadas.join(', ')}`)
console.log(`Dobradas: ${dobradas.join(', ')}`)

for (let i = 0; i < notas.length; i++) {
  console.log(`Nota ${i + 1}: ${notas[i]}`)
}
```

No fluxograma, repara nas três voltas do `do...while`. Depois delas vem o
relatório:

{{fluxograma}}

> [!NOTE]
> **Pergunta para a turma:** se você digitar só uma nota, `4`, e responder `n`,
> o que aparece na linha "Notas de 6 para cima"? Rode e confira. (Dica: o
> `filter` pode devolver um array vazio.)

{{pratique}}

## 0036 · Juntando tudo: as notas da turma

> Tudo da aula num programa só: pedir as notas, guardar num array e usar
> funções e métodos para tirar as respostas.

O programa abaixo é o fechamento da aula. Ele pede notas até você responder
`n`, guarda tudo num array e depois mostra a média, as notas de 6 para cima, as
notas dobradas e a lista numerada. Cada linha usa uma seção desta aula:

| Parte do programa                    | Seção                                  |
| ------------------------------------ | -------------------------------------- |
| `do...while` pedindo as notas        | [0022](#0022--laço-dowhile)            |
| `notas: number[]` e `push`           | [0025](#0025--arrays-vetores) e [0027](#0027--inserir-e-remover-push-pop-unshift-shift-splice) |
| `calcularMedia` com `reduce`         | [0031](#0031--funções) e [0029](#0029--transformar-map-filter-reduce-foreach) |
| `filter`, `map` e `join`             | [0029](#0029--transformar-map-filter-reduce-foreach) e [0030](#0030--organizar-sort-reverse-slice-join-concat) |
| `for` com índice                     | [0023](#0023--laço-for)                |

Você digita 8, 5 e 9, e depois `n`:

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

O fluxograma mostra as três voltas do `do...while` e depois o relatório:

{{fluxograma}}

> [!TIP]
> **Poder do TypeScript:** no programa inteiro, você escreveu só dois tipos:
> `number[]` e `string`. Passe o mouse em `aprovadas`, `dobradas`, `nota` e
> `calcularMedia`: o TypeScript descobriu o tipo de todo o resto sozinho, e
> confere cada um deles enquanto você digita.

{{pratique}}

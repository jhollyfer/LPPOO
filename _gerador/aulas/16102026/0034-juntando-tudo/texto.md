## 0034 · Juntando tudo: as notas da turma

Hora de juntar tudo num programa só. Esse é o fechamento da aula.

O professor digita as notas da turma, uma por uma, até responder `n`. No fim,
o programa mostra a média e as notas de 6 para cima.

Cada parte usa um assunto desta aula. Olha só:

| Parte do programa                    | Assunto                                |
| ------------------------------------ | -------------------------------------- |
| `do...while` pedindo as notas        | [0021](#0021--laço-dowhile)            |
| `notas: number[]` e `push`           | [0024](#0024--arrays-vetores) e [0026](#0026--inserir-e-remover-push-pop-unshift-shift-splice) |
| a função `calcularMedia`             | [0027](#0027--funções)                 |
| as regras `(acc, v) => acc + v` e `(n) => n >= 6` | [0030](#0030--arrow-functions-e-callbacks) |
| `reduce` e `filter`                  | [0032](#0032--transformar-map-filter-reduce-foreach) |
| `join`                               | [0033](#0033--organizar-sort-reverse-slice-join-concat) |

Vamos ver na prática. O professor digita 8, 5 e 9, e depois `n`:

{{ideia}}

```ts
import { input } from '#core/input.ts'

function calcularMedia(valores: number[]): number {
  const soma = valores.reduce((acc, v) => acc + v, 0)
  return soma / valores.length
}

const notas: number[] = []
let resposta // a caixa nasce vazia: o do pergunta antes de conferir

do {
  notas.push(Number(input('Digite uma nota: '))) // 8, depois 5, depois 9
  resposta = input('Outra nota? (s/n) ') // s, s, n
} while (resposta === 's')

const aprovadas = notas.filter((n) => n >= 6)
console.log(`Média: ${calcularMedia(notas).toFixed(2)}`) // Média: 7.33
console.log(`Notas de 6 para cima: ${aprovadas.join(', ')}`) // 8, 9
```

No fluxograma, repara nas três voltas do `do...while`. Depois delas vem o
relatório:

{{fluxograma}}

> [!NOTE]
> **Pergunta para a turma:** se o professor digitar só uma nota, `4`, e
> responder `n`, o que aparece na linha "Notas de 6 para cima"? Rode e confira.
> (Dica: o `filter` pode devolver um array vazio.)

{{pratique}}

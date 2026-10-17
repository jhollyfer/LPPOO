## 0010 · Operadores aritméticos

Você tirou 8 na primeira prova e 6 na segunda. A média é 7... ou 11? Depende de
onde você coloca os parênteses.

As contas são as mesmas da escola, com dois símbolos novos: multiplicar é `*` e
dividir é `/`.

E a ordem também é a da escola: primeiro `*` e `/`, depois `+` e `-`.

Olha só: por isso `8 + 6 / 2` dá 11. O programa divide `6 / 2` primeiro e só
depois soma o 8.

Para somar as notas antes de dividir, coloque parênteses:

{{ideia}}

```ts
const nota1 = 8
const nota2 = 6
const media = (nota1 + nota2) / 2 // 7
console.log(media) // 7
```

{{fluxograma}}

<details>
<summary>Todos os operadores</summary>

| Operador | Conta         | Exemplo  | Resultado |
| -------- | ------------- | -------- | --------- |
| `+`      | soma          | `7 + 2`  | `9`       |
| `-`      | subtração     | `7 - 2`  | `5`       |
| `*`      | multiplicação | `7 * 2`  | `14`      |
| `/`      | divisão       | `7 / 2`  | `3.5`     |
| `%`      | resto         | `7 % 2`  | `1`       |
| `**`     | potência      | `7 ** 2` | `49`      |

</details>

Os atalhos da [0009](#0009--operadores-de-atribuição) também valem aqui:
`x *= 2` é o mesmo que `x = x * 2`, e `x /= 2` é o mesmo que `x = x / 2`.

> [!TIP]
> O `%` não tem nada a ver com porcentagem. Ele dá o resto da divisão: 7
> alunos em duplas formam 3 duplas e sobra 1. Então `7 % 2` é `1`.

> [!NOTE]
> **Pergunta para a turma:** mude a `nota2` para `7`. Quanto dá a média? E se
> você tirar os parênteses? Rode as duas versões e compare.

{{pratique}}

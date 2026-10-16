## 0010 · Operadores aritméticos

> Tirou 8 na primeira prova e 6 na segunda. A média é 7... ou 11? Depende de
> onde você coloca os parênteses.

São as contas da escola, com dois símbolos novos: multiplicar é `*` e dividir é
`/`. E a ordem também é a da escola: primeiro `*` e `/`, depois `+` e `-`.

Por isso `8 + 6 / 2` dá 11: o programa divide `6 / 2` primeiro e só depois
soma o 8. Para somar as notas antes de dividir, coloque parênteses:

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

> [!TIP]
> O `%` não tem a ver com porcentagem. Ele dá o resto da divisão: 7
> alunos em duplas formam 3 duplas e sobra 1, então `7 % 2` é `1`.

> [!TIP]
> **Poder do TypeScript:** No JavaScript, `'8' * 2` dá `16` sem reclamar, e esse tipo de mistura vira bug
> difícil de achar. No TypeScript, conta só com número:
>
> ```ts
> console.log('8' * 2)
> // erro: The left-hand side of an arithmetic operation must be of type
> //       'any', 'number', 'bigint' or an enum type.
> ```

{{pratique}}

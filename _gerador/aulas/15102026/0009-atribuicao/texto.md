## 0009 · Operadores de atribuição

> Você tem 100 reais de crédito no celular. Gastou 30 no pacote de dados e
> recarregou 20. Quanto sobrou?

Quem guarda um valor na variável é o `=`. Ele não pergunta nada, ele manda: "a
partir de agora, `saldo` vale 100".

Quando o valor novo depende do antigo, existe atalho. Gastou 30? `saldo -= 30`,
que lê assim: "pega o que já tem e tira 30". Recarregou 20? `saldo += 20`:

{{ideia}}

```ts
let saldo = 100
saldo -= 30 // gastou no pacote: 70
saldo += 20 // recarregou: 90
console.log(saldo) // 90
```

A variável é a mesma do começo ao fim. No fluxograma, cada atribuição é um
retângulo roxo, e só o valor dentro da caixa vai mudando:

{{fluxograma}}

<details>
<summary>Todos os atalhos</summary>

| Escrito  | É o mesmo que |
| -------- | ------------- |
| `x += 5` | `x = x + 5`   |
| `x -= 5` | `x = x - 5`   |
| `x *= 2` | `x = x * 2`   |
| `x /= 2` | `x = x / 2`   |
| `x %= 3` | `x = x % 3`   |
| `x++`    | `x = x + 1`   |
| `x--`    | `x = x - 1`   |

</details>

> [!TIP]
> O `x++` aparece muito sozinho na linha, contando coisas: um aluno a mais, um
> gol a mais.

{{pratique}}

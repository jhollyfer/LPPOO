## 0014 · Operadores lógicos

Para passar de ano, nota boa sozinha não basta. Também precisa ter frequência.

Os operadores lógicos juntam várias respostas `true`/`false` numa só:

- `&&` (E): dá `true` só quando os dois lados são `true`.
- `||` (OU): dá `true` quando pelo menos um lado é `true`.
- `!` (NÃO): inverte. `!true` é `false`.

Vamos ver na prática. O Pedro tem média 7 (boa: `true`). Mas a frequência dele
é 60% (ruim: `false`).

Com `&&`, que precisa das duas, ele não passa. Com `||`, que se contenta com
uma, ele passaria:

{{ideia}}

```ts
const media = 7
const frequencia = 60

const aprovado = media >= 6 && frequencia >= 75 // true && false → false
console.log(aprovado) // false
console.log(media >= 6 || frequencia >= 75) // true || false → true
```

{{fluxograma}}

<details>
<summary>A tabela verdade</summary>

| A       | B       | A && B  | A \|\| B |
| ------- | ------- | ------- | -------- |
| `true`  | `true`  | `true`  | `true`   |
| `true`  | `false` | `false` | `true`   |
| `false` | `true`  | `false` | `true`   |
| `false` | `false` | `false` | `false`  |

</details>

> [!TIP]
> A mãe diz "só sai se arrumar o quarto **E** lavar a louça": é o `&&`. A avó
> diz "sai se arrumar o quarto **OU** lavar a louça": é o `||`.

> [!NOTE]
> **Pergunta para a turma:** qual é a menor frequência que o Pedro precisa ter
> para `aprovado` dar `true`? Mude o valor e rode.

{{pratique}}

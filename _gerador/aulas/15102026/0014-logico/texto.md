## 0014 · Operadores lógicos

> Para passar de ano não basta tirar nota boa. Também precisa ter frequência.

Os operadores lógicos juntam várias respostas `true`/`false` numa só:

- `&&` (E): dá `true` só quando os dois lados são `true`.
- `||` (OU): dá `true` quando pelo menos um lado é `true`.
- `!` (NÃO): inverte. `!true` é `false`.

O Pedro tem média 7 (boa: `true`) mas frequência 60% (ruim: `false`). Com `&&`,
que precisa das duas, ele não passa. Com `||`, que se contenta com uma, passaria:

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

> [!TIP]
> **Poder do TypeScript:** Passe o mouse em cima de `aprovado`: o editor mostra `const aprovado: boolean`.
> O TypeScript sabe que juntar dois `true`/`false` com `&&` dá outro `true` ou
> `false`.

{{pratique}}

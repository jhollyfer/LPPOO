## 0015 · Truthy, falsy, ?? e ?.

> O aluno apertou Enter sem digitar o apelido. E agora, o programa chama ele de
> quê?

Num `if`, o TypeScript espera `true` ou `false`. Mas você pode colocar qualquer
valor ali, e ele "acha" se aquilo conta como verdadeiro ou falso. É o fiscal do
porto olhando a mochila: vazia, ele nem abre; com alguma coisa, ele confere.

Os que contam como falso são só seis, e dá para decorar: `false`, `0`, `''`
(texto vazio), `null`, `undefined` e `NaN`. Esses são os **falsy**. Todo o resto
é **truthy**.

O aluno apertou Enter direto, então `apelido` é `''`, um texto vazio: falsy. O
`||` percebe isso e usa o valor padrão:

{{ideia}}

```ts
import { input } from '#core/input.ts'

const apelido = input('Seu apelido: ') // o aluno só aperta Enter: ''
const chamar = apelido || 'sem apelido' // '' é falsy, então usa o padrão
console.log(`Oi, ${chamar}!`) // Oi, sem apelido!
```

Aqui aparece o primeiro losango amarelo da aula, a primeira pergunta de sim ou
não:

{{fluxograma}}

> [!IMPORTANT]
> O `??` é parecido, mas só troca quando o valor é `null` ou `undefined`. Com
> texto vazio ele não faz nada: `'' ?? 'sem apelido'` continua `''`.

> [!TIP]
> O `?.` acessa uma propriedade só se a variável existir:
> `aluno?.nome` devolve `undefined` em vez de quebrar quando `aluno` é `null`.
> E `string | undefined` quer dizer "pode ser texto, pode não ter nada ainda".

{{pratique}}

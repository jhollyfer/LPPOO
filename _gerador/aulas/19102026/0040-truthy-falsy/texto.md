## 0040 · Truthy, falsy, ?? e ?.

O aluno apertou Enter sem digitar o apelido. E agora, o programa chama ele de
quê?

Num `if`, o esperado é `true` ou `false`. Mas o JavaScript (e o TypeScript, que
herda dele) deixa você colocar qualquer valor ali, e decide se aquilo conta
como verdadeiro ou falso.

Pensa no fiscal do porto olhando a mochila. Vazia, ele nem abre. Com alguma
coisa dentro, ele confere.

Os que contam como falso são só seis, e dá para decorar: `false`, `0`, `''`
(texto vazio), `null`, `undefined` e `NaN`. Esses são os **falsy**.

Todo o resto é **truthy**.

Olha só o exemplo. O aluno apertou Enter direto, então `apelido` é `''`, um
texto vazio. Ou seja, falsy. O `||` percebe isso e usa o valor padrão:

{{ideia}}

```ts
import { input } from '#core/input.ts'

const apelido = input('Seu apelido: ') // o aluno só aperta Enter: ''
const chamar = apelido || 'sem apelido' // '' é falsy, então usa o padrão
console.log(`Oi, ${chamar}!`) // Oi, sem apelido!
```

No fluxograma, o losango amarelo é a pergunta "tem texto?":

{{fluxograma}}

> [!IMPORTANT]
> O `??` é parecido, mas só troca quando o valor é `null` ou `undefined`. Com
> texto vazio ele não faz nada: `'' ?? 'sem apelido'` continua `''`.

> [!NOTE]
> **Pergunta para a turma:** troque o `||` por `??` e aperte Enter sem digitar
> nada. O que aparece na tela? Rode e confira.

{{pratique}}

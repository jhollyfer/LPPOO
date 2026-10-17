## 0001 · Entrada de dados (input)

> Sabe aquele colega que manda áudio de 5 minutos e nunca lê a resposta? Um
> programa que só fala é igualzinho. Hoje ele aprende a ouvir.

Pessoal, pensa na cantina. O caixa olha pra você e pergunta: "vai querer o
quê?". E aí ele **para**. Fica esperando. Só segue depois que você responde.

Entrada de dados é exatamente isso: o programa faz uma pergunta, para e espera
você digitar.

Olha o que acontece quando a Ana roda o programa. Aparece `Seu nome:`, ela
digita `Ana`, aperta Enter, e o programa guarda a resposta numa caixinha
chamada `nome`:

{{ideia}}

Quem faz a pergunta é o `input`. Ele mostra o texto, espera o Enter e devolve o
que a pessoa digitou:

```ts
import { input } from '#core/input.ts'

const nome = input('Seu nome: ') // a Ana digita: Ana
console.log(nome) // Ana
```

Repara no fluxograma: ler e mostrar são paralelogramos azuis. Azul é sempre
dado entrando ou saindo.

{{fluxograma}}

> [!IMPORTANT]
> Guarda isso: o `input` **sempre devolve texto**. Se a Ana digitar `17`, o
> programa guarda `'17'`, com aspas. E conta com texto dá confusão. A gente
> resolve isso na [0008](#0008--conversão-de-tipos).

> [!NOTE]
> **Pergunta para a turma:** se a Ana apertar Enter sem digitar nada, o que
> fica guardado em `nome`? Rode o exemplo e confira.

{{pratique}}

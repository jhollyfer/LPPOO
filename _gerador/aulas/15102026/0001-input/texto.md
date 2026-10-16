## 0001 · Entrada de dados (input)

> Um programa que só fala e nunca escuta é igual àquele colega que manda áudio de
> 5 minutos e não lê a resposta. Hoje o programa aprende a ouvir.

Entrada é quando o programa para, faz uma pergunta e espera. Pense no
caixa da cantina: ele pergunta "vai querer o quê?" e só segue depois que você
responde.

A Ana roda o programa. Aparece a pergunta `Seu nome:`, ela digita `Ana`, aperta
Enter, e o programa guarda essa resposta numa caixinha chamada `nome`:

{{ideia}}

Quem faz a pergunta é a função `input`. Ela mostra o texto, espera o Enter e
devolve o que foi digitado:

```ts
import { input } from '#core/input.ts'

const nome = input('Seu nome: ') // a Ana digita: Ana
console.log(nome) // Ana
```

O fluxograma é curtinho. Ler e mostrar são paralelogramos azuis, porque é dado
entrando e saindo.

{{fluxograma}}

> [!IMPORTANT]
> O `input` sempre devolve texto. Se a Ana digitar `17`, o programa guarda
> `'17'`, entre aspas. Fazer conta com isso é assunto da [0008](#0008--conversão-de-tipos).

> [!TIP]
> **Poder do TypeScript:** O editor sabe que o `input` devolve texto. Passe o mouse em cima de `nome` e
> ele mostra `const nome: string`. Você nem escreveu o tipo: ele descobriu sozinho.

{{pratique}}

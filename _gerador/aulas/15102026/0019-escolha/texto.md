## 0019 · Estrutura de escolha (switch)

Pensa no caixa eletrônico: "digite 1 para saldo, 2 para depósito". Cada número
leva para um caminho diferente.

Quem faz isso no programa é o `switch`. Ele pega um valor e procura a opção
igual numa lista. Achou (com `===`), roda o que está ali.

É o cardápio da lanchonete: você fala o número do combo e a atendente já sabe
o que montar.

Três palavras para guardar:

- `case`: uma opção da lista.
- `break`: "pronto, terminei". Sem ele, o programa continua descendo e roda os
  próximos `case` também.
- `default`: quando nenhuma opção bateu. Faz o papel do `else`. Ele aparece
  nos exemplos lá embaixo.

Vamos ver na prática. Você digita `2`. O `switch` compara com cada `case` e
para no `case 2`:

{{ideia}}

```ts
import { input } from '#core/input.ts'

const opcao = Number(input('1 saldo, 2 depósito: ')) // você digita: 2

switch (opcao) {
  case 1:
    console.log('Seu saldo é R$ 100')
    break
  case 2:
    console.log('Depósito realizado') // você cai aqui
    break
}
```

No fluxograma, o `switch` vira um losango com uma saída para cada `case`:

{{fluxograma}}

> [!TIP]
> Use o `switch` quando a pergunta é "qual destes valores?". Para faixas (maior
> que, menor que), o certo continua sendo o `if` / `else if`.

> [!NOTE]
> **Pergunta para a turma:** apague o `break` do `case 1` e digite `1`. O que
> aparece agora? (Dica: sem o `break`, o programa continua descendo.)

{{pratique}}

## 0020 · Estrutura de escolha (switch)

> Caixa eletrônico: "digite 1 para saldo, 2 para depósito, 3 para sair". Quem
> decide o que acontece depois de cada número?

O `switch` pega um valor e procura a opção igual numa lista. Achou (com
`===`), roda o que está ali. É o cardápio da lanchonete: você fala o número do
combo e a atendente já sabe o que montar.

- `case`: uma opção da lista.
- `break`: "pronto, terminei". Sem ele, o programa continua descendo e roda os
  próximos `case` também.
- `default`: quando nenhuma opção bateu. Faz o papel do `else`.

Você digitou `2`. O `switch` compara com cada `case` e para no `case 2`:

{{ideia}}

```ts
import { input } from '#core/input.ts'

const opcao = Number(input('1 saldo, 2 depósito, 3 sair: ')) // você digita: 2

switch (opcao) {
  case 1:
    console.log('Seu saldo é R$ 100')
    break
  case 2:
    console.log('Depósito realizado') // você cai aqui
    break
  case 3:
    console.log('Até logo!')
    break
  default:
    console.log('Opção inválida')
}
```

O `switch` vira um losango com uma saída para cada `case`, mais uma para o
`default`:

{{fluxograma}}

> [!TIP]
> Use `switch` quando a pergunta é "qual destes valores?". Para faixas (maior
> que, menor que), o `if` / `else if` continua sendo o certo.

> [!TIP]
> **Poder do TypeScript:** Neste projeto, o TypeScript está configurado para pegar o `break` esquecido
> (a opção `noFallthroughCasesInSwitch` do `tsconfig.json`):
>
> ```ts
> case 1:
>   console.log('Seu saldo é R$ 100')
> case 2: // erro: Fallthrough case in switch.
>   console.log('Depósito realizado')
>   break
> ```

{{pratique}}

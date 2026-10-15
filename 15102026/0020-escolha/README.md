# 0020 · Estrutura de escolha (switch)

> Caixa eletrônico: "digite 1 para saldo, 2 para depósito, 3 para sair". Quem
> programou isso provavelmente usou um `switch`.

## O conceito

A estrutura de escolha compara um único valor com uma lista de opções. Nos
livros de algoritmo ela aparece como `escolha ... caso ... fimescolha`
(FORBELLONE; EBERSPÄCHER, 2005), e no TypeScript como `switch`, herança direta
da linguagem C (KERNIGHAN; RITCHIE, 1988). Cada `case` é comparado com `===`, e
o `default` cobre o que não combinou com nenhum. Sem `break`, a execução "cai"
no próximo `case`, comportamento chamado *fall-through*. A opção
`noFallthroughCasesInSwitch`, ligada no `tsconfig.json` deste projeto, faz o
TypeScript avisar quando isso acontece sem querer.

Para ler mais:

- FORBELLONE, A. L. V.; EBERSPÄCHER, H. F. *Lógica de programação: a construção de algoritmos e estruturas de dados*. 3. ed. São Paulo: Pearson Prentice Hall, 2005.
- KERNIGHAN, B. W.; RITCHIE, D. M. *The C programming language*. 2. ed. Englewood Cliffs: Prentice Hall, 1988.
- MDN WEB DOCS. *switch*. Disponível em: <https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/switch>.
- MICROSOFT. *TypeScript Handbook*: TSConfig noFallthroughCasesInSwitch. Disponível em: <https://www.typescriptlang.org/tsconfig#noFallthroughCasesInSwitch>.

## A ideia

O `switch` pega um valor e compara com uma lista de opções. Achou uma igual (com
`===`), roda o que está ali. É o cardápio da lanchonete: você fala o número do
combo e a atendente já sabe o que montar.

- `case`: uma opção do cardápio.
- `break`: "pronto, pedido feito". Sem ele, o programa continua descendo e
  executa os próximos `case` também.
- `default`: quando nenhuma opção bateu. Faz o papel do `else`.

Use `switch` quando a pergunta é "qual destes valores?". Para faixas (maior que,
menor que), o `if` / `else if` continua sendo o certo.

## Fluxograma

Um valor só, comparado com cada opção. O `default` pega o que sobrar.

![Fluxograma animado: a bolinha amarela percorre o caminho que o programa faz](fluxograma.gif)

A bolinha amarela é o programa rodando. No painel da direita aparecem as variáveis e o terminal.

## Exercícios

Os enunciados e as dicas estão nos comentários de `exercicio-1.ts` e `exercicio-2.ts`, aqui nesta pasta. Responda dentro do próprio arquivo.

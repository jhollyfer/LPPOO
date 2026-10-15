# 0012 · Operadores relacionais

> Na entrada do show tem um segurança que faz uma pergunta só: "tem 18 anos ou
> mais?". A resposta é sim ou não. No código, quem faz essa pergunta é o `>=`.

## O conceito

Operadores relacionais comparam dois valores e sempre respondem com um valor
lógico, verdadeiro ou falso (FORBELLONE; EBERSPÄCHER, 2005). São eles `>`,
`<`, `>=` e `<=`. Sozinhos, só respondem perguntas. A graça aparece quando a
resposta vai para uma variável `boolean` ou para dentro de um `if`, que vem
algumas pastas depois. Uma diferença para a matemática: no código não dá para
escrever `0 <= nota <= 10` de uma vez. Cada comparação é feita separadamente e
depois as respostas são juntadas com os operadores lógicos.

Para ler mais:

- FORBELLONE, A. L. V.; EBERSPÄCHER, H. F. *Lógica de programação: a construção de algoritmos e estruturas de dados*. 3. ed. São Paulo: Pearson Prentice Hall, 2005.
- MDN WEB DOCS. *Expressões e operadores: operadores de comparação*. Disponível em: <https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Expressions_and_operators>.

## A ideia

Operador relacional compara dois valores e responde com um `boolean`: `true`
(verdade) ou `false` (mentira). Ele não faz conta, ele julga.

| Operador | Pergunta               | Exemplo   | Resultado |
| -------- | ---------------------- | --------- | --------- |
| `>`      | é maior que?           | `8 > 5`   | `true`    |
| `<`      | é menor que?           | `8 < 5`   | `false`   |
| `>=`     | é maior ou igual a?    | `6 >= 6`  | `true`    |
| `<=`     | é menor ou igual a?    | `4 <= 3`  | `false`   |

Truque para não confundir `>` com `<`: a boca aberta fica virada para o maior,
como um jacaré que quer comer o número grande.

A pergunta "é igual?" (`===`) e "é diferente?" (`!==`) mora na próxima pasta,
`0013-comparacao`.

## Fluxograma

Ainda não tem losango. A comparação aqui só produz um valor
`true` ou `false`, que guardamos numa variável. Decidir caminhos fica para o
`if`, mais adiante.

![Fluxograma animado: a bolinha amarela percorre o caminho que o programa faz](fluxograma.gif)

A bolinha amarela é o programa rodando. No painel da direita aparecem as variáveis e o terminal.

## Exercícios

Os enunciados e as dicas estão nos comentários de `exercicio-1.ts` e `exercicio-2.ts`, aqui nesta pasta. Responda dentro do próprio arquivo.

# 0008 · Conversão de tipos

> Você digitou 17, pediu para somar 1 e o programa respondeu 171. Hoje a gente
> resolve isso de vez.

## O conceito

Converter é transformar um valor de um tipo em outro. O JavaScript às vezes faz
isso sozinho, a chamada conversão automática (*type coercion*), e Haverbeke
(2018) mostra como ela leva a resultados estranhos, como `'5' * 2` dar `10` e
`'5' + 2` dar `'52'`. O TypeScript confere os tipos antes de o programa rodar
(MICROSOFT, *The Basics*), mas não adivinha o que a pessoa digitou: o `input`
devolve texto e quem decide virar número é você, com `Number`, `parseInt` ou
`parseFloat`. Quando a conversão falha, o resultado é `NaN`.

Para ler mais:

- HAVERBEKE, M. *Eloquent JavaScript*. 3. ed. San Francisco: No Starch Press, 2018. Disponível em: <https://eloquentjavascript.net>.
- MICROSOFT. *TypeScript Handbook*: The Basics. Disponível em: <https://www.typescriptlang.org/docs/handbook/2/basic-types.html>.
- MDN WEB DOCS. *parseInt()*. Disponível em: <https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/parseInt>.

## A ideia

Converter é trocar o tipo de um valor. Lembra que o `input` sempre devolve
texto? Pois é: para fazer conta, primeiro a gente transforma o texto em número.
É como trocar real por peso na fronteira. O dinheiro é o mesmo, mas agora dá
para usar do outro lado.

| Função          | O que faz                                    |
| --------------- | -------------------------------------------- |
| `Number('7.5')` | texto para número (aceita decimais)          |
| `parseInt('7')` | texto para número inteiro (corta o decimal)  |
| `parseFloat('7.5')` | texto para número decimal                |
| `String(10)`    | número para texto                            |

Se a conversão não dá certo, o resultado é `NaN`. Na prática você vai usar muito
`Number(input('...'))`, tudo numa linha.

## Fluxograma

Chega texto, vira número, aí sim faz a conta.

![Fluxograma animado: a bolinha amarela percorre o caminho que o programa faz](fluxograma.gif)

A bolinha amarela é o programa rodando. No painel da direita aparecem as variáveis e o terminal.

## Exercícios

Os enunciados e as dicas estão nos comentários de `exercicio-1.ts` e `exercicio-2.ts`, aqui nesta pasta. Responda dentro do próprio arquivo.

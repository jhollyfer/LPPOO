# 0019 · Operador ternário

> Dá para escrever um if/else inteiro numa linha só? Dá. E às vezes até fica
> mais bonito.

## O conceito

O ternário `condição ? a : b` é um `if/else` que devolve um valor. Veio da
linguagem C (KERNIGHAN; RITCHIE, 1988).

Para ler mais:

- KERNIGHAN, B. W.; RITCHIE, D. M. *The C programming language*. 2. ed. Englewood Cliffs: Prentice Hall, 1988.
- MDN WEB DOCS. *Operador condicional (ternário)*. Disponível em: <https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Conditional_operator>.

## A ideia

O ternário é o if/else de bolso. Ele faz uma pergunta e devolve um de dois
valores:

```ts
condição ? valorSeVerdadeiro : valorSeFalso
```

Lê assim: "a condição é verdadeira? então isso, senão aquilo". Como o ternário
vira um valor, dá para guardar numa variável ou colocar direto numa template
string.

Serve para escolhas pequenas: singular ou plural, par ou ímpar, aprovado ou
reprovado. Se a decisão tem várias etapas, volte para o `if`.

## Fluxograma

É o mesmo desenho do if/else. A diferença é que no final sai um valor.

![Fluxograma animado: a bolinha amarela percorre o caminho que o programa faz](fluxograma.gif)

A bolinha amarela é o programa rodando. No painel da direita aparecem as variáveis e o terminal.

## Exercícios

Os enunciados e as dicas estão nos comentários de `exercicio-1.ts` e `exercicio-2.ts`, aqui nesta pasta. Responda dentro do próprio arquivo.

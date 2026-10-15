# 0019 · Operador ternário

> Dá para escrever um if/else inteiro numa linha só? Dá. E às vezes até fica
> mais bonito.

## O conceito

O operador condicional `condição ? a : b` é chamado de ternário porque recebe
três partes. É o único operador assim no JavaScript (MDN). Ele veio da
linguagem C, onde Kernighan e Ritchie (1988) o apresentam como a expressão
condicional. A diferença para o `if` é que o ternário é uma expressão: ele
devolve um valor, que pode ir direto para uma variável ou para dentro de uma
template string. Para decisões curtas ele deixa o código mais enxuto; para
lógica comprida, o `if` continua mais fácil de ler.

Para ler mais:

- KERNIGHAN, B. W.; RITCHIE, D. M. *The C programming language*. 2. ed. Englewood Cliffs: Prentice Hall, 1988.
- MDN WEB DOCS. *Operador condicional (ternário)*. Disponível em: <https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Conditional_operator>.

## A ideia

O ternário é o if/else de bolso. Ele faz uma pergunta e devolve um de dois
valores:

```ts
condição ? valorSeVerdadeiro : valorSeFalso
```

Lê assim: "a condição é verdadeira? então isso, senão aquilo". A diferença para
o `if` é que o ternário vira um valor, então você pode guardar numa variável ou
colocar direto dentro de uma template string.

Serve para escolhas pequenas: singular ou plural, par ou ímpar, aprovado ou
reprovado. Se a decisão tem várias etapas, volte para o `if`.

## Fluxograma

É o mesmo desenho do if/else. A diferença é que no final sai um valor.

![Fluxograma animado: a bolinha amarela percorre o caminho que o programa faz](fluxograma.gif)

A bolinha amarela é o programa rodando. No painel da direita aparecem as variáveis e o terminal.

## Exercícios

Os enunciados e as dicas estão nos comentários de `exercicio-1.ts` e `exercicio-2.ts`, aqui nesta pasta. Responda dentro do próprio arquivo.

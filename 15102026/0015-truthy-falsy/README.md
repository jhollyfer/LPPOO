# 0015 · Truthy, falsy, ?? e ?.

> O aluno apertou Enter sem digitar o apelido. E agora, o programa chama ele de
> quê?

## O conceito

Quando um valor que não é `boolean` aparece num lugar que pede verdadeiro ou
falso, como um `if`, o JavaScript converte. A MDN chama de *falsy* os valores
que viram `false` (`false`, `0`, `''`, `null`, `undefined` e `NaN`) e de
*truthy* todo o resto. O operador `??`, que entrou na especificação ECMAScript em
2020, dá um valor padrão só para `null` e `undefined`. O `||` faz parecido, mas
troca qualquer falsy, inclusive `0` e texto vazio. O TypeScript usa essas mesmas
regras para saber, dentro de cada `if`, se uma variável `string | undefined` já
tem valor ou não (MICROSOFT, *Narrowing*).

Para ler mais:

- MDN WEB DOCS. *Falsy*. Disponível em: <https://developer.mozilla.org/pt-BR/docs/Glossary/Falsy>.
- MDN WEB DOCS. *Operador de coalescência nula (??)*. Disponível em: <https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing>.
- MICROSOFT. *TypeScript Handbook*: Narrowing. Disponível em: <https://www.typescriptlang.org/docs/handbook/2/narrowing.html>.

## A ideia

Num `if`, o TypeScript espera `true` ou `false`. Mas você pode colocar qualquer
valor ali, e ele vai "achar" se aquilo conta como verdadeiro ou falso. É o
fiscal do porto olhando a mochila: vazia, ele nem abre; com alguma coisa dentro,
ele para e confere.

Os valores que contam como falso são poucos, dá para decorar. São os **falsy**:
`false`, `0`, `''` (texto vazio), `null`, `undefined` e `NaN`. Todo o resto é
**truthy**: `'oi'`, `5`, `-1`, até `' '` (um espaço).

E quando a variável pode nem ter valor? Para isso existem dois operadores:

- `??` coloca um valor padrão quando a variável é `null` ou `undefined`.
- `?.` só acessa a propriedade se a variável existir. Se não existir, devolve
  `undefined` em vez de quebrar o programa.

No TypeScript, `string | undefined` quer dizer "pode ser texto, pode não ter
nada ainda".

## Fluxograma

O `??` é uma perguntinha só: tem valor ou não tem?

![Fluxograma animado: a bolinha amarela percorre o caminho que o programa faz](fluxograma.gif)

A bolinha amarela é o programa rodando. No painel da direita aparecem as variáveis e o terminal.

## Exercícios

Os enunciados e as dicas estão nos comentários de `exercicio-1.ts` e `exercicio-2.ts`, aqui nesta pasta. Responda dentro do próprio arquivo.

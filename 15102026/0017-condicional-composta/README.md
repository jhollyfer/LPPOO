# 0017 · Condicional composta (if / else)

> Ou o recreio sai às 6h para Tabatinga e você está no porto, ou você fica.
> Não tem meio-termo.

## O conceito

A seleção composta acrescenta o caminho do "senão": se a condição for
verdadeira, roda um bloco, senão, roda o outro. Exatamente um dos dois é
executado. No pseudocódigo ela aparece como `se ... então ... senão ... fimse`
(FORBELLONE; EBERSPÄCHER, 2005), e no fluxograma vira o losango com duas saídas,
Sim e Não, que se juntam de novo mais abaixo. É a segunda das estruturas de
seleção que Böhm e Jacopini (1966) usaram para mostrar que todo programa pode
ser montado com poucos blocos.

Para ler mais:

- FORBELLONE, A. L. V.; EBERSPÄCHER, H. F. *Lógica de programação: a construção de algoritmos e estruturas de dados*. 3. ed. São Paulo: Pearson Prentice Hall, 2005.
- BÖHM, C.; JACOPINI, G. Flow diagrams, Turing machines and languages with only two formation rules. *Communications of the ACM*, v. 9, n. 5, p. 366-371, 1966.
- MDN WEB DOCS. *if...else*. Disponível em: <https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/if...else>.

## A ideia

O `if` sozinho só sabe fazer uma coisa extra quando a condição é verdadeira.
Com o `else` (senão), o programa ganha um plano B.

Pense numa encruzilhada: ou vai pela esquerda, ou pela direita. Sempre um dos
dois caminhos roda. Nunca os dois juntos, nunca nenhum.

```ts
if (condição) {
  // condição true
} else {
  // condição false
}
```

## Fluxograma

Dois caminhos, e o programa passa por exatamente um.

![Fluxograma animado: a bolinha amarela percorre o caminho que o programa faz](fluxograma.gif)

A bolinha amarela é o programa rodando. No painel da direita aparecem as variáveis e o terminal.

## Exercícios

Os enunciados e as dicas estão nos comentários de `exercicio-1.ts` e `exercicio-2.ts`, aqui nesta pasta. Responda dentro do próprio arquivo.

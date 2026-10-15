# 0016 · Condicional simples (if)

> Você só leva o guarda-chuva se o céu estiver feio. Sol? Sai de mãos vazias.
> Seu programa também pode pensar assim.

## O conceito

Em 1966, Böhm e Jacopini provaram que qualquer programa pode ser escrito com
apenas três estruturas: sequência, seleção e repetição. A seleção é a decisão,
e o `if` é a forma mais simples dela: um bloco que só roda se a condição for
verdadeira. Dois anos depois, Dijkstra (1968) usou esse resultado para defender
a programação estruturada, sem saltos (`goto`) para lá e para cá. Nos livros de
algoritmo, o `if` aparece como `se ... então ... fimse` (FORBELLONE;
EBERSPÄCHER, 2005).

Para ler mais:

- BÖHM, C.; JACOPINI, G. Flow diagrams, Turing machines and languages with only two formation rules. *Communications of the ACM*, v. 9, n. 5, p. 366-371, 1966.
- DIJKSTRA, E. W. Go to statement considered harmful. *Communications of the ACM*, v. 11, n. 3, p. 147-148, 1968.
- FORBELLONE, A. L. V.; EBERSPÄCHER, H. F. *Lógica de programação: a construção de algoritmos e estruturas de dados*. 3. ed. São Paulo: Pearson Prentice Hall, 2005.

## A ideia

Até agora todo programa rodava linha por linha, do começo ao fim, sem pular
nada. Com o `if` (se), ele passa a tomar decisões.

O bloco entre `{ }` só roda se a condição for verdadeira. Se for falsa, o
programa pula o bloco e segue a vida. É a catraca do ônibus: cartão válido,
passa; cartão sem saldo, nada acontece e a fila continua.

```ts
if (condição) {
  // só roda se a condição for true
}
```

## Fluxograma

Só o caminho do "Sim" tem uma tarefa extra. O "Não" segue reto.

![Fluxograma animado: a bolinha amarela percorre o caminho que o programa faz](fluxograma.gif)

A bolinha amarela é o programa rodando. No painel da direita aparecem as variáveis e o terminal.

## Exercícios

Os enunciados e as dicas estão nos comentários de `exercicio-1.ts` e `exercicio-2.ts`, aqui nesta pasta. Responda dentro do próprio arquivo.

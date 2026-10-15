# 0007 · Booleano (boolean), typeof, null e undefined

> Está chovendo? Tem aula hoje? O recreio já saiu? Pergunta de sim ou não tem um
> tipo só para ela.

## O conceito

`boolean` tem só dois valores, `true` e `false`, a álgebra que George Boole
publicou em 1854. `null` e `undefined` avisam que ali não tem valor.

Para ler mais:

- BOOLE, G. *An investigation of the laws of thought*. London: Walton and Maberly, 1854.
- HOARE, T. *Null references: the billion dollar mistake*. Palestra na QCon London, 2009.
- MICROSOFT. *TypeScript Handbook*: Everyday Types. Disponível em: <https://www.typescriptlang.org/docs/handbook/2/everyday-types.html>.

## A ideia

`boolean` é o tipo mais simples que existe: só tem dois valores, `true`
(verdadeiro) e `false` (falso). É um interruptor de luz. Ligado ou desligado,
não tem meio termo.

O `typeof` é o fofoqueiro do programa: você aponta para um valor e ele conta o
tipo, na hora em que o programa está rodando.

E tem dois valores especiais que querem dizer "nada":

- `undefined`: a caixa existe, mas ninguém colocou nada nela ainda. É a cadeira
  reservada de um aluno que ainda não chegou.
- `null`: alguém colocou "nada" de propósito. É o aluno avisando "pode marcar
  que eu não vou".

## Fluxograma

A resposta "sim" ou "nao" vira um `true` ou `false`.

![Fluxograma animado: a bolinha amarela percorre o caminho que o programa faz](fluxograma.gif)

A bolinha amarela é o programa rodando. No painel da direita aparecem as variáveis e o terminal.

## Exercícios

Os enunciados e as dicas estão nos comentários de `exercicio-1.ts` e `exercicio-2.ts`, aqui nesta pasta. Responda dentro do próprio arquivo.

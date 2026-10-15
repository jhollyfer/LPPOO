# 0007 · Booleano (boolean), typeof, null e undefined

> Está chovendo? Tem aula hoje? O recreio já saiu? Pergunta de sim ou não tem um
> tipo só para ela.

## O conceito

O tipo `boolean` tem o nome de George Boole, que em 1854 publicou *An
Investigation of the Laws of Thought*, onde tratou o raciocínio lógico como
álgebra de dois valores: verdadeiro e falso. É essa álgebra que o computador
usa para decidir qualquer coisa. Além de `true` e `false`, o TypeScript tem
`null` e `undefined` para indicar ausência de valor. Tony Hoare, que criou a
referência nula em 1965, chamou essa invenção de "o erro de um bilhão de
dólares" (HOARE, 2009), por causa de tantos programas que quebram tentando usar
um valor que não está lá. O modo `strict` do TypeScript existe em boa parte para
pegar esse erro antes de rodar.

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

- `undefined`: a caixa existe, mas ninguém colocou nada nela ainda. Cadeira
  reservada que o aluno ainda não chegou.
- `null`: alguém colocou "nada" de propósito. É o aluno avisando "pode marcar
  que eu não vou".

## Fluxograma

A resposta "sim" ou "nao" vira um `true` ou `false`.

![Fluxograma animado: a bolinha amarela percorre o caminho que o programa faz](fluxograma.gif)

A bolinha amarela é o programa rodando. No painel da direita aparecem as variáveis e o terminal.

## Exercícios

Os enunciados e as dicas estão nos comentários de `exercicio-1.ts` e `exercicio-2.ts`, aqui nesta pasta. Responda dentro do próprio arquivo.

# 0001 · Entrada de dados (input)

> Um programa que só fala e nunca escuta é igual àquele colega que manda áudio de
> 5 minutos e não lê a resposta. Hoje o programa aprende a ouvir.

## O conceito

Todo algoritmo segue o mesmo esqueleto: recebe dados, processa e devolve um
resultado. Forbellone e Eberspächer (2005) chamam a primeira parte de entrada e
a representam com a instrução `leia` do pseudocódigo. No nosso código, quem faz
o papel do `leia` é o `input`. A norma ISO 5807 (1985), que padroniza os
símbolos de fluxograma, reserva o paralelogramo para esse momento em que o dado
entra ou sai do programa. Um detalhe que pega muita gente: o `input` sempre
devolve texto, mesmo quando a pessoa digita um número.

Para ler mais:

- FORBELLONE, A. L. V.; EBERSPÄCHER, H. F. *Lógica de programação: a construção de algoritmos e estruturas de dados*. 3. ed. São Paulo: Pearson Prentice Hall, 2005.
- ISO 5807:1985. *Information processing: documentation symbols and conventions for data, program and system flowcharts, program network charts and system resources charts*. Genebra: ISO, 1985.

## A ideia

Entrada é o momento em que o programa para, faz uma pergunta e espera você
digitar. Pense no caixa da cantina: ele pergunta "vai querer o quê?" e só segue
depois que você responde.

No nosso projeto quem faz isso é a função `input`, que mora em `#core/input.ts`.
Ela mostra a pergunta, espera o Enter e devolve o que foi digitado.

Guarde uma coisa desde já: o `input` **sempre devolve texto (`string`)**. Você
digitou 17? Para ele é o texto `'17'`, igual a uma placa escrita "17". Fazer
conta com isso fica para a pasta de conversão.

Para rodar qualquer arquivo desta pasta:

```bash
pnpm tsx 15102026/0001-input/exemplo-1.ts
```

## Fluxograma

O caminho é curto: pergunta, guarda, mostra.

![Fluxograma animado: a bolinha amarela percorre o caminho que o programa faz](fluxograma.gif)

A bolinha amarela é o programa rodando. No painel da direita aparecem as variáveis e o terminal.

## Exercícios

Os enunciados e as dicas estão nos comentários de `exercicio-1.ts` e `exercicio-2.ts`, aqui nesta pasta. Responda dentro do próprio arquivo.

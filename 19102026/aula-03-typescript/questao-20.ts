// Aula 03 · Questão 20 · União, literais e narrowing
// Vale ponto. Exemplo resolvido parecido: exemplo-20.ts
// Para revisar: 0045 e 0046 no README da aula 03 (19102026/README.md)
//
// Semáforo: crie type Cor = 'verde' | 'amarelo' | 'vermelho'. Peça uma cor ao
// usuário, confira se ela é uma Cor válida e mostre o que o motorista deve
// fazer. Depois escreva formatar(valor: string | number): string, que devolve
// número com 2 casas e texto em maiúsculas.
//
// O que precisa ter:
// - a união de literais
// - a conferência do texto digitado antes de usar como Cor
// - o typeof estreitando string | number
//
// Para ler dados do teclado use:
// import { input } from '#core/input.ts'
//
// Escreva sua resposta abaixo:

// Aula 03 · Questão 25 · Type guards e satisfies
// Vale ponto. Exemplo resolvido parecido: exemplo-25.ts
// Para revisar: 0052 e 0053 no README da aula 03 (19102026/README.md)
//
// Formulário: o usuário digita idade e email. Escreva ehIdadeValida(x:
// unknown): x is number (número inteiro de 0 a 120) e use no lugar do if
// comum. Guarde as mensagens de erro num objeto com satisfies Record<string,
// string> e mostre a mensagem certa para cada campo errado. No fim, rode
// pnpm -C ~/LPPOO tsc e garanta que este arquivo não aparece na lista.
//
// O que precisa ter:
// - o type guard com x is number
// - o objeto de mensagens com satisfies
// - o arquivo sem nenhum erro no tsc
//
// Para ler dados do teclado use:
// import { input } from '#core/input.ts'
//
// Escreva sua resposta abaixo:

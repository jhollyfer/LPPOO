// 0053 · Juntando tudo: cadastro de alunos tipado
// Exercício E105
//
// Modele uma biblioteca: interface Livro { readonly codigo: number; titulo:
// string; situacao: Situacao }, em que Situacao é uma união discriminada:
// { tipo: 'disponivel' } ou { tipo: 'emprestado'; aluno: string; devolucao:
// string }. Escreva descrever(l: Livro): string e mostre uma lista de três
// livros.
//
// Dicas:
// 1. O switch vai em l.situacao.tipo.
// 2. Só no case 'emprestado' existem aluno e devolucao.
//
// Escreva sua resposta abaixo:

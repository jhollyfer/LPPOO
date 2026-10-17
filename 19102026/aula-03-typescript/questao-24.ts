// Aula 03 · Questão 24 · Tipos utilitários
// Vale ponto. Exemplo resolvido parecido: exemplo-24.ts
// Para revisar: 0051 no README da aula 03 (19102026/README.md)
//
// Estoque: crie type Produto = { codigo: number; nome: string; preco: number;
// quantidade: number }. Use Omit para o cadastro (sem código), Partial para
// atualizar e Record<'lanche' | 'bebida', Produto[]> para separar por categoria.
// Mostre o estoque antes e depois de uma atualização.
//
// O que precisa ter:
// - Omit, Partial e Record usados de verdade
// - a função que atualiza com { ...produto, ...mudanca }
// - o resultado mostrado no terminal
//
// Escreva sua resposta abaixo:

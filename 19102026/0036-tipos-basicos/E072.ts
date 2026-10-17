// 0036 · Tipos primitivos, any, unknown e never
// Exercício E072
//
// Escreva gritar(valor: unknown): string, que devolve o texto em maiúsculas
// com um ! no fim se o valor for texto, e '?' se não for. Teste com 'oi' e 7.
// Repare que, sem o if, o TypeScript não deixa usar valor.toUpperCase().
//
// Dicas:
// 1. Primeiro confira com typeof valor === 'string'.
// 2. Dentro do if, valor já é string: `${valor.toUpperCase()}!`.
//
// Escreva sua resposta abaixo:

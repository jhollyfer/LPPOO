import type { Execucao } from "./tipos";

// Para cada pasta: o caminho que o programa faz no fluxograma,
// com valores de verdade. Os ids (A, B, C...) são os de grafos.ts.
export const execucoes: Record<string, Execucao[]> = {
  "0001-input": [
    {
      titulo: "A pessoa digita Ana",
      passos: [
        { no: "A" },
        { no: "B", entrada: "Ana" },
        { no: "C", vars: { nome: "'Ana'" } },
        { no: "D", saida: "Ana" },
        { no: "E" },
      ],
    },
  ],
  "0002-output": [
    {
      titulo: "A pessoa digita Juju",
      passos: [
        { no: "A" },
        { no: "B", entrada: "Juju", vars: { nome: "'Juju'" } },
        { no: "C", saida: "Olá, Juju!" },
        { no: "D" },
      ],
    },
  ],
  "0003-variaveis": [
    {
      titulo: "O placar mudando",
      passos: [
        { no: "A" },
        { no: "B", vars: { gols: "0" } },
        { no: "C", vars: { gols: "1" } },
        { no: "D", vars: { gols: "2" } },
        { no: "E", saida: "2" },
        { no: "F" },
      ],
    },
  ],
  "0004-constantes": [
    {
      titulo: "A pessoa digita Ana",
      passos: [
        { no: "A" },
        { no: "B", vars: { CIDADE: "'Benjamin Constant'" } },
        { no: "C", entrada: "Ana", vars: { nome: "'Ana'" } },
        { no: "D", saida: "Ana mora em Benjamin Constant" },
        { no: "E" },
      ],
    },
  ],
  "0005-texto": [
    {
      titulo: "A pessoa digita '  maria  '",
      passos: [
        { no: "A" },
        { no: "B", entrada: "  maria  ", vars: { nome: "'  maria  '" } },
        { no: "C", vars: { limpo: "'maria'" } },
        { no: "D", vars: { maiusculo: "'MARIA'" } },
        { no: "E", saida: "MARIA 5" },
        { no: "F" },
      ],
    },
  ],
  "0006-numero": [
    {
      titulo: "Preço do açaí",
      passos: [
        { no: "A" },
        { no: "B", vars: { preco: "12.5" } },
        { no: "C", vars: { texto: "'12.50'" } },
        { no: "D", saida: "Total: R$ 12.50" },
        { no: "E" },
      ],
    },
  ],
  "0007-booleano": [
    {
      titulo: "Resposta: sim",
      passos: [
        { no: "A" },
        { no: "B", entrada: "sim", vars: { resposta: "'sim'" } },
        { no: "C", vars: { matriculado: "true" } },
        { no: "D", saida: "true" },
        { no: "E" },
      ],
    },
    {
      titulo: "Resposta: nao",
      passos: [
        { no: "A" },
        { no: "B", entrada: "nao", vars: { resposta: "'nao'" } },
        { no: "C", vars: { matriculado: "false" } },
        { no: "D", saida: "false" },
        { no: "E" },
      ],
    },
  ],
  "0008-conversao": [
    {
      titulo: "A pessoa digita 17",
      passos: [
        { no: "A" },
        { no: "B", entrada: "17", vars: { texto: "'17' (string)" } },
        { no: "C", vars: { idade: "17 (number)" } },
        { no: "D", vars: { proxima: "18" } },
        { no: "E", saida: "18" },
        { no: "F" },
      ],
    },
  ],
  "0009-atribuicao": [
    {
      titulo: "O saldo mudando passo a passo",
      passos: [
        { no: "A" },
        { no: "B", vars: { saldo: "100" } },
        { no: "C", vars: { saldo: "150" } },
        { no: "D", vars: { saldo: "120" } },
        { no: "E", vars: { saldo: "121" } },
        { no: "F", saida: "121" },
        { no: "G" },
      ],
    },
  ],
  "0010-aritmetica": [
    {
      titulo: "Notas 8 e 6",
      passos: [
        { no: "A" },
        { no: "B", entrada: "8 e 6", vars: { nota1: "8", nota2: "6" } },
        { no: "C", vars: { media: "(8 + 6) / 2 = 7" } },
        { no: "D", saida: "7" },
        { no: "E" },
      ],
    },
  ],
  "0011-math": [
    {
      titulo: "Jogando o dado",
      passos: [
        { no: "A" },
        { no: "B", vars: { sorteio: "3.71" } },
        { no: "C", vars: { dado: "Math.floor(3.71) + 1 = 4" } },
        { no: "D", saida: "Saiu o número 4" },
        { no: "E" },
      ],
    },
  ],
  "0012-relacional": [
    {
      titulo: "Idade 20",
      passos: [
        { no: "A" },
        { no: "B", entrada: "20", vars: { idade: "20" } },
        { no: "C", vars: { maiorDeIdade: "20 >= 18 → true" } },
        { no: "D", saida: "true" },
        { no: "E" },
      ],
    },
    {
      titulo: "Idade 15",
      passos: [
        { no: "A" },
        { no: "B", entrada: "15", vars: { idade: "15" } },
        { no: "C", vars: { maiorDeIdade: "15 >= 18 → false" } },
        { no: "D", saida: "false" },
        { no: "E" },
      ],
    },
  ],
  "0013-comparacao": [
    {
      titulo: "Senha certa",
      passos: [
        { no: "A" },
        { no: "B", entrada: "1234", vars: { SENHA: "'1234'", digitada: "'1234'" } },
        { no: "C", vars: { correta: "true" } },
        { no: "D", saida: "true" },
        { no: "E" },
      ],
    },
    {
      titulo: "Senha errada",
      passos: [
        { no: "A" },
        { no: "B", entrada: "4321", vars: { SENHA: "'1234'", digitada: "'4321'" } },
        { no: "C", vars: { correta: "false" } },
        { no: "D", saida: "false" },
        { no: "E" },
      ],
    },
  ],
  "0014-logico": [
    {
      titulo: "Média 7, frequência 80%",
      passos: [
        { no: "A" },
        { no: "B", entrada: "7 e 80", vars: { media: "7", frequencia: "80" } },
        { no: "C", teste: "7 >= 6", resultado: true },
        { no: "D", teste: "80 >= 75", resultado: true },
        { no: "E", vars: { aprovado: "true" } },
        { no: "G", saida: "true" },
        { no: "H" },
      ],
    },
    {
      titulo: "Média 7, frequência 60%",
      passos: [
        { no: "A" },
        { no: "B", entrada: "7 e 60", vars: { media: "7", frequencia: "60" } },
        { no: "C", teste: "7 >= 6", resultado: true },
        { no: "D", teste: "60 >= 75", resultado: false },
        { no: "F", vars: { aprovado: "false" } },
        { no: "G", saida: "false" },
        { no: "H" },
      ],
    },
  ],
  "0015-truthy-falsy": [
    {
      titulo: "Sem apelido",
      passos: [
        { no: "A", vars: { apelido: "undefined" } },
        { no: "B", teste: "apelido é undefined", resultado: true },
        { no: "C" },
        { no: "E", saida: "sem apelido" },
        { no: "F" },
      ],
    },
    {
      titulo: "Apelido Juju",
      passos: [
        { no: "A", vars: { apelido: "'Juju'" } },
        { no: "B", teste: "'Juju' é undefined", resultado: false },
        { no: "D" },
        { no: "E", saida: "Juju" },
        { no: "F" },
      ],
    },
  ],
  "0016-condicional-simples": [
    {
      titulo: "Está chovendo: sim",
      passos: [
        { no: "A" },
        { no: "B", entrada: "sim", vars: { resposta: "'sim'" } },
        { no: "C", teste: "'sim' === 'sim'", resultado: true },
        { no: "D", saida: "Leve o guarda-chuva!" },
        { no: "E", saida: "Bom dia!" },
        { no: "F" },
      ],
    },
    {
      titulo: "Está chovendo: nao",
      passos: [
        { no: "A" },
        { no: "B", entrada: "nao", vars: { resposta: "'nao'" } },
        { no: "C", teste: "'nao' === 'sim'", resultado: false },
        { no: "E", saida: "Bom dia!" },
        { no: "F" },
      ],
    },
  ],
  "0017-condicional-composta": [
    {
      titulo: "Número 4",
      passos: [
        { no: "A" },
        { no: "B", entrada: "4", vars: { numero: "4" } },
        { no: "C", teste: "4 % 2 === 0", resultado: true },
        { no: "D", saida: "Par" },
        { no: "F" },
      ],
    },
    {
      titulo: "Número 7",
      passos: [
        { no: "A" },
        { no: "B", entrada: "7", vars: { numero: "7" } },
        { no: "C", teste: "7 % 2 === 0", resultado: false },
        { no: "E", saida: "Ímpar" },
        { no: "F" },
      ],
    },
  ],
  "0018-condicional-aninhada": [
    {
      titulo: "Média 8",
      passos: [
        { no: "A" },
        { no: "B", entrada: "8", vars: { media: "8" } },
        { no: "C", teste: "8 >= 6", resultado: true },
        { no: "D", saida: "Aprovado" },
        { no: "H" },
      ],
    },
    {
      titulo: "Média 5",
      passos: [
        { no: "A" },
        { no: "B", entrada: "5", vars: { media: "5" } },
        { no: "C", teste: "5 >= 6", resultado: false },
        { no: "E", teste: "5 >= 4", resultado: true },
        { no: "F", saida: "Recuperação" },
        { no: "H" },
      ],
    },
    {
      titulo: "Média 2",
      passos: [
        { no: "A" },
        { no: "B", entrada: "2", vars: { media: "2" } },
        { no: "C", teste: "2 >= 6", resultado: false },
        { no: "E", teste: "2 >= 4", resultado: false },
        { no: "G", saida: "Reprovado" },
        { no: "H" },
      ],
    },
  ],
  "0019-ternario": [
    {
      titulo: "Média 8",
      passos: [
        { no: "A" },
        { no: "B", entrada: "8", vars: { media: "8" } },
        { no: "C", teste: "8 >= 6", resultado: true },
        { no: "D", vars: { situacao: "'Aprovado'" } },
        { no: "F", saida: "Aprovado" },
        { no: "G" },
      ],
    },
    {
      titulo: "Média 5",
      passos: [
        { no: "A" },
        { no: "B", entrada: "5", vars: { media: "5" } },
        { no: "C", teste: "5 >= 6", resultado: false },
        { no: "E", vars: { situacao: "'Reprovado'" } },
        { no: "F", saida: "Reprovado" },
        { no: "G" },
      ],
    },
  ],
  "0020-escolha": [
    {
      titulo: "Opção 2",
      passos: [
        { no: "A" },
        { no: "B", entrada: "2", vars: { opcao: "'2'" } },
        { no: "C", teste: "opcao é '2'" },
        { no: "E", saida: "Depósito realizado" },
        { no: "H" },
      ],
    },
    {
      titulo: "Opção 9 (não existe)",
      passos: [
        { no: "A" },
        { no: "B", entrada: "9", vars: { opcao: "'9'" } },
        { no: "C", teste: "nenhum case é '9'" },
        { no: "G", saida: "Opção inválida" },
        { no: "H" },
      ],
    },
  ],
};

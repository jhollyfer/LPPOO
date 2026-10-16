// Os fluxogramas de cada pasta.
// Tipos de nó: terminal (início/fim), io (entrada/saída), proc (processamento), dec (decisão).
export const fluxogramas = {
  "0001-input": {
    "titulo": "0001 · Entrada de dados (input)",
    "nos": [
      {
        "id": "A",
        "tipo": "terminal",
        "texto": "Início"
      },
      {
        "id": "B",
        "tipo": "io",
        "texto": "Ler nome"
      },
      {
        "id": "C",
        "tipo": "proc",
        "texto": "nome recebe o texto digitado"
      },
      {
        "id": "D",
        "tipo": "io",
        "texto": "Mostrar nome"
      },
      {
        "id": "E",
        "tipo": "terminal",
        "texto": "Fim"
      }
    ],
    "setas": [
      {
        "de": "A",
        "para": "B",
        "rotulo": null
      },
      {
        "de": "B",
        "para": "C",
        "rotulo": null
      },
      {
        "de": "C",
        "para": "D",
        "rotulo": null
      },
      {
        "de": "D",
        "para": "E",
        "rotulo": null
      }
    ]
  },
  "0002-output": {
    "titulo": "0002 · Saída de dados (output)",
    "nos": [
      {
        "id": "A",
        "tipo": "terminal",
        "texto": "Início"
      },
      {
        "id": "B",
        "tipo": "io",
        "texto": "Ler nome"
      },
      {
        "id": "C",
        "tipo": "io",
        "texto": "Mostrar 'Olá, nome!'"
      },
      {
        "id": "D",
        "tipo": "terminal",
        "texto": "Fim"
      }
    ],
    "setas": [
      {
        "de": "A",
        "para": "B",
        "rotulo": null
      },
      {
        "de": "B",
        "para": "C",
        "rotulo": null
      },
      {
        "de": "C",
        "para": "D",
        "rotulo": null
      }
    ]
  },
  "0003-variaveis": {
    "titulo": "0003 · Variáveis",
    "nos": [
      {
        "id": "A",
        "tipo": "terminal",
        "texto": "Início"
      },
      {
        "id": "B",
        "tipo": "proc",
        "texto": "gols = 0"
      },
      {
        "id": "C",
        "tipo": "proc",
        "texto": "gols = 1"
      },
      {
        "id": "D",
        "tipo": "proc",
        "texto": "gols = 2"
      },
      {
        "id": "E",
        "tipo": "io",
        "texto": "Mostrar gols"
      },
      {
        "id": "F",
        "tipo": "terminal",
        "texto": "Fim"
      }
    ],
    "setas": [
      {
        "de": "A",
        "para": "B",
        "rotulo": null
      },
      {
        "de": "B",
        "para": "C",
        "rotulo": null
      },
      {
        "de": "C",
        "para": "D",
        "rotulo": null
      },
      {
        "de": "D",
        "para": "E",
        "rotulo": null
      },
      {
        "de": "E",
        "para": "F",
        "rotulo": null
      }
    ]
  },
  "0004-constantes": {
    "titulo": "0004 · Constantes",
    "nos": [
      {
        "id": "A",
        "tipo": "terminal",
        "texto": "Início"
      },
      {
        "id": "B",
        "tipo": "proc",
        "texto": "CIDADE = 'Benjamin Constant'"
      },
      {
        "id": "C",
        "tipo": "io",
        "texto": "Ler nome"
      },
      {
        "id": "D",
        "tipo": "io",
        "texto": "Mostrar 'nome mora em CIDADE'"
      },
      {
        "id": "E",
        "tipo": "terminal",
        "texto": "Fim"
      }
    ],
    "setas": [
      {
        "de": "A",
        "para": "B",
        "rotulo": null
      },
      {
        "de": "B",
        "para": "C",
        "rotulo": null
      },
      {
        "de": "C",
        "para": "D",
        "rotulo": null
      },
      {
        "de": "D",
        "para": "E",
        "rotulo": null
      }
    ]
  },
  "0005-texto": {
    "titulo": "0005 · Texto (string)",
    "nos": [
      {
        "id": "A",
        "tipo": "terminal",
        "texto": "Início"
      },
      {
        "id": "B",
        "tipo": "io",
        "texto": "Ler nome"
      },
      {
        "id": "C",
        "tipo": "proc",
        "texto": "limpo = nome.trim()"
      },
      {
        "id": "D",
        "tipo": "proc",
        "texto": "maiusculo = limpo.toUpperCase()"
      },
      {
        "id": "E",
        "tipo": "io",
        "texto": "Mostrar maiusculo e limpo.length"
      },
      {
        "id": "F",
        "tipo": "terminal",
        "texto": "Fim"
      }
    ],
    "setas": [
      {
        "de": "A",
        "para": "B",
        "rotulo": null
      },
      {
        "de": "B",
        "para": "C",
        "rotulo": null
      },
      {
        "de": "C",
        "para": "D",
        "rotulo": null
      },
      {
        "de": "D",
        "para": "E",
        "rotulo": null
      },
      {
        "de": "E",
        "para": "F",
        "rotulo": null
      }
    ]
  },
  "0006-numero": {
    "titulo": "0006 · Número (number)",
    "nos": [
      {
        "id": "A",
        "tipo": "terminal",
        "texto": "Início"
      },
      {
        "id": "B",
        "tipo": "proc",
        "texto": "preco = 12.5"
      },
      {
        "id": "C",
        "tipo": "proc",
        "texto": "texto = preco.toFixed(2)"
      },
      {
        "id": "D",
        "tipo": "io",
        "texto": "Mostrar 'Total: R$ ' + texto"
      },
      {
        "id": "E",
        "tipo": "terminal",
        "texto": "Fim"
      }
    ],
    "setas": [
      {
        "de": "A",
        "para": "B",
        "rotulo": null
      },
      {
        "de": "B",
        "para": "C",
        "rotulo": null
      },
      {
        "de": "C",
        "para": "D",
        "rotulo": null
      },
      {
        "de": "D",
        "para": "E",
        "rotulo": null
      }
    ]
  },
  "0007-booleano": {
    "titulo": "0007 · Booleano (boolean), typeof, null e undefined",
    "nos": [
      {
        "id": "A",
        "tipo": "terminal",
        "texto": "Início"
      },
      {
        "id": "B",
        "tipo": "io",
        "texto": "Ler resposta (sim/nao)"
      },
      {
        "id": "C",
        "tipo": "proc",
        "texto": "matriculado = resposta === 'sim'"
      },
      {
        "id": "D",
        "tipo": "io",
        "texto": "Mostrar matriculado (true ou false)"
      },
      {
        "id": "E",
        "tipo": "terminal",
        "texto": "Fim"
      }
    ],
    "setas": [
      {
        "de": "A",
        "para": "B",
        "rotulo": null
      },
      {
        "de": "B",
        "para": "C",
        "rotulo": null
      },
      {
        "de": "C",
        "para": "D",
        "rotulo": null
      },
      {
        "de": "D",
        "para": "E",
        "rotulo": null
      }
    ]
  },
  "0008-conversao": {
    "titulo": "0008 · Conversão de tipos",
    "nos": [
      {
        "id": "A",
        "tipo": "terminal",
        "texto": "Início"
      },
      {
        "id": "B",
        "tipo": "io",
        "texto": "Ler idade (texto)"
      },
      {
        "id": "C",
        "tipo": "proc",
        "texto": "idade = Number(texto)"
      },
      {
        "id": "D",
        "tipo": "proc",
        "texto": "proxima = idade + 1"
      },
      {
        "id": "E",
        "tipo": "io",
        "texto": "Mostrar proxima"
      },
      {
        "id": "F",
        "tipo": "terminal",
        "texto": "Fim"
      }
    ],
    "setas": [
      {
        "de": "A",
        "para": "B",
        "rotulo": null
      },
      {
        "de": "B",
        "para": "C",
        "rotulo": null
      },
      {
        "de": "C",
        "para": "D",
        "rotulo": null
      },
      {
        "de": "D",
        "para": "E",
        "rotulo": null
      },
      {
        "de": "E",
        "para": "F",
        "rotulo": null
      }
    ]
  },
  "0009-atribuicao": {
    "titulo": "0009 · Operadores de atribuição",
    "nos": [
      {
        "id": "A",
        "tipo": "terminal",
        "texto": "Início"
      },
      {
        "id": "B",
        "tipo": "proc",
        "texto": "saldo = 100"
      },
      {
        "id": "C",
        "tipo": "proc",
        "texto": "saldo += 50 (150)"
      },
      {
        "id": "D",
        "tipo": "proc",
        "texto": "saldo -= 30 (120)"
      },
      {
        "id": "E",
        "tipo": "proc",
        "texto": "saldo++ (121)"
      },
      {
        "id": "F",
        "tipo": "io",
        "texto": "Mostrar saldo"
      },
      {
        "id": "G",
        "tipo": "terminal",
        "texto": "Fim"
      }
    ],
    "setas": [
      {
        "de": "A",
        "para": "B",
        "rotulo": null
      },
      {
        "de": "B",
        "para": "C",
        "rotulo": null
      },
      {
        "de": "C",
        "para": "D",
        "rotulo": null
      },
      {
        "de": "D",
        "para": "E",
        "rotulo": null
      },
      {
        "de": "E",
        "para": "F",
        "rotulo": null
      },
      {
        "de": "F",
        "para": "G",
        "rotulo": null
      }
    ]
  },
  "0010-aritmetica": {
    "titulo": "0010 · Operadores aritméticos",
    "nos": [
      {
        "id": "A",
        "tipo": "terminal",
        "texto": "Início"
      },
      {
        "id": "B",
        "tipo": "io",
        "texto": "Ler nota1 e nota2"
      },
      {
        "id": "C",
        "tipo": "proc",
        "texto": "media = (nota1 + nota2) / 2"
      },
      {
        "id": "D",
        "tipo": "io",
        "texto": "Mostrar media"
      },
      {
        "id": "E",
        "tipo": "terminal",
        "texto": "Fim"
      }
    ],
    "setas": [
      {
        "de": "A",
        "para": "B",
        "rotulo": null
      },
      {
        "de": "B",
        "para": "C",
        "rotulo": null
      },
      {
        "de": "C",
        "para": "D",
        "rotulo": null
      },
      {
        "de": "D",
        "para": "E",
        "rotulo": null
      }
    ]
  },
  "0011-math": {
    "titulo": "0011 · Objeto Math",
    "nos": [
      {
        "id": "A",
        "tipo": "terminal",
        "texto": "Início"
      },
      {
        "id": "B",
        "tipo": "proc",
        "texto": "sorteio = Math.random() * 6"
      },
      {
        "id": "C",
        "tipo": "proc",
        "texto": "dado = Math.floor(sorteio) + 1"
      },
      {
        "id": "D",
        "tipo": "io",
        "texto": "Mostrar dado"
      },
      {
        "id": "E",
        "tipo": "terminal",
        "texto": "Fim"
      }
    ],
    "setas": [
      {
        "de": "A",
        "para": "B",
        "rotulo": null
      },
      {
        "de": "B",
        "para": "C",
        "rotulo": null
      },
      {
        "de": "C",
        "para": "D",
        "rotulo": null
      },
      {
        "de": "D",
        "para": "E",
        "rotulo": null
      }
    ]
  },
  "0012-relacional": {
    "titulo": "0012 · Operadores relacionais",
    "nos": [
      {
        "id": "A",
        "tipo": "terminal",
        "texto": "Início"
      },
      {
        "id": "B",
        "tipo": "io",
        "texto": "Ler idade"
      },
      {
        "id": "C",
        "tipo": "proc",
        "texto": "maiorDeIdade = idade >= 18"
      },
      {
        "id": "D",
        "tipo": "io",
        "texto": "Mostrar maiorDeIdade"
      },
      {
        "id": "E",
        "tipo": "terminal",
        "texto": "Fim"
      }
    ],
    "setas": [
      {
        "de": "A",
        "para": "B",
        "rotulo": null
      },
      {
        "de": "B",
        "para": "C",
        "rotulo": null
      },
      {
        "de": "C",
        "para": "D",
        "rotulo": null
      },
      {
        "de": "D",
        "para": "E",
        "rotulo": null
      }
    ]
  },
  "0013-comparacao": {
    "titulo": "0013 · Comparação de igualdade",
    "nos": [
      {
        "id": "A",
        "tipo": "terminal",
        "texto": "Início"
      },
      {
        "id": "B",
        "tipo": "io",
        "texto": "Ler senha digitada"
      },
      {
        "id": "C",
        "tipo": "proc",
        "texto": "correta = digitada === SENHA"
      },
      {
        "id": "D",
        "tipo": "io",
        "texto": "Mostrar correta"
      },
      {
        "id": "E",
        "tipo": "terminal",
        "texto": "Fim"
      }
    ],
    "setas": [
      {
        "de": "A",
        "para": "B",
        "rotulo": null
      },
      {
        "de": "B",
        "para": "C",
        "rotulo": null
      },
      {
        "de": "C",
        "para": "D",
        "rotulo": null
      },
      {
        "de": "D",
        "para": "E",
        "rotulo": null
      }
    ]
  },
  "0014-logico": {
    "titulo": "0014 · Operadores lógicos",
    "nos": [
      {
        "id": "A",
        "tipo": "terminal",
        "texto": "Início"
      },
      {
        "id": "B",
        "tipo": "io",
        "texto": "Ler media e frequencia"
      },
      {
        "id": "C",
        "tipo": "dec",
        "texto": "media >= 6?"
      },
      {
        "id": "F",
        "tipo": "proc",
        "texto": "aprovado = false"
      },
      {
        "id": "D",
        "tipo": "dec",
        "texto": "frequencia >= 75?"
      },
      {
        "id": "E",
        "tipo": "proc",
        "texto": "aprovado = true"
      },
      {
        "id": "G",
        "tipo": "io",
        "texto": "Mostrar aprovado"
      },
      {
        "id": "H",
        "tipo": "terminal",
        "texto": "Fim"
      }
    ],
    "setas": [
      {
        "de": "A",
        "para": "B",
        "rotulo": null
      },
      {
        "de": "B",
        "para": "C",
        "rotulo": null
      },
      {
        "de": "C",
        "para": "F",
        "rotulo": "Não"
      },
      {
        "de": "C",
        "para": "D",
        "rotulo": "Sim"
      },
      {
        "de": "D",
        "para": "F",
        "rotulo": "Não"
      },
      {
        "de": "D",
        "para": "E",
        "rotulo": "Sim"
      },
      {
        "de": "E",
        "para": "G",
        "rotulo": null
      },
      {
        "de": "F",
        "para": "G",
        "rotulo": null
      },
      {
        "de": "G",
        "para": "H",
        "rotulo": null
      }
    ]
  },
  "0015-truthy-falsy": {
    "titulo": "0015 · Truthy, falsy, ?? e ?.",
    "nos": [
      {
        "id": "A",
        "tipo": "terminal",
        "texto": "Início"
      },
      {
        "id": "B",
        "tipo": "dec",
        "texto": "apelido é null ou undefined?"
      },
      {
        "id": "C",
        "tipo": "proc",
        "texto": "usar 'sem apelido'"
      },
      {
        "id": "D",
        "tipo": "proc",
        "texto": "usar apelido"
      },
      {
        "id": "E",
        "tipo": "io",
        "texto": "Mostrar resultado"
      },
      {
        "id": "F",
        "tipo": "terminal",
        "texto": "Fim"
      }
    ],
    "setas": [
      {
        "de": "A",
        "para": "B",
        "rotulo": null
      },
      {
        "de": "B",
        "para": "C",
        "rotulo": "Sim"
      },
      {
        "de": "B",
        "para": "D",
        "rotulo": "Não"
      },
      {
        "de": "C",
        "para": "E",
        "rotulo": null
      },
      {
        "de": "D",
        "para": "E",
        "rotulo": null
      },
      {
        "de": "E",
        "para": "F",
        "rotulo": null
      }
    ]
  },
  "0016-condicional-simples": {
    "titulo": "0016 · Condicional simples (if)",
    "nos": [
      {
        "id": "A",
        "tipo": "terminal",
        "texto": "Início"
      },
      {
        "id": "B",
        "tipo": "io",
        "texto": "Ler resposta"
      },
      {
        "id": "C",
        "tipo": "dec",
        "texto": "resposta === 'sim'?"
      },
      {
        "id": "D",
        "tipo": "io",
        "texto": "Mostrar 'Leve o guarda-chuva!'"
      },
      {
        "id": "E",
        "tipo": "io",
        "texto": "Mostrar 'Bom dia!'"
      },
      {
        "id": "F",
        "tipo": "terminal",
        "texto": "Fim"
      }
    ],
    "setas": [
      {
        "de": "A",
        "para": "B",
        "rotulo": null
      },
      {
        "de": "B",
        "para": "C",
        "rotulo": null
      },
      {
        "de": "C",
        "para": "D",
        "rotulo": "Sim"
      },
      {
        "de": "C",
        "para": "E",
        "rotulo": "Não"
      },
      {
        "de": "D",
        "para": "E",
        "rotulo": null
      },
      {
        "de": "E",
        "para": "F",
        "rotulo": null
      }
    ]
  },
  "0017-condicional-composta": {
    "titulo": "0017 · Condicional composta (if / else)",
    "nos": [
      {
        "id": "A",
        "tipo": "terminal",
        "texto": "Início"
      },
      {
        "id": "B",
        "tipo": "io",
        "texto": "Ler numero"
      },
      {
        "id": "C",
        "tipo": "dec",
        "texto": "numero % 2 === 0?"
      },
      {
        "id": "D",
        "tipo": "io",
        "texto": "Mostrar 'Par'"
      },
      {
        "id": "E",
        "tipo": "io",
        "texto": "Mostrar 'Ímpar'"
      },
      {
        "id": "F",
        "tipo": "terminal",
        "texto": "Fim"
      }
    ],
    "setas": [
      {
        "de": "A",
        "para": "B",
        "rotulo": null
      },
      {
        "de": "B",
        "para": "C",
        "rotulo": null
      },
      {
        "de": "C",
        "para": "D",
        "rotulo": "Sim"
      },
      {
        "de": "C",
        "para": "E",
        "rotulo": "Não"
      },
      {
        "de": "D",
        "para": "F",
        "rotulo": null
      },
      {
        "de": "E",
        "para": "F",
        "rotulo": null
      }
    ]
  },
  "0018-condicional-aninhada": {
    "titulo": "0018 · Condicional aninhada (else if e if dentro de if)",
    "nos": [
      {
        "id": "A",
        "tipo": "terminal",
        "texto": "Início"
      },
      {
        "id": "B",
        "tipo": "io",
        "texto": "Ler media"
      },
      {
        "id": "C",
        "tipo": "dec",
        "texto": "media >= 6?"
      },
      {
        "id": "D",
        "tipo": "io",
        "texto": "Mostrar 'Aprovado'"
      },
      {
        "id": "E",
        "tipo": "dec",
        "texto": "media >= 4?"
      },
      {
        "id": "F",
        "tipo": "io",
        "texto": "Mostrar 'Recuperação'"
      },
      {
        "id": "G",
        "tipo": "io",
        "texto": "Mostrar 'Reprovado'"
      },
      {
        "id": "H",
        "tipo": "terminal",
        "texto": "Fim"
      }
    ],
    "setas": [
      {
        "de": "A",
        "para": "B",
        "rotulo": null
      },
      {
        "de": "B",
        "para": "C",
        "rotulo": null
      },
      {
        "de": "C",
        "para": "D",
        "rotulo": "Sim"
      },
      {
        "de": "C",
        "para": "E",
        "rotulo": "Não"
      },
      {
        "de": "E",
        "para": "F",
        "rotulo": "Sim"
      },
      {
        "de": "E",
        "para": "G",
        "rotulo": "Não"
      },
      {
        "de": "D",
        "para": "H",
        "rotulo": null
      },
      {
        "de": "F",
        "para": "H",
        "rotulo": null
      },
      {
        "de": "G",
        "para": "H",
        "rotulo": null
      }
    ]
  },
  "0019-ternario": {
    "titulo": "0019 · Operador ternário",
    "nos": [
      {
        "id": "A",
        "tipo": "terminal",
        "texto": "Início"
      },
      {
        "id": "B",
        "tipo": "io",
        "texto": "Ler media"
      },
      {
        "id": "C",
        "tipo": "dec",
        "texto": "media >= 6?"
      },
      {
        "id": "D",
        "tipo": "proc",
        "texto": "situacao = 'Aprovado'"
      },
      {
        "id": "E",
        "tipo": "proc",
        "texto": "situacao = 'Reprovado'"
      },
      {
        "id": "F",
        "tipo": "io",
        "texto": "Mostrar situacao"
      },
      {
        "id": "G",
        "tipo": "terminal",
        "texto": "Fim"
      }
    ],
    "setas": [
      {
        "de": "A",
        "para": "B",
        "rotulo": null
      },
      {
        "de": "B",
        "para": "C",
        "rotulo": null
      },
      {
        "de": "C",
        "para": "D",
        "rotulo": "Sim"
      },
      {
        "de": "C",
        "para": "E",
        "rotulo": "Não"
      },
      {
        "de": "D",
        "para": "F",
        "rotulo": null
      },
      {
        "de": "E",
        "para": "F",
        "rotulo": null
      },
      {
        "de": "F",
        "para": "G",
        "rotulo": null
      }
    ]
  },
  "0020-escolha": {
    "titulo": "0020 · Estrutura de escolha (switch)",
    "nos": [
      {
        "id": "A",
        "tipo": "terminal",
        "texto": "Início"
      },
      {
        "id": "B",
        "tipo": "io",
        "texto": "Ler opcao"
      },
      {
        "id": "C",
        "tipo": "dec",
        "texto": "opcao"
      },
      {
        "id": "D",
        "tipo": "io",
        "texto": "Mostrar saldo"
      },
      {
        "id": "E",
        "tipo": "io",
        "texto": "Mostrar 'Depósito realizado'"
      },
      {
        "id": "F",
        "tipo": "io",
        "texto": "Mostrar 'Até logo!'"
      },
      {
        "id": "G",
        "tipo": "io",
        "texto": "Mostrar 'Opção inválida'"
      },
      {
        "id": "H",
        "tipo": "terminal",
        "texto": "Fim"
      }
    ],
    "setas": [
      {
        "de": "A",
        "para": "B",
        "rotulo": null
      },
      {
        "de": "B",
        "para": "C",
        "rotulo": null
      },
      {
        "de": "C",
        "para": "D",
        "rotulo": "opcao = 1"
      },
      {
        "de": "C",
        "para": "E",
        "rotulo": "opcao = 2"
      },
      {
        "de": "C",
        "para": "F",
        "rotulo": "opcao = 3"
      },
      {
        "de": "C",
        "para": "G",
        "rotulo": "default"
      },
      {
        "de": "D",
        "para": "H",
        "rotulo": null
      },
      {
        "de": "E",
        "para": "H",
        "rotulo": null
      },
      {
        "de": "F",
        "para": "H",
        "rotulo": null
      },
      {
        "de": "G",
        "para": "H",
        "rotulo": null
      }
    ]
  }
};

// A frase que aparece embaixo do título de cada fluxograma.
export const frases = {
  '0001-input': 'O caminho é curto: pergunta, guarda, mostra.',
  '0002-output': 'Lê o nome e devolve um "oi" personalizado.',
  '0003-variaveis': 'O valor de gols vai sendo trocado no meio do caminho.',
  '0004-constantes': 'A cidade é fixa. O nome vem de quem está usando o programa.',
  '0005-texto': 'Recebe o nome do jeito que vier, limpa e deixa em maiúsculas.',
  '0006-numero': 'Guarda o preço e mostra bonitinho, com centavos.',
  '0007-booleano': 'A resposta "sim" ou "nao" vira um true ou false.',
  '0008-conversao': 'Chega texto, vira número, aí sim faz a conta.',
  '0009-atribuicao': 'A variável é a mesma do começo ao fim. Só o valor troca.',
  '0010-aritmetica': 'A média de duas notas. Os parênteses estão ali por um motivo.',
  '0011-math': 'O Math.random() sorteia um número entre 0 e 1 e vira um dado de 1 a 6.',
  '0012-relacional': 'Ainda não tem losango: a comparação só gera true ou false.',
  '0013-comparacao': 'O login mais simples do mundo: compara o digitado com a senha guardada.',
  '0014-logico': 'Aprovação com &&: duas portas, e o aluno precisa passar pelas duas.',
  '0015-truthy-falsy': 'O ?? é uma perguntinha só: tem valor ou não tem?',
  '0016-condicional-simples': 'Só o caminho do Sim tem uma tarefa a mais. O Não segue reto.',
  '0017-condicional-composta': 'Dois caminhos, e o programa passa por exatamente um.',
  '0018-condicional-aninhada': 'Testes em sequência. O primeiro Sim decide e o resto nem é olhado.',
  '0019-ternario': 'O mesmo desenho do if / else. A diferença é que no final sai um valor.',
  '0020-escolha': 'Um valor só, comparado com cada opção. O default pega o que sobrar.',
}

# LPPOO · Linguagem de Programação Orientada a Objetos (TypeScript)

CETAM Benjamin Constant · Técnico em Desenvolvimento de Sistemas · noturno
Professor: Marcos Jhollyfer Felix Rodrigues · 80h, de 15/10 a 12/11/2026

> Por que TypeScript? Porque a próxima disciplina é Web/Frontend. Você aprende
> orientação a objetos agora e chega lá já falando a língua do Vite, do React e
> do Node.

## Como instalar

Abra o terminal e cole:

```bash
curl -fsSL https://raw.githubusercontent.com/jhollyfer/LPPOO/main/install.sh | bash
```

O script instala o Node (via nvm) e o pnpm, baixa o projeto em `~/LPPOO` e
instala as dependências. Se a pasta `~/LPPOO` já existir, ele guarda uma cópia
como `LPPOO-backup-DATA` antes de baixar de novo, então suas respostas não se
perdem.

Quando terminar, **feche e abra o terminal**. Sem isso, o terminal ainda não
conhece o `node`.

No VS Code, instale as extensões ESLint, Prettier e Markdown Preview Mermaid
Support (para ver os fluxogramas).

## Como rodar um arquivo

```bash
cd ~/LPPOO
pnpm tsx 15102026/0001-input/exemplo-1.ts
```

Troque o caminho pelo arquivo que você quer rodar. Para conferir os tipos do
projeto inteiro, use `pnpm tsc`.

## Como cada aula funciona

Cada aula é uma pasta com a data (`15102026` é 15/10/2026). Dentro dela, uma
pasta por assunto, numerada na ordem em que a gente vê em sala:

```
15102026/0013-logico/
├── README.md        a explicação, o fluxograma, a pegadinha e o "adivinhe a saída"
├── exemplo-1.ts     exemplos resolvidos: rode, mude, quebre, rode de novo
├── exemplo-2.ts
├── exemplo-3.ts
├── exercicio-1.ts   exercícios de sala: responda DENTRO do próprio arquivo
├── exercicio-2.ts
├── exercicio-3.ts
├── exercicio-4.ts
└── PARA-CASA.md     exercícios para casa
```

O caminho de cada assunto:

1. Leia o `README.md` da pasta.
2. Rode os `exemplo-N.ts` e mexa neles à vontade.
3. Abra cada `exercicio-N.ts`, leia o enunciado no comentário e escreva a
   resposta embaixo de `// Escreva sua resposta abaixo:`.
4. Em casa, faça o `PARA-CASA.md` criando `seunome-casa-NN.ts` na mesma pasta.

Para ler dados do teclado, todo arquivo usa:

```ts
import { input } from '#core/input.ts'

const nome = input('Seu nome: ') // sempre devolve texto (string)
```

## Aula 01 · 15/10 · Revisão de lógica I

| Pasta                       | Assunto                                   |
| --------------------------- | ----------------------------------------- |
| `0001-input`                | entrada de dados com `input`              |
| `0002-output`               | `console.log` e template string           |
| `0003-variaveis-constantes` | `let`, `const`, anotação e inferência     |
| `0004-texto`                | `string` e seus métodos                   |
| `0005-numero`               | `number`, `toFixed`, `NaN`                |
| `0006-booleano`             | `boolean`, `typeof`, `null`, `undefined`  |
| `0007-conversao`            | `Number`, `parseInt`, `parseFloat`        |
| `0008-atribuicao`           | `+=`, `-=`, `++`, `--`                    |
| `0009-aritmetica`           | `+ - * / % **` e precedência              |
| `0010-math`                 | `Math.round`, `floor`, `ceil`, `random`   |
| `0011-relacional`           | `> < >= <=`                               |
| `0012-comparacao`           | `===` e `!==`                             |
| `0013-logico`               | `&&`, `\|\|`, `!`                         |
| `0014-truthy-falsy`         | truthy, falsy, `??` e `?.`                |
| `0015-condicional-simples`  | `if`                                      |
| `0016-condicional-composta` | `if / else`                               |
| `0017-condicional-aninhada` | `else if` e `if` dentro de `if`           |
| `0018-ternario`             | `condição ? a : b`                        |
| `0019-escolha`              | `switch`                                  |

## Cronograma

| Aula | Data  | Tema                                                         |
| ---- | ----- | ------------------------------------------------------------ |
| 01   | 15/10 | Revisão de lógica I: tipos, entrada, saída, condicionais     |
| 02   | 16/10 | Revisão de lógica II: laços, arrays, funções                 |
| 03   | 19/10 | Paradigmas de programação e o sistema de tipos do TypeScript |
| 04   | 20/10 | Abstração, classes e objetos                                 |
| 05   | 21/10 | Métodos, construtores, membros estáticos e módulos           |
| 06   | 22/10 | Encapsulamento e modificadores de acesso                     |
| 07   | 23/10 | Associação, agregação e composição                           |
| 08   | 26/10 | Revisão e **AV1**                                            |
| 09   | 27/10 | Herança                                                      |
| 10   | 28/10 | Polimorfismo                                                 |
| 11   | 29/10 | Classes abstratas, interfaces e composição                   |
| 12   | 30/10 | Generics, coleções e tipos utilitários                       |
| 13   | 03/11 | UML + definição do projeto                                   |
| 14   | 04/11 | Exceções e programação assíncrona                            |
| 15   | 05/11 | Revisão e **AV2**                                            |
| 16   | 06/11 | Persistência: banco de dados e padrão Repository             |
| 17   | 09/11 | Testes unitários com Vitest                                  |
| 18   | 10/11 | TypeScript no navegador: DOM, eventos, formulários e fetch   |
| 19   | 11/11 | Desenvolvimento do Projeto Integrador                        |
| 20   | 12/11 | **AV3**: apresentação do Projeto Integrador                  |

02/11 é feriado (Finados), sem aula.

## Avaliações

| Avaliação | O que é                                                     | Data  |
| --------- | ----------------------------------------------------------- | ----- |
| AV1       | teórico-prática individual, fundamentos de POO              | 26/10 |
| AV2       | prática individual: herança, polimorfismo, generics, exceções | 05/11 |
| AV3       | Projeto Integrador em equipe                                | 12/11 |

Média final = (AV1 + AV2 + AV3) / 3. Passa quem tiver média 6,0 e 75% de
frequência. Ficou abaixo de 6 na AV1 ou na AV2? Tem recuperação logo depois.

## Deu ruim?

**`node: command not found` ou `pnpm: command not found`**
Feche e abra o terminal. Se continuar, rode `source ~/.bashrc`.

**`npx` dá erro `EBADDEVENGINES`**
Neste projeto a gente usa `pnpm`, não `npx`. Troque `npx tsx` por `pnpm tsx`.

**O programa fica parado e não acontece nada**
Ele provavelmente está esperando você digitar algo no `input`. Olhe a pergunta
no terminal, digite e aperte Enter.

**Quero sair de um programa travado**
`Ctrl + C`.

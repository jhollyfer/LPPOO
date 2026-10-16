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

O script instala o Node e o pnpm e baixa o projeto em `~/LPPOO`. Se essa pasta
já existir, ela é **apagada** e baixada de novo. Quer guardar suas respostas?
Copie a pasta para outro lugar antes de rodar.

Quando terminar, **feche e abra o terminal**. Sem isso, o terminal ainda não
conhece o `node`.

No VS Code, instale as extensões ESLint e Prettier.

## Como rodar um arquivo

```bash
cd ~/LPPOO
pnpm tsx 15102026/0001-input/exemplo-1.ts
```

Troque o caminho pelo arquivo que você quer rodar. Para conferir os tipos do
projeto inteiro, use `pnpm tsc`.

## Como cada aula funciona

Cada aula é uma pasta com a data (`15102026` é 15/10/2026). O `README.md` da
aula tem a explicação de todos os assuntos. Em cada um, o texto, o **diagrama da
ideia**, o código, o **fluxograma** e o desenho da **memória** contam o mesmo
exemplo. As pastas numeradas
guardam a parte prática:

```
15102026/
├── README.md           a aula inteira
├── legenda.svg         as formas e cores dos desenhos
└── 0014-logico/
    ├── ideia.svg       o diagrama da ideia
    ├── fluxograma.svg  o caminho que o programa faz
    ├── memoria.svg     o programa rodando, com as gavetas da memória RAM
    ├── exemplo-1.ts    exemplos resolvidos: rode, mude, quebre, rode de novo
    ├── exemplo-2.ts
    ├── exemplo-3.ts
    ├── exercicio-1.ts  exercícios: enunciado e dicas no comentário,
    └── exercicio-2.ts  resposta DENTRO do próprio arquivo
```

O caminho de cada assunto:

1. Leia o assunto no `README.md` da aula.
2. Rode os `exemplo-N.ts` da pasta e mexa neles à vontade.
3. Abra o `exercicio-1.ts` e o `exercicio-2.ts`, leia o enunciado e escreva a
   resposta embaixo de `// Escreva sua resposta abaixo:`. Travou? Leia as dicas
   numeradas logo acima, na ordem.

Para ler dados do teclado, todo arquivo usa:

```ts
import { input } from '#core/input.ts'

const nome = input('Seu nome: ') // sempre devolve texto (string)
```

## Aula 01 · 15/10 · Revisão de lógica I

A explicação completa está em [`15102026/README.md`](15102026/README.md).

| Pasta                       | Assunto                                   |
| --------------------------- | ----------------------------------------- |
| `0001-input`                | entrada de dados com `input`              |
| `0002-output`               | `console.log` e template string           |
| `0003-variaveis`            | `let`, anotação e inferência              |
| `0004-constantes`           | `const` e `UPPER_CASE`                    |
| `0005-texto`                | `string` e seus métodos                   |
| `0006-numero`               | `number`, `toFixed`, `NaN`                |
| `0007-booleano`             | `boolean`, `typeof`, `null`, `undefined`  |
| `0008-conversao`            | `Number`, `parseInt`, `parseFloat`        |
| `0009-atribuicao`           | `+=`, `-=`, `++`, `--`                    |
| `0010-aritmetica`           | `+ - * / % **` e precedência              |
| `0011-math`                 | `Math.round`, `floor`, `ceil`, `random`   |
| `0012-relacional`           | `> < >= <=`                               |
| `0013-comparacao`           | `===` e `!==`                             |
| `0014-logico`               | `&&`, `\|\|`, `!`                         |
| `0015-truthy-falsy`         | truthy, falsy, `??` e `?.`                |
| `0016-condicional-simples`  | `if`                                      |
| `0017-condicional-composta` | `if / else`                               |
| `0018-condicional-aninhada` | `else if` e `if` dentro de `if`           |
| `0019-ternario`             | `condição ? a : b`                        |
| `0020-escolha`              | `switch`                                  |

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

## Para o professor: o README da aula e os desenhos

O `README.md` de cada aula e os desenhos (`ideia.svg`, `fluxograma.svg`,
`memoria.svg`) são
**gerados** por `_gerador/`. Não edite o README da aula direto: cada assunto tem
uma fonte só, em `_gerador/aulas/<data>/<pasta>/`:

- `texto.md`: o texto, com `{{ideia}}`, `{{fluxograma}}`, `{{memoria}}` e
  `{{pratique}}` onde entram os desenhos e o rodapé;
- `desenhos.mjs`: o diagrama da ideia, o fluxograma e os passos da memória, com
  os mesmos valores do texto.

```bash
cd _gerador
npm install
npm run gerar
```

Detalhes (e como criar tipos novos, como casos de uso e classes) em
`_gerador/README.md`.

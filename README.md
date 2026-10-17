# LPPOO · Linguagem de Programação Orientada a Objetos (TypeScript)

CETAM Benjamin Constant · Técnico em Desenvolvimento de Sistemas · noturno
Professor: Marcos Jhollyfer Felix Rodrigues · 80h, de 15/10 a 12/11/2026

> Por que TypeScript? Porque a próxima disciplina é Web/Frontend. Você aprende
> orientação a objetos agora e chega lá já falando a língua do Vite, do React e
> do Node. A explicação completa, com o caminho do `.ts` até o Node, está no
> [assunto 0035 da aula 03](19102026/README.md#0035--como-o-typescript-funciona-e-por-que-ele).

## Como instalar (e atualizar)

Abra o terminal e cole:

```bash
curl -fsSL https://raw.githubusercontent.com/jhollyfer/LPPOO/main/install.sh | bash
```

O comando é o mesmo na primeira vez e em **todo dia de aula**. Ele faz, em
ordem:

1. instala o Node.js, só se o computador ainda não tiver;
2. apaga a pasta `~/LPPOO` e baixa o projeto de novo, já com as resoluções dos
   exercícios da aula anterior;
3. instala o `pnpm` e o `tsx` no computador inteiro;
4. instala as dependências do projeto (`pnpm install`);
5. abre o projeto no Zed, se ele estiver instalado.

> [!WARNING]
> A pasta `~/LPPOO` é **apagada** toda vez, sem cópia. O que você escreveu nos
> exercícios some. Quer guardar alguma resposta? Copie o arquivo para outra
> pasta antes de rodar o comando.

Quando terminar, **feche e abra o terminal**. Sem isso, o terminal ainda não
conhece o `tsx`.

<details>
<summary>O que o comando faz, passo a passo (para fazer na mão)</summary>

```bash
cd ~
rm -rf ~/LPPOO
git clone https://github.com/jhollyfer/LPPOO ~/LPPOO
cd ~/LPPOO
npm install --global pnpm
npm install --global tsx
pnpm install
```

</details>

## Como abrir no editor

A gente usa o [Zed](https://zed.dev). Para abrir o projeto:

```bash
zed ~/LPPOO
```

Se você já estiver dentro da pasta, `zed .` também funciona. Em algumas
distribuições Linux o comando do Zed se chama `zeditor` ou `zededitor`: troque
`zed` pelo nome que existir no seu computador.

## Como rodar um arquivo

O instalador deixa o `tsx` instalado no computador inteiro. Com ele, use sempre
o caminho completo, começando em `~/LPPOO`, e o comando funciona de qualquer
pasta do terminal:

```bash
tsx ~/LPPOO/15102026/0001-input/A001.ts
```

Não precisa decorar: o README de cada aula já traz o comando pronto de cada
exemplo e de cada exercício, é só copiar.

Os arquivos têm nome curto e numeração única no curso inteiro:

- `A001.ts`, `A002.ts`... são os **exemplos** resolvidos;
- `E001.ts`, `E002.ts`... são os **exercícios**.

O `tsx` só roda, sem conferir os tipos. Para conferir os tipos do projeto
inteiro, use `pnpm -C ~/LPPOO tsc`.

## Como cada aula funciona

Cada aula é uma pasta com a data (`15102026` é 15/10/2026). O `README.md` da
aula tem a explicação de todos os assuntos, com o código de cada exemplo e o
comando para rodar. Em cada um, o texto, o **diagrama da
ideia**, o código e o **fluxograma** contam o mesmo exemplo. As pastas numeradas
guardam a parte prática:

```
15102026/
├── README.md           a aula inteira
├── legenda.svg         as formas e cores dos desenhos
└── 0014-logico/
    ├── ideia.svg       o diagrama da ideia
    ├── fluxograma.svg  o caminho que o programa faz
    ├── A027.ts         exemplos resolvidos: rode, mude, quebre, rode de novo
    ├── A028.ts
    ├── E027.ts         exercícios: enunciado e dicas no comentário,
    └── E028.ts         resposta DENTRO do próprio arquivo
```

Cada aula também tem uma pasta `pratica/`, com os exercícios feitos em sala.

O caminho de cada assunto:

1. Leia o assunto no `README.md` da aula.
2. Rode os exemplos (`A...ts`) da pasta e mexa neles à vontade.
3. Abra os exercícios (`E...ts`), leia o enunciado e escreva a
   resposta embaixo de `// Escreva sua resposta abaixo:`. Travou? Leia as dicas
   numeradas logo acima, na ordem.

Para ler dados do teclado, todo arquivo usa:

```ts
import { input } from '#core/input.ts'

const nome = input('Seu nome: ') // sempre devolve texto (string)
```

## Aula 01 · 15/10 · Revisão de lógica I

A explicação completa está em [`15102026/README.md`](15102026/README.md). As
questões que valem pontos ficam em
[`15102026/aula-01-logica-1/`](15102026/aula-01-logica-1/), e a prática em sala em
[`15102026/pratica/`](15102026/pratica/).

| Pasta                       | Assunto                                   |
| --------------------------- | ----------------------------------------- |
| `0001-input`                | entrada de dados com `input`              |
| `0002-output`               | `console.log` e template string           |
| `0003-variaveis`            | `let`: a caixinha que muda de valor       |
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
| `0015-condicional-simples`  | `if`                                      |
| `0016-condicional-composta` | `if / else`                               |
| `0017-condicional-aninhada` | `else if` e `if` dentro de `if`           |
| `0018-ternario`             | `condição ? a : b`                        |
| `0019-escolha`              | `switch`                                  |

## Aula 02 · 16/10 · Revisão de lógica II

A explicação completa está em [`16102026/README.md`](16102026/README.md). As
questões que valem pontos ficam em
[`16102026/aula-02-logica-2/`](16102026/aula-02-logica-2/), e a prática em sala em
[`16102026/pratica/`](16102026/pratica/).

| Pasta                    | Assunto                                                |
| ------------------------ | ------------------------------------------------------ |
| `0020-while`             | laço `while`                                           |
| `0021-do-while`          | laço `do...while`                                      |
| `0022-for`               | laço `for` com contador                                |
| `0023-break-continue`    | `break` e `continue`                                   |
| `0024-arrays`            | arrays tipados, índice, `length`, matriz (noção)       |
| `0025-for-of`            | laço `for...of`                                        |
| `0026-inserir-remover`   | `push`, `pop`, `unshift`, `shift`, `splice`            |
| `0027-funcoes`           | funções, parâmetros tipados e tipo de retorno          |
| `0028-parametros`        | parâmetro opcional, valor padrão e `void`              |
| `0029-escopo`            | escopo de variáveis                                    |
| `0030-arrow-callback`    | arrow functions e callbacks                            |
| `0031-consultar`         | `indexOf`, `includes`, `find`, `findIndex`, `some`, `every` |
| `0032-transformar`       | `map`, `filter`, `reduce`, `forEach`                   |
| `0033-organizar`         | `sort`, `reverse`, `slice`, `join`, `concat`           |
| `0034-juntando-tudo`     | o programa da aula: as notas da turma                  |

## Aula 03 · 19/10 · TypeScript

A explicação completa está em [`19102026/README.md`](19102026/README.md). As
questões que valem pontos ficam em
[`19102026/aula-03-typescript/`](19102026/aula-03-typescript/), e a prática em sala em
[`19102026/pratica/`](19102026/pratica/).

| Pasta | Assunto |
| --- | --- |
| `0035-typescript` | Como o TypeScript funciona (e por que ele) |
| `0036-tipos-basicos` | Tipos primitivos, any, unknown e never |
| `0037-truthy-falsy` | Truthy, falsy, ?? e ?. |
| `0038-inferencia` | Inferência x anotação: quando escrever o tipo |
| `0039-tipo-de-funcao` | Tipo de função e tipagem contextual |
| `0040-objetos` | Objetos |
| `0041-tipos-de-objeto` | Tipos de objeto e type |
| `0042-tipagem-estrutural` | Como o TypeScript pensa: tipos estruturais |
| `0043-interface` | interface (e type x interface) |
| `0044-opcional-readonly` | Propriedade opcional e readonly |
| `0045-uniao-literais` | União (|) e tipos literais |
| `0046-narrowing` | Narrowing: estreitando o tipo |
| `0047-uniao-discriminada` | União discriminada |
| `0048-intersecao` | Interseção (&) |
| `0049-tuplas-enum-as-const` | Tuplas, enum e as const |
| `0050-generics` | Generics (<T>) |
| `0051-tipos-utilitarios` | Tipos utilitários: Partial, Pick, Omit, Record, Readonly |
| `0052-type-guards-satisfies` | Type guards (x is T) e satisfies |
| `0053-tsconfig` | tsconfig: strict e as regras do projeto |
| `0054-juntando-tudo` | Juntando tudo: cadastro de alunos tipado |

## Cronograma

| Aula | Data  | Tema                                                         |
| ---- | ----- | ------------------------------------------------------------ |
| 01   | 15/10 | Revisão de lógica I: tipos, entrada, saída, condicionais     |
| 02   | 16/10 | Revisão de lógica II: laços, arrays, funções                 |
| 03   | 19/10 | TypeScript: tipagem estática, sistema de tipos e tsconfig    |
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
Feche e abra o terminal. Se continuar, rode o comando de instalação de novo.

**`npx` dá erro `EBADDEVENGINES`**
Neste projeto a gente não usa `npx`. Troque `npx tsx` por `tsx`.

**O programa fica parado e não acontece nada**
Ele provavelmente está esperando você digitar algo no `input`. Olhe a pergunta
no terminal, digite e aperte Enter.

**`tsx: command not found`**
O `tsx` global não foi instalado (ou foi instalado pelo `pnpm`, numa pasta que o
seu terminal não conhece). Rode `npm install --global tsx` e tente de novo. Enquanto isso, dá para rodar pelo projeto:
`pnpm -C ~/LPPOO tsx ~/LPPOO/15102026/0001-input/A001.ts`.

**Quero sair de um programa travado**
`Ctrl + C`.

## Para o professor: o README da aula e os desenhos

O `README.md` de cada aula e os desenhos (`ideia.svg`, `fluxograma.svg`) são
**gerados** por `_gerador/`. Não edite o README da aula direto: cada assunto tem
uma fonte só, em `_gerador/aulas/<data>/<pasta>/`:

- `texto.md`: o texto, com `{{ideia}}`, `{{fluxograma}}` e `{{pratique}}` onde
  entram os desenhos e o rodapé;
- `desenhos.mjs`: o diagrama da ideia e o fluxograma, com os mesmos valores do
  texto.

```bash
cd _gerador
npm install
npm run gerar
```

Detalhes (e como criar tipos novos, como casos de uso e classes) em
`_gerador/README.md`.

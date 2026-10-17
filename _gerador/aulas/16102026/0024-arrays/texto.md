## 0024 · Arrays (vetores)

Até agora, cada caixinha guardava um valor só. Hoje isso muda: uma caixinha vai
guardar uma lista inteira.

Pensa na chamada da turma. É uma lista, e cada aluno tem um número. Um array é
isso.

Imagina uma fileira de gavetas com uma etiqueta só. Cada gaveta tem um número,
o **índice**. E guarda isso: a contagem começa em **0**. A primeira gaveta é a
0, a segunda é a 1.

Vamos ver na prática. As notas da turma ficam em `notas`. Para ler uma gaveta,
use o índice entre colchetes: `notas[0]` é 8. Para trocar, atribua:
`notas[1] = 7`. E `notas.length` diz quantas gavetas existem:

{{ideia}}

```ts
const notas: number[] = [8, 6, 9]
const nomes: string[] = ['Ana', 'Bia', 'Caio']

console.log(nomes[0]) // Ana: a primeira posição é a 0
console.log(notas.length) // 3
notas[1] = 7 // troca o que está na posição 1
console.log(notas) // [ 8, 7, 9 ]
```

Repara no tipo escrito depois dos dois-pontos. Lembra dos tipos da
[0007](../15102026/README.md#0007--booleano-boolean-typeof-null-e-undefined)?
Com colchetes no fim, ele vira lista:

- `number[]` lê assim: "lista de números".
- `string[]` lê assim: "lista de textos".

Repara: `notas` é `const` e mesmo assim deu para trocar a nota. O `const` trava
a **etiqueta**, não o que tem dentro das gavetas.

{{fluxograma}}

> [!WARNING]
> Ler uma posição que não existe não dá erro: dá `undefined`, a caixa vazia
> que você viu na 0007. Em
> `[8, 7, 9]`, `notas[5]` é `undefined`. A última posição é sempre
> `notas.length - 1`.

> [!NOTE]
> **Matriz, só como noção:** um array pode guardar outros arrays. Fica uma
> tabela, com linha e coluna.
>
> ```ts
> const sala: string[][] = [
>   ['Ana', 'Bia'], // linha 0
>   ['Caio', 'Davi'], // linha 1
> ]
> console.log(sala) // o Caio está na linha 1, coluna 0
> ```

> [!NOTE]
> **Pergunta para a turma:** o array `notas` tem 3 gavetas e a última é a
> posição 2. Numa turma de 30 alunos, qual é a posição do último? (Dica: a
> contagem começa em 0.)

{{pratique}}

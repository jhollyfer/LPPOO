## 0025 · Arrays (vetores)

> A chamada da turma é uma lista: cada aluno tem um número, começando do
> primeiro. Um array é isso.

Até agora, cada caixinha guardava um valor só. O **array** é uma fileira de
gavetas com uma etiqueta só. Cada gaveta tem um número, o **índice**, e a
contagem começa em **0**: a primeira gaveta é a 0, a segunda é a 1.

As notas da turma ficam em `notas`. Para ler uma gaveta, use o índice entre
colchetes: `notas[0]` é 8. Para trocar, atribua: `notas[1] = 7`. E
`notas.length` diz quantas gavetas existem:

{{ideia}}

```ts
const notas: number[] = [8, 6, 9]
const nomes: Array<string> = ['Ana', 'Bia', 'Caio']

console.log(nomes[0]) // Ana: a primeira posição é a 0
console.log(notas.length) // 3
notas[1] = 7 // troca o que está na posição 1
console.log(notas) // [ 8, 7, 9 ]
```

`number[]` e `Array<string>` são dois jeitos de escrever a mesma ideia: "array
de números" e "array de textos". Repare que `notas` é `const` e mesmo assim deu
para trocar a nota: o `const` trava a **etiqueta**, não o que tem dentro das
gavetas.

{{fluxograma}}

> [!WARNING]
> Ler uma posição que não existe não dá erro: dá `undefined`. Em
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
> console.log(sala[1]?.[0]) // Caio: linha 1, coluna 0
> ```

{{pratique}}

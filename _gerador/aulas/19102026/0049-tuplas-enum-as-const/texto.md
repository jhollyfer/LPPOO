## 0049 · Tuplas, enum e as const

Pensa numa coordenada no mapa. Vem sempre na mesma ordem: primeiro a
latitude, depois a longitude. Duas posições, nem mais nem menos.

Hoje você vai ver três jeitos de dizer "isso aqui é fixo":

- **Tupla:** um array de **tamanho fixo** em que **cada posição tem seu tipo**.
  `[string, number]` é "um texto e depois um número".
- **`enum`:** dá **nomes** a um conjunto fixo de valores. `Turno.Noite` vale
  `'noite'`.
- **`as const`:** congela um array. Ele vira só de leitura, e cada item vira um
  literal. Dá até para tirar uma união dele.

{{ideia}}

Vamos ver os três na prática:

```ts
const nota: [string, number] = ['Ana', 8]
const [nome, valor] = nota // tira cada posição para uma variável
console.log(`${nome} tirou ${valor}`) // Ana tirou 8

enum Turno {
  Manha = 'manhã',
  Tarde = 'tarde',
  Noite = 'noite',
}
const meuTurno: Turno = Turno.Noite
console.log(meuTurno) // noite

const DIAS = ['seg', 'ter', 'qua'] as const
type Dia = (typeof DIAS)[number] // 'seg' | 'ter' | 'qua'
const hoje: Dia = 'ter'
console.log(hoje, DIAS.length) // ter 3
```

A linha `const [nome, valor] = nota` se chama **desestruturação**. Ela abre a
tupla e guarda a posição 0 em `nome` e a posição 1 em `valor`.

E o `(typeof DIAS)[number]`? Leia de dentro para fora. `typeof DIAS` é o tipo
da lista. O `[number]` pega o tipo de um item qualquer dela. Resultado: a
união `'seg' | 'ter' | 'qua'`.

E qual dos três usar? Depende do que é fixo:

{{fluxograma}}

> [!NOTE]
> O `enum` é um dos poucos pedaços do TypeScript que **continua existindo**
> quando o código vira JavaScript. Ele vira um objeto. Por isso muita gente
> prefere `as const` ou união de literais. Mas os três aparecem em projeto de
> verdade, então guarda os três.

> [!TIP]
> **Poder do TypeScript:** na tupla, a ordem conta. Trocou as posições, ele
> aponta:
>
> ```ts
> const nota: [string, number] = [8, 'Ana']
> // erro: Type 'number' is not assignable to type 'string'.
> ```

> [!NOTE]
> **Pergunta para a turma:** dá para fazer `DIAS.push('qui')`? Escreva a linha
> e veja o que o editor diz. (Dica: o `as const` congelou a lista.)

{{pratique}}

## 0049 · Tuplas, enum e as const

> No mapa, a coordenada vem sempre na mesma ordem: primeiro a latitude, depois
> a longitude. Duas posições, nem mais nem menos.

Três jeitos de dizer "isso aqui é fixo":

- **Tupla:** um array de **tamanho fixo** em que **cada posição tem seu tipo**.
  `[string, number]` é "um texto e depois um número".
- **`enum`:** dá **nomes** a um conjunto fixo de valores. `Turno.Noite` vale
  `'noite'`.
- **`as const`:** congela um valor. Um array vira uma lista só de leitura, e
  cada item vira um literal. Dá para tirar uma união dela.

{{ideia}}

```ts
const nota: [string, number] = ['Ana', 8]
const [nome, valor] = nota
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

Qual dos três usar? Depende do que é fixo:

{{fluxograma}}

> [!NOTE]
> O `enum` é um dos poucos pedaços do TypeScript que **continua existindo**
> quando o código vira JavaScript (ele vira um objeto). Por isso muita gente
> prefere `as const` ou união de literais. Os três aparecem em projetos reais,
> então vale reconhecer todos.

> [!TIP]
> **Poder do TypeScript:** na tupla a ordem conta. Trocou as posições, o
> TypeScript aponta:
>
> ```ts
> const nota: [string, number] = [8, 'Ana']
> // erro: Type 'number' is not assignable to type 'string'.
> ```

{{pratique}}

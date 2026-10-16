## 0011 · Objeto Math

> A van da excursão leva 15 pessoas e a turma tem 32. Quantas vans? Se você
> respondeu 2, alguém ficou na escola.

O `Math` é uma caixa de ferramentas que já vem pronta no TypeScript. Não precisa
instalar nada: escreva `Math.` no editor e ele mostra o que tem lá dentro.

`32 / 15` dá `2.13`. Duas vans não bastam, porque sobram 2 alunos. A conta certa
é arredondar para cima, e quem faz isso é o `Math.ceil`:

{{ideia}}

```ts
const alunos = 32
const porVan = 15
const vans = Math.ceil(alunos / porVan) // 2.13 vira 3
console.log(vans) // 3
```

{{fluxograma}}

> [!TIP]
> Para não confundir: *floor* é "chão" em inglês, então arredonda para baixo.
> *ceil* vem de *ceiling*, "teto", então arredonda para cima.

<details>
<summary>As ferramentas do Math</summary>

| Função           | O que faz                     | Exemplo               |
| ---------------- | ----------------------------- | --------------------- |
| `Math.round(x)`  | arredonda para o mais próximo | `Math.round(2.13)` → 2 |
| `Math.floor(x)`  | arredonda para baixo          | `Math.floor(2.13)` → 2 |
| `Math.ceil(x)`   | arredonda para cima           | `Math.ceil(2.13)` → 3  |
| `Math.max(a, b)` | o maior valor                 | `Math.max(3, 9)` → 9   |
| `Math.min(a, b)` | o menor valor                 | `Math.min(3, 9)` → 3   |
| `Math.random()`  | número sorteado entre 0 e 1   | `0.7312...`            |

</details>

{{pratique}}

## 0028 · Parâmetro opcional, valor padrão e void

Até agora, toda chamada mandava todos os valores. Hoje isso muda: tem
parâmetro que pode ficar de fora.

Pensa no pedido de pastel na cantina. O sabor você tem que dizer. Se não falar
o tamanho, vem o médio. E o suco é opcional: pede quem quer.

Com parâmetro é igual:

- **Obrigatório**: `sabor: string`. Sem ele, não tem pedido.
- **Com valor padrão**: `tamanho: string = 'médio'`. Se a chamada não mandar,
  vale `'médio'`.
- **Opcional**: `suco?: string`. O `?` diz que pode ficar de fora. Aí, dentro
  da função, ele vale `undefined`, a caixa vazia.

Olha o pedido da Ana. Ela só disse `'carne'`. O tamanho veio do padrão e o suco
ficou vazio:

{{ideia}}

```ts
function pedirPastel(sabor: string, tamanho: string = 'médio', suco?: string): void {
  const extra = suco === undefined ? 'sem suco' : `com suco de ${suco}`
  console.log(`Pastel de ${sabor}, ${tamanho}, ${extra}`)
}

pedirPastel('carne') // Pastel de carne, médio, sem suco
pedirPastel('queijo', 'grande', 'cupuaçu') // Pastel de queijo, grande, com suco de cupuaçu
```

Como o `suco` pode não ter vindo, a função confere com `suco === undefined`
antes de usar. É o ternário que você já conhece.

E repara no fim da primeira linha: o tipo do retorno é **`void`** (vazio). Essa
função não tem `return`. Ela não devolve nada, só mostra na tela.

No fluxograma, siga o pedido da Ana. As duas perguntas são o que a função
decide sozinha:

{{fluxograma}}

> [!NOTE]
> Guarda isso: os parâmetros com valor padrão e os opcionais vêm **depois** dos
> obrigatórios.

> [!NOTE]
> **Pergunta para a turma:** o que aparece com `pedirPastel('frango',
> 'cupuaçu')`? Acrescente a linha e rode. (Dica: os valores entram na ordem dos
> parâmetros.)

{{pratique}}

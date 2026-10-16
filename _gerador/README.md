# Gerador das aulas

Gera o `README.md` de cada aula e os desenhos de cada assunto, no estilo do
Excalidraw (traço à mão com rough.js e a fonte Excalifont).

```bash
npm install
npm run gerar          # tudo
npm run gerar -- 0017  # redesenha só a 0017 (o README sai inteiro)
```

## Onde fica cada coisa

```
aulas/15102026/
├── aula.md                  começo e fim do README da aula ({{indice}}, {{assuntos}})
└── 0016-condicional-simples/
    ├── texto.md             o texto do assunto ({{ideia}}, {{fluxograma}}, {{memoria}}, {{pratique}})
    └── desenhos.mjs         export const ideia, fluxograma e memoria
```

Saída: `15102026/README.md`, `15102026/legenda.svg` e, em cada pasta,
`ideia.svg`, `fluxograma.svg` e `memoria.svg`.

## Regras para o conteúdo ficar harmônico

1. **Um exemplo por assunto.** O gancho, o texto, o diagrama, o código e o
   fluxograma usam o mesmo cenário e os mesmos valores (`media = 5` em todos).
2. **Mesmas cores nos dois desenhos.** Azul: dado que entra ou sai. Roxo: o
   programa faz algo. Amarelo: pergunta. Verde: o caminho que o exemplo segue e
   o resultado. Cinza: caminhos que o exemplo não segue. Vermelho: erro.
3. **No fluxograma, marque o caminho do exemplo** com `caminho: ['A', 'B', ...]`.
   O que fica de fora aparece apagado.
4. **A memória roda o código do texto.** Os passos de `memoria` usam as mesmas
   linhas do bloco de código, na mesma ordem.
5. **O texto puxa o desenho.** Termine o parágrafo anterior apontando para ele
   ("No fluxograma, o `if` é o losango...").

## Tipos de desenho

| Tipo       | Desenho                | Formato do conteúdo                     |
| ---------- | ---------------------- | --------------------------------------- |
| ideia      | `tipos/ideia.mjs`      | caixas e setas (ou `fileira`, `bifurcacao`) |
| fluxograma | `tipos/fluxograma.mjs` | `nos`, `setas` e `caminho`              |
| memória    | `tipos/memoria.mjs`    | `passos`: `codigo`, `grava`, `conta`, `erro`, `sai` |
| legenda    | `tipos/legenda.mjs`    | fixo                                    |

Para um tipo novo (casos de uso, sequência, classes): crie `tipos/<tipo>.mjs`
usando as peças de `quadro.mjs`, exporte o conteúdo em `desenhos.mjs` e
acrescente o tipo em `gerar.mjs`.

As fontes Excalifont e Cascadia Code (`fonte/`) vêm do projeto Excalidraw e
usam a licença SIL Open Font License. A Cascadia foi recortada só com as letras
que a gente usa.

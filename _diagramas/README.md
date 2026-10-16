# Diagramas

Gera os desenhos das aulas no estilo do Excalidraw (traço à mão com rough.js e
a fonte Excalifont). Cada tipo de diagrama vira um arquivo `.svg` dentro da
pasta do assunto.

| Tipo       | Arquivo gerado   | Desenho              | Conteúdo                  |
| ---------- | ---------------- | -------------------- | ------------------------- |
| ideia      | `ideia.svg`      | `tipos/ideia.mjs`      | `conteudo/ideias.mjs`      |
| fluxograma | `fluxograma.svg` | `tipos/fluxograma.mjs` | `conteudo/fluxogramas.mjs` |

```bash
npm install
npm run gerar          # todas as pastas
npm run gerar -- 0017  # só da 0017
```

## Tipo novo (casos de uso, sequência, classes...)

1. Crie o desenho em `tipos/<tipo>.mjs`, usando as peças de `quadro.mjs`
   (caixa, losango, seta, título, rodapé).
2. Coloque o conteúdo em `conteudo/<tipo>.mjs`.
3. Acrescente o tipo na lista `tipos` de `gerar.mjs`.

A fonte Excalifont (`fonte/`) é do projeto Excalidraw, sob a licença SIL Open
Font License.

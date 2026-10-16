# Diagramas

Gera o `diagrama.svg` de cada pasta da aula, no estilo do Excalidraw (traço à
mão com rough.js e a fonte Excalifont).

- `diagramas.mjs`: o conteúdo de cada diagrama (título, caixas, setas, frase final).
- `gerar.mjs`: desenha e salva o SVG na pasta da aula.

```bash
npm install
npm run gerar          # todas as pastas
npm run gerar -- 0017  # só da 0017
```

A fonte Excalifont (`fonte/`) é do projeto Excalidraw, sob a licença SIL Open Font License.

# Fluxogramas animados

Projeto Remotion que gera o `fluxograma.gif` de cada pasta da aula.

- `src/grafos.ts` tem os fluxogramas: os nós (com tipo e texto) e as setas de
  cada pasta.
- `src/execucoes.ts` diz por onde a bolinha passa em cada execução, com os
  valores das variáveis, o que é digitado e o que aparece no terminal. Os ids
  (`A`, `B`, `C`...) são os mesmos de `grafos.ts`.
- `src/Fluxograma.tsx` desenha tudo; `src/layout.ts` posiciona os nós com dagre;
  `src/timeline.ts` calcula quando cada coisa acontece.

```bash
npm install
npm run dev           # preview no navegador
npm run gifs          # gera os GIFs de todas as pastas
npm run gifs -- 0017  # só da 0017
```

Se uma execução passar por uma seta que não existe no fluxograma, o script para
com erro dizendo qual seta faltou.

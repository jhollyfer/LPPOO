#!/usr/bin/env bash
# Gera fluxograma.gif dentro de cada pasta da aula.
# Uso: npm run gifs            (todas)
#      npm run gifs -- 0017    (só as pastas que começam com 0017)
set -euo pipefail
cd "$(dirname "$0")/.."
AULAS=../15102026
for pasta in "$AULAS"/${1:-}*/; do
  nome=$(basename "$pasta")
  echo "==> $nome"
  ./node_modules/.bin/remotion render "$nome" "$pasta/fluxograma.gif" \
    --codec=gif --every-nth-frame=2 --scale=0.8 --log=error
done

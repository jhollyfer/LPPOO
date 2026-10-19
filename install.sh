#!/usr/bin/env bash
# LPPOO — Instalador do ambiente da disciplina
# CETAM Benjamin Constant
#
# Uso:
#   curl -fsSL https://raw.githubusercontent.com/jhollyfer/LPPOO/main/install.sh | bash
#
# Pré-requisitos:
#   - Node.js
#   - pnpm
#   - tsx
#   - git
#   - curl
#
# ATENÇÃO:
# Este script remove ~/LPPOO antes de clonar novamente.

set -Eeuo pipefail

REPO="${LPPOO_REPO:-https://github.com/jhollyfer/LPPOO}"
PASTA="$HOME/LPPOO"

passo() {
  printf '\n\033[1;36m==> %s\033[0m\n' "$1"
}

erro() {
  printf '\n\033[1;31mERRO: %s\033[0m\n' "$1" >&2
  exit 1
}

# ---------------------------------------------------------------------------
passo "1/5 Verificando os requisitos"

for comando in curl git node pnpm tsx; do
  if ! command -v "$comando" >/dev/null 2>&1; then
    erro "$comando não encontrado no PATH. Instale-o antes de continuar."
  fi
done

echo "Node: $(node -v)"
echo "pnpm: $(pnpm --version)"
echo "tsx:  $(tsx --version | head -n 1)"

# ---------------------------------------------------------------------------
passo "2/5 Preparando a pasta do projeto"

cd "$HOME"

if [ -e "$PASTA" ] || [ -L "$PASTA" ]; then
  echo "Removendo a versão anterior de $PASTA..."

  rm -rf -- "$PASTA" ||
    erro "Não foi possível remover $PASTA. Verifique as permissões."
fi

# ---------------------------------------------------------------------------
passo "3/5 Baixando o projeto"

git clone --depth 1 "$REPO" "$PASTA" ||
  erro "Falha ao clonar o repositório."

cd "$PASTA"

# ---------------------------------------------------------------------------
passo "4/5 Instalando as dependências"

pnpm install ||
  erro "Falha ao instalar as dependências do projeto."

# ---------------------------------------------------------------------------
passo "5/5 Abrindo no editor"

editor=""

for candidato in zed zeditor zededitor; do
  if command -v "$candidato" >/dev/null 2>&1; then
    editor="$candidato"
    break
  fi
done

if [ -n "$editor" ]; then
  echo "Abrindo $PASTA no $editor."
  nohup "$editor" "$PASTA" >/dev/null 2>&1 &
else
  echo "Zed não encontrado. Abra $PASTA no seu editor."
fi

# ---------------------------------------------------------------------------
printf '\n\033[1;32mTudo pronto!\033[0m\n'
echo "Node: $(node -v)"
echo "pnpm: $(pnpm --version)"
echo "tsx:  $(tsx --version | head -n 1)"
echo
echo "Para testar:"
echo "  tsx ~/LPPOO/15102026/0001-input/A001.ts"

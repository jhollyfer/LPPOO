#!/usr/bin/env bash
# Instala o ambiente da disciplina LPPOO (CETAM Benjamin Constant).
#
# Uso:
#   curl -fsSL https://raw.githubusercontent.com/jhollyfer/LPPOO/main/install.sh | bash
#
# O que ele faz:
#   1. instala o nvm (gerenciador de versões do Node)
#   2. instala o Node.js LTS
#   3. instala o pnpm
#   4. baixa o projeto em ~/LPPOO (se já existir, guarda uma cópia antes)
#   5. roda pnpm install

set -euo pipefail

REPO="${LPPOO_REPO:-https://github.com/jhollyfer/LPPOO}"
PASTA="$HOME/LPPOO"
NVM_VERSAO="v0.40.3"

passo() { printf '\n\033[1;36m==> %s\033[0m\n' "$1"; }
erro() { printf '\n\033[1;31mERRO: %s\033[0m\n' "$1" >&2; exit 1; }

command -v curl >/dev/null || erro "curl não encontrado. Instale com: sudo apt install curl"
command -v git >/dev/null || erro "git não encontrado. Instale com: sudo apt install git"

passo "1/5 Instalando o nvm $NVM_VERSAO"
curl -fsSL "https://raw.githubusercontent.com/nvm-sh/nvm/$NVM_VERSAO/install.sh" | bash

export NVM_DIR="$HOME/.nvm"
# o nvm.sh usa variáveis não definidas, então desliga o -u só aqui
set +u
# shellcheck source=/dev/null
. "$NVM_DIR/nvm.sh"

passo "2/5 Instalando o Node.js LTS"
nvm install --lts
nvm alias default 'lts/*'
nvm use default
set -u

passo "3/5 Instalando o pnpm"
npm install --global --allow-scripts=pnpm pnpm

passo "4/5 Baixando o projeto em $PASTA"
cd "$HOME"
if [ -e "$PASTA" ]; then
  BACKUP="$PASTA-backup-$(date +%Y%m%d-%H%M%S)"
  echo "Já existe $PASTA. Movendo para $BACKUP para não perder seus exercícios."
  mv "$PASTA" "$BACKUP" 2>/dev/null || sudo mv "$PASTA" "$BACKUP"
fi
git clone "$REPO" "$PASTA"
cd "$PASTA"

passo "5/5 Instalando as dependências"
pnpm install

printf '\n\033[1;32mTudo pronto!\033[0m\n'
echo "Node $(node -v) | pnpm $(pnpm -v)"
echo
echo "Feche e abra o terminal (ou rode: source ~/.bashrc) e depois teste:"
echo "  cd ~/LPPOO"
echo "  pnpm tsx 15102026/0001-input/exemplo-1.ts"

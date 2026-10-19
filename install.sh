#!/usr/bin/env bash
# Instala ou atualiza o ambiente da disciplina LPPOO (CETAM Benjamin Constant).
#
# Uso:
#   curl -fsSL https://raw.githubusercontent.com/jhollyfer/LPPOO/main/install.sh | bash
#
# O que faz:
#   1. Instala/carrega o nvm e garante um Node.js LTS gerenciado por ele.
#   2. Apaga ~/LPPOO e baixa o projeto novamente.
#   3. Instala pnpm e tsx globalmente sem sudo.
#   4. Instala as dependências do projeto.
#   5. Abre o projeto no Zed, se estiver instalado.
#
# ATENÇÃO: a pasta ~/LPPOO é removida antes de baixar o projeto novamente.

set -eo pipefail

REPO="${LPPOO_REPO:-https://github.com/jhollyfer/LPPOO}"
PASTA="$HOME/LPPOO"
NVM_VERSAO="v0.40.3"

passo() {
  printf '\n\033[1;36m==> %s\033[0m\n' "$1"
}

erro() {
  printf '\n\033[1;31mERRO: %s\033[0m\n' "$1" >&2
  exit 1
}

command -v curl >/dev/null 2>&1 ||
  erro "curl não encontrado. Instale com: sudo apt install curl"

command -v git >/dev/null 2>&1 ||
  erro "git não encontrado. Instale com: sudo apt install git"

# ---------------------------------------------------------------------------
passo "1/5 Configurando Node.js e nvm"

# Define o diretório do nvm.
if [ -z "${NVM_DIR:-}" ]; then
  if [ -n "${XDG_CONFIG_HOME:-}" ]; then
    NVM_DIR="$XDG_CONFIG_HOME/nvm"
  else
    NVM_DIR="$HOME/.nvm"
  fi
fi
export NVM_DIR

# Carrega o nvm existente, se houver.
set +u
if [ -s "$NVM_DIR/nvm.sh" ]; then
  # shellcheck source=/dev/null
  . "$NVM_DIR/nvm.sh"
fi

# Se o nvm não estiver instalado, instala-o.
if ! command -v nvm >/dev/null 2>&1; then
  echo "Instalando o nvm $NVM_VERSAO..."
  curl -fsSL \
    "https://raw.githubusercontent.com/nvm-sh/nvm/$NVM_VERSAO/install.sh" |
    bash

  [ -s "$NVM_DIR/nvm.sh" ] ||
    erro "Não foi possível encontrar nvm.sh em $NVM_DIR"

  # shellcheck source=/dev/null
  . "$NVM_DIR/nvm.sh"
fi

# Garante um Node.js LTS dentro do nvm.
if ! nvm ls --no-colors 'lts/*' 2>/dev/null | grep -q 'v[0-9]'; then
  echo "Instalando o Node.js LTS..."
  nvm install --lts
fi

nvm use --lts
nvm alias default 'lts/*'

# Desliga novamente o modo nounset para compatibilidade com scripts do nvm.
set -u

# Confere se o Node ativo vem do nvm.
NODE_ATIVO="$(command -v node)"
case "$NODE_ATIVO" in
  "$NVM_DIR"/*)
    echo "Node.js gerenciado pelo nvm: $(node -v)"
    ;;
  *)
    erro "O Node ativo não vem do nvm: $NODE_ATIVO. Verifique a instalação."
    ;;
esac

# Confere se npm e node pertencem à mesma instalação.
NPM_ATIVO="$(command -v npm)"
case "$NPM_ATIVO" in
  "$NVM_DIR"/*) ;;
  *)
    erro "O npm ativo não vem do nvm: $NPM_ATIVO"
    ;;
esac

# ---------------------------------------------------------------------------
passo "2/5 Baixando o projeto em $PASTA"

cd "$HOME"

if [ -e "$PASTA" ] || [ -L "$PASTA" ]; then
  echo "Removendo a versão anterior de $PASTA..."
  rm -rf -- "$PASTA" ||
    erro "Não foi possível remover $PASTA. Verifique as permissões."
fi

git clone --depth 1 "$REPO" "$PASTA" ||
  erro "Falha ao clonar o repositório."

cd "$PASTA"

# ---------------------------------------------------------------------------
passo "3/5 Instalando pnpm e tsx"

# Os pacotes globais serão instalados na pasta do Node gerenciado pelo nvm.
# Não use sudo nestes comandos.
npm install --global pnpm tsx ||
  erro "Falha ao instalar pnpm e tsx. Verifique a conexão e as permissões."

# Confere se os comandos estão disponíveis.
hash -r

command -v pnpm >/dev/null 2>&1 ||
  erro "pnpm não foi encontrado no PATH."

command -v tsx >/dev/null 2>&1 ||
  erro "tsx não foi encontrado no PATH."

# ---------------------------------------------------------------------------
passo "4/5 Instalando as dependências do projeto"

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
  echo "Zed não encontrado. Abra a pasta $PASTA no seu editor."
fi

# ---------------------------------------------------------------------------
printf '\n\033[1;32mTudo pronto!\033[0m\n'
echo "Node $(node -v) | npm $(npm -v) | pnpm $(pnpm -v) | $(tsx --version | head -n 1)"
echo
echo "Feche e abra o terminal e depois teste:"
echo "  tsx ~/LPPOO/15102026/0001-input/A001.ts"

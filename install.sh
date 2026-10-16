#!/usr/bin/env bash
# Instala (ou atualiza) o ambiente da disciplina LPPOO (CETAM Benjamin Constant).
#
# Uso, na primeira vez e todo dia de aula (para pegar as resoluções novas):
#   curl -fsSL https://raw.githubusercontent.com/jhollyfer/LPPOO/main/install.sh | bash
#
# O que ele faz:
#   1. instala o Node.js LTS (via nvm), só se ainda não tiver Node
#   2. apaga ~/LPPOO e baixa o projeto de novo (sem backup: o que estiver lá some)
#   3. instala o pnpm e o tsx globais
#   4. instala as dependências do projeto (pnpm install)
#   5. abre o projeto no Zed, se ele estiver instalado

set -euo pipefail

REPO="${LPPOO_REPO:-https://github.com/jhollyfer/LPPOO}"
PASTA="$HOME/LPPOO"
NVM_VERSAO="v0.40.3"

passo() { printf '\n\033[1;36m==> %s\033[0m\n' "$1"; }
erro() { printf '\n\033[1;31mERRO: %s\033[0m\n' "$1" >&2; exit 1; }

command -v curl >/dev/null || erro "curl não encontrado. Instale com: sudo apt install curl"
command -v git >/dev/null || erro "git não encontrado. Instale com: sudo apt install git"

# ---------------------------------------------------------------------------
passo "1/5 Node.js"

# mesma regra do instalador do nvm: respeita NVM_DIR já definido,
# senão usa $XDG_CONFIG_HOME/nvm (se existir) ou ~/.nvm
if [ -z "${NVM_DIR:-}" ]; then
  if [ -n "${XDG_CONFIG_HOME:-}" ]; then
    NVM_DIR="$XDG_CONFIG_HOME/nvm"
  else
    NVM_DIR="$HOME/.nvm"
  fi
fi
export NVM_DIR

# o nvm.sh usa variáveis não definidas, então desliga o -u enquanto mexe nele
set +u
# rodando por "curl | bash" o terminal não carrega o nvm sozinho: carrega aqui
# shellcheck source=/dev/null
[ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"

if command -v node >/dev/null; then
  echo "Node $(node -v) já instalado."
else
  echo "Node não encontrado. Instalando o nvm $NVM_VERSAO e o Node LTS..."
  curl -fsSL "https://raw.githubusercontent.com/nvm-sh/nvm/$NVM_VERSAO/install.sh" | bash
  [ -s "$NVM_DIR/nvm.sh" ] || erro "nvm.sh não encontrado em $NVM_DIR"
  # shellcheck source=/dev/null
  . "$NVM_DIR/nvm.sh"
  nvm install --lts
  nvm alias default 'lts/*'
  nvm use default
fi
set -u

# ---------------------------------------------------------------------------
passo "2/5 Baixando o projeto em $PASTA"
cd "$HOME"
if [ -e "$PASTA" ]; then
  echo "Apagando a versão antiga de $PASTA."
  rm -rf "$PASTA" 2>/dev/null || sudo rm -rf "$PASTA"
fi
git clone --depth 1 "$REPO" "$PASTA"
cd "$PASTA"

# ---------------------------------------------------------------------------
passo "3/5 Instalando o pnpm e o tsx"
npm install --global pnpm

# tsx global: "tsx ~/LPPOO/..." roda os arquivos de qualquer pasta do terminal.
# Vai pelo npm, e não pelo pnpm, de propósito: o npm instala na mesma pasta do
# node, que já está no PATH. O "pnpm install --global" depende do "pnpm setup"
# editar o .bashrc/.zshrc, e isso falha em quem usa outra configuração de shell
# (zsh em ~/.config/zsh, por exemplo).
npm install --global tsx

# ---------------------------------------------------------------------------
passo "4/5 Instalando as dependências do projeto"
pnpm install

# ---------------------------------------------------------------------------
passo "5/5 Abrindo no editor"
editor=""
for candidato in zed zeditor zededitor; do
  if command -v "$candidato" >/dev/null; then
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

printf '\n\033[1;32mTudo pronto!\033[0m\n'
echo "Node $(node -v) | pnpm $(pnpm -v) | $(tsx --version | head -1)"
echo
echo "Feche e abra o terminal e depois teste:"
echo "  tsx ~/LPPOO/15102026/0001-input/A004.ts"

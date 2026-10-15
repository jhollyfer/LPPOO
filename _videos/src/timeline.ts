import type { Execucao, Grafo, Passo, TipoNo } from "./tipos";

// Duração (em frames, 30 fps) de cada parte da animação.
export const T = {
  intro: 24,
  porNo: 7,
  depoisDeMontar: 18,
  cabecalho: 34,
  viagem: 16,
  fimExecucao: 26,
  final: 40,
};

const PARADA: Record<TipoNo, number> = { terminal: 12, proc: 26, io: 32, dec: 42 };

export type Visita = { exec: number; passo: number; dados: Passo; tipo: TipoNo; inicio: number; fim: number };
export type Viagem = { exec: number; de: string; para: string; inicio: number; fim: number };
export type Bloco = { exec: number; inicio: number; fim: number };

export type Linha = {
  montagemFim: number;
  blocos: Bloco[];
  visitas: Visita[];
  viagens: Viagem[];
  duracao: number;
};

export const montarLinha = (grafo: Grafo, execucoes: Execucao[]): Linha => {
  const tipoDe = Object.fromEntries(grafo.nos.map((n) => [n.id, n.tipo]));
  const montagemFim = T.intro + grafo.nos.length * T.porNo + T.depoisDeMontar;
  const blocos: Bloco[] = [];
  const visitas: Visita[] = [];
  const viagens: Viagem[] = [];

  let f = montagemFim;
  execucoes.forEach((execucao, exec) => {
    const inicioBloco = f;
    f += T.cabecalho;
    execucao.passos.forEach((dados, passo) => {
      if (passo > 0) {
        const de = execucao.passos[passo - 1].no;
        if (!grafo.setas.some((s) => s.de === de && s.para === dados.no)) {
          throw new Error(`Não existe seta ${de} -> ${dados.no}`);
        }
        viagens.push({ exec, de, para: dados.no, inicio: f, fim: f + T.viagem });
        f += T.viagem;
      }
      const tipo = tipoDe[dados.no];
      if (!tipo) throw new Error(`Nó ${dados.no} não existe`);
      visitas.push({ exec, passo, dados, tipo, inicio: f, fim: f + PARADA[tipo] });
      f += PARADA[tipo];
    });
    f += T.fimExecucao;
    blocos.push({ exec, inicio: inicioBloco, fim: f });
  });

  return { montagemFim, blocos, visitas, viagens, duracao: f + T.final };
};

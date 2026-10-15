import dagre from "@dagrejs/dagre";
import type { Grafo, No, TipoNo } from "./tipos";

export const FONTE_NO = 26;
const LARGURA_LETRA = FONTE_NO * 0.56;

export type Ponto = { x: number; y: number };
export type NoPosicionado = No & { x: number; y: number; w: number; h: number; linhas: string[] };
export type SetaPosicionada = {
  de: string;
  para: string;
  rotulo: string | null;
  pontos: Ponto[];
  rotuloEm: Ponto | null;
};
export type Desenho = {
  nos: Record<string, NoPosicionado>;
  setas: SetaPosicionada[];
  largura: number;
  altura: number;
};

// Textos compridos quebram em duas linhas, perto do meio.
export const quebrar = (texto: string): string[] => {
  if (texto.length <= 20) return [texto];
  const espacos = [...texto.matchAll(/ /g)].map((m) => m.index ?? 0);
  if (espacos.length === 0) return [texto];
  const meio = espacos.reduce((a, b) => (Math.abs(b - texto.length / 2) < Math.abs(a - texto.length / 2) ? b : a));
  return [texto.slice(0, meio), texto.slice(meio + 1)];
};

const tamanho = (tipo: TipoNo, texto: string) => {
  const linhas = quebrar(texto);
  const largura = Math.max(...linhas.map((l) => l.length)) * LARGURA_LETRA;
  const extra = (linhas.length - 1) * FONTE_NO * 1.2;
  if (tipo === "dec") return { width: largura + 120, height: 120 + extra * 1.4 };
  if (tipo === "terminal") return { width: Math.max(150, largura + 60), height: 60 };
  if (tipo === "io") return { width: Math.max(170, largura + 80), height: 66 + extra };
  return { width: Math.max(170, largura + 48), height: 66 + extra };
};

export const posicionar = (grafo: Grafo): Desenho => {
  const g = new dagre.graphlib.Graph();
  g.setGraph({ rankdir: "TB", nodesep: 36, ranksep: 50, marginx: 20, marginy: 20 });
  g.setDefaultEdgeLabel(() => ({}));

  for (const no of grafo.nos) g.setNode(no.id, tamanho(no.tipo, no.texto));
  for (const s of grafo.setas) {
    g.setEdge(s.de, s.para, s.rotulo ? { width: s.rotulo.length * 12 + 24, height: 30, labelpos: "c" } : {});
  }
  dagre.layout(g);

  const nos: Record<string, NoPosicionado> = {};
  for (const no of grafo.nos) {
    const n = g.node(no.id);
    nos[no.id] = { ...no, x: n.x, y: n.y, w: n.width, h: n.height, linhas: quebrar(no.texto) };
  }
  const setas = grafo.setas.map((s) => {
    const e = g.edge(s.de, s.para);
    const pontos: Ponto[] = e.points.map((p: Ponto) => ({ x: p.x, y: p.y }));
    // o dagre liga as setas na caixa do nó; no losango, ligamos na ponta mais próxima
    if (nos[s.de].tipo === "dec") pontos[0] = pontaDoLosango(nos[s.de], pontos[1]);
    if (nos[s.para].tipo === "dec") pontos[pontos.length - 1] = pontaDoLosango(nos[s.para], pontos[pontos.length - 2]);
    return {
      ...s,
      pontos,
      rotuloEm: s.rotulo && e.x !== undefined && e.y !== undefined ? { x: e.x, y: e.y } : null,
    };
  });
  const info = g.graph();
  return { nos, setas, largura: info.width ?? 0, altura: info.height ?? 0 };
};

const pontaDoLosango = (no: NoPosicionado, vizinho: Ponto): Ponto => {
  const pontas = [
    { x: no.x, y: no.y - no.h / 2 },
    { x: no.x + no.w / 2, y: no.y },
    { x: no.x, y: no.y + no.h / 2 },
    { x: no.x - no.w / 2, y: no.y },
  ];
  return pontas.reduce((melhor, p) => (distancia(p, vizinho) < distancia(melhor, vizinho) ? p : melhor));
};

// Comprimento de uma linha quebrada e o ponto a uma fração t dela.
const distancia = (a: Ponto, b: Ponto) => Math.hypot(b.x - a.x, b.y - a.y);

export const comprimento = (pontos: Ponto[]) =>
  pontos.slice(1).reduce((soma, p, i) => soma + distancia(pontos[i], p), 0);

export const pontoEm = (pontos: Ponto[], t: number): Ponto => {
  let falta = comprimento(pontos) * Math.min(Math.max(t, 0), 1);
  for (let i = 1; i < pontos.length; i++) {
    const trecho = distancia(pontos[i - 1], pontos[i]);
    if (falta <= trecho) {
      const k = trecho === 0 ? 0 : falta / trecho;
      return {
        x: pontos[i - 1].x + (pontos[i].x - pontos[i - 1].x) * k,
        y: pontos[i - 1].y + (pontos[i].y - pontos[i - 1].y) * k,
      };
    }
    falta -= trecho;
  }
  return pontos[pontos.length - 1];
};

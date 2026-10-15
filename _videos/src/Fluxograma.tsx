import React from "react";
import { AbsoluteFill, Easing, interpolate, useCurrentFrame } from "remotion";
import { execucoes } from "./execucoes";
import { grafos } from "./grafos";
import {
  comprimento,
  FONTE_NO,
  NoPosicionado,
  pontoEm,
  posicionar,
  SetaPosicionada,
} from "./layout";
import { montarLinha, T } from "./timeline";
import type { TipoNo } from "./tipos";

export const LARGURA = 1200;
export const ALTURA = 675;

const COR = {
  fundo: "#0b1220",
  painel: "#111a2e",
  borda: "#24314d",
  texto: "#f1f5f9",
  apagado: "#64748b",
  seta: "#3b4a68",
  bolinha: "#facc15",
  sim: "#22c55e",
  nao: "#ef4444",
  ciano: "#38bdf8",
};

const FORMA: Record<TipoNo, { fundo: string; borda: string; nome: string }> = {
  terminal: { fundo: "#064e3b", borda: "#34d399", nome: "início / fim" },
  io: { fundo: "#3b1d6e", borda: "#a78bfa", nome: "entrada / saída" },
  proc: { fundo: "#1e3a8a", borda: "#60a5fa", nome: "processamento" },
  dec: { fundo: "#713f12", borda: "#fbbf24", nome: "decisão" },
};

const SANS = '"Inter", "Segoe UI", "Roboto", "DejaVu Sans", sans-serif';
const MONO = '"JetBrains Mono", "Fira Code", "DejaVu Sans Mono", monospace';
const clamp = { extrapolateLeft: "clamp", extrapolateRight: "clamp" } as const;

// Área do fluxograma e do painel lateral.
const AREA = { x: 16, y: 80, w: 784, h: 580 };
const PAINEL = { x: 816, y: 84, w: 364, h: 570 };

const formaSvg = (no: NoPosicionado, props: React.SVGProps<SVGElement>) => {
  const { x, y, w, h } = no;
  const esq = x - w / 2;
  const topo = y - h / 2;
  if (no.tipo === "terminal" || no.tipo === "proc") {
    return (
      <rect
        x={esq}
        y={topo}
        width={w}
        height={h}
        rx={no.tipo === "terminal" ? h / 2 : 10}
        {...(props as React.SVGProps<SVGRectElement>)}
      />
    );
  }
  const pontos =
    no.tipo === "io"
      ? [
          [esq + 18, topo],
          [esq + w, topo],
          [esq + w - 18, topo + h],
          [esq, topo + h],
        ]
      : [
          [x, topo],
          [esq + w, y],
          [x, topo + h],
          [esq, y],
        ];
  return (
    <polygon
      points={pontos.map((p) => p.join(",")).join(" ")}
      {...(props as React.SVGProps<SVGPolygonElement>)}
    />
  );
};

const caminho = (s: SetaPosicionada) =>
  s.pontos.map((p, i) => `${i === 0 ? "M" : "L"}${p.x},${p.y}`).join(" ");

type Props = { pasta: string };

export const Fluxograma: React.FC<Props> = ({ pasta }) => {
  const frame = useCurrentFrame();
  const grafo = grafos[pasta];
  const execs = execucoes[pasta];
  const desenho = React.useMemo(() => posicionar(grafo), [grafo]);
  const linha = React.useMemo(() => montarLinha(grafo, execs), [grafo, execs]);

  // escala para caber na área
  const escala = Math.min(AREA.w / desenho.largura, AREA.h / desenho.altura, 1.15);
  const dx = AREA.x + (AREA.w - desenho.largura * escala) / 2;
  const dy = AREA.y + (AREA.h - desenho.altura * escala) / 2;

  const aparece = (i: number) => T.intro + i * T.porNo;
  const indice = Object.fromEntries(grafo.nos.map((n, i) => [n.id, i]));

  // em qual execução estamos
  const bloco =
    linha.blocos.find((b) => frame >= b.inicio && frame < b.fim) ??
    (frame >= linha.montagemFim ? linha.blocos[linha.blocos.length - 1] : undefined);
  const exec = bloco?.exec ?? -1;
  const visitas = linha.visitas.filter((v) => v.exec === exec && frame >= v.inicio);
  const viagens = linha.viagens.filter((v) => v.exec === exec && frame >= v.inicio);
  const visitaAtual = visitas[visitas.length - 1];
  const viagemAtual = viagens.find((v) => frame < v.fim);
  const visitados = new Set(visitas.map((v) => v.dados.no));

  // variáveis e terminal até agora
  const vars: Record<string, string> = {};
  let mudou: { chaves: string[]; quando: number } = { chaves: [], quando: -99 };
  const terminal: { texto: string; tipo: "entrada" | "saida"; inicio: number }[] = [];
  for (const v of visitas) {
    if (v.dados.entrada !== undefined) terminal.push({ texto: v.dados.entrada, tipo: "entrada", inicio: v.inicio + 4 });
    if (v.dados.saida !== undefined) terminal.push({ texto: v.dados.saida, tipo: "saida", inicio: v.inicio + 6 });
    if (v.dados.vars && frame >= v.inicio + 8) {
      Object.assign(vars, v.dados.vars);
      mudou = { chaves: Object.keys(v.dados.vars), quando: v.inicio + 8 };
    }
  }

  // posição da bolinha
  let bolinha: { x: number; y: number } | null = null;
  if (viagemAtual) {
    const seta = desenho.setas.find((s) => s.de === viagemAtual.de && s.para === viagemAtual.para)!;
    const t = interpolate(frame, [viagemAtual.inicio, viagemAtual.fim], [0, 1], {
      ...clamp,
      easing: Easing.inOut(Easing.cubic),
    });
    bolinha = pontoEm(seta.pontos, t);
  } else if (visitaAtual && bloco && frame < bloco.fim - 6) {
    const no = desenho.nos[visitaAtual.dados.no];
    bolinha = { x: no.x, y: no.y };
  }

  const tituloOpacidade = interpolate(frame, [0, 14], [0, 1], clamp);

  return (
    <AbsoluteFill style={{ backgroundColor: COR.fundo, fontFamily: SANS, color: COR.texto }}>
      {/* cabeçalho */}
      <div
        style={{
          position: "absolute",
          left: 28,
          top: 22,
          fontSize: 30,
          fontWeight: 700,
          opacity: tituloOpacidade,
          translate: `0px ${interpolate(frame, [0, 14], [-12, 0], clamp)}px`,
        }}
      >
        {grafo.titulo}
      </div>
      <div
        style={{
          position: "absolute",
          right: 28,
          top: 30,
          fontSize: 18,
          color: COR.apagado,
          opacity: tituloOpacidade,
        }}
      >
        LPPOO · CETAM Benjamin Constant
      </div>

      {/* fluxograma */}
      <svg width={LARGURA} height={ALTURA} style={{ position: "absolute", left: 0, top: 0 }}>
        <defs>
          <marker id="ponta" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto">
            <path d="M0,0 L10,5 L0,10 z" fill={COR.seta} />
          </marker>
          <marker id="ponta-acesa" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto">
            <path d="M0,0 L10,5 L0,10 z" fill={COR.bolinha} />
          </marker>
          <filter id="brilho" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="6" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <g transform={`translate(${dx} ${dy}) scale(${escala})`}>
          {desenho.setas.map((s) => {
            const inicio = Math.max(aparece(indice[s.de]), aparece(indice[s.para]));
            const total = comprimento(s.pontos);
            const desenhado = interpolate(frame, [inicio, inicio + 10], [0, 1], clamp);
            const percorrida = viagens.find((v) => v.de === s.de && v.para === s.para);
            const acesa = percorrida
              ? interpolate(frame, [percorrida.inicio, percorrida.fim], [0, 1], clamp)
              : 0;
            return (
              <g key={`${s.de}-${s.para}`}>
                <path
                  d={caminho(s)}
                  fill="none"
                  stroke={COR.seta}
                  strokeWidth={3}
                  strokeDasharray={total}
                  strokeDashoffset={total * (1 - desenhado)}
                  markerEnd={desenhado >= 1 ? "url(#ponta)" : undefined}
                />
                {acesa > 0 && (
                  <path
                    d={caminho(s)}
                    fill="none"
                    stroke={COR.bolinha}
                    strokeWidth={4}
                    strokeDasharray={total}
                    strokeDashoffset={total * (1 - acesa)}
                    markerEnd={acesa >= 1 ? "url(#ponta-acesa)" : undefined}
                  />
                )}
                {s.rotulo && s.rotuloEm && (
                  <g opacity={desenhado}>
                    <rect
                      x={s.rotuloEm.x - (s.rotulo.length * 11 + 20) / 2}
                      y={s.rotuloEm.y - 15}
                      width={s.rotulo.length * 11 + 20}
                      height={30}
                      rx={15}
                      fill={acesa >= 1 ? COR.bolinha : COR.painel}
                      stroke={acesa >= 1 ? COR.bolinha : COR.seta}
                    />
                    <text
                      x={s.rotuloEm.x}
                      y={s.rotuloEm.y + 6}
                      textAnchor="middle"
                      fontSize={18}
                      fontWeight={700}
                      fill={acesa >= 1 ? COR.fundo : COR.texto}
                    >
                      {s.rotulo}
                    </text>
                  </g>
                )}
              </g>
            );
          })}

          {Object.values(desenho.nos).map((no) => {
            const inicio = aparece(indice[no.id]);
            const entrada = interpolate(frame, [inicio, inicio + 12], [0, 1], {
              ...clamp,
              easing: Easing.out(Easing.back(1.6)),
            });
            const ativo = visitaAtual?.dados.no === no.id && !viagemAtual;
            const pulso = ativo
              ? interpolate(frame - visitaAtual.inicio, [0, 6, 14], [1, 1.08, 1], clamp)
              : 1;
            const forma = FORMA[no.tipo];
            return (
              <g
                key={no.id}
                opacity={interpolate(frame, [inicio, inicio + 6], [0, 1], clamp)}
                transform={`translate(${no.x} ${no.y}) scale(${entrada * pulso}) translate(${-no.x} ${-no.y})`}
              >
                {formaSvg(no, {
                  fill: forma.fundo,
                  stroke: ativo ? COR.bolinha : forma.borda,
                  strokeWidth: ativo ? 5 : visitados.has(no.id) ? 4 : 2.5,
                  filter: ativo ? "url(#brilho)" : undefined,
                })}
                <text
                  x={no.x}
                  y={no.y + FONTE_NO * 0.35 - ((no.linhas.length - 1) * FONTE_NO * 1.2) / 2}
                  textAnchor="middle"
                  fontSize={FONTE_NO}
                  fontFamily={no.tipo === "terminal" ? SANS : MONO}
                  fontWeight={no.tipo === "terminal" ? 700 : 500}
                  fill={COR.texto}
                  style={{ whiteSpace: "pre" }}
                >
                  {no.linhas.map((l, i) => (
                    <tspan key={i} x={no.x} dy={i === 0 ? 0 : FONTE_NO * 1.2}>
                      {l}
                    </tspan>
                  ))}
                </text>
              </g>
            );
          })}

          {/* resultado das decisões */}
          {visitas
            .filter((v) => v.dados.teste)
            .map((v) => {
              const no = desenho.nos[v.dados.no];
              const aparecer = interpolate(frame, [v.inicio + 8, v.inicio + 16], [0, 1], clamp);
              const cor =
                v.dados.resultado === undefined ? COR.ciano : v.dados.resultado ? COR.sim : COR.nao;
              const texto =
                v.dados.resultado === undefined
                  ? v.dados.teste!
                  : `${v.dados.teste} → ${v.dados.resultado}`;
              const w = texto.length * 12.5 + 28;
              // à direita do losango; se não couber, à esquerda; senão, centralizado em cima
              const limiteDir = (AREA.x + AREA.w - dx) / escala;
              const limiteEsq = (AREA.x - dx) / escala;
              const direita = no.x + no.w / 2 - 10;
              const esquerda = no.x - no.w / 2 + 10 - w;
              const bx =
                direita + w <= limiteDir ? direita : esquerda >= limiteEsq ? esquerda : no.x - w / 2;
              return (
                <g key={`teste-${v.passo}`} opacity={aparecer} transform={`translate(0 ${(1 - aparecer) * 8})`}>
                  <rect x={bx} y={no.y - no.h / 2 - 22} width={w} height={36} rx={8} fill={cor} />
                  <text
                    x={bx + w / 2}
                    y={no.y - no.h / 2 + 3}
                    textAnchor="middle"
                    fontSize={20}
                    fontFamily={MONO}
                    fontWeight={700}
                    fill={COR.fundo}
                  >
                    {texto}
                  </text>
                </g>
              );
            })}

          {bolinha && (
            <circle cx={bolinha.x} cy={bolinha.y} r={11} fill={COR.bolinha} filter="url(#brilho)" />
          )}
        </g>
      </svg>

      {/* painel lateral */}
      <Painel
        frame={frame}
        exec={exec}
        totalExecs={execs.length}
        titulo={exec >= 0 ? execs[exec].titulo : ""}
        inicioBloco={bloco?.inicio ?? 0}
        vars={vars}
        mudou={mudou}
        terminal={terminal}
        montagemFim={linha.montagemFim}
      />
    </AbsoluteFill>
  );
};

type PainelProps = {
  frame: number;
  exec: number;
  totalExecs: number;
  titulo: string;
  inicioBloco: number;
  vars: Record<string, string>;
  mudou: { chaves: string[]; quando: number };
  terminal: { texto: string; tipo: "entrada" | "saida"; inicio: number }[];
  montagemFim: number;
};

const Caixa: React.FC<{ titulo: string; children: React.ReactNode; style?: React.CSSProperties }> = ({
  titulo,
  children,
  style,
}) => (
  <div
    style={{
      background: COR.painel,
      border: `2px solid ${COR.borda}`,
      borderRadius: 14,
      padding: "12px 16px",
      ...style,
    }}
  >
    <div style={{ fontSize: 15, letterSpacing: 2, color: COR.apagado, fontWeight: 700, marginBottom: 8 }}>
      {titulo}
    </div>
    {children}
  </div>
);

const Painel: React.FC<PainelProps> = ({
  frame,
  exec,
  totalExecs,
  titulo,
  inicioBloco,
  vars,
  mudou,
  terminal,
  montagemFim,
}) => {
  const entrada = interpolate(frame, [montagemFim - 14, montagemFim], [0, 1], clamp);
  const cartao = interpolate(frame, [inicioBloco, inicioBloco + 14], [0, 1], {
    ...clamp,
    easing: Easing.out(Easing.back(1.4)),
  });
  const brilhoVar = interpolate(frame - mudou.quando, [0, 24], [1, 0], clamp);

  return (
    <div
      style={{
        position: "absolute",
        left: PAINEL.x,
        top: PAINEL.y,
        width: PAINEL.w,
        height: PAINEL.h,
        display: "flex",
        flexDirection: "column",
        gap: 14,
        opacity: entrada,
        translate: `${(1 - entrada) * 30}px 0px`,
      }}
    >
      <div
        style={{
          background: COR.bolinha,
          color: COR.fundo,
          borderRadius: 14,
          padding: "12px 18px",
          scale: exec >= 0 ? String(0.9 + 0.1 * cartao) : "1",
          opacity: exec >= 0 ? cartao : 1,
        }}
      >
        <div style={{ fontSize: 15, fontWeight: 800, letterSpacing: 2 }}>
          {exec >= 0 ? `EXECUÇÃO ${exec + 1} DE ${totalExecs}` : "PREPARANDO"}
        </div>
        <div style={{ fontSize: 26, fontWeight: 800, marginTop: 2, whiteSpace: "pre" }}>{exec >= 0 ? titulo : "..."}</div>
      </div>

      <Caixa titulo="VARIÁVEIS" style={{ minHeight: 150 }}>
        {Object.keys(vars).length === 0 && (
          <div style={{ fontSize: 18, color: COR.apagado, fontFamily: MONO }}>(nenhuma ainda)</div>
        )}
        {Object.entries(vars).map(([nome, valor]) => {
          const acesa = mudou.chaves.includes(nome) ? brilhoVar : 0;
          return (
            <div
              key={nome}
              style={{
                fontFamily: MONO,
                fontSize: 20,
                padding: "4px 8px",
                borderRadius: 6,
                background: `rgba(250, 204, 21, ${0.35 * acesa})`,
                display: "flex",
                gap: 10,
              }}
            >
              <span style={{ color: COR.ciano }}>{nome}</span>
              <span style={{ color: COR.apagado }}>=</span>
              <span style={{ whiteSpace: "pre" }}>{valor}</span>
            </div>
          );
        })}
      </Caixa>

      <Caixa titulo="TERMINAL" style={{ flex: 1, background: "#050a14" }}>
        {terminal.map((l, i) => {
          const letras = Math.max(0, Math.floor((frame - l.inicio) / 1.2));
          if (letras === 0) return null;
          const texto = l.texto.slice(0, letras);
          return (
            <div key={i} style={{ fontFamily: MONO, fontSize: 21, lineHeight: 1.5, whiteSpace: "pre" }}>
              {l.tipo === "entrada" ? (
                <>
                  <span style={{ color: COR.apagado }}>{"? "}</span>
                  <span style={{ color: COR.ciano }}>{texto}</span>
                </>
              ) : (
                <span>{texto}</span>
              )}
            </div>
          );
        })}
        <div
          style={{
            width: 12,
            height: 22,
            marginTop: 4,
            background: COR.texto,
            opacity: Math.floor(frame / 15) % 2 === 0 ? 0.8 : 0,
          }}
        />
      </Caixa>

      <div style={{ display: "flex", gap: 14, flexWrap: "wrap", fontSize: 14, color: COR.apagado }}>
        {(Object.keys(FORMA) as TipoNo[]).map((tipo) => (
          <div key={tipo} style={{ display: "flex", alignItems: "center", gap: 6 }}>
            <div
              style={{
                width: 16,
                height: 12,
                background: FORMA[tipo].fundo,
                border: `2px solid ${FORMA[tipo].borda}`,
                borderRadius: tipo === "terminal" ? 8 : 2,
                rotate: tipo === "dec" ? "45deg" : undefined,
                transform: tipo === "io" ? "skewX(-15deg)" : undefined,
              }}
            />
            {FORMA[tipo].nome}
          </div>
        ))}
      </div>
    </div>
  );
};

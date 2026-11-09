import {
  AbsoluteFill,
  Img,
  Sequence,
  interpolate,
  spring,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { EdicaoVertical } from "../edicao/EdicaoVertical";
import { localizarFala, quadroNaEdicao } from "../edicao/sincronia";

const FPS = 30;

// Inserções ancoradas na fala real (entrada no início da 1ª palavra,
// saída no fim da última palavra da frase de saída).
const INSERCOES = [
  {
    nome: "1. RS3L recebe os satélites sob as árvores e loca cada árvore",
    entrada: { frase: "RS3L" },
    saida: { frase: "locar essa árvore" },
    // Recorte da cena da ilustração (assets/ilustracao/ilustracao_rs3l.svg)
    imagem: "assets/ilustracao_rs3l.svg",
    recorte: { y: 270, altura: 750 },
  },
] as const;

// Cartão sobre o tronco do apresentador: abaixo do rosto e acima da legenda.
const CARTAO = { largura: 560, topo: 870 };
const LARGURA_ORIGEM = 1080;
const ALTURA_ORIGEM = 1920;

const Cartao: React.FC<{
  readonly imagem: string;
  readonly recorte: { readonly y: number; readonly altura: number };
}> = ({ imagem, recorte }) => {
  const frame = useCurrentFrame();
  const { fps, durationInFrames } = useVideoConfig();
  const escala = CARTAO.largura / LARGURA_ORIGEM;
  const entrada = spring({ frame, fps, config: { damping: 200 } });
  const saida = interpolate(frame, [durationInFrames - 10, durationInFrames], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  return (
    <AbsoluteFill>
      <div
        style={{
          position: "absolute",
          left: (1080 - CARTAO.largura) / 2,
          top: CARTAO.topo,
          width: CARTAO.largura,
          height: recorte.altura * escala,
          overflow: "hidden",
          borderRadius: 28,
          border: "6px solid #ffffff",
          boxShadow: "0 18px 40px rgba(0,0,0,0.45)",
          opacity: Math.min(entrada, saida),
          transform: `scale(${0.9 + 0.1 * entrada})`,
        }}
      >
        <Img
          src={staticFile(imagem)}
          style={{
            position: "absolute",
            left: 0,
            top: -recorte.y * escala,
            width: CARTAO.largura,
            height: ALTURA_ORIGEM * escala,
          }}
        />
      </div>
    </AbsoluteFill>
  );
};

export const CriptoV01Base: React.FC = () => {
  return (
    <AbsoluteFill>
      <EdicaoVertical />
      {INSERCOES.map((ins) => {
        const de = quadroNaEdicao(localizarFala(ins.entrada.frase).inicio, FPS);
        const ate = quadroNaEdicao(localizarFala(ins.saida.frase).fim, FPS);
        return (
          <Sequence key={ins.nome} name={ins.nome} from={de} durationInFrames={ate - de}>
            <Cartao imagem={ins.imagem} recorte={ins.recorte} />
          </Sequence>
        );
      })}
    </AbsoluteFill>
  );
};

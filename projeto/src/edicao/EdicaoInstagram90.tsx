import { Video } from "@remotion/media";
import { Series, staticFile } from "remotion";
import { BasicCaptions } from "../basic-captions.element";
import { Enquadramento, type PontoEnquadramento } from "./Enquadramento";

// Gerado por scripts/gerar_composicao.py a partir de dados/plano_cortes_90s.json e da transcrição (tempos em relação ao original).
// Duração total: 2648 quadros (88.3 s a 30 fps).
export const DURACAO_EDICAO = 2648;

// Enquadramento: [tempo no original (s), centro do apresentador (px no original), zoom]
const PONTOS: ReadonlyArray<PontoEnquadramento> = [[0, 330, 1.2], [2.5, 328, 1.2], [4.5, 334, 1.2], [5.6, 330, 1.2], [6.6, 284, 1.2], [7.4, 292, 1.2], [8.4, 310, 1.2], [9.6, 334, 1.2], [10.4, 340, 1.2], [11.8, 314, 1.2], [14, 339, 1.2], [16, 357, 1.2], [18, 400, 1.2], [20, 357, 1.2], [22, 357, 1.2], [23.5, 288, 1.2], [26.5, 288, 1.2], [28, 390, 1.2], [31.4, 450, 1.2], [33.5, 200, 1.35], [34.5, 150, 1.35], [43.3, 145, 1.35], [46.2, 173, 1.35], [47.2, 173, 1.35], [50, 288, 1.2], [110, 288, 1.2], [112, 110, 1.35], [114, 144, 1.35], [116, 150, 1.35], [118.7, 135, 1.35], [119.6, 150, 1.35], [122, 165, 1.35], [124, 170, 1.35], [126, 155, 1.35], [128, 170, 1.35], [132, 175, 1.35], [136, 185, 1.35], [141.5, 190, 1.35]];

// Área da legenda: longe da faixa inferior (~420 px) e dos botões à direita do Instagram.
const LEGENDA = { largura: 840, esquerda: 80, baixo: 440 };

export const EdicaoInstagram90: React.FC = () => {
  return (
    <Series>
      <Series.Sequence
        name="Trecho 01 (1.65–6.87 s)"
        trimBefore={50}
        durationInFrames={156}
      >
        <Enquadramento pontos={PONTOS}>
          <Video
            name="Vídeo 01"
            src={staticFile("trabalho.mp4")}
            objectFit="cover"
            style={{ width: "100%", height: "100%" }}
          />
        </Enquadramento>
        <BasicCaptions
          name="Legendas 01"
          width={LEGENDA.largura}
          combineTokensWithinMilliseconds={60000}
          style={{ position: "absolute", bottom: LEGENDA.baixo, translate: `${LEGENDA.esquerda}px 0px` }}
          captions={[
              { text: " Bom", startMs: 1650, endMs: 1940, timestampMs: 1795, confidence: 0.91 },
              { text: " dia,", startMs: 1940, endMs: 2100, timestampMs: 2020, confidence: 1.00 },
              { text: " pessoal,", startMs: 2380, endMs: 2440, timestampMs: 2410, confidence: 0.99, pageBreakAfter: true },
              { text: " meu", startMs: 2780, endMs: 2920, timestampMs: 2850, confidence: 0.99 },
              { text: " nome", startMs: 2920, endMs: 3060, timestampMs: 2990, confidence: 1.00 },
              { text: " é", startMs: 3060, endMs: 3140, timestampMs: 3100, confidence: 1.00 },
              { text: " Vandré", startMs: 3140, endMs: 3420, timestampMs: 3280, confidence: 0.86 },
              { text: " Barreto,", startMs: 3420, endMs: 3860, timestampMs: 3640, confidence: 0.95, pageBreakAfter: true },
              { text: " eu", startMs: 4020, endMs: 4040, timestampMs: 4030, confidence: 0.58 },
              { text: " sou", startMs: 4040, endMs: 4160, timestampMs: 4100, confidence: 1.00 },
              { text: " engenheiro", startMs: 4160, endMs: 4540, timestampMs: 4350, confidence: 0.99 },
              { text: " sanitarista", startMs: 4540, endMs: 5020, timestampMs: 4780, confidence: 0.93, pageBreakAfter: true },
              { text: " ambiental", startMs: 5020, endMs: 5560, timestampMs: 5290, confidence: 1.00 },
              { text: " e", startMs: 5560, endMs: 6020, timestampMs: 5790, confidence: 1.00 },
              { text: " engenheiro", startMs: 6020, endMs: 6340, timestampMs: 6180, confidence: 1.00 },
              { text: " civil,", startMs: 6340, endMs: 6640, timestampMs: 6490, confidence: 1.00, pageBreakAfter: true },
          ]}
        />
      </Series.Sequence>
      <Series.Sequence
        name="Trecho 02 (7.07–10.24 s)"
        trimBefore={212}
        durationInFrames={95}
      >
        <Enquadramento pontos={PONTOS}>
          <Video
            name="Vídeo 02"
            src={staticFile("trabalho.mp4")}
            objectFit="cover"
            style={{ width: "100%", height: "100%" }}
          />
        </Enquadramento>
        <BasicCaptions
          name="Legendas 02"
          width={LEGENDA.largura}
          combineTokensWithinMilliseconds={60000}
          style={{ position: "absolute", bottom: LEGENDA.baixo, translate: `${LEGENDA.esquerda}px 0px` }}
          captions={[
              { text: " aqui", startMs: 7066, endMs: 7560, timestampMs: 7313, confidence: 0.98 },
              { text: " a", startMs: 7560, endMs: 7660, timestampMs: 7610, confidence: 0.99 },
              { text: " gente", startMs: 7660, endMs: 7700, timestampMs: 7680, confidence: 1.00 },
              { text: " está", startMs: 7700, endMs: 7820, timestampMs: 7760, confidence: 0.88 },
              { text: " fazendo", startMs: 7820, endMs: 8060, timestampMs: 7940, confidence: 1.00, pageBreakAfter: true },
              { text: " uma", startMs: 8060, endMs: 8160, timestampMs: 8110, confidence: 0.94 },
              { text: " demonstração", startMs: 8160, endMs: 8820, timestampMs: 8490, confidence: 1.00 },
              { text: " do", startMs: 8820, endMs: 9160, timestampMs: 8990, confidence: 1.00 },
              { text: " RS3L,", startMs: 9160, endMs: 10080, timestampMs: 9620, confidence: 0.85 },
          ]}
        />
      </Series.Sequence>
      <Series.Sequence
        name="Trecho 03 (10.62–11.48 s)"
        trimBefore={319}
        durationInFrames={25}
      >
        <Enquadramento pontos={PONTOS}>
          <Video
            name="Vídeo 03"
            src={staticFile("trabalho.mp4")}
            objectFit="cover"
            style={{ width: "100%", height: "100%" }}
          />
        </Enquadramento>
        <BasicCaptions
          name="Legendas 03"
          width={LEGENDA.largura}
          combineTokensWithinMilliseconds={60000}
          style={{ position: "absolute", bottom: LEGENDA.baixo, translate: `${LEGENDA.esquerda}px 0px` }}
          captions={[
              { text: " banda", startMs: 10619, endMs: 10940, timestampMs: 10779, confidence: 0.90 },
              { text: " L,", startMs: 10940, endMs: 11280, timestampMs: 11110, confidence: 1.00, pageBreakAfter: true },
          ]}
        />
      </Series.Sequence>
      <Series.Sequence
        name="Trecho 04 (11.73–14.65 s)"
        trimBefore={352}
        durationInFrames={87}
      >
        <Enquadramento pontos={PONTOS}>
          <Video
            name="Vídeo 04"
            src={staticFile("trabalho.mp4")}
            objectFit="cover"
            style={{ width: "100%", height: "100%" }}
          />
        </Enquadramento>
        <BasicCaptions
          name="Legendas 04"
          width={LEGENDA.largura}
          combineTokensWithinMilliseconds={60000}
          style={{ position: "absolute", bottom: LEGENDA.baixo, translate: `${LEGENDA.esquerda}px 0px` }}
          captions={[
              { text: " ele", startMs: 11780, endMs: 11940, timestampMs: 11860, confidence: 1.00 },
              { text: " faz", startMs: 11940, endMs: 12160, timestampMs: 12050, confidence: 1.00 },
              { text: " algumas", startMs: 12160, endMs: 12400, timestampMs: 12280, confidence: 1.00 },
              { text: " medições", startMs: 12400, endMs: 13000, timestampMs: 12700, confidence: 1.00 },
              { text: " topográficas", startMs: 13000, endMs: 13980, timestampMs: 13490, confidence: 1.00, pageBreakAfter: true },
              { text: " até", startMs: 13980, endMs: 14180, timestampMs: 14080, confidence: 0.92 },
              { text: " para", startMs: 14180, endMs: 14380, timestampMs: 14280, confidence: 0.96 },
          ]}
        />
      </Series.Sequence>
      <Series.Sequence
        name="Trecho 05 (14.94–16.56 s)"
        trimBefore={448}
        durationInFrames={49}
      >
        <Enquadramento pontos={PONTOS}>
          <Video
            name="Vídeo 05"
            src={staticFile("trabalho.mp4")}
            objectFit="cover"
            style={{ width: "100%", height: "100%" }}
          />
        </Enquadramento>
        <BasicCaptions
          name="Legendas 05"
          width={LEGENDA.largura}
          combineTokensWithinMilliseconds={60000}
          style={{ position: "absolute", bottom: LEGENDA.baixo, translate: `${LEGENDA.esquerda}px 0px` }}
          captions={[
              { text: " fazer", startMs: 14935, endMs: 15240, timestampMs: 15088, confidence: 1.00 },
              { text: " a", startMs: 15240, endMs: 15400, timestampMs: 15320, confidence: 1.00 },
              { text: " supressão", startMs: 15400, endMs: 15860, timestampMs: 15630, confidence: 0.99 },
              { text: " vegetal,", startMs: 15860, endMs: 16400, timestampMs: 16130, confidence: 1.00, pageBreakAfter: true },
          ]}
        />
      </Series.Sequence>
      <Series.Sequence
        name="Trecho 06 (17.01–18.14 s)"
        trimBefore={510}
        durationInFrames={34}
      >
        <Enquadramento pontos={PONTOS}>
          <Video
            name="Vídeo 06"
            src={staticFile("trabalho.mp4")}
            objectFit="cover"
            style={{ width: "100%", height: "100%" }}
          />
        </Enquadramento>
        <BasicCaptions
          name="Legendas 06"
          width={LEGENDA.largura}
          combineTokensWithinMilliseconds={60000}
          style={{ position: "absolute", bottom: LEGENDA.baixo, translate: `${LEGENDA.esquerda}px 0px` }}
          captions={[
              { text: " nesse", startMs: 17008, endMs: 17300, timestampMs: 17154, confidence: 0.96 },
              { text: " ambiente", startMs: 17300, endMs: 17640, timestampMs: 17470, confidence: 1.00 },
              { text: " aqui,", startMs: 17640, endMs: 17940, timestampMs: 17790, confidence: 1.00, pageBreakAfter: true },
          ]}
        />
      </Series.Sequence>
      <Series.Sequence
        name="Trecho 07 (18.46–20.50 s)"
        trimBefore={554}
        durationInFrames={61}
      >
        <Enquadramento pontos={PONTOS}>
          <Video
            name="Vídeo 07"
            src={staticFile("trabalho.mp4")}
            objectFit="cover"
            style={{ width: "100%", height: "100%" }}
          />
        </Enquadramento>
        <BasicCaptions
          name="Legendas 07"
          width={LEGENDA.largura}
          combineTokensWithinMilliseconds={60000}
          style={{ position: "absolute", bottom: LEGENDA.baixo, translate: `${LEGENDA.esquerda}px 0px` }}
          captions={[
              { text: " que", startMs: 18460, endMs: 18740, timestampMs: 18600, confidence: 1.00 },
              { text: " tem", startMs: 18740, endMs: 19240, timestampMs: 18990, confidence: 1.00 },
              { text: " as", startMs: 19240, endMs: 19380, timestampMs: 19310, confidence: 1.00 },
              { text: " copas", startMs: 19380, endMs: 19740, timestampMs: 19560, confidence: 1.00 },
              { text: " das", startMs: 19740, endMs: 19900, timestampMs: 19820, confidence: 1.00 },
              { text: " árvores,", startMs: 19900, endMs: 20300, timestampMs: 20100, confidence: 1.00, pageBreakAfter: true },
          ]}
        />
      </Series.Sequence>
      <Series.Sequence
        name="Trecho 08 (35.61–36.95 s)"
        trimBefore={1068}
        durationInFrames={41}
      >
        <Enquadramento pontos={PONTOS}>
          <Video
            name="Vídeo 08"
            src={staticFile("trabalho.mp4")}
            objectFit="cover"
            style={{ width: "100%", height: "100%" }}
          />
        </Enquadramento>
        <BasicCaptions
          name="Legendas 08"
          width={LEGENDA.largura}
          combineTokensWithinMilliseconds={60000}
          style={{ position: "absolute", bottom: LEGENDA.baixo, translate: `${LEGENDA.esquerda}px 0px` }}
          captions={[
              { text: " ele", startMs: 35920, endMs: 35980, timestampMs: 35950, confidence: 0.83 },
              { text: " não", startMs: 35980, endMs: 36160, timestampMs: 36070, confidence: 1.00 },
              { text: " vai", startMs: 36160, endMs: 36320, timestampMs: 36240, confidence: 1.00 },
              { text: " sair", startMs: 36320, endMs: 36580, timestampMs: 36450, confidence: 1.00 },
              { text: " o", startMs: 36580, endMs: 36951, timestampMs: 36766, confidence: 0.62 },
          ]}
        />
      </Series.Sequence>
      <Series.Sequence
        name="Trecho 09 (37.88–41.95 s)"
        trimBefore={1136}
        durationInFrames={122}
      >
        <Enquadramento pontos={PONTOS}>
          <Video
            name="Vídeo 09"
            src={staticFile("trabalho.mp4")}
            objectFit="cover"
            style={{ width: "100%", height: "100%" }}
          />
        </Enquadramento>
        <BasicCaptions
          name="Legendas 09"
          width={LEGENDA.largura}
          combineTokensWithinMilliseconds={60000}
          style={{ position: "absolute", bottom: LEGENDA.baixo, translate: `${LEGENDA.esquerda}px 0px` }}
          captions={[
              { text: " ponto,", startMs: 38080, endMs: 38520, timestampMs: 38300, confidence: 1.00, pageBreakAfter: true },
              { text: " não", startMs: 38740, endMs: 38980, timestampMs: 38860, confidence: 1.00 },
              { text: " vai", startMs: 38980, endMs: 39260, timestampMs: 39120, confidence: 1.00 },
              { text: " dar", startMs: 39260, endMs: 39780, timestampMs: 39520, confidence: 0.99 },
              { text: " interferência", startMs: 39780, endMs: 40380, timestampMs: 40080, confidence: 1.00 },
              { text: " nenhuma,", startMs: 40380, endMs: 40740, timestampMs: 40560, confidence: 0.99, pageBreakAfter: true },
              { text: " a", startMs: 41040, endMs: 41140, timestampMs: 41090, confidence: 1.00 },
              { text: " gente", startMs: 41140, endMs: 41200, timestampMs: 41170, confidence: 1.00 },
              { text: " consegue", startMs: 41200, endMs: 41740, timestampMs: 41470, confidence: 1.00 },
          ]}
        />
      </Series.Sequence>
      <Series.Sequence
        name="Trecho 10 (42.07–43.35 s)"
        trimBefore={1262}
        durationInFrames={38}
      >
        <Enquadramento pontos={PONTOS}>
          <Video
            name="Vídeo 10"
            src={staticFile("trabalho.mp4")}
            objectFit="cover"
            style={{ width: "100%", height: "100%" }}
          />
        </Enquadramento>
        <BasicCaptions
          name="Legendas 10"
          width={LEGENDA.largura}
          combineTokensWithinMilliseconds={60000}
          style={{ position: "absolute", bottom: LEGENDA.baixo, translate: `${LEGENDA.esquerda}px 0px` }}
          captions={[
              { text: " locar", startMs: 42074, endMs: 42600, timestampMs: 42337, confidence: 0.84 },
              { text: " essa", startMs: 42600, endMs: 42820, timestampMs: 42710, confidence: 0.98 },
              { text: " árvore.", startMs: 42820, endMs: 43220, timestampMs: 43020, confidence: 1.00, pageBreakAfter: true },
          ]}
        />
      </Series.Sequence>
      <Series.Sequence
        name="Trecho 11 (46.14–47.15 s)"
        trimBefore={1384}
        durationInFrames={30}
      >
        <Enquadramento pontos={PONTOS}>
          <Video
            name="Vídeo 11"
            src={staticFile("trabalho.mp4")}
            objectFit="cover"
            style={{ width: "100%", height: "100%" }}
          />
        </Enquadramento>
        <BasicCaptions
          name="Legendas 11"
          width={LEGENDA.largura}
          combineTokensWithinMilliseconds={60000}
          style={{ position: "absolute", bottom: LEGENDA.baixo, translate: `${LEGENDA.esquerda}px 0px` }}
          captions={[
              { text: " Aqui", startMs: 46140, endMs: 46560, timestampMs: 46350, confidence: 0.99 },
              { text: " na", startMs: 46560, endMs: 46800, timestampMs: 46680, confidence: 1.00 },
          ]}
        />
      </Series.Sequence>
      <Series.Sequence
        name="Trecho 12 (47.75–51.27 s)"
        trimBefore={1433}
        durationInFrames={105}
      >
        <Enquadramento pontos={PONTOS}>
          <Video
            name="Vídeo 12"
            src={staticFile("trabalho.mp4")}
            objectFit="cover"
            style={{ width: "100%", height: "100%" }}
          />
        </Enquadramento>
        <BasicCaptions
          name="Legendas 12"
          width={LEGENDA.largura}
          combineTokensWithinMilliseconds={60000}
          style={{ position: "absolute", bottom: LEGENDA.baixo, translate: `${LEGENDA.esquerda}px 0px` }}
          captions={[
              { text: " coletora", startMs: 47753, endMs: 48560, timestampMs: 48156, confidence: 0.98 },
              { text: " eu", startMs: 48560, endMs: 49380, timestampMs: 48970, confidence: 0.35 },
              { text: " posso", startMs: 49380, endMs: 49620, timestampMs: 49500, confidence: 1.00 },
              { text: " mostrar,", startMs: 49620, endMs: 50000, timestampMs: 49810, confidence: 0.65, pageBreakAfter: true },
              { text: " demonstrar", startMs: 50180, endMs: 50540, timestampMs: 50360, confidence: 0.93 },
              { text: " para", startMs: 50540, endMs: 50660, timestampMs: 50600, confidence: 0.98 },
              { text: " vocês", startMs: 50660, endMs: 51040, timestampMs: 50850, confidence: 1.00 },
              { text: " a", startMs: 51040, endMs: 51270, timestampMs: 51155, confidence: 0.69 },
          ]}
        />
      </Series.Sequence>
      <Series.Sequence
        name="Trecho 13 (51.68–53.93 s)"
        trimBefore={1550}
        durationInFrames={68}
      >
        <Enquadramento pontos={PONTOS}>
          <Video
            name="Vídeo 13"
            src={staticFile("trabalho.mp4")}
            objectFit="cover"
            style={{ width: "100%", height: "100%" }}
          />
        </Enquadramento>
        <BasicCaptions
          name="Legendas 13"
          width={LEGENDA.largura}
          combineTokensWithinMilliseconds={60000}
          style={{ position: "absolute", bottom: LEGENDA.baixo, translate: `${LEGENDA.esquerda}px 0px` }}
          captions={[
              { text: " quantidade", startMs: 51860, endMs: 52180, timestampMs: 52020, confidence: 1.00, pageBreakAfter: true },
              { text: " de", startMs: 52180, endMs: 52480, timestampMs: 52330, confidence: 1.00 },
              { text: " pontos", startMs: 52480, endMs: 52700, timestampMs: 52590, confidence: 1.00 },
              { text: " que", startMs: 52700, endMs: 52880, timestampMs: 52790, confidence: 1.00 },
              { text: " foi", startMs: 52880, endMs: 53060, timestampMs: 52970, confidence: 0.94 },
              { text: " realizado,", startMs: 53060, endMs: 53640, timestampMs: 53350, confidence: 0.99, pageBreakAfter: true },
          ]}
        />
      </Series.Sequence>
      <Series.Sequence
        name="Trecho 14 (54.27–58.61 s)"
        trimBefore={1628}
        durationInFrames={130}
      >
        <Enquadramento pontos={PONTOS}>
          <Video
            name="Vídeo 14"
            src={staticFile("trabalho.mp4")}
            objectFit="cover"
            style={{ width: "100%", height: "100%" }}
          />
        </Enquadramento>
        <BasicCaptions
          name="Legendas 14"
          width={LEGENDA.largura}
          combineTokensWithinMilliseconds={60000}
          style={{ position: "absolute", bottom: LEGENDA.baixo, translate: `${LEGENDA.esquerda}px 0px` }}
          captions={[
              { text: " pegando", startMs: 54266, endMs: 55220, timestampMs: 54743, confidence: 0.92 },
              { text: " a", startMs: 55220, endMs: 56800, timestampMs: 56010, confidence: 1.00 },
              { text: " locação", startMs: 56800, endMs: 57740, timestampMs: 57270, confidence: 0.94 },
              { text: " de", startMs: 57740, endMs: 58240, timestampMs: 57990, confidence: 1.00 },
          ]}
        />
      </Series.Sequence>
      <Series.Sequence
        name="Trecho 15 (58.78–60.12 s)"
        trimBefore={1763}
        durationInFrames={41}
      >
        <Enquadramento pontos={PONTOS}>
          <Video
            name="Vídeo 15"
            src={staticFile("trabalho.mp4")}
            objectFit="cover"
            style={{ width: "100%", height: "100%" }}
          />
        </Enquadramento>
        <BasicCaptions
          name="Legendas 15"
          width={LEGENDA.largura}
          combineTokensWithinMilliseconds={60000}
          style={{ position: "absolute", bottom: LEGENDA.baixo, translate: `${LEGENDA.esquerda}px 0px` }}
          captions={[
              { text: " cada", startMs: 58782, endMs: 59560, timestampMs: 59171, confidence: 1.00 },
              { text: " árvore.", startMs: 59560, endMs: 60000, timestampMs: 59780, confidence: 1.00, pageBreakAfter: true },
          ]}
        />
      </Series.Sequence>
      <Series.Sequence
        name="Trecho 16 (61.67–63.82 s)"
        trimBefore={1850}
        durationInFrames={65}
      >
        <Enquadramento pontos={PONTOS}>
          <Video
            name="Vídeo 16"
            src={staticFile("trabalho.mp4")}
            objectFit="cover"
            style={{ width: "100%", height: "100%" }}
          />
        </Enquadramento>
        <BasicCaptions
          name="Legendas 16"
          width={LEGENDA.largura}
          combineTokensWithinMilliseconds={60000}
          style={{ position: "absolute", bottom: LEGENDA.baixo, translate: `${LEGENDA.esquerda}px 0px` }}
          captions={[
              { text: " Aqui", startMs: 61670, endMs: 62100, timestampMs: 61885, confidence: 1.00 },
              { text: " também", startMs: 62100, endMs: 62560, timestampMs: 62330, confidence: 0.99 },
              { text: " a", startMs: 62560, endMs: 63180, timestampMs: 62870, confidence: 0.98 },
              { text: " gente", startMs: 63180, endMs: 63360, timestampMs: 63270, confidence: 1.00 },
          ]}
        />
      </Series.Sequence>
      <Series.Sequence
        name="Trecho 17 (64.07–65.25 s)"
        trimBefore={1922}
        durationInFrames={36}
      >
        <Enquadramento pontos={PONTOS}>
          <Video
            name="Vídeo 17"
            src={staticFile("trabalho.mp4")}
            objectFit="cover"
            style={{ width: "100%", height: "100%" }}
          />
        </Enquadramento>
        <BasicCaptions
          name="Legendas 17"
          width={LEGENDA.largura}
          combineTokensWithinMilliseconds={60000}
          style={{ position: "absolute", bottom: LEGENDA.baixo, translate: `${LEGENDA.esquerda}px 0px` }}
          captions={[
              { text: " consegue", startMs: 64073, endMs: 64860, timestampMs: 64466, confidence: 1.00 },
          ]}
        />
      </Series.Sequence>
      <Series.Sequence
        name="Trecho 18 (65.59–66.75 s)"
        trimBefore={1968}
        durationInFrames={34}
      >
        <Enquadramento pontos={PONTOS}>
          <Video
            name="Vídeo 18"
            src={staticFile("trabalho.mp4")}
            objectFit="cover"
            style={{ width: "100%", height: "100%" }}
          />
        </Enquadramento>
        <BasicCaptions
          name="Legendas 18"
          width={LEGENDA.largura}
          combineTokensWithinMilliseconds={60000}
          style={{ position: "absolute", bottom: LEGENDA.baixo, translate: `${LEGENDA.esquerda}px 0px` }}
          captions={[
              { text: " visualizar", startMs: 65587, endMs: 66460, timestampMs: 66024, confidence: 1.00, pageBreakAfter: true },
          ]}
        />
      </Series.Sequence>
      <Series.Sequence
        name="Trecho 19 (67.20–69.48 s)"
        trimBefore={2016}
        durationInFrames={68}
      >
        <Enquadramento pontos={PONTOS}>
          <Video
            name="Vídeo 19"
            src={staticFile("trabalho.mp4")}
            objectFit="cover"
            style={{ width: "100%", height: "100%" }}
          />
        </Enquadramento>
        <BasicCaptions
          name="Legendas 19"
          width={LEGENDA.largura}
          combineTokensWithinMilliseconds={60000}
          style={{ position: "absolute", bottom: LEGENDA.baixo, translate: `${LEGENDA.esquerda}px 0px` }}
          captions={[
              { text: " as", startMs: 67201, endMs: 67980, timestampMs: 67590, confidence: 1.00 },
              { text: " informações", startMs: 67980, endMs: 68420, timestampMs: 68200, confidence: 1.00 },
              { text: " de", startMs: 68420, endMs: 68660, timestampMs: 68540, confidence: 1.00 },
              { text: " cada", startMs: 68660, endMs: 68860, timestampMs: 68760, confidence: 1.00 },
              { text: " ponto,", startMs: 68860, endMs: 69280, timestampMs: 69070, confidence: 1.00, pageBreakAfter: true },
          ]}
        />
      </Series.Sequence>
      <Series.Sequence
        name="Trecho 20 (71.76–73.34 s)"
        trimBefore={2153}
        durationInFrames={47}
      >
        <Enquadramento pontos={PONTOS}>
          <Video
            name="Vídeo 20"
            src={staticFile("trabalho.mp4")}
            objectFit="cover"
            style={{ width: "100%", height: "100%" }}
          />
        </Enquadramento>
        <BasicCaptions
          name="Legendas 20"
          width={LEGENDA.largura}
          combineTokensWithinMilliseconds={60000}
          style={{ position: "absolute", bottom: LEGENDA.baixo, translate: `${LEGENDA.esquerda}px 0px` }}
          captions={[
              { text: " as", startMs: 71762, endMs: 72460, timestampMs: 72111, confidence: 1.00 },
              { text: " coordenadas", startMs: 72460, endMs: 73120, timestampMs: 72790, confidence: 1.00 },
          ]}
        />
      </Series.Sequence>
      <Series.Sequence
        name="Trecho 21 (73.56–75.79 s)"
        trimBefore={2207}
        durationInFrames={67}
      >
        <Enquadramento pontos={PONTOS}>
          <Video
            name="Vídeo 21"
            src={staticFile("trabalho.mp4")}
            objectFit="cover"
            style={{ width: "100%", height: "100%" }}
          />
        </Enquadramento>
        <BasicCaptions
          name="Legendas 21"
          width={LEGENDA.largura}
          combineTokensWithinMilliseconds={60000}
          style={{ position: "absolute", bottom: LEGENDA.baixo, translate: `${LEGENDA.esquerda}px 0px` }}
          captions={[
              { text: " em", startMs: 73559, endMs: 74780, timestampMs: 74170, confidence: 0.96 },
              { text: " UTM,", startMs: 74780, endMs: 75360, timestampMs: 75070, confidence: 0.97 },
          ]}
        />
      </Series.Sequence>
      <Series.Sequence
        name="Trecho 22 (76.03–76.70 s)"
        trimBefore={2281}
        durationInFrames={20}
      >
        <Enquadramento pontos={PONTOS}>
          <Video
            name="Vídeo 22"
            src={staticFile("trabalho.mp4")}
            objectFit="cover"
            style={{ width: "100%", height: "100%" }}
          />
        </Enquadramento>
        <BasicCaptions
          name="Legendas 22"
          width={LEGENDA.largura}
          combineTokensWithinMilliseconds={60000}
          style={{ position: "absolute", bottom: LEGENDA.baixo, translate: `${LEGENDA.esquerda}px 0px` }}
          captions={[
              { text: " os", startMs: 76025, endMs: 76300, timestampMs: 76162, confidence: 1.00 },
              { text: " erros", startMs: 76300, endMs: 76660, timestampMs: 76480, confidence: 1.00, pageBreakAfter: true },
          ]}
        />
      </Series.Sequence>
      <Series.Sequence
        name="Trecho 23 (79.92–80.03 s)"
        trimBefore={2398}
        durationInFrames={3}
      >
        <Enquadramento pontos={PONTOS}>
          <Video
            name="Vídeo 23"
            src={staticFile("trabalho.mp4")}
            objectFit="cover"
            style={{ width: "100%", height: "100%" }}
          />
        </Enquadramento>
        <BasicCaptions
          name="Legendas 23"
          width={LEGENDA.largura}
          combineTokensWithinMilliseconds={60000}
          style={{ position: "absolute", bottom: LEGENDA.baixo, translate: `${LEGENDA.esquerda}px 0px` }}
          captions={[

          ]}
        />
      </Series.Sequence>
      <Series.Sequence
        name="Trecho 24 (80.43–82.49 s)"
        trimBefore={2413}
        durationInFrames={62}
      >
        <Enquadramento pontos={PONTOS}>
          <Video
            name="Vídeo 24"
            src={staticFile("trabalho.mp4")}
            objectFit="cover"
            style={{ width: "100%", height: "100%" }}
          />
        </Enquadramento>
        <BasicCaptions
          name="Legendas 24"
          width={LEGENDA.largura}
          combineTokensWithinMilliseconds={60000}
          style={{ position: "absolute", bottom: LEGENDA.baixo, translate: `${LEGENDA.esquerda}px 0px` }}
          captions={[
              { text: " é", startMs: 80434, endMs: 80660, timestampMs: 80547, confidence: 0.56 },
              { text: " a", startMs: 80660, endMs: 80940, timestampMs: 80800, confidence: 0.95 },
              { text: " compensação", startMs: 80940, endMs: 81520, timestampMs: 81230, confidence: 0.99 },
              { text: " de", startMs: 81520, endMs: 81660, timestampMs: 81590, confidence: 0.97 },
              { text: " inclinação", startMs: 81660, endMs: 82220, timestampMs: 81940, confidence: 1.00, pageBreakAfter: true },
              { text: " que", startMs: 82220, endMs: 82488, timestampMs: 82354, confidence: 0.78 },
          ]}
        />
      </Series.Sequence>
      <Series.Sequence
        name="Trecho 25 (82.97–84.67 s)"
        trimBefore={2489}
        durationInFrames={51}
      >
        <Enquadramento pontos={PONTOS}>
          <Video
            name="Vídeo 25"
            src={staticFile("trabalho.mp4")}
            objectFit="cover"
            style={{ width: "100%", height: "100%" }}
          />
        </Enquadramento>
        <BasicCaptions
          name="Legendas 25"
          width={LEGENDA.largura}
          combineTokensWithinMilliseconds={60000}
          style={{ position: "absolute", bottom: LEGENDA.baixo, translate: `${LEGENDA.esquerda}px 0px` }}
          captions={[
              { text: " é", startMs: 83180, endMs: 83360, timestampMs: 83270, confidence: 0.44 },
              { text: " o", startMs: 83360, endMs: 83500, timestampMs: 83430, confidence: 0.99 },
              { text: " sistema", startMs: 83500, endMs: 83920, timestampMs: 83710, confidence: 0.99 },
              { text: " IMU,", startMs: 83920, endMs: 84300, timestampMs: 84110, confidence: 0.48 },
              { text: " né,", startMs: 84300, endMs: 84480, timestampMs: 84390, confidence: 0.64, pageBreakAfter: true },
          ]}
        />
      </Series.Sequence>
      <Series.Sequence
        name="Trecho 26 (84.82–89.65 s)"
        trimBefore={2545}
        durationInFrames={144}
      >
        <Enquadramento pontos={PONTOS}>
          <Video
            name="Vídeo 26"
            src={staticFile("trabalho.mp4")}
            objectFit="cover"
            style={{ width: "100%", height: "100%" }}
          />
        </Enquadramento>
        <BasicCaptions
          name="Legendas 26"
          width={LEGENDA.largura}
          combineTokensWithinMilliseconds={60000}
          style={{ position: "absolute", bottom: LEGENDA.baixo, translate: `${LEGENDA.esquerda}px 0px` }}
          captions={[
              { text: " você", startMs: 84820, endMs: 85100, timestampMs: 84960, confidence: 0.70 },
              { text: " pode", startMs: 85100, endMs: 85440, timestampMs: 85270, confidence: 1.00 },
              { text: " ter", startMs: 85440, endMs: 85620, timestampMs: 85530, confidence: 0.98 },
              { text: " uma", startMs: 85620, endMs: 85740, timestampMs: 85680, confidence: 1.00 },
              { text: " inclinação", startMs: 85740, endMs: 86240, timestampMs: 85990, confidence: 1.00, pageBreakAfter: true },
              { text: " até", startMs: 86240, endMs: 87060, timestampMs: 86650, confidence: 0.99 },
              { text: " de", startMs: 87060, endMs: 87220, timestampMs: 87140, confidence: 0.98 },
              { text: " 60", startMs: 87220, endMs: 87640, timestampMs: 87430, confidence: 0.89 },
              { text: " graus", startMs: 87640, endMs: 88420, timestampMs: 88030, confidence: 0.98 },
              { text: " para", startMs: 88420, endMs: 88580, timestampMs: 88500, confidence: 0.96 },
              { text: " você", startMs: 88580, endMs: 88780, timestampMs: 88680, confidence: 1.00 },
              { text: " pegar", startMs: 88780, endMs: 89140, timestampMs: 88960, confidence: 0.99, pageBreakAfter: true },
              { text: " o", startMs: 89140, endMs: 89649, timestampMs: 89394, confidence: 0.86 },
          ]}
        />
      </Series.Sequence>
      <Series.Sequence
        name="Trecho 27 (89.94–90.68 s)"
        trimBefore={2698}
        durationInFrames={22}
      >
        <Enquadramento pontos={PONTOS}>
          <Video
            name="Vídeo 27"
            src={staticFile("trabalho.mp4")}
            objectFit="cover"
            style={{ width: "100%", height: "100%" }}
          />
        </Enquadramento>
        <BasicCaptions
          name="Legendas 27"
          width={LEGENDA.largura}
          combineTokensWithinMilliseconds={60000}
          style={{ position: "absolute", bottom: LEGENDA.baixo, translate: `${LEGENDA.esquerda}px 0px` }}
          captions={[
              { text: " ponto", startMs: 90120, endMs: 90500, timestampMs: 90310, confidence: 0.99 },
              { text: " e", startMs: 90500, endMs: 90678, timestampMs: 90589, confidence: 0.96 },
          ]}
        />
      </Series.Sequence>
      <Series.Sequence
        name="Trecho 28 (90.93–92.01 s)"
        trimBefore={2728}
        durationInFrames={32}
      >
        <Enquadramento pontos={PONTOS}>
          <Video
            name="Vídeo 28"
            src={staticFile("trabalho.mp4")}
            objectFit="cover"
            style={{ width: "100%", height: "100%" }}
          />
        </Enquadramento>
        <BasicCaptions
          name="Legendas 28"
          width={LEGENDA.largura}
          combineTokensWithinMilliseconds={60000}
          style={{ position: "absolute", bottom: LEGENDA.baixo, translate: `${LEGENDA.esquerda}px 0px` }}
          captions={[
              { text: " tem", startMs: 91100, endMs: 91220, timestampMs: 91160, confidence: 0.89 },
              { text: " uma", startMs: 91220, endMs: 91340, timestampMs: 91280, confidence: 0.99 },
              { text: " precisão", startMs: 91340, endMs: 91880, timestampMs: 91610, confidence: 1.00, pageBreakAfter: true },
          ]}
        />
      </Series.Sequence>
      <Series.Sequence
        name="Trecho 29 (92.37–93.52 s)"
        trimBefore={2771}
        durationInFrames={35}
      >
        <Enquadramento pontos={PONTOS}>
          <Video
            name="Vídeo 29"
            src={staticFile("trabalho.mp4")}
            objectFit="cover"
            style={{ width: "100%", height: "100%" }}
          />
        </Enquadramento>
        <BasicCaptions
          name="Legendas 29"
          width={LEGENDA.largura}
          combineTokensWithinMilliseconds={60000}
          style={{ position: "absolute", bottom: LEGENDA.baixo, translate: `${LEGENDA.esquerda}px 0px` }}
          captions={[
              { text: " centimétrica", startMs: 92373, endMs: 93340, timestampMs: 92857, confidence: 0.93 },
          ]}
        />
      </Series.Sequence>
      <Series.Sequence
        name="Trecho 30 (95.68–97.90 s)"
        trimBefore={2870}
        durationInFrames={67}
      >
        <Enquadramento pontos={PONTOS}>
          <Video
            name="Vídeo 30"
            src={staticFile("trabalho.mp4")}
            objectFit="cover"
            style={{ width: "100%", height: "100%" }}
          />
        </Enquadramento>
        <BasicCaptions
          name="Legendas 30"
          width={LEGENDA.largura}
          combineTokensWithinMilliseconds={60000}
          style={{ position: "absolute", bottom: LEGENDA.baixo, translate: `${LEGENDA.esquerda}px 0px` }}
          captions={[
              { text: " e", startMs: 95680, endMs: 95920, timestampMs: 95800, confidence: 0.57 },
              { text: " aqui", startMs: 95920, endMs: 97180, timestampMs: 96550, confidence: 0.89 },
              { text: " também", startMs: 97180, endMs: 97480, timestampMs: 97330, confidence: 0.99 },
              { text: " tem", startMs: 97480, endMs: 97800, timestampMs: 97640, confidence: 0.99, pageBreakAfter: true },
          ]}
        />
      </Series.Sequence>
      <Series.Sequence
        name="Trecho 31 (99.66–104.95 s)"
        trimBefore={2990}
        durationInFrames={158}
      >
        <Enquadramento pontos={PONTOS}>
          <Video
            name="Vídeo 31"
            src={staticFile("trabalho.mp4")}
            objectFit="cover"
            style={{ width: "100%", height: "100%" }}
          />
        </Enquadramento>
        <BasicCaptions
          name="Legendas 31"
          width={LEGENDA.largura}
          combineTokensWithinMilliseconds={60000}
          style={{ position: "absolute", bottom: LEGENDA.baixo, translate: `${LEGENDA.esquerda}px 0px` }}
          captions={[
              { text: " algumas", startMs: 99660, endMs: 100000, timestampMs: 99830, confidence: 0.94 },
              { text: " ferramentas", startMs: 100000, endMs: 100600, timestampMs: 100300, confidence: 1.00 },
              { text: " que", startMs: 100600, endMs: 100700, timestampMs: 100650, confidence: 1.00 },
              { text: " você", startMs: 100700, endMs: 100880, timestampMs: 100790, confidence: 1.00, pageBreakAfter: true },
              { text: " pode", startMs: 100880, endMs: 101140, timestampMs: 101010, confidence: 1.00 },
              { text: " utilizar", startMs: 101140, endMs: 101580, timestampMs: 101360, confidence: 0.99 },
              { text: " em", startMs: 101580, endMs: 102040, timestampMs: 101810, confidence: 0.98 },
              { text: " campo,", startMs: 102040, endMs: 102400, timestampMs: 102220, confidence: 0.99 },
              { text: " né,", startMs: 102400, endMs: 102580, timestampMs: 102490, confidence: 0.97, pageBreakAfter: true },
              { text: " até", startMs: 102580, endMs: 103580, timestampMs: 103080, confidence: 0.93 },
              { text: " para", startMs: 103580, endMs: 103720, timestampMs: 103650, confidence: 0.97 },
              { text: " você", startMs: 103720, endMs: 103920, timestampMs: 103820, confidence: 0.99 },
              { text: " fazer", startMs: 103920, endMs: 104160, timestampMs: 104040, confidence: 1.00 },
              { text: " uma", startMs: 104160, endMs: 104260, timestampMs: 104210, confidence: 0.77 },
              { text: " poligonal", startMs: 104260, endMs: 104820, timestampMs: 104540, confidence: 0.99, pageBreakAfter: true },
          ]}
        />
      </Series.Sequence>
      <Series.Sequence
        name="Trecho 32 (115.16–116.55 s)"
        trimBefore={3455}
        durationInFrames={41}
      >
        <Enquadramento pontos={PONTOS}>
          <Video
            name="Vídeo 32"
            src={staticFile("trabalho.mp4")}
            objectFit="cover"
            style={{ width: "100%", height: "100%" }}
          />
        </Enquadramento>
        <BasicCaptions
          name="Legendas 32"
          width={LEGENDA.largura}
          combineTokensWithinMilliseconds={60000}
          style={{ position: "absolute", bottom: LEGENDA.baixo, translate: `${LEGENDA.esquerda}px 0px` }}
          captions={[
              { text: " você", startMs: 115340, endMs: 115540, timestampMs: 115440, confidence: 1.00 },
              { text: " consegue", startMs: 115540, endMs: 115940, timestampMs: 115740, confidence: 1.00 },
              { text: " resolver", startMs: 115940, endMs: 116320, timestampMs: 116130, confidence: 1.00 },
          ]}
        />
      </Series.Sequence>
      <Series.Sequence
        name="Trecho 33 (116.75–118.66 s)"
        trimBefore={3502}
        durationInFrames={58}
      >
        <Enquadramento pontos={PONTOS}>
          <Video
            name="Vídeo 33"
            src={staticFile("trabalho.mp4")}
            objectFit="cover"
            style={{ width: "100%", height: "100%" }}
          />
        </Enquadramento>
        <BasicCaptions
          name="Legendas 33"
          width={LEGENDA.largura}
          combineTokensWithinMilliseconds={60000}
          style={{ position: "absolute", bottom: LEGENDA.baixo, translate: `${LEGENDA.esquerda}px 0px` }}
          captions={[
              { text: " aqui", startMs: 116749, endMs: 117060, timestampMs: 116904, confidence: 1.00 },
              { text: " em", startMs: 117060, endMs: 117160, timestampMs: 117110, confidence: 1.00, pageBreakAfter: true },
              { text: " campo", startMs: 117160, endMs: 117440, timestampMs: 117300, confidence: 1.00 },
              { text: " sem", startMs: 117440, endMs: 117740, timestampMs: 117590, confidence: 0.84 },
              { text: " estar", startMs: 117740, endMs: 117900, timestampMs: 117820, confidence: 1.00 },
              { text: " no", startMs: 117900, endMs: 118040, timestampMs: 117970, confidence: 0.99 },
              { text: " escritório.", startMs: 118040, endMs: 118560, timestampMs: 118300, confidence: 1.00, pageBreakAfter: true },
          ]}
        />
      </Series.Sequence>
      <Series.Sequence
        name="Trecho 34 (120.70–122.14 s)"
        trimBefore={3621}
        durationInFrames={43}
      >
        <Enquadramento pontos={PONTOS}>
          <Video
            name="Vídeo 34"
            src={staticFile("trabalho.mp4")}
            objectFit="cover"
            style={{ width: "100%", height: "100%" }}
          />
        </Enquadramento>
        <BasicCaptions
          name="Legendas 34"
          width={LEGENDA.largura}
          combineTokensWithinMilliseconds={60000}
          style={{ position: "absolute", bottom: LEGENDA.baixo, translate: `${LEGENDA.esquerda}px 0px` }}
          captions={[
              { text: " a", startMs: 120860, endMs: 121160, timestampMs: 121010, confidence: 1.00 },
              { text: " gente", startMs: 121160, endMs: 121500, timestampMs: 121330, confidence: 1.00 },
          ]}
        />
      </Series.Sequence>
      <Series.Sequence
        name="Trecho 35 (122.58–128.54 s)"
        trimBefore={3677}
        durationInFrames={179}
      >
        <Enquadramento pontos={PONTOS}>
          <Video
            name="Vídeo 35"
            src={staticFile("trabalho.mp4")}
            objectFit="cover"
            style={{ width: "100%", height: "100%" }}
          />
        </Enquadramento>
        <BasicCaptions
          name="Legendas 35"
          width={LEGENDA.largura}
          combineTokensWithinMilliseconds={60000}
          style={{ position: "absolute", bottom: LEGENDA.baixo, translate: `${LEGENDA.esquerda}px 0px` }}
          captions={[
              { text: " faz", startMs: 122579, endMs: 123880, timestampMs: 123230, confidence: 1.00 },
              { text: " o", startMs: 123880, endMs: 124000, timestampMs: 123940, confidence: 1.00 },
              { text: " serviço,", startMs: 124000, endMs: 124440, timestampMs: 124220, confidence: 1.00, pageBreakAfter: true },
              { text: " faz", startMs: 124540, endMs: 124740, timestampMs: 124640, confidence: 1.00 },
              { text: " a", startMs: 124740, endMs: 124820, timestampMs: 124780, confidence: 1.00 },
              { text: " locação", startMs: 124820, endMs: 125380, timestampMs: 125100, confidence: 0.97 },
              { text: " e", startMs: 125380, endMs: 125940, timestampMs: 125660, confidence: 1.00 },
              { text: " a", startMs: 125940, endMs: 126100, timestampMs: 126020, confidence: 1.00 },
              { text: " venda", startMs: 126100, endMs: 126320, timestampMs: 126210, confidence: 1.00, pageBreakAfter: true },
              { text: " do", startMs: 126320, endMs: 126720, timestampMs: 126520, confidence: 1.00 },
              { text: " equipamento", startMs: 126720, endMs: 127680, timestampMs: 127200, confidence: 1.00 },
              { text: " RS3L.", startMs: 127680, endMs: 128400, timestampMs: 128040, confidence: 0.93, pageBreakAfter: true },
          ]}
        />
      </Series.Sequence>
      <Series.Sequence
        name="Trecho 36 (129.04–130.16 s)"
        trimBefore={3871}
        durationInFrames={34}
      >
        <Enquadramento pontos={PONTOS}>
          <Video
            name="Vídeo 36"
            src={staticFile("trabalho.mp4")}
            objectFit="cover"
            style={{ width: "100%", height: "100%" }}
          />
        </Enquadramento>
        <BasicCaptions
          name="Legendas 36"
          width={LEGENDA.largura}
          combineTokensWithinMilliseconds={60000}
          style={{ position: "absolute", bottom: LEGENDA.baixo, translate: `${LEGENDA.esquerda}px 0px` }}
          captions={[
              { text: " A", startMs: 129038, endMs: 129260, timestampMs: 129149, confidence: 0.76 },
              { text: " GeoVBMap", startMs: 129260, endMs: 130020, timestampMs: 129640, confidence: 0.51 },
          ]}
        />
      </Series.Sequence>
      <Series.Sequence
        name="Trecho 37 (130.61–132.84 s)"
        trimBefore={3918}
        durationInFrames={67}
      >
        <Enquadramento pontos={PONTOS}>
          <Video
            name="Vídeo 37"
            src={staticFile("trabalho.mp4")}
            objectFit="cover"
            style={{ width: "100%", height: "100%" }}
          />
        </Enquadramento>
        <BasicCaptions
          name="Legendas 37"
          width={LEGENDA.largura}
          combineTokensWithinMilliseconds={60000}
          style={{ position: "absolute", bottom: LEGENDA.baixo, translate: `${LEGENDA.esquerda}px 0px` }}
          captions={[
              { text: " está", startMs: 130610, endMs: 130840, timestampMs: 130725, confidence: 0.97 },
              { text: " disposta", startMs: 130840, endMs: 131400, timestampMs: 131120, confidence: 0.77, pageBreakAfter: true },
              { text: " a", startMs: 131400, endMs: 131680, timestampMs: 131540, confidence: 0.98 },
              { text: " fazer", startMs: 131680, endMs: 131900, timestampMs: 131790, confidence: 1.00 },
              { text: " a", startMs: 131900, endMs: 132000, timestampMs: 131950, confidence: 0.92 },
              { text: " demonstração,", startMs: 132000, endMs: 132620, timestampMs: 132310, confidence: 1.00, pageBreakAfter: true },
          ]}
        />
      </Series.Sequence>
      <Series.Sequence
        name="Trecho 38 (133.19–135.05 s)"
        trimBefore={3996}
        durationInFrames={55}
      >
        <Enquadramento pontos={PONTOS}>
          <Video
            name="Vídeo 38"
            src={staticFile("trabalho.mp4")}
            objectFit="cover"
            style={{ width: "100%", height: "100%" }}
          />
        </Enquadramento>
        <BasicCaptions
          name="Legendas 38"
          width={LEGENDA.largura}
          combineTokensWithinMilliseconds={60000}
          style={{ position: "absolute", bottom: LEGENDA.baixo, translate: `${LEGENDA.esquerda}px 0px` }}
          captions={[
              { text: " é", startMs: 133189, endMs: 133460, timestampMs: 133324, confidence: 0.98 },
              { text: " só", startMs: 133460, endMs: 133700, timestampMs: 133580, confidence: 1.00 },
              { text: " marcar", startMs: 133700, endMs: 134080, timestampMs: 133890, confidence: 1.00 },
              { text: " comigo", startMs: 134080, endMs: 134480, timestampMs: 134280, confidence: 1.00 },
              { text: " mesmo", startMs: 134480, endMs: 134880, timestampMs: 134680, confidence: 1.00 },
          ]}
        />
      </Series.Sequence>
      <Series.Sequence
        name="Trecho 39 (135.38–140.52 s)"
        trimBefore={4061}
        durationInFrames={155}
      >
        <Enquadramento pontos={PONTOS}>
          <Video
            name="Vídeo 39"
            src={staticFile("trabalho.mp4")}
            objectFit="cover"
            style={{ width: "100%", height: "100%" }}
          />
        </Enquadramento>
        <BasicCaptions
          name="Legendas 39"
          width={LEGENDA.largura}
          combineTokensWithinMilliseconds={60000}
          style={{ position: "absolute", bottom: LEGENDA.baixo, translate: `${LEGENDA.esquerda}px 0px` }}
          captions={[
              { text: " no", startMs: 135378, endMs: 135560, timestampMs: 135469, confidence: 0.90, pageBreakAfter: true },
              { text: " telefone", startMs: 135560, endMs: 136080, timestampMs: 135820, confidence: 1.00 },
              { text: " (67)", startMs: 136080, endMs: 138130, timestampMs: 137105, confidence: 0.66 },
              { text: " 99248-8884.", startMs: 138130, endMs: 140180, timestampMs: 139155, confidence: 0.66, pageBreakAfter: true },
          ]}
        />
      </Series.Sequence>
      <Series.Sequence
        name="Trecho 40 (140.69–141.45 s)"
        trimBefore={4221}
        durationInFrames={23}
      >
        <Enquadramento pontos={PONTOS}>
          <Video
            name="Vídeo 40"
            src={staticFile("trabalho.mp4")}
            objectFit="cover"
            style={{ width: "100%", height: "100%" }}
          />
        </Enquadramento>
        <BasicCaptions
          name="Legendas 40"
          width={LEGENDA.largura}
          combineTokensWithinMilliseconds={60000}
          style={{ position: "absolute", bottom: LEGENDA.baixo, translate: `${LEGENDA.esquerda}px 0px` }}
          captions={[
              { text: " Valeu,", startMs: 140690, endMs: 140940, timestampMs: 140815, confidence: 1.00 },
              { text: " obrigado!", startMs: 140980, endMs: 141140, timestampMs: 141060, confidence: 0.96, pageBreakAfter: true },
          ]}
        />
      </Series.Sequence>
    </Series>
  );
};

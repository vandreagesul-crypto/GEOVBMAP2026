import { Video } from "@remotion/media";
import { Series, staticFile } from "remotion";
import { BasicCaptions } from "../basic-captions.element";
import { Enquadramento } from "./Enquadramento";

// Gerado a partir do plano de cortes e da transcrição (tempos em relação ao original).
// Duração total: 3673 quadros (122.4 s a 30 fps).
export const DURACAO_EDICAO = 3673;

const ZOOM = 1.2;
const PONTOS: ReadonlyArray<readonly [number, number]> = [[0, 330], [2.5, 328], [4.5, 334], [5.6, 330], [6.6, 284], [7.4, 292], [8.4, 310], [9.6, 334], [10.4, 340], [11.8, 314]];

// Área da legenda: longe da faixa inferior (~420 px) e dos botões à direita do Instagram.
const LEGENDA = { largura: 840, esquerda: 80, baixo: 440 };

export const EdicaoVertical: React.FC = () => {
  return (
    <Series>
      <Series.Sequence
        name="Trecho 01 (1.65–23.19 s)"
        trimBefore={50}
        durationInFrames={646}
      >
        <Enquadramento zoom={ZOOM} pontos={PONTOS}>
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
              { text: " aqui", startMs: 7040, endMs: 7560, timestampMs: 7300, confidence: 0.98 },
              { text: " a", startMs: 7560, endMs: 7660, timestampMs: 7610, confidence: 0.99 },
              { text: " gente", startMs: 7660, endMs: 7700, timestampMs: 7680, confidence: 1.00 },
              { text: " está", startMs: 7700, endMs: 7820, timestampMs: 7760, confidence: 0.88 },
              { text: " fazendo", startMs: 7820, endMs: 8060, timestampMs: 7940, confidence: 1.00, pageBreakAfter: true },
              { text: " uma", startMs: 8060, endMs: 8160, timestampMs: 8110, confidence: 0.94 },
              { text: " demonstração", startMs: 8160, endMs: 8820, timestampMs: 8490, confidence: 1.00 },
              { text: " do", startMs: 8820, endMs: 9160, timestampMs: 8990, confidence: 1.00 },
              { text: " RS3L,", startMs: 9160, endMs: 10080, timestampMs: 9620, confidence: 0.85 },
              { text: " banda", startMs: 10440, endMs: 10940, timestampMs: 10690, confidence: 0.90 },
              { text: " L,", startMs: 10940, endMs: 11280, timestampMs: 11110, confidence: 1.00, pageBreakAfter: true },
              { text: " ele", startMs: 11780, endMs: 11940, timestampMs: 11860, confidence: 1.00 },
              { text: " faz", startMs: 11940, endMs: 12160, timestampMs: 12050, confidence: 1.00 },
              { text: " algumas", startMs: 12160, endMs: 12400, timestampMs: 12280, confidence: 1.00 },
              { text: " medições", startMs: 12400, endMs: 13000, timestampMs: 12700, confidence: 1.00 },
              { text: " topográficas", startMs: 13000, endMs: 13980, timestampMs: 13490, confidence: 1.00, pageBreakAfter: true },
              { text: " até", startMs: 13980, endMs: 14180, timestampMs: 14080, confidence: 0.92 },
              { text: " para", startMs: 14180, endMs: 14380, timestampMs: 14280, confidence: 0.96 },
              { text: " fazer", startMs: 14380, endMs: 15240, timestampMs: 14810, confidence: 1.00 },
              { text: " a", startMs: 15240, endMs: 15400, timestampMs: 15320, confidence: 1.00 },
              { text: " supressão", startMs: 15400, endMs: 15860, timestampMs: 15630, confidence: 0.99 },
              { text: " vegetal,", startMs: 15860, endMs: 16400, timestampMs: 16130, confidence: 1.00, pageBreakAfter: true },
              { text: " nesse", startMs: 16660, endMs: 17300, timestampMs: 16980, confidence: 0.96 },
              { text: " ambiente", startMs: 17300, endMs: 17640, timestampMs: 17470, confidence: 1.00 },
              { text: " aqui,", startMs: 17640, endMs: 17940, timestampMs: 17790, confidence: 1.00, pageBreakAfter: true },
              { text: " que", startMs: 18160, endMs: 18740, timestampMs: 18450, confidence: 1.00 },
              { text: " tem", startMs: 18740, endMs: 19240, timestampMs: 18990, confidence: 1.00 },
              { text: " as", startMs: 19240, endMs: 19380, timestampMs: 19310, confidence: 1.00 },
              { text: " copas", startMs: 19380, endMs: 19740, timestampMs: 19560, confidence: 1.00 },
              { text: " das", startMs: 19740, endMs: 19900, timestampMs: 19820, confidence: 1.00 },
              { text: " árvores,", startMs: 19900, endMs: 20300, timestampMs: 20100, confidence: 1.00, pageBreakAfter: true },
              { text: " ele", startMs: 20860, endMs: 21060, timestampMs: 20960, confidence: 1.00 },
              { text: " pega", startMs: 21060, endMs: 21380, timestampMs: 21220, confidence: 1.00 },
              { text: " até", startMs: 21380, endMs: 21700, timestampMs: 21540, confidence: 1.00 },
              { text: " uma", startMs: 21700, endMs: 23190, timestampMs: 22445, confidence: 0.93 },
          ]}
        />
      </Series.Sequence>
      <Series.Sequence
        name="Trecho 02 (23.69–25.12 s)"
        trimBefore={711}
        durationInFrames={43}
      >
        <Enquadramento zoom={ZOOM} pontos={PONTOS}>
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
              { text: " certa", startMs: 24020, endMs: 24480, timestampMs: 24250, confidence: 1.00 },
          ]}
        />
      </Series.Sequence>
      <Series.Sequence
        name="Trecho 03 (25.60–27.04 s)"
        trimBefore={768}
        durationInFrames={43}
      >
        <Enquadramento zoom={ZOOM} pontos={PONTOS}>
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
              { text: " distância,", startMs: 25600, endMs: 26760, timestampMs: 26180, confidence: 1.00, pageBreakAfter: true },
          ]}
        />
      </Series.Sequence>
      <Series.Sequence
        name="Trecho 04 (27.62–31.38 s)"
        trimBefore={829}
        durationInFrames={112}
      >
        <Enquadramento zoom={ZOOM} pontos={PONTOS}>
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
              { text: " mas", startMs: 27620, endMs: 27960, timestampMs: 27790, confidence: 1.00 },
              { text: " consegue,", startMs: 27960, endMs: 28580, timestampMs: 28270, confidence: 1.00 },
              { text: " com", startMs: 28820, endMs: 29240, timestampMs: 29030, confidence: 1.00 },
              { text: " a", startMs: 29240, endMs: 29300, timestampMs: 29270, confidence: 1.00 },
              { text: " banda", startMs: 29300, endMs: 29520, timestampMs: 29410, confidence: 1.00 },
              { text: " L,", startMs: 29520, endMs: 29840, timestampMs: 29680, confidence: 1.00, pageBreakAfter: true },
              { text: " com", startMs: 29840, endMs: 30360, timestampMs: 30100, confidence: 0.45 },
              { text: " satélites,", startMs: 30360, endMs: 31100, timestampMs: 30730, confidence: 0.95 },
          ]}
        />
      </Series.Sequence>
      <Series.Sequence
        name="Trecho 05 (33.51–35.11 s)"
        trimBefore={1005}
        durationInFrames={48}
      >
        <Enquadramento zoom={ZOOM} pontos={PONTOS}>
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
              { text: " para", startMs: 33880, endMs: 34040, timestampMs: 33960, confidence: 0.71 },
              { text: " você", startMs: 34040, endMs: 34240, timestampMs: 34140, confidence: 0.99 },
              { text: " pegar", startMs: 34240, endMs: 34560, timestampMs: 34400, confidence: 0.99 },
              { text: " aqui,", startMs: 34560, endMs: 34860, timestampMs: 34710, confidence: 0.98, pageBreakAfter: true },
          ]}
        />
      </Series.Sequence>
      <Series.Sequence
        name="Trecho 06 (35.61–37.00 s)"
        trimBefore={1068}
        durationInFrames={42}
      >
        <Enquadramento zoom={ZOOM} pontos={PONTOS}>
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
              { text: " ele", startMs: 35920, endMs: 35980, timestampMs: 35950, confidence: 0.83 },
              { text: " não", startMs: 35980, endMs: 36160, timestampMs: 36070, confidence: 1.00 },
              { text: " vai", startMs: 36160, endMs: 36320, timestampMs: 36240, confidence: 1.00 },
              { text: " sair", startMs: 36320, endMs: 36580, timestampMs: 36450, confidence: 1.00 },
          ]}
        />
      </Series.Sequence>
      <Series.Sequence
        name="Trecho 07 (37.85–43.35 s)"
        trimBefore={1136}
        durationInFrames={164}
      >
        <Enquadramento zoom={ZOOM} pontos={PONTOS}>
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
              { text: " ponto,", startMs: 38080, endMs: 38520, timestampMs: 38300, confidence: 1.00, pageBreakAfter: true },
              { text: " não", startMs: 38740, endMs: 38980, timestampMs: 38860, confidence: 1.00 },
              { text: " vai", startMs: 38980, endMs: 39260, timestampMs: 39120, confidence: 1.00 },
              { text: " dar", startMs: 39260, endMs: 39780, timestampMs: 39520, confidence: 0.99 },
              { text: " interferência", startMs: 39780, endMs: 40380, timestampMs: 40080, confidence: 1.00 },
              { text: " nenhuma,", startMs: 40380, endMs: 40740, timestampMs: 40560, confidence: 0.99, pageBreakAfter: true },
              { text: " a", startMs: 41040, endMs: 41140, timestampMs: 41090, confidence: 1.00 },
              { text: " gente", startMs: 41140, endMs: 41200, timestampMs: 41170, confidence: 1.00 },
              { text: " consegue", startMs: 41200, endMs: 41740, timestampMs: 41470, confidence: 1.00 },
              { text: " locar", startMs: 41740, endMs: 42600, timestampMs: 42170, confidence: 0.84 },
              { text: " essa", startMs: 42600, endMs: 42820, timestampMs: 42710, confidence: 0.98 },
              { text: " árvore.", startMs: 42820, endMs: 43220, timestampMs: 43020, confidence: 1.00, pageBreakAfter: true },
          ]}
        />
      </Series.Sequence>
      <Series.Sequence
        name="Trecho 08 (46.14–47.15 s)"
        trimBefore={1384}
        durationInFrames={30}
      >
        <Enquadramento zoom={ZOOM} pontos={PONTOS}>
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
              { text: " Aqui", startMs: 46140, endMs: 46560, timestampMs: 46350, confidence: 0.99 },
              { text: " na", startMs: 46560, endMs: 46800, timestampMs: 46680, confidence: 1.00 },
          ]}
        />
      </Series.Sequence>
      <Series.Sequence
        name="Trecho 09 (47.70–60.21 s)"
        trimBefore={1431}
        durationInFrames={375}
      >
        <Enquadramento zoom={ZOOM} pontos={PONTOS}>
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
              { text: " coletora", startMs: 47700, endMs: 48560, timestampMs: 48130, confidence: 0.98 },
              { text: " eu", startMs: 48560, endMs: 49380, timestampMs: 48970, confidence: 0.35 },
              { text: " posso", startMs: 49380, endMs: 49620, timestampMs: 49500, confidence: 1.00 },
              { text: " mostrar,", startMs: 49620, endMs: 50000, timestampMs: 49810, confidence: 0.65, pageBreakAfter: true },
              { text: " demonstrar", startMs: 50180, endMs: 50540, timestampMs: 50360, confidence: 0.93 },
              { text: " para", startMs: 50540, endMs: 50660, timestampMs: 50600, confidence: 0.98 },
              { text: " vocês", startMs: 50660, endMs: 51040, timestampMs: 50850, confidence: 1.00 },
              { text: " a", startMs: 51040, endMs: 51860, timestampMs: 51450, confidence: 0.69 },
              { text: " quantidade", startMs: 51860, endMs: 52180, timestampMs: 52020, confidence: 1.00, pageBreakAfter: true },
              { text: " de", startMs: 52180, endMs: 52480, timestampMs: 52330, confidence: 1.00 },
              { text: " pontos", startMs: 52480, endMs: 52700, timestampMs: 52590, confidence: 1.00 },
              { text: " que", startMs: 52700, endMs: 52880, timestampMs: 52790, confidence: 1.00 },
              { text: " foi", startMs: 52880, endMs: 53060, timestampMs: 52970, confidence: 0.94 },
              { text: " realizado,", startMs: 53060, endMs: 53640, timestampMs: 53350, confidence: 0.99, pageBreakAfter: true },
              { text: " pegando", startMs: 53680, endMs: 55220, timestampMs: 54450, confidence: 0.92 },
              { text: " a", startMs: 55220, endMs: 56800, timestampMs: 56010, confidence: 1.00 },
              { text: " locação", startMs: 56800, endMs: 57740, timestampMs: 57270, confidence: 0.94 },
              { text: " de", startMs: 57740, endMs: 58240, timestampMs: 57990, confidence: 1.00 },
              { text: " cada", startMs: 58240, endMs: 59560, timestampMs: 58900, confidence: 1.00 },
              { text: " árvore.", startMs: 59560, endMs: 60000, timestampMs: 59780, confidence: 1.00, pageBreakAfter: true },
          ]}
        />
      </Series.Sequence>
      <Series.Sequence
        name="Trecho 10 (61.67–69.56 s)"
        trimBefore={1850}
        durationInFrames={237}
      >
        <Enquadramento zoom={ZOOM} pontos={PONTOS}>
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
              { text: " Aqui", startMs: 61670, endMs: 62100, timestampMs: 61885, confidence: 1.00 },
              { text: " também", startMs: 62100, endMs: 62560, timestampMs: 62330, confidence: 0.99 },
              { text: " a", startMs: 62560, endMs: 63180, timestampMs: 62870, confidence: 0.98 },
              { text: " gente", startMs: 63180, endMs: 63360, timestampMs: 63270, confidence: 1.00 },
              { text: " consegue", startMs: 63360, endMs: 64860, timestampMs: 64110, confidence: 1.00 },
              { text: " visualizar", startMs: 64860, endMs: 66460, timestampMs: 65660, confidence: 1.00, pageBreakAfter: true },
              { text: " as", startMs: 66460, endMs: 67980, timestampMs: 67220, confidence: 1.00 },
              { text: " informações", startMs: 67980, endMs: 68420, timestampMs: 68200, confidence: 1.00 },
              { text: " de", startMs: 68420, endMs: 68660, timestampMs: 68540, confidence: 1.00 },
              { text: " cada", startMs: 68660, endMs: 68860, timestampMs: 68760, confidence: 1.00 },
              { text: " ponto,", startMs: 68860, endMs: 69280, timestampMs: 69070, confidence: 1.00, pageBreakAfter: true },
          ]}
        />
      </Series.Sequence>
      <Series.Sequence
        name="Trecho 11 (70.20–76.81 s)"
        trimBefore={2106}
        durationInFrames={198}
      >
        <Enquadramento zoom={ZOOM} pontos={PONTOS}>
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
              { text: " onde", startMs: 70200, endMs: 70540, timestampMs: 70370, confidence: 0.99 },
              { text: " foi", startMs: 70540, endMs: 70700, timestampMs: 70620, confidence: 1.00 },
              { text: " locado,", startMs: 70700, endMs: 71280, timestampMs: 70990, confidence: 0.97 },
              { text: " as", startMs: 71540, endMs: 72460, timestampMs: 72000, confidence: 1.00 },
              { text: " coordenadas", startMs: 72460, endMs: 73120, timestampMs: 72790, confidence: 1.00 },
              { text: " em", startMs: 73120, endMs: 74780, timestampMs: 73950, confidence: 0.96 },
              { text: " UTM,", startMs: 74780, endMs: 75360, timestampMs: 75070, confidence: 0.97, pageBreakAfter: true },
              { text: " os", startMs: 75680, endMs: 76300, timestampMs: 75990, confidence: 1.00 },
              { text: " erros", startMs: 76300, endMs: 76660, timestampMs: 76480, confidence: 1.00 },
          ]}
        />
      </Series.Sequence>
      <Series.Sequence
        name="Trecho 12 (77.24–93.59 s)"
        trimBefore={2317}
        durationInFrames={491}
      >
        <Enquadramento zoom={ZOOM} pontos={PONTOS}>
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
              { text: " que", startMs: 77240, endMs: 77520, timestampMs: 77380, confidence: 1.00 },
              { text: " acontecem", startMs: 77520, endMs: 79500, timestampMs: 78510, confidence: 1.00 },
              { text: " também,", startMs: 79500, endMs: 79780, timestampMs: 79640, confidence: 0.98, pageBreakAfter: true },
              { text: " é", startMs: 79780, endMs: 80660, timestampMs: 80220, confidence: 0.56 },
              { text: " a", startMs: 80660, endMs: 80940, timestampMs: 80800, confidence: 0.95 },
              { text: " compensação", startMs: 80940, endMs: 81520, timestampMs: 81230, confidence: 0.99 },
              { text: " de", startMs: 81520, endMs: 81660, timestampMs: 81590, confidence: 0.97 },
              { text: " inclinação", startMs: 81660, endMs: 82220, timestampMs: 81940, confidence: 1.00 },
              { text: " que", startMs: 82220, endMs: 83180, timestampMs: 82700, confidence: 0.78 },
              { text: " é", startMs: 83180, endMs: 83360, timestampMs: 83270, confidence: 0.44 },
              { text: " o", startMs: 83360, endMs: 83500, timestampMs: 83430, confidence: 0.99, pageBreakAfter: true },
              { text: " sistema", startMs: 83500, endMs: 83920, timestampMs: 83710, confidence: 0.99 },
              { text: " IMU", startMs: 83920, endMs: 84300, timestampMs: 84110, confidence: 0.48 },
              { text: " né", startMs: 84300, endMs: 84480, timestampMs: 84390, confidence: 0.64 },
              { text: " você", startMs: 84480, endMs: 85100, timestampMs: 84790, confidence: 0.70 },
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
              { text: " pegar", startMs: 88780, endMs: 89140, timestampMs: 88960, confidence: 0.99 },
              { text: " o", startMs: 89140, endMs: 90120, timestampMs: 89630, confidence: 0.86, pageBreakAfter: true },
              { text: " ponto", startMs: 90120, endMs: 90500, timestampMs: 90310, confidence: 0.99 },
              { text: " e", startMs: 90500, endMs: 91100, timestampMs: 90800, confidence: 0.96 },
              { text: " tem", startMs: 91100, endMs: 91220, timestampMs: 91160, confidence: 0.89 },
              { text: " uma", startMs: 91220, endMs: 91340, timestampMs: 91280, confidence: 0.99 },
              { text: " precisão", startMs: 91340, endMs: 91880, timestampMs: 91610, confidence: 1.00 },
              { text: " centimétrica", startMs: 91880, endMs: 93340, timestampMs: 92610, confidence: 0.93, pageBreakAfter: true },
          ]}
        />
      </Series.Sequence>
      <Series.Sequence
        name="Trecho 13 (95.63–97.90 s)"
        trimBefore={2869}
        durationInFrames={68}
      >
        <Enquadramento zoom={ZOOM} pontos={PONTOS}>
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
              { text: " aqui", startMs: 95920, endMs: 97180, timestampMs: 96550, confidence: 0.89 },
              { text: " também", startMs: 97180, endMs: 97480, timestampMs: 97330, confidence: 0.99 },
              { text: " tem", startMs: 97480, endMs: 97800, timestampMs: 97640, confidence: 0.99, pageBreakAfter: true },
          ]}
        />
      </Series.Sequence>
      <Series.Sequence
        name="Trecho 14 (99.66–105.17 s)"
        trimBefore={2990}
        durationInFrames={165}
      >
        <Enquadramento zoom={ZOOM} pontos={PONTOS}>
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
              { text: " ferramentas", startMs: 100000, endMs: 100600, timestampMs: 100300, confidence: 1.00 },
              { text: " que", startMs: 100600, endMs: 100700, timestampMs: 100650, confidence: 1.00 },
              { text: " você", startMs: 100700, endMs: 100880, timestampMs: 100790, confidence: 1.00 },
              { text: " pode", startMs: 100880, endMs: 101140, timestampMs: 101010, confidence: 1.00 },
              { text: " utilizar", startMs: 101140, endMs: 101580, timestampMs: 101360, confidence: 0.99 },
              { text: " em", startMs: 101580, endMs: 102040, timestampMs: 101810, confidence: 0.98, pageBreakAfter: true },
              { text: " campo", startMs: 102040, endMs: 102400, timestampMs: 102220, confidence: 0.99 },
              { text: " né", startMs: 102400, endMs: 102580, timestampMs: 102490, confidence: 0.97 },
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
        name="Trecho 15 (105.89–114.46 s)"
        trimBefore={3177}
        durationInFrames={257}
      >
        <Enquadramento zoom={ZOOM} pontos={PONTOS}>
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
              { text: " E", startMs: 106240, endMs: 106340, timestampMs: 106290, confidence: 0.23 },
              { text: " usando", startMs: 106340, endMs: 107400, timestampMs: 106870, confidence: 0.99 },
              { text: " para", startMs: 107400, endMs: 108460, timestampMs: 107930, confidence: 0.89 },
              { text: " você", startMs: 108460, endMs: 108900, timestampMs: 108680, confidence: 1.00 },
              { text: " ter", startMs: 108900, endMs: 109560, timestampMs: 109230, confidence: 1.00 },
              { text: " alguma", startMs: 109560, endMs: 109820, timestampMs: 109690, confidence: 0.98, pageBreakAfter: true },
              { text: " atividade", startMs: 109820, endMs: 111200, timestampMs: 110510, confidence: 1.00 },
              { text: " na", startMs: 111200, endMs: 112300, timestampMs: 111750, confidence: 1.00 },
              { text: " área", startMs: 112300, endMs: 112500, timestampMs: 112400, confidence: 1.00 },
              { text: " de", startMs: 112500, endMs: 112640, timestampMs: 112570, confidence: 1.00 },
              { text: " campo,", startMs: 112640, endMs: 112980, timestampMs: 112810, confidence: 1.00, pageBreakAfter: true },
              { text: " ter", startMs: 113200, endMs: 113420, timestampMs: 113310, confidence: 0.99 },
              { text: " mais", startMs: 113420, endMs: 113640, timestampMs: 113530, confidence: 1.00 },
              { text: " precisão", startMs: 113640, endMs: 114200, timestampMs: 113920, confidence: 1.00, pageBreakAfter: true },
          ]}
        />
      </Series.Sequence>
      <Series.Sequence
        name="Trecho 16 (115.11–118.72 s)"
        trimBefore={3453}
        durationInFrames={109}
      >
        <Enquadramento zoom={ZOOM} pontos={PONTOS}>
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
              { text: " você", startMs: 115340, endMs: 115540, timestampMs: 115440, confidence: 1.00 },
              { text: " consegue", startMs: 115540, endMs: 115940, timestampMs: 115740, confidence: 1.00 },
              { text: " resolver", startMs: 115940, endMs: 116320, timestampMs: 116130, confidence: 1.00 },
              { text: " aqui", startMs: 116320, endMs: 117060, timestampMs: 116690, confidence: 1.00 },
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
        name="Trecho 17 (119.52–130.16 s)"
        trimBefore={3586}
        durationInFrames={319}
      >
        <Enquadramento zoom={ZOOM} pontos={PONTOS}>
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
              { text: " E", startMs: 119520, endMs: 119840, timestampMs: 119680, confidence: 1.00 },
              { text: " é", startMs: 119840, endMs: 119960, timestampMs: 119900, confidence: 1.00 },
              { text: " isso,", startMs: 119960, endMs: 120200, timestampMs: 120080, confidence: 1.00 },
              { text: " a", startMs: 120860, endMs: 121160, timestampMs: 121010, confidence: 1.00 },
              { text: " gente", startMs: 121160, endMs: 121500, timestampMs: 121330, confidence: 1.00 },
              { text: " faz", startMs: 121500, endMs: 123880, timestampMs: 122690, confidence: 1.00 },
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
              { text: " A", startMs: 128400, endMs: 129260, timestampMs: 128830, confidence: 0.76 },
              { text: " Geo", startMs: 129260, endMs: 129500, timestampMs: 129380, confidence: 0.90 },
              { text: " VB", startMs: 129500, endMs: 129720, timestampMs: 129610, confidence: 0.51 },
              { text: " Map", startMs: 129720, endMs: 130020, timestampMs: 129870, confidence: 0.85, pageBreakAfter: true },
          ]}
        />
      </Series.Sequence>
      <Series.Sequence
        name="Trecho 18 (130.61–141.45 s)"
        trimBefore={3918}
        durationInFrames={326}
      >
        <Enquadramento zoom={ZOOM} pontos={PONTOS}>
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
              { text: " disposta", startMs: 130840, endMs: 131400, timestampMs: 131120, confidence: 0.77 },
              { text: " a", startMs: 131400, endMs: 131680, timestampMs: 131540, confidence: 0.98 },
              { text: " fazer", startMs: 131680, endMs: 131900, timestampMs: 131790, confidence: 1.00 },
              { text: " a", startMs: 131900, endMs: 132000, timestampMs: 131950, confidence: 0.92 },
              { text: " demonstração,", startMs: 132000, endMs: 132620, timestampMs: 132310, confidence: 1.00, pageBreakAfter: true },
              { text: " é", startMs: 133040, endMs: 133460, timestampMs: 133250, confidence: 0.98 },
              { text: " só", startMs: 133460, endMs: 133700, timestampMs: 133580, confidence: 1.00 },
              { text: " marcar", startMs: 133700, endMs: 134080, timestampMs: 133890, confidence: 1.00 },
              { text: " comigo", startMs: 134080, endMs: 134480, timestampMs: 134280, confidence: 1.00 },
              { text: " mesmo", startMs: 134480, endMs: 134880, timestampMs: 134680, confidence: 1.00 },
              { text: " no", startMs: 134880, endMs: 135560, timestampMs: 135220, confidence: 0.90, pageBreakAfter: true },
              { text: " telefone", startMs: 135560, endMs: 136080, timestampMs: 135820, confidence: 1.00 },
              { text: " 67", startMs: 136080, endMs: 136660, timestampMs: 136370, confidence: 0.99 },
              { text: " 992", startMs: 136660, endMs: 137860, timestampMs: 137260, confidence: 0.66 },
              { text: " 48", startMs: 137860, endMs: 138460, timestampMs: 138160, confidence: 0.96 },
              { text: " 8884.", startMs: 138460, endMs: 140180, timestampMs: 139320, confidence: 0.91, pageBreakAfter: true },
              { text: " Valeu,", startMs: 140360, endMs: 140940, timestampMs: 140650, confidence: 1.00 },
              { text: " obrigado!", startMs: 140980, endMs: 141140, timestampMs: 141060, confidence: 0.96, pageBreakAfter: true },
          ]}
        />
      </Series.Sequence>
    </Series>
  );
};

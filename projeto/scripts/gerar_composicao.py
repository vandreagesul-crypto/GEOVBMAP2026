import json, sys
S, OUT = sys.argv[1], sys.argv[2]
FPS = 30
d = json.load(open(S + "/transcricao.json"))
plano = json.load(open(S + "/plano_cortes.json"))
W = [w for s in d for w in s["words"]]
RAW = list(W)
# Correções de reconhecimento (a confirmar com o autor)
CORR = {" André": " Vandré", " IMO": " IMU"}
for w in W:
    w["w"] = CORR.get(w["w"], w["w"])
TR = plano["trechos"]
for w in W:
    ov = [min(w["e"], b) - max(w["s"], a) for a, b in TR]
    k = max(range(len(TR)), key=lambda k: ov[k])
    w["trecho"] = k if ov[k] >= 0.3 * max(w["e"] - w["s"], 0.01) else None

W = [w for w in W if w["trecho"] is not None]

# Páginas de legenda: frases (pontuação/pausa) empacotadas em até MAXC caracteres (2 linhas)
MAXC = 42
frases, atual = [], []
for i, w in enumerate(W):
    atual.append(w)
    nxt = W[i + 1] if i + 1 < len(W) else None
    if nxt is None or w["w"].rstrip().endswith((",", ".", "!", "?")) or nxt["s"] - w["e"] > 0.5:
        frases.append(atual); atual = []
txt = lambda ws: sum(len(w["w"]) for w in ws)
partes = []
for f in frases:
    if txt(f) <= MAXC:
        partes.append(f); continue
    n = -(-txt(f) // MAXC); alvo = txt(f) / n; cur = []
    for w in f:
        if cur and txt(cur) + len(w["w"]) / 2 > alvo and len(partes) >= 0 and n > 1:
            partes.append(cur); cur = []; n -= 1; alvo = (txt(f[f.index(w):])) / n
        cur.append(w)
    partes.append(cur)
paginas, cur = [], []
for pt in partes:
    fecha = cur and cur[-1]["w"].rstrip().endswith((".", "!", "?"))
    if cur and (fecha or txt(cur) + txt(pt) > MAXC):
        paginas.append(cur); cur = []
    cur = cur + pt
paginas.append(cur)
for w in W: w["quebra"] = False
for pg in paginas: pg[-1]["quebra"] = True
# Rastreamento do apresentador (0–12 s): centro x no original, suavizado
pontos = [(0, 330), (2.5, 328), (4.5, 334), (5.6, 330), (6.6, 284), (7.4, 292), (8.4, 310), (9.6, 334), (10.4, 340), (11.8, 314)]

def legenda(a, b):
    itens = []
    k = TR.index([a, b]) if [a, b] in TR else TR.index((a, b))
    for w in W:
        if w["trecho"] == k:
            s = max(w["s"], a); e = min(w["e"], b)
            txt = w["w"] if itens else w["w"]
            itens.append(
                "              { text: %s, startMs: %d, endMs: %d, timestampMs: %d, confidence: %.2f%s },"
                % (json.dumps(txt, ensure_ascii=False), round(s * 1000), round(e * 1000),
                   round((s + e) * 500), w["p"], ", pageBreakAfter: true" if w["quebra"] else ""))
    return "\n".join(itens)

blocos = []
total = 0
for n, (a, b) in enumerate(plano["trechos"], 1):
    fa, fb = round(a * FPS), round(b * FPS)
    total += fb - fa
    blocos.append(f"""      <Series.Sequence
        name="Trecho {n:02d} ({a:.2f}–{b:.2f} s)"
        trimBefore={{{fa}}}
        durationInFrames={{{fb - fa}}}
      >
        <Enquadramento zoom={{ZOOM}} pontos={{PONTOS}}>
          <Video
            name="Vídeo {n:02d}"
            src={{staticFile("trabalho.mp4")}}
            objectFit="cover"
            style={{{{ width: "100%", height: "100%" }}}}
          />
        </Enquadramento>
        <BasicCaptions
          name="Legendas {n:02d}"
          width={{LEGENDA.largura}}
          combineTokensWithinMilliseconds={{60000}}
          style={{{{ position: "absolute", bottom: LEGENDA.baixo, translate: `${{LEGENDA.esquerda}}px 0px` }}}}
          captions={{[
{legenda(a, b)}
          ]}}
        />
      </Series.Sequence>""")

tsx = f"""import {{ Video }} from "@remotion/media";
import {{ Series, staticFile }} from "remotion";
import {{ BasicCaptions }} from "../basic-captions.element";
import {{ Enquadramento }} from "./Enquadramento";

// Gerado a partir do plano de cortes e da transcrição (tempos em relação ao original).
// Duração total: {total} quadros ({total / FPS:.1f} s a {FPS} fps).
export const DURACAO_EDICAO = {total};

const ZOOM = 1.2;
const PONTOS: ReadonlyArray<readonly [number, number]> = {json.dumps(pontos)};

// Área da legenda: longe da faixa inferior (~420 px) e dos botões à direita do Instagram.
const LEGENDA = {{ largura: 840, esquerda: 80, baixo: 440 }};

export const EdicaoVertical: React.FC = () => {{
  return (
    <Series>
{chr(10).join(blocos)}
    </Series>
  );
}};
"""
open(OUT, "w").write(tsx)
print("trechos:", len(plano["trechos"]), "| quadros:", total, "| s:", total / FPS)

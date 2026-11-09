import json, sys
S, OUT = sys.argv[1], sys.argv[2]
PLANO = sys.argv[3] if len(sys.argv) > 3 else "plano_cortes.json"
NOME = sys.argv[4] if len(sys.argv) > 4 else "EdicaoVertical"
FPS = 30
d = json.load(open(S + "/transcricao.json"))
plano = json.load(open(S + "/" + PLANO))
REMOVIDOS = [(r["de"], r["ate"]) for r in plano.get("remover", [])]
W = [w for s in d for w in s["words"]]
RAW = list(W)
# Correções revisadas da transcrição (ver relatório)
CORR = {" André": " Vandré", " IMO": " IMU"}
for w in W:
    w["w"] = CORR.get(w["w"], w["w"])
def juntar(seq, novos):
    for i in range(len(W) - len(seq) + 1):
        if [w["w"] for w in W[i:i + len(seq)]] == seq:
            grupo = W[i:i + len(seq)]
            s0, e0 = grupo[0]["s"], grupo[-1]["e"]
            p0 = min(w["p"] for w in grupo)
            passo = (e0 - s0) / len(novos)
            W[i:i + len(seq)] = [{"w": t, "s": s0 + k * passo, "e": s0 + (k + 1) * passo, "p": p0} for k, t in enumerate(novos)]
            return True
    raise SystemExit("sequência não encontrada: %r" % seq)
juntar([" Geo", " VB", " Map"], [" GeoVBMap"])
juntar([" 67", " 992", " 48", " 8884."], [" (67)", " 99248-8884."])
# Pontuação apenas (nenhuma palavra alterada)
for i, w in enumerate(W):
    if w["w"] == " né" and i > 0:
        W[i - 1]["w"] = W[i - 1]["w"].rstrip(",") + ","
        w["w"] = " né,"
    if w["w"] == " E" and 106.0 < w["s"] < 106.5:
        W[i - 1]["w"] = W[i - 1]["w"].rstrip(",") + ","
        w["w"] = " e"

TR = plano["trechos"]
for w in W:
    ov = [min(w["e"], b) - max(w["s"], a) for a, b in TR]
    meio = (w["s"] + w["e"]) / 2
    dist = [0 if a <= meio < b else min(abs(meio - a), abs(meio - b)) for a, b in TR]
    k = max(range(len(TR)), key=lambda k: (ov[k], -dist[k]))
    # Única palavra removida de propósito: o 1º "algumas" (erro de gravação, 97,8 s)
    cortada = w["w"] == " algumas" and 97.5 < w["s"] < 98.2
    # Falas removidas de propósito no plano (ex.: versão de 90 s)
    removida = any(a <= meio <= b for a, b in REMOVIDOS)
    w["trecho"] = None if (cortada or removida) else k

W = [w for w in W if w["trecho"] is not None]

# Páginas de legenda: frases (pontuação/pausa) empacotadas em até MAXC caracteres (2 linhas)
MAXC = 38
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
pontos = [
    (0, 330, 1.2), (2.5, 328, 1.2), (4.5, 334, 1.2), (5.6, 330, 1.2), (6.6, 284, 1.2), (7.4, 292, 1.2),
    (8.4, 310, 1.2), (9.6, 334, 1.2), (10.4, 340, 1.2), (11.8, 314, 1.2), (14, 339, 1.2), (16, 357, 1.2),
    (18, 400, 1.2), (20, 357, 1.2), (22, 357, 1.2), (23.5, 288, 1.2), (26.5, 288, 1.2), (28, 390, 1.2),
    (31.4, 450, 1.2),
    (33.5, 200, 1.35), (34.5, 150, 1.35), (43.3, 145, 1.35), (46.2, 173, 1.35), (47.2, 173, 1.35),
    (50, 288, 1.2), (110, 288, 1.2),
    (112, 110, 1.35), (114, 144, 1.35), (116, 150, 1.35), (118.7, 135, 1.35), (119.6, 150, 1.35),
    (122, 165, 1.35), (124, 170, 1.35), (126, 155, 1.35), (128, 170, 1.35), (132, 175, 1.35),
    (136, 185, 1.35), (141.5, 190, 1.35),
]

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
        <Enquadramento pontos={{PONTOS}}>
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
import {{ Enquadramento, type PontoEnquadramento }} from "./Enquadramento";

// Gerado por scripts/gerar_composicao.py a partir de dados/{PLANO} e da transcrição (tempos em relação ao original).
// Duração total: {total} quadros ({total / FPS:.1f} s a {FPS} fps).
export const DURACAO_EDICAO = {total};

// Enquadramento: [tempo no original (s), centro do apresentador (px no original), zoom]
const PONTOS: ReadonlyArray<PontoEnquadramento> = {json.dumps(pontos)};

// Área da legenda: longe da faixa inferior (~420 px) e dos botões à direita do Instagram.
const LEGENDA = {{ largura: 840, esquerda: 80, baixo: 440 }};

export const {NOME}: React.FC = () => {{
  return (
    <Series>
{chr(10).join(blocos)}
    </Series>
  );
}};
"""
open(OUT, "w").write(tsx)
print("trechos:", len(plano["trechos"]), "| quadros:", total, "| s:", total / FPS)

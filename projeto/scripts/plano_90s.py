"""Gera dados/plano_cortes_90s.json a partir do plano V01 (122 s):
1) remove trechos de fala dispensáveis (lista REMOVER, com motivo);
2) encurta pausas internas (silêncio > 0,35 s a -35 dB) deixando PAD s de cada lado.
Nenhuma palavra dentro dos trechos mantidos é cortada."""
import json, sys
D = sys.argv[1] if len(sys.argv) > 1 else "dados"
PAD = 0.12
REMOVER = [
    (20.50, 28.75, "ele pega até uma certa distância, mas consegue,", "frase com hesitação; a ideia de que funciona sob a copa continua na sequência"),
    (28.70, 35.50, "com a banda L, com satélites, (até) para você pegar aqui,", "repete a banda L já citada na abertura"),
    (69.60, 71.45, "onde foi locado,", "redundante com 'coordenadas em UTM'"),
    (76.70, 79.92, "que acontecem também, também", "repetição ('também, também') e complemento dispensável"),
    (104.95, 115.00, "e, e usando para você ter alguma atividade na área de campo, ter mais precisão", "frase truncada, sem conclusão; a ideia de resolver em campo continua"),
    (119.30, 120.70, "E é isso,", "muleta de transição"),
]
T = [tuple(x) for x in json.load(open(D + "/plano_cortes.json"))["trechos"]]
sil = [tuple(map(float, l.split())) for l in open(D + "/silencios_025.tsv") if len(l.split()) == 2]
def sub(segs, c, d):
    out = []
    for a, b in segs:
        if d <= a or c >= b: out.append((a, b)); continue
        if c > a: out.append((a, c))
        if d < b: out.append((d, b))
    return out
segs = T
for c, d, *_ in REMOVER: segs = sub(segs, c, d)
pausas = 0.0
for a, b in sil:
    if b - a > 2 * PAD + 0.11:
        antes = sum(y - x for x, y in segs)
        segs = sub(segs, a + PAD, b - PAD)
        pausas += antes - sum(y - x for x, y in segs)
segs = [(round(a, 3), round(b, 3)) for a, b in segs if b - a > 0.1]
json.dump({"trechos": segs,
           "remover": [{"de": c, "ate": d, "fala": f, "motivo": m} for c, d, f, m in REMOVER],
           "pad_pausas": PAD, "pausas_encurtadas_s": round(pausas, 2)},
          open(D + "/plano_cortes_90s.json", "w"), ensure_ascii=False, indent=1)
print("trechos:", len(segs), "| duração: %.2f s" % sum(b - a for a, b in segs), "| pausas: %.1f s" % pausas)

# Residência Edinho Agesul — sequência construtiva 9:16 (v01)

| Item | Valor |
|---|---|
| Arquivo | `entregas/2026-11-11_residencia-edinho_construcao-9x16_v01.mp4` |
| Formato | 1080 × 1920 (9:16 vertical), 30 fps, H.264 + faixa de áudio muda |
| Duração | 30 s |
| Público | Profissionais |
| Fonte | Prancha 01/02 do projeto legal/executivo (planta baixa, cobertura, cortes e fachada), de 04/11/2026 |
| Código | `projeto/casa3d/animacao.html` (cena Three.js) e `projeto/casa3d/render.js` (captura e codificação) |

## Roteiro e legendas

| Tempo | Etapa | Legenda | O que a animação mostra |
|---|---|---|---|
| 0,0–3,0 s | 01 Terreno e locação | 12,00 × 32,60 m · 391,20 m² | Lote com cotas e a planta marcada no solo |
| 3,0–6,0 s | 02 Fundação | Vigas baldrame · esquemático | Vigas avançando da frente para o fundo, sob o eixo das paredes |
| 6,0–8,5 s | 03 Contrapiso | Nível 0,00 · 391,20 m² | Piso avançando sobre todo o lote |
| 8,5–14,0 s | 04 Alvenaria | Paredes 15 cm · pé-direito 4,00 m | Paredes subindo, com vãos de portas e janelas |
| 14,0–17,0 s | 05 Laje e platibanda | Laje +4,15 m · topo +5,62 m | Laje avançando e platibanda subindo |
| 17,0–19,5 s | 06 Cobertura | Telha fibrocimento · i = 10 % | Telhas descendo sobre a laje |
| 19,5–22,5 s | 07 Esquadrias | 19 janelas PVC · 15 portas | Janelas, portas e portão entrando nos vãos |
| 22,5–26,0 s | 08 Reboco e pintura | Cinza elefante · faixa preta | Alvenaria aparente virando acabamento, vista da fachada |
| 26,0–30,0 s | 09 Residência unifamiliar | 261,81 m² construídos · 4 suítes | Volume final em vista aérea |

## Limites do modelo

- A fundação é esquemática: o PDF não traz projeto estrutural. As vigas baldrame seguem apenas o eixo das paredes, sem sapatas, blocos ou pilares.
- Posições de portas e janelas foram medidas na escala do desenho, não cotadas.
- A cor da alvenaria aparente (bloco cerâmico) é uma convenção visual; o PDF não especifica o tipo de bloco.
- Pontos elétricos e hidráulicos da folha 02 não foram modelados.
- O vídeo não tem trilha nem narração; a faixa de áudio é muda, só para compatibilidade com redes sociais.

## Como gerar de novo

```bash
cd projeto/casa3d
node render.js ../../entregas/<nome>.mp4 <pasta package do three@0.128.0>
```

O segundo argumento só é necessário sem acesso ao CDN. Para conferir quadros isolados antes de renderizar tudo:

```bash
FRAMES=0,300,600 node render.js /tmp/quadro_ <pasta package do three@0.128.0>
```

Abrir `animacao.html` no navegador reproduz a animação em tempo real; `animacao.html?t=12` congela no segundo 12.

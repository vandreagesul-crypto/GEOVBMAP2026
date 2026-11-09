# V02-simples: relatório

**Data:** 2026-11-09
**Base:** mesma edição da V01-simples (cortes, legendas, enquadramento e áudio idênticos).
Detalhes dos cortes e da transcrição: `V01-simples_relatorio.md`.

## Única diferença em relação à V01

| Item | V01-simples | V02-simples |
|---|---|---|
| Taxa de bits do vídeo | ~5 Mbps | ~10,6 Mbps (qualidade padrão do Remotion, igual à amostra aprovada) |
| Tamanho | 81,7 MB | 161,6 MB |
| No GitHub | Sim | **Não**: passa do limite de 100 MB, entregue direto no chat (listado no `.gitignore`) |

## Decisões mantidas por orientação do cliente

- O nome da empresa continua como **GeoVBMap**.
- **Sem título "GNSS RTK"**: a legenda mostra apenas o que foi falado.

## Verificação técnica

- 1080 × 1920, 30 fps, 3.673 quadros, 122,45 s, H.264 + AAC
- Volume de -13,9 LUFS e pico de -1,5 dBFS
- Decodificação completa sem erros
- Original conferido por SHA-256: OK

## Limite conhecido

- **16–19 s:** o apresentador está na borda da gravação original e não existe imagem além dela; mesmo sem zoom, o corte seria o mesmo.

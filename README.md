# Edição de vídeo — estrutura de trabalho

| Pasta | Conteúdo | Regra |
|---|---|---|
| `originais/` | Vídeo(s) bruto(s) recebido(s) | **Somente leitura.** Nunca editar, renomear nem sobrescrever. Trabalhar sempre sobre cópias ou referências. |
| `assets/` | Logos, trilhas, imagens, fontes, legendas (.srt) | Material de apoio usado na edição. |
| `projeto/` | Projeto Remotion (código, composições) | Lê de `originais/` e `assets/`; nunca grava em `originais/`. |
| `entregas/` | Vídeos renderizados para entrega | Nomear com versão: `AAAA-MM-DD_nome_v01.mp4`. |

## Preservação do original
Ao receber o vídeo em `originais/`:
1. Registrar o hash de conferência: `sha256sum originais/* > originais/SHA256SUMS`
2. Travar contra escrita: `chmod a-w originais/<arquivo>`
3. Conferir a qualquer momento: `sha256sum -c originais/SHA256SUMS`

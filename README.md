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

## Registro de originais

| Arquivo | Recebido | Tamanho | SHA-256 | Características |
|---|---|---|---|---|
| `originais/WhatsApp_Video_2026-11-06_at_10.55.20.mp4` | 2026-11-09 | 16.163.110 bytes | `7f2d6f28…6cebaa` (ver `originais/SHA256SUMS`) | H.264 + AAC estéreo 44,1 kHz · 2 min 22 s · gravado 1024×576 com rotação de 90° (exibe 576×1024, vertical) · ~31,6 fps variável (WhatsApp) |

O projeto acessa o vídeo pelo link `projeto/public/original.mp4` → `../../originais/…` (somente leitura, sem cópia).

# Relatório de cortes — edição vertical v01

Origem: `originais/WhatsApp_Video_2026-11-06_at_10.55.20.mp4` (142,1 s) · SHA-256 `7f2d6f28…6cebaa`

Resultado: **122,4 s** (removidos **19,6 s** em 19 cortes) · 18 trechos mantidos.

Critérios: só silêncio (< -35 dB) com ≥ 0,8 s, encurtado para ~0,4 s (0,22 s depois da fala + 0,18 s antes da próxima); erros de gravação removidos apenas quando havia silêncio limpo entre as palavras. Nenhuma palavra com sentido foi removida.

| # | Início (s) | Fim (s) | Removido | Tipo | Motivo |
|---|---|---|---|---|---|
| 1 | 0.00 | 1.65 | 1.65 s | Pausa | Silêncio antes da primeira fala |
| 2 | 23.19 | 23.69 | 0.50 s | Pausa | Pausa de 0.9 s reduzida para 0,4 s |
| 3 | 25.12 | 25.60 | 0.48 s | Pausa | Pausa de 0.9 s reduzida para 0,4 s |
| 4 | 27.04 | 27.62 | 0.58 s | Pausa | Pausa de 1.0 s reduzida para 0,4 s |
| 5 | 31.38 | 33.51 | 2.13 s | Pausa | Pausa de 2.5 s reduzida para 0,4 s |
| 6 | 35.11 | 35.61 | 0.50 s | Pausa | Pausa de 0.9 s reduzida para 0,4 s |
| 7 | 37.00 | 37.85 | 0.85 s | Pausa | Pausa de 1.2 s reduzida para 0,4 s |
| 8 | 43.35 | 46.14 | 2.79 s | Pausa | Pausa de 3.2 s reduzida para 0,4 s |
| 9 | 47.15 | 47.70 | 0.55 s | Pausa | Pausa de 1.0 s reduzida para 0,4 s |
| 10 | 60.21 | 61.67 | 1.46 s | Pausa | Pausa de 1.9 s reduzida para 0,4 s |
| 11 | 69.56 | 70.20 | 0.64 s | Pausa | Pausa de 1.0 s reduzida para 0,4 s |
| 12 | 76.81 | 77.24 | 0.43 s | Pausa | Pausa de 0.8 s reduzida para 0,4 s |
| 13 | 93.59 | 95.63 | 2.04 s | Pausa | Pausa de 2.4 s reduzida para 0,4 s |
| 14 | 97.90 | 99.66 | 1.76 s | Erro de gravação | Erro de gravação: 'algumas… algumas' — sai o 1º 'algumas' e a hesitação de 1,3 s |
| 15 | 105.17 | 105.89 | 0.72 s | Pausa | Pausa de 1.1 s reduzida para 0,4 s |
| 16 | 114.46 | 115.11 | 0.65 s | Pausa | Pausa de 1.0 s reduzida para 0,4 s |
| 17 | 118.72 | 119.52 | 0.80 s | Pausa | Pausa de 1.2 s reduzida para 0,4 s |
| 18 | 130.16 | 130.61 | 0.45 s | Pausa | Pausa de 0.9 s reduzida para 0,4 s |
| 19 | 141.45 | 142.10 | 0.65 s | Pausa | Silêncio após 'Valeu, obrigado!' |

## Mantido de propósito

- **79,5 s — “também, também”**: o 1º fecha a frase (“os erros que acontecem também”), o 2º abre a próxima (“também é a compensação…”). Cortar mudaria o sentido.
- **104,8–106,3 s — “poligonal e… E usando”**: recomeço de frase, mas sem intervalo entre as palavras; cortar arriscaria comer sílabas. Só a pausa de 1,1 s foi encurtada.
- **“né”** (84,3 s e 102,4 s): muletas leves e naturais; mantidas.

## Correções de transcrição nas legendas (confirmar)

- 3,1 s: Whisper ouviu **“André”** → legenda usa **“Vandré”**.
- 83,9 s: **“IMO”** → **“IMU”** (sensor inercial da compensação de inclinação).
- A confirmar na versão completa: “Geo VB Map” → **“GeoVBMap”**; telefone “67 992 48 8884” → **“(67) 99248-8884”**.

## Áudio

- Original: −27,9 LUFS, pico −9,3 dBFS (baixo para redes sociais).
- Tratamento (cópia em `assets/`): passa-altas 80 Hz → compressão suave 3:1 → normalização EBU R128 em duas passadas para **−14 LUFS, pico máx. −1,5 dBTP** (sem distorção).

## Amostra

- `entregas/2026-11-09_amostra-8s_v01.mp4` — quadros 0–239 da composição `EdicaoVertical` (original 1,65–9,65 s, sem cortes internos).

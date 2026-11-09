# V01-simples — relatório de edição

- **Arquivo:** `entregas/V01-simples.mp4` · 1080 × 1920 · 30 fps · H.264 5 Mbps + AAC 192 kbps
- **Origem:** `originais/WhatsApp_Video_2026-11-06_at_10.55.20.mp4` (142,1 s) — preservado, SHA-256 `7f2d6f28…6cebaa` conferido
- **Duração final:** 122,4 s (19 cortes, 19,6 s removidos, 18 trechos mantidos)
- **Padrão:** o mesmo da amostra aprovada (`2026-11-09_amostra-8s_v01.mp4`)

## 1. Cortes

Critério: só silêncio (< −35 dB) de 0,8 s ou mais, encurtado para cerca de 0,4 s; erros de gravação removidos apenas onde havia silêncio limpo entre as palavras. Nenhuma palavra com sentido foi removida.

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

**Mantido de propósito:**

- 79,5 s — “também, também”: o 1º fecha a frase, o 2º abre a próxima.
- 104,8–106,3 s — “poligonal e, e usando”: recomeço sem intervalo entre as palavras; cortar comeria sílabas. Só a pausa foi encurtada.
- “né” (84 s e 102 s): mantidos.

## 2. Revisão da transcrição

Transcrição: Whisper large-v3-turbo (CPU), com tempo por palavra. Uma 2ª passada com vocabulário técnico foi testada e descartada: omitiu palavras ditas e inventou outras.

| Tempo | Transcrito | Na legenda | Motivo |
|---|---|---|---|
| 3,1 s | André | **Vandré** | Nome do apresentador (amostra aprovada) |
| 83,9 s | IMO | **IMU** | Sensor inercial da compensação de inclinação |
| 129,3 s | Geo VB Map | **GeoVBMap** | Nome da empresa |
| 136,1 s | 67 992 48 8884 | **(67) 99248-8884** | Formato de telefone |
| 84 s, 102 s | né | **, né,** | Só pontuação |

**GNSS RTK:** não aparece na fala em nenhuma das duas transcrições. O equipamento é citado como **“RS3L, banda L”** (9 s e 127 s). A legenda segue o que foi dito; nada foi acrescentado.

## 3. Enquadramento

- Zoom 1,2× com deslocamento suave até o apresentador (0–31 s e tela da coletora 48–110 s).
- Zoom 1,35× onde ele está na lateral (33–47 s e 112–142 s), aproximando-o do centro sem cortar o bastão.
- 16–19 s: o apresentador está na borda direita do quadro original; o enquadramento vai ao limite, mas parte dele fica fora da imagem desde a gravação.

## 4. Áudio

- Original −27,9 LUFS → cópia de trabalho em `assets/`: passa-altas 80 Hz, compressão suave 3:1, normalização EBU R128 em duas passadas para −14 LUFS e pico máx. −1,5 dBTP.

## 5. Legendas (texto final, 48 páginas, até 2 linhas)

1. Bom dia, pessoal,
2. meu nome é Vandré Barreto,
3. eu sou engenheiro sanitarista
4. ambiental e engenheiro civil,
5. aqui a gente está fazendo
6. uma demonstração do RS3L, banda L,
7. ele faz algumas medições topográficas
8. até para fazer a supressão vegetal,
9. nesse ambiente aqui,
10. que tem as copas das árvores,
11. ele pega até uma certa distância,
12. mas consegue, com a banda L,
13. com satélites,
14. até para você pegar aqui,
15. ele não vai sair o ponto,
16. não vai dar interferência nenhuma,
17. a gente consegue locar essa árvore.
18. Aqui na coletora eu posso mostrar,
19. demonstrar para vocês a quantidade
20. de pontos que foi realizado,
21. pegando a locação de cada árvore.
22. Aqui também a gente consegue visualizar
23. as informações de cada ponto,
24. onde foi locado,
25. as coordenadas em UTM,
26. os erros que acontecem também,
27. também é a compensação de
28. inclinação que é o sistema IMU, né,
29. você pode ter uma inclinação
30. até de 60 graus para você pegar
31. o ponto e tem uma precisão
32. centimétrica e aqui também tem
33. algumas ferramentas que você
34. pode utilizar em campo, né,
35. até para você fazer uma poligonal e,
36. e usando para você ter alguma
37. atividade na área de campo,
38. ter mais precisão e você
39. consegue resolver aqui em
40. campo sem estar no escritório.
41. E é isso, a gente faz o serviço,
42. faz a locação e a venda
43. do equipamento RS3L.
44. A GeoVBMap está disposta
45. a fazer a demonstração,
46. é só marcar comigo mesmo no
47. telefone (67) 99248-8884.
48. Valeu, obrigado!

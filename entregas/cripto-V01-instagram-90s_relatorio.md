# cripto-V01-instagram-90s: relatório

**Data:** 2026-11-09
**Base:** cripto-V01-base aprovada (edição V01, legendas, enquadramento e inserção 1).
**Meta:** no máximo 90 s para o Instagram.

## Resultado

| Item | Valor |
|---|---|
| Duração | **88,3 s** (a V01 tinha 122,4 s) |
| Formato | 1080 × 1920, 30 fps, 2.648 quadros, H.264 + AAC |
| Vídeo | 8 Mbps (93 MB, cabe no GitHub) |
| Volume | -14,0 LUFS, pico de -1,5 dBFS |
| Integridade | Decodificado do início ao fim sem erros; original conferido por SHA-256 |

## 1. Falas retiradas (16,1 s)

| Original (s) | Fala retirada | Motivo |
|---|---|---|
| 20,5–28,8 | "ele pega até uma certa distância, mas consegue," | Hesitação; a ideia de que funciona sob a copa continua na frase seguinte |
| 28,7–35,5 | "com a banda L, com satélites, para você pegar aqui," | Repete a banda L, já citada na abertura |
| 69,6–71,5 | "onde foi locado," | Redundante com "coordenadas em UTM" |
| 76,7–79,9 | "que acontecem também, também" | Repetição ("também, também") |
| 105,0–115,0 | "e usando para você ter alguma atividade na área de campo, ter mais precisão" | Frase truncada, sem conclusão |
| 119,3–120,7 | "E é isso," | Muleta de transição |

## 2. Pausas encurtadas (cerca de 9 s)

- **Critério:** toda pausa acima de 0,35 s (silêncio a -35 dB) foi reduzida, deixando 0,12 s antes e depois da fala.
- **O que não foi cortado:** nenhuma palavra.

## 3. Conferência da fala

O vídeo final foi transcrito de novo, e o texto ficou contínuo e com sentido:

> Bom dia, pessoal, meu nome é Vandré Barreto, eu sou engenheiro sanitarista ambiental e engenheiro civil. Aqui a gente está fazendo uma demonstração do RS3L, banda L, ele faz algumas medições topográficas até para fazer a supressão vegetal. Nesse ambiente aqui que tem as copas das árvores, ele não vai sair o ponto, não vai dar interferência nenhuma, a gente consegue locar essa árvore. Aqui na coletora eu posso demonstrar para vocês a quantidade de pontos que foi realizado, pegando a locação de cada árvore. Aqui também a gente consegue visualizar as informações de cada ponto, as coordenadas em UTM, os erros, a compensação de inclinação, que é o sistema IMU, você pode ter uma inclinação até de 60 graus para você pegar o ponto e tem uma precisão centimétrica, e aqui também tem algumas ferramentas que você pode utilizar em campo até para você fazer uma poligonal e você consegue resolver aqui em campo sem estar no escritório. A gente faz o serviço, faz a locação e a venda do equipamento RS3L. A GeoVBMap está disposta a fazer a demonstração. É só marcar comigo mesmo no telefone (67) 99248-8884. Valeu, obrigado!

## 4. Inserção 1 (ilustração)

- **Sincronia:** continua presa à fala. Entra em "RS3L" (7,5 s) e sai em "locar essa árvore" (23,5 s), ficando cerca de 16 s na tela.
- **Posição:** acima do rosto, com o tamanho aprovado (672 px de largura).

## Como refazer

```bash
cd projeto
python3 scripts/plano_90s.py
python3 scripts/gerar_composicao.py dados src/edicao/EdicaoInstagram90.tsx plano_cortes_90s.json EdicaoInstagram90
npx remotion render cripto-V01-instagram-90s ../entregas/cripto-V01-instagram-90s.mp4 --video-bitrate=8M
```

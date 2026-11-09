# Projeto Remotion — vídeo vertical 1080 × 1920

Composição `Vertical`: 1080 × 1920 px, 30 fps, 5 s (base vazia, ainda sem edição).
Formato definido em `src/Composition.tsx` (constante `VERTICAL`).

## Comandos (rodar dentro de `projeto/`)

```bash
npm install
```

```bash
npm run dev
```

```bash
npx remotion render Vertical ../entregas/AAAA-MM-DD_nome_v01.mp4
```

## Navegador
Por padrão o Remotion baixa o Chrome Headless Shell oficial.
Se o download estiver bloqueado, aponte outro executável:

```bash
export REMOTION_BROWSER=/caminho/para/chrome-headless-shell
```

## Regras de pastas
- Nunca gravar em `../originais/` — apenas leitura.
- Renderizações finais vão para `../entregas/`.

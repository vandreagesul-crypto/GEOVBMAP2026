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

No ambiente de nuvem (Claude Code), o Node precisa usar o proxy para baixar o navegador
(fica em `node_modules/.remotion/`, refazer após `npm install` em sessão nova):

```bash
NODE_USE_ENV_PROXY=1 npx remotion browser ensure
```

## Regras de pastas
- Nunca gravar em `../originais/` — apenas leitura.
- Renderizações finais vão para `../entregas/`.

## Agent Skills oficiais (remotion-dev/skills)

Instaladas conforme https://www.remotion.dev/docs/ai/skills com `npx skills add remotion-dev/skills`
(escopo de projeto). Arquivos em `.agents/skills/`, links para o Claude Code em `.claude/skills/`,
versões travadas em `skills-lock.json`.

| Comando | Uso |
|---|---|
| `/remotion-best-practices` | Roteador geral — usar quando não souber qual escolher |
| `/remotion-create` | Criar projeto ou composição |
| `/remotion-markup` | Composições, animação, layout, tipografia, mídia, áudio, fontes |
| `/remotion-captions` | Legendas |
| `/remotion-multimedia` | Metadados de vídeo/áudio (Mediabunny) |
| `/remotion-studio` | Pré-visualizar no Studio |
| `/remotion-render` | Renderizar vídeo ou quadro |
| `/remotion-maps` | Mapas, rotas, GeoJSON, voos 3D |
| `/remotion-docs` | Consultar a documentação atual |
| `/remotion-license` | Licença |
| `/remotion-upgrade` | Atualizar Remotion e as skills |
| `/remotion-interactivity`, `/remotion-saas` | Edição interativa no Studio; apps com Remotion |

Disponibilidade no Claude Code: imediata em sessões abertas em `projeto/`; em sessões abertas na
raiz do repositório, carregam ao trabalhar em arquivos de `projeto/`.

Manutenção:

```bash
npx skills list
```

```bash
npx skills update -p -y
```

Restaurar a partir do lockfile (ex.: após clonar):

```bash
npx skills experimental_install
```

---
name: fiscalizacao-de-obra
description: Monta e confere a pasta de entrega de medição de obra pública no padrão AGESUL (pasta MEDIÇÃO > subpasta "NOME DA OBRA - NUP nº" > 10 subpastas de documentos). Acionar sempre que o usuário mencionar "medição", "pasta de medição", "entrega de medição", "boletim de medição", "montar medição", "processo de medição", "fiscalização de obra", "atesto", "NUP" de obra, ou pedir para organizar, conferir ou fechar a documentação de uma medição de obra pública. Não esperar a expressão "padrão AGESUL" — qualquer pedido de organizar documentos de medição de obra pública deve acionar esta skill.
---

# Fiscalização de Obra — Entrega de Medição (padrão AGESUL)

Skill para o fiscal de obra pública organizar a entrega de cada medição em uma
estrutura de pastas fixa, sempre igual, pronta para instruir o processo.

## 1. Estrutura padrão

```
MEDIÇÃO/
└── <NOME DA OBRA> - NUP <número do NUP>/
    ├── 01 - BOLETIM DE MEDIÇÃO
    ├── 02 - RESUMO DE MEDIÇÃO
    ├── 03 - REGISTRO FOTOGRÁFICO
    ├── 04 - CERTIFICADO DE ASSINATURA
    ├── 05 - MEMORIAL DE CÁLCULO
    ├── 06 - NOTA FISCAL
    ├── 07 - ATESTO DE NOTA FISCAL
    ├── 08 - CERTIDÕES
    ├── 09 - DECLARAÇÃO DE ADIMPLEMENTO
    └── 10 - DESPACHO
```

Regras de nomenclatura:

- A pasta raiz chama-se sempre `MEDIÇÃO`.
- A subpasta da obra é `NOME DA OBRA - NUP número`, com o nome em maiúsculas.
- A barra `/` do NUP vira hífen `-`, porque barra não é permitida em nome de
  pasta (ex.: NUP `57/001.234/2026` → `NUP 57-001.234-2026`).
- As 10 subpastas mantêm exatamente a ordem e os nomes acima. O prefixo
  `01`…`10` existe só para o explorador de arquivos preservar a ordem.

## 2. Fluxo de trabalho

### Etapa 1 — Coletar os dados

Obter do usuário, antes de criar qualquer coisa:

1. Nome da obra
2. Número do NUP
3. Local onde a pasta `MEDIÇÃO` deve ficar (padrão: diretório atual)

Se faltar o nome da obra ou o NUP, perguntar. Nunca inventar número de NUP.

### Etapa 2 — Criar a estrutura

```bash
python3 scripts/pasta_medicao.py criar --obra "NOME DA OBRA" --nup "57/001.234/2026" --destino "CAMINHO"
```

- É seguro rodar de novo: pastas já existentes são mantidas, nada é apagado.
- `--sem-numeracao` cria as subpastas sem o prefixo `01`…`10`.

### Etapa 3 — Distribuir os documentos

Quando o usuário enviar arquivos da medição, colocar cada um na subpasta
correspondente:

| Subpasta | Documento |
|---|---|
| 01 - BOLETIM DE MEDIÇÃO | Boletim de medição do período |
| 02 - RESUMO DE MEDIÇÃO | Resumo da medição |
| 03 - REGISTRO FOTOGRÁFICO | Relatório/registro fotográfico dos serviços medidos |
| 04 - CERTIFICADO DE ASSINATURA | Certificados das assinaturas digitais dos documentos |
| 05 - MEMORIAL DE CÁLCULO | Memória de cálculo dos quantitativos medidos |
| 06 - NOTA FISCAL | Nota fiscal da medição |
| 07 - ATESTO DE NOTA FISCAL | Atesto da nota fiscal pelo fiscal |
| 08 - CERTIDÕES | Certidões de regularidade da contratada |
| 09 - DECLARAÇÃO DE ADIMPLEMENTO | Declaração de adimplemento |
| 10 - DESPACHO | Despacho de encaminhamento |

Se não for possível identificar a subpasta de um arquivo, perguntar ao usuário
em vez de supor. Não renomear nem alterar o conteúdo dos arquivos recebidos sem
pedido expresso.

### Etapa 4 — Conferir antes de entregar

```bash
python3 scripts/pasta_medicao.py verificar --obra "NOME DA OBRA" --nup "57/001.234/2026" --destino "CAMINHO"
```

O comando lista cada subpasta como `OK`, `VAZIA` ou `AUSENTE`. Apresentar o
resultado ao usuário como lista de pendências. A conferência só verifica se há
arquivo em cada subpasta; a validação do conteúdo (valores, datas, validade das
certidões, assinaturas) é do fiscal.

## 3. Modelos de referência

A pasta `modelos/` traz um documento real de exemplo para cada subpasta já
coberta. Usar como referência de formato e conteúdo esperado ao conferir ou
orientar a montagem de uma medição:

| Subpasta | Modelo | Origem |
|---|---|---|
| 01 - BOLETIM DE MEDIÇÃO | `1_BoletimMedicao_2_1.pdf` | Sistema E-KRONOS |
| 02 - RESUMO DE MEDIÇÃO | `2_ResumoMedicao_2.pdf` | Sistema E-KRONOS |
| 03 - REGISTRO FOTOGRÁFICO | `3_RelatorioFotograficoMedicao_3.pdf` | Sistema E-KRONOS |
| 04 - CERTIFICADO DE ASSINATURA | `4_certificado_de_assinatura.pdf` | DocuSign |
| 05 - MEMORIAL DE CÁLCULO | `5_MEMORIA_CALCULO_08_AD_assinado.pdf` | Contratada |

O que os modelos mostram:

- Boletim, resumo e relatório fotográfico saem do E-KRONOS e são assinados em
  um mesmo envelope DocuSign pelo representante da contratada e pelo fiscal.
- O certificado de assinatura é o "Certificado de Conclusão" desse envelope; o
  ID do envelope no certificado deve ser o mesmo impresso no topo dos três
  documentos.
- Processo, contrato, nº da medição e período de referência devem coincidir em
  todos os documentos da mesma medição.
- A memória de cálculo é emitida pela contratada, com o mesmo nº de medição.

Os modelos são apenas referência: nunca copiá-los para a pasta de entrega de
uma obra nem reaproveitar seus dados (valores, nomes, datas) em outra medição.
As subpastas 06 a 10 ainda não têm modelo.

## 4. Limites

- A skill organiza e confere a documentação; ela não substitui a análise
  técnica nem o atesto do fiscal.
- Valores, quantitativos e datas vêm sempre dos documentos fornecidos pelo
  usuário. Não preencher dados ausentes por estimativa.

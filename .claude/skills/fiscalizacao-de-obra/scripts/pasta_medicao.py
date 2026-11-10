#!/usr/bin/env python3
"""Cria e confere a pasta de entrega de medição no padrão AGESUL.

Estrutura gerada:

    MEDIÇÃO/
      <NOME DA OBRA> - NUP <número>/
        <NNª MEDIÇÃO>/
          01 - BOLETIM DE MEDIÇÃO
          ...
          10 - DESPACHO

Uso:
    python3 pasta_medicao.py criar --obra "NOME DA OBRA" --nup "00/000.000/0000" --medicao 8 [--destino DIR]
    python3 pasta_medicao.py verificar --obra "NOME DA OBRA" --nup "00/000.000/0000" --medicao 8 [--destino DIR]
"""
import argparse
import re
import sys
from pathlib import Path

PASTA_RAIZ = "MEDIÇÃO"

SUBPASTAS = [
    "BOLETIM DE MEDIÇÃO",
    "RESUMO DE MEDIÇÃO",
    "REGISTRO FOTOGRÁFICO",
    "CERTIFICADO DE ASSINATURA",
    "MEMORIAL DE CÁLCULO",
    "NOTA FISCAL",
    "ATESTO DE NOTA FISCAL",
    "CERTIDÕES",
    "DECLARAÇÃO DE ADIMPLEMENTO",
    "DESPACHO",
]

# Caracteres que não podem aparecer em nome de pasta no Windows/OneDrive.
PROIBIDOS = re.compile(r'[<>:"|?*]')


def limpar(texto: str) -> str:
    """Torna o texto válido como nome de pasta, preservando acentos."""
    texto = texto.strip().replace("/", "-").replace("\\", "-")
    texto = PROIBIDOS.sub("", texto)
    texto = re.sub(r"\s+", " ", texto)
    return texto.strip(" .")


def nome_subpasta(indice: int, nome: str, numerar: bool) -> str:
    return f"{indice:02d} - {nome}" if numerar else nome


def pasta_da_medicao(destino: Path, obra: str, nup: str, medicao: int) -> Path:
    obra, nup = limpar(obra), limpar(nup)
    if not obra or not nup:
        sys.exit("ERRO: informe o nome da obra e o número do NUP.")
    if medicao < 1:
        sys.exit("ERRO: o número da medição deve ser 1 ou maior.")
    # Dois dígitos para a 10ª medição não aparecer antes da 2ª no explorador.
    return destino / PASTA_RAIZ / f"{obra.upper()} - NUP {nup}" / f"{medicao:02d}ª MEDIÇÃO"


def criar(args) -> None:
    base = pasta_da_medicao(Path(args.destino), args.obra, args.nup, args.medicao)
    numerar = not args.sem_numeracao
    for i, nome in enumerate(SUBPASTAS, start=1):
        (base / nome_subpasta(i, nome, numerar)).mkdir(parents=True, exist_ok=True)
    print(f"Pasta de medição criada: {base}")
    for i, nome in enumerate(SUBPASTAS, start=1):
        print(f"  {nome_subpasta(i, nome, numerar)}")


def verificar(args) -> None:
    base = pasta_da_medicao(Path(args.destino), args.obra, args.nup, args.medicao)
    if not base.is_dir():
        sys.exit(f"ERRO: pasta não encontrada: {base}")
    pendentes = 0
    for i, nome in enumerate(SUBPASTAS, start=1):
        candidatas = [base / nome_subpasta(i, nome, True), base / nome]
        pasta = next((p for p in candidatas if p.is_dir()), None)
        if pasta is None:
            situacao, qtd = "AUSENTE", 0
        else:
            qtd = sum(1 for f in pasta.rglob("*") if f.is_file())
            situacao = "OK" if qtd else "VAZIA"
        if situacao != "OK":
            pendentes += 1
        print(f"  [{situacao:^7}] {nome_subpasta(i, nome, True)} ({qtd} arquivo(s))")
    total = len(SUBPASTAS)
    print(f"\n{total - pendentes}/{total} subpastas com documento.")
    if pendentes:
        sys.exit(1)


def main() -> None:
    parser = argparse.ArgumentParser(description=__doc__.splitlines()[0])
    sub = parser.add_subparsers(dest="comando", required=True)
    for nome, funcao in (("criar", criar), ("verificar", verificar)):
        p = sub.add_parser(nome)
        p.add_argument("--obra", required=True, help="Nome da obra")
        p.add_argument("--nup", required=True, help="Número do NUP do processo")
        p.add_argument("--medicao", required=True, type=int, help="Número da medição (ex.: 8)")
        p.add_argument("--destino", default=".", help="Diretório onde fica a pasta MEDIÇÃO")
        p.set_defaults(funcao=funcao)
        if nome == "criar":
            p.add_argument("--sem-numeracao", action="store_true",
                           help="Não prefixar as subpastas com 01, 02, ...")
    args = parser.parse_args()
    args.funcao(args)


if __name__ == "__main__":
    main()

import random

def jogar_pedra_papel_tesoura():
    """Função para jogar Pedra, Papel e Tesoura."""

    while True:
        escolhas = ['pedra', 'papel', 'tesoura']
        computador = random.choice(escolhas)
        jogador = input("Escolha pedra, papel ou tesoura: ").lower()

        if jogador not in escolhas:
            print("Opção inválida. Por favor, escolha pedra, papel ou tesoura.")
            continue

        print(f"Você escolheu {jogador}, e o computador escolheu {computador}.")

        if jogador == computador:
            print("Empate!")
        elif (jogador == 'pedra' and computador == 'tesoura') or \
             (jogador == 'papel' and computador == 'pedra') or \
             (jogador == 'tesoura' and computador == 'papel'):
            print("Você venceu!")
        else:
            print("Computador venceu!")

        jogar_novamente = input("Deseja jogar novamente? (sim/não): ").lower()
        if jogar_novamente != 'sim':
            break

if __name__ == "__main__":
    jogar_pedra_papel_tesoura()
# ✊✋✌️ JokenPô (Pedra, Papel e Tesoura)

Um jogo clássico e interativo de Pedra, Papel e Tesoura desenvolvido com **JavaScript puro (Vanilla JS)**, HTML5 e CSS3. O jogador enfrenta a "máquina" (computador), que faz suas escolhas de forma aleatória, com o placar e resultados sendo atualizados em tempo real!

---

### 🌐 Demonstração Online

Quer desafiar a máquina agora mesmo? Teste o jogo online pelo link:

👉 **[Clique aqui para jogar o JokenPô](https://lmvc007.github.io/JokenPo/)**

---

## 🎮 Como Funciona

1. O jogador escolhe entre **Pedra**, **Papel** ou **Tesoura** clicando nos botões da interface.

2. O script gera uma escolha aleatória para a máquina.

3. As escolhas são comparadas de acordo com as regras clássicas:
   - 🪨 **Pedra** ganha de Tesoura e perde para Papel.
   - 📄 **Papel** ganha de Pedra e perde para Tesoura.
   - ✂️ **Tesoura** ganha de Papel e perde para Pedra.
   - Escolhas iguais resultam em **Empate**.

4. O resultado da rodada é exibido na tela, mostrando a escolha do oponente e quem venceu.

5. O placar geral é atualizado automaticamente.

---

## ✨ Funcionalidades

- **Interatividade Total:** Botões dedicados para cada ação do jogador.

- **Lógica Aleatória:** Simulação de escolhas da máquina com `Math.random()`.

- **Feedback Dinâmico:** Mensagens visuais no DOM informando a escolha do adversário e o vencedor da rodada.

- **Sistema de Pontuação:** Placar dinâmico em tempo real contabilizando pontos do usuário e da máquina.

---

## 🛠️ Tecnologias Utilizadas

- **HTML5:** Estruturação semântica da página, botões e placar.

- **CSS3:** Estilização visual, alinhamento e design da interface.

- **JavaScript (Vanilla):** Manipulação do DOM, controle de estado do placar e lógica condicional.

---

## 📂 Estrutura da Lógica JavaScript

A lógica do jogo é modularizada nas seguintes funções principais:

- `yourChoice(value)`: Captura e armazena a jogada escolhida pelo usuário.

- `generateNumber()`: Gera um número pseudoaleatório entre 1 e 3 para a jogada do computador.

- `compareChoices()`: Aplica a lógica condicional para determinar o vencedor, atualiza o texto de feedback e chama a pontuação.

- `yourPoints()` / `machinePoints()`: Incrementam e renderizam a pontuação no HTML dinamicamente.

---

## 🚀 Como Executar o Projeto Localmente

1. Clone o repositório para o seu computador:
```bash
git clone https://github.com/LMVC007/JokenP-.git

# ✊✋✌️ JokenPô (Pedra, Papel e Tesoura)

Um jogo clássico e interativo de Pedra, Papel e Tesoura desenvolvido com **JavaScript puro (Vanilla JS)**, HTML e CSS. O jogador enfrenta a "máquina" (computador), que faz suas escolhas de forma aleatória, e o placar é atualizado em tempo real.

## 🎮 Como funciona

1. O jogador escolhe entre **Pedra**, **Papel** ou **Tesoura** clicando nos botões da interface.
2. O script gera uma escolha aleatória para a máquina.
3. As escolhas são comparadas de acordo com as regras clássicas do jogo:
   - **Pedra** ganha de Tesoura e perde para Papel.
   - **Papel** ganha de Pedra e perde para Tesoura.
   - **Tesoura** ganha de Papel e perde para Pedra.
   - Escolhas iguais resultam em **Empate**.
4. O resultado da rodada é exibido na tela, mostrando a escolha do oponente e quem venceu.
5. O placar geral é atualizado automaticamente.

## ✨ Funcionalidades

- **Interatividade:** Botões de escolha para o jogador.
- **Lógica Aleatória:** A máquina gera números aleatórios de 1 a 3 para simular suas jogadas (1 = Pedra, 2 = Papel, 3 = Tesoura).
- **Feedback Dinâmico:** Mensagens na tela indicam o resultado de cada rodada (Vitória, Derrota ou Empate) e o que a máquina jogou.
- **Sistema de Pontuação:** Placar dinâmico que contabiliza as vitórias do jogador e da máquina.

## 🛠️ Tecnologias Utilizadas

- **HTML5:** Estruturação da página e dos elementos (botões e placar).
- **CSS3:** Estilização da interface (cores, fontes e layout).
- **JavaScript (Vanilla):** Lógica principal do jogo, manipulação do DOM e geração de números aleatórios.

## 🚀 Como executar o projeto

Como o projeto é feito com tecnologias web padrão, não é necessário instalar nenhuma dependência ou servidor complexo.

1. Faça o clone deste repositório ou baixe os arquivos para o seu computador.
2. Certifique-se de que os arquivos `index.html`, `style.css` e `script.js` estejam na mesma pasta (ou ajustados conforme a sua estrutura).
3. Abra o arquivo `index.html` em qualquer navegador web de sua preferência (Chrome, Firefox, Edge, etc.).
4. Divirta-se jogando!

## 📂 Estrutura do Código JS

A lógica principal (no seu arquivo JS) é dividida nas seguintes funções:

- `yourChoice(value)`: Armazena a escolha feita pelo jogador (1, 2 ou 3).
- `generateNumber()`: Gera um número inteiro aleatório entre 1 e 3 para a jogada da máquina.
- `compareChoices()`: Avalia quem venceu a rodada com base nas escolhas, atualiza o placar e exibe a mensagem de resultado.
- `yourPoints()` / `machinePoints()`: Incrementam e renderizam a pontuação no HTML.

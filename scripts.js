// Variáveis de estado do jogo
let flippedCards = []; // Array que armazena as cartas viradas (sempre terá no máximo duas)
let matchedPairs = 0; // Contador de pares encontrados
let attempts = 0; // Contador de tentativas do jogador
let isCheckingPair = false; // Trava o jogo enquanto verifica o par ou esconde as cartas

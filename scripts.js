// Variáveis de estado do jogo
let flippedCards = []; // Array que armazena as cartas viradas (sempre terá no máximo duas)
let matchedPairs = 0; // Contador de pares encontrados
let attempts = 0; // Contador de tentativas do jogador
let isCheckingPair = false; // Trava o jogo enquanto verifica o par ou esconde as cartas

// Array com todas as cartas do jogo
const cardItems = [
  { id: 1, content: "🤡", matched: false },
  { id: 2, content: "🤡", matched: false },
  { id: 3, content: "👻", matched: false },
  { id: 4, content: "👻", matched: false },
  { id: 5, content: "☠️", matched: false },
  { id: 6, content: "☠️", matched: false },
  { id: 7, content: "👽", matched: false },
  { id: 8, content: "👽", matched: false },
  { id: 9, content: "👾", matched: false },
  { id: 10, content: "👾", matched: false },
  { id: 11, content: "🤖", matched: false },
  { id: 12, content: "🤖", matched: false },
  { id: 13, content: "🎃", matched: false },
  { id: 14, content: "🎃", matched: false },
  { id: 15, content: "😻", matched: false },
  { id: 16, content: "😻", matched: false },
];

// Função que embaralha as cartas
function shuffleCards(array) {
  // Positivo vai depois, negativo vai antes
  const shuffled = array.sort(() => (Math.random() > 0.5 ? 1 : -1));

  return shuffled;
}

function renderCards() {
  const deck = document.getElementById("deck");
  deck.innerHTML = "";

  const cards = shuffleCards(cardItems);
  cards.forEach((item) => console.log(item.content));
}

renderCards();

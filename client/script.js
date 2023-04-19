const flashcard = document.getElementById("flashcard");
const cardFront = document.getElementById("front");
const cardBack = document.getElementById("back");
let currentWord;

//temporary wordbank data -> will migrate to realtime firebase database
const wordBank = [
  {
    word: "Nihongo",
    meaning: "Japanese",
  },
  {
    word: "Sakana",
    meaning: "Fish",
  },
  {
    word: "Hoseki",
    meaning: "Jewelry",
  },
];

//function to flip card to reveal answer
const flipCard = () => {
  flashcard.classList.toggle("flipCard")
  
};

//function to pull random word/meaning pair and populate to card
const populateCard = () => {
  currentWord = wordBank[Math.floor(Math.random() * wordBank.length)];
  cardFront.innerHTML = `<h1>${currentWord.word}</h1>`
  cardBack.innerHTML = `<h1>${currentWord.meaning}</h1>`
};

populateCard();

flashcard.addEventListener("click", flipCard);

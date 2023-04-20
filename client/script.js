const flashcard = document.getElementById("flashcard");
const cardFront = document.getElementById("front");
const cardBack = document.getElementById("back");
let currentWord;

//temporary wordbank data -> will migrate to realtime firebase database
const wordBank = [
  {
    word: 'What is the helping verb meaning "I have someone do something for me?"? How is it conjugated? Who receives the benefit? What particle marks them?',
    meaning: "answer",
  },
];

//function to flip card to reveal answer
const flipCard = () => {
  flashcard.classList.toggle("flipCard")
  
};

//function to pull random word/meaning pair and populate to card
const populateCard = () => {
  currentWord = wordBank[Math.floor(Math.random() * wordBank.length)];
  cardFront.innerHTML = `${currentWord.word}`
  cardBack.innerHTML = `${currentWord.meaning}`
};

populateCard();

flashcard.addEventListener("click", flipCard);

const cardsElem = document.querySelector("#cards");
const sumElem = document.querySelector("#sum");
const startBtn = document.querySelector("#startBtn");
const getCardBtn = document.querySelector("#getCardBtn");
const winElem = document.querySelector("#winOrNot");

let isAlive = true;
let cards = [];
let sum = 0;

const getCard = () => {
	let num = Math.floor(Math.random() * 12 + 1);

	return num === 1 ? 11 : num;
};

const testWin = () => {
	if (sum < 21) winElem.textContent = "Pick another card";
	else if (sum === 21) {
		winElem.textContent = "You got blackjack!";
		isAlive = false;
	} else {
		winElem.textContent = "You lose!";
		isAlive = false;
	}
};

const start = () => {
	cards = [getCard(), getCard()];
	cardsElem.textContent = `${cards[0]}, ${cards[1]}`;

	sum = 0;
	for (let i of cards) sum += i;

	sumElem.textContent = sum;

	isAlive = true;

	testWin();
};

const getANewCard = () => {
	if (!isAlive) return;
	card = getCard();
	cardsElem.textContent += `, ${card}`;
	cards.push(card);
	sum += card;
	sumElem.textContent = sum;

	testWin();
};

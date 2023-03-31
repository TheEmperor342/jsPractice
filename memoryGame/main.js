const cardsElem = document.querySelector("#cards");
const abortController = new AbortController();
let cards = [];
let selectedCards = [];
const symbols = ["spade", "heart", "diamond", "club"];

// yes i copied this off of 🅱️tackOverflow
// Shuffles the array provided as argument
function shuffle(a) {
	var j, x, i;
	for (i = a.length - 1; i > 0; i--) {
		j = Math.floor(Math.random() * (i + 1));
		x = a[i];
		a[i] = a[j];
		a[j] = x;
	}
	return a;
}

// To check if the selected 2 cards match (variable selectedCards)
function checkMatch() {
	if (selectedCards[0][0].symbolText !== selectedCards[1][0].symbolText) {
		setTimeout(() => {
			for (let i of selectedCards) i[1].classList.add("hidden");
			selectedCards = [];
			checkWin();
		}, 1000);
	} else {
		selectedCards = [];
		checkWin();
	}
}

function checkWin() {
	for (let i of cards) if (i[1].classList.contains("hidden")) return;
	abortController.abort();
	setTimeout(() => window.location.reload(), 2000);
}

// ===============================================

for (let i = 0.0; i <= 2.5; i += 0.5) {
	const card = new Card(
		Math.floor(Math.random() * 13) + 1,
		symbols[Math.floor(i)]
	);
	cards.push([card, card.getElem()]);
}

cards = shuffle(cards);
// Add the cards to DOM
for (let i of cards) cardsElem.appendChild(i[1]);

setTimeout(() => {
	for (let i of cards) {
		i[1].classList.add("hidden");
		i[1].addEventListener(
			"click",
			() => {
				i[1].classList.remove("hidden");
				selectedCards.push(i);
				if (selectedCards.length === 2) checkMatch();
			},
			{ signal: abortController.signal }
		);
	}
}, 5000);

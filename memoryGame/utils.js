class Card {
	constructor(card, symbol, flipped) {
		this.card = card;
		this.symbolText = symbol;
		let symbols = {
			spade: "♠",
			diamond: "♦",
			heart: "♥",
			club: "♣",
		};
		this.symbol = symbols[symbol];
		this.flipped = flipped;
	}

	suit() {
		let suit = Array.from({ length: 3 }, () =>
			Array.from({ length: 3 }, () => " ")
		);

		switch (this.card) {
			case 11:
				suit[0][1] = this.symbol;
				suit[1] = [this.symbol, "J", this.symbol];
				suit[2][1] = this.symbol;
				break;
			case 12:
				suit[0][1] = this.symbol;
				suit[1] = [this.symbol, "Q", this.symbol];
				suit[2][1] = this.symbol;
				break;
			case 13:
				suit[0][1] = this.symbol;
				suit[1] = [this.symbol, "K", this.symbol];
				suit[2][1] = this.symbol;
				break;
			case 1:
				suit[1][1] = this.symbol;
				break;
			case 2:
				suit[0][1] = suit[2][1] = this.symbol;
				break;
			case 3:
				suit[0][1] = this.symbol;
				suit[1][1] = this.symbol;
				suit[2][1] = this.symbol;
				break;
			case 4:
				suit[0] = suit[2] = [this.symbol, " ", this.symbol];
				break;
			case 5:
				suit[0] = suit[2] = [this.symbol, " ", this.symbol];
				suit[1][1] = this.symbol;
				break;
			case 6:
			case 7:
			case 8:
			case 9:
			case 10:
				suit[0] = suit[2] = Array.from({ length: 3 }, () => this.symbol);

				if (this.card === 7) suit[1] = [" ", this.symbol, " "];
				else if (this.card === 8) suit[1] = [this.symbol, " ", this.symbol];
				else if (this.card === 9)
					suit[1] = Array.from({ length: 3 }, () => this.symbol);
				else if (this.card === 10)
					suit[1] = Array.from({ length: 4 }, () => this.symbol);

				break;
		}
		return suit;
	}

	getElem() {
		const card = document.createElement("div");
		card.classList.add("card");
		const name = document.createElement("p");
		name.textContent = this.card;

		const innerDiv = document.createElement("div");
		innerDiv.classList.add(
			["spade", "club"].includes(this.symbolText) ? "blackCard" : "redCard"
		);

		const suit = this.suit();
		for (let i = 0; i <= 2; i++) {
			const p = document.createElement("p");
			p.textContent = suit[i].join("");
			innerDiv.appendChild(p);

			if (i !== 2) innerDiv.append(document.createElement("br"));
		}
		card.appendChild(name);
		card.appendChild(innerDiv);

		this.card = card;

		return card;
	}
}

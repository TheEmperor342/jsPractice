const input = document.querySelector("#inputText");
const output = document.querySelector("#answer");

/**
 * Convert Text
 * @param {number} num Number to convert to text
 * @returns {string} Textual format of number
 */
const convertText = num => {
	if (num === 0) return "zero";
	if (num < 0) return `minus ${convertText(Math.abs(num))}`;

	const ones = [
		"",
		"one ",
		"two ",
		"three ",
		"four ",
		"five ",
		"six ",
		"seven ",
		"eight ",
		"nine ",
	];
	const tens = [
		"",
		"ten ",
		"twenty ",
		"thirty ",
		"forty ",
		"fifty ",
		"sixty ",
		"seventy ",
		"eighty ",
		"ninety ",
	];
	const tenplus = [
		"ten ",
		"eleven ",
		"twelve ",
		"thirteen ",
		"fourteen ",
		"fifteen ",
		"sixteen ",
		"seventeen ",
		"eighteen ",
		"nineteen ",
	];
	const sizes = {
		1: "hundred ",
		2: "thousand ",
		3: "million ",
		4: "billion ",
		5: "trillion ",
	};

	// ===================================================================

	/**
	 * nGroup3
	 * @type {string[]}
	 */
	let nGroup3 = [];

	numberString = num.toString();

	let tempString = "";

	if (numberString.length % 3 !== 0)
		tempString = numberString.slice(
			numberString.length % 3,
			numberString.length
		);
	else tempString = numberString;

	for (let i = tempString.length - 1; i > 0; i -= 3) {
		nGroup3.unshift(tempString[i]);
		nGroup3[0] = tempString[i - 1] + nGroup3[0];
		nGroup3[0] = tempString[i - 2] + nGroup3[0];
	}
	if (numberString.length % 3 !== 0)
		nGroup3.unshift(numberString.slice(0, numberString.length % 3));

	// ===================================================================

	if (nGroup3.length === 1) {
		if (["000", "00", "0"].includes(nGroup3[0])) return "";
		if (nGroup3[0].length === 1) return ones[nGroup3[0][0]];
		if (nGroup3[0].length === 2)
			return nGroup3[0][0] === "1"
				? tenplus[nGroup3[0][1]]
				: tens[nGroup3[0][0]] + ones[nGroup3[0][1]];

		let text = "";
		text += ones[nGroup3[0][0]] + sizes["1"];
		if (ones[0][1] === 1) return text + tenplus[nGroup3[0][2]];
		text += tens[nGroup3[0][1]];
		text += ones[nGroup3[0][2]];

		return text;
	}

	let strings = [];
	for (let i = nGroup3.length, j = 0; i > 0; i--, j++) {
		let text = convertText(Number(nGroup3[j]));
		if (text === "zero" || text === "") continue;
		strings.push(text + (i != 1 ? sizes[i] : ""));
	}
	return strings.join(" ");
};

document.querySelector("#getText").addEventListener("click", () => {
	output.textContent = convertText(Number(input.value));
});

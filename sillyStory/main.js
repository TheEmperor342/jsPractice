const customName = document.getElementById("customname");
const randomize = document.querySelector(".randomize");
const story = document.querySelector(".story");

let storyText =
	"It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.";
let insertX = ["Willy the Goblin", "Big Daddy", "Father Christmas"];

let insertY = ["the soup kitchen", "Disneyland", "the White House"];

let insertZ = [
	"spontaneously combusted",
	"melted into a puddle on the sidewalk",
	"turned into a slug and crawled away",
];

/************************/

const randomChoose = arr => arr[Math.floor(Math.random() * arr.length)];
const replace = (operand, toReplace, replaceWith) =>
	operand.replaceAll(toReplace, replaceWith);

randomize.addEventListener("click", () => {
	let weight = 300,
		temp = 94,
		text = storyText;

	if (document.getElementById("uk").checked) {
		temp = Math.round(((temp - 32) * 5) / 9);
		weight = Math.round(weight / 2.2046);

		text = replace(text, "94 fahrenheit", `${temp} centigrade`);
		text = replace(text, "300 pounds", `${weight} kilos`);
	}
	let val = customName.value.trim();
	if (val !== "") text = replace(text, /bob/gi, val);

	text = replace(text, ":insertx:", randomChoose(insertX));
	text = replace(text, ":inserty:", randomChoose(insertY));
	text = replace(text, ":insertz:", randomChoose(insertZ));

	story.innerText = text;
});

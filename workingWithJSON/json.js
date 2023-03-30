// !!! ABSOLUTE ASS CODE AHEAD !!!

const superheroElem = document.querySelector("#superheros");

// ========================================================================
const fetchController = new AbortController();
const signal = fetchController.signal;

let timer = setTimeout(() => {
	fetchController.abort();
}, 5000);

// Get JSON data
fetch(
	"https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json",
	{ signal }
)
	.then(response => response.json())
	.then(data => {
		// Send data to populate DOM
		Populate(data);
		clearTimeout(timer);
	})
	.catch(err => console.log(err));

// =======================================================================

// Function to create an element in the DOM
const createElem = (tag, textContent) => {
	const elem = document.createElement(tag);
	elem.textContent = textContent;
	return elem;
};

const Populate = data => {
	const values = [
		["h1", data.squadName],
		["p", `EST: ${data.formed} // Hometown: ${data.homeTown}`],
		["p", `Hometown: ${data.homeTown}`],
	];

	let superherodata = [];

	// Append data of the heroes to `superherodata`
	for (let hero of data.members)
		superherodata.push(
			...[
				["h1", hero.name],
				["p", `Age: ${hero.age}`],
				["p", `Secret identity: ${hero.secretIdentity}`],
				["h3", "Superpowers:"],

				...(() => {
					let k = [];
					for (let j in hero.powers) k.push(["p", hero.powers[j]]);
					return k;
				})(),
			]
		);

	values.push(...superherodata);

	for (let i of values) superheroElem.appendChild(createElem(i[0], i[1]));
};

const getBtn = document.querySelector("#get");
const dataElem = document.querySelector("#data");

getBtn.addEventListener("click", async () => {
	try {
		const response = await fetch("https://randomuser.me/api/");
		if (!response.ok) throw new Error(`HTTP error: ${response.status}`);

		const json = await response.json();
		Populate(json.results[0]);
	} catch (error) {
		console.log(error);
	}
});

const Populate = json => {
	const name = `${json.name.title} ${json.name.first} ${json.name.last}`;
	const gender = json.gender;
	const email = json.email;
	const phone = json.phone;
	const img = json.picture.large;
	const location = `${json.location.city}, ${json.location.state}, ${json.location.country} (${json.nat})`;

	const data = [
		{ tag: "h3", content: `Name: ${name} // ${gender}` },
		{ tag: "p", content: `Email: ${email}` },
		{ tag: "p", content: `Phone Number: ${phone}` },
		{ tag: "img", src: img },
		{ tag: "p", content: `Location: ${location}` },
	];

	for (let i of data) {
		const element = document.createElement(i.tag);
		if (i.tag === "img") element.src = i.src;
		else element.textContent = i.content;

		dataElem.appendChild(element);
	}
};

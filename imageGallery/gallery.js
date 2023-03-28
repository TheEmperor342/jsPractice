const darkBtn = document.querySelector(".dark");
const overlay = document.querySelector(".overlay");
const image = document.querySelector(".displayed-img");
const thumbBar = document.querySelector(".thumb-bar");

for (let i of thumbBar.children)
	i.addEventListener("click", () => {
		image.src = i.src;
		image.alt = i.alt;
	});

darkBtn.addEventListener("click", () => {
	if (overlay.classList.contains("darken")) {
		overlay.classList.remove("darken");
		darkBtn.textContent = "Darken";
	} else {
		overlay.classList.add("darken");
		darkBtn.textContent = "Lighten";
	}
});

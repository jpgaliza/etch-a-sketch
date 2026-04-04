const container = document.querySelector("#container");
const gridSize = 16;

for (let i = 0; i < gridSize * gridSize; i += 1) {
	const square = document.createElement("div");
	square.classList.add("square");
	square.addEventListener("mouseenter", () => {
		square.style.backgroundColor = "#222";
	});
	container.appendChild(square);
}

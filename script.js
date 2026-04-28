const container = document.querySelector("#container");
const newGridBtn = document.querySelector("#new-grid-btn");

function createGrid(size) {
    container.textContent = "";
    container.style.setProperty("--grid-size", size);

    for (let i = 0; i < size * size; i += 1) {
        const square = document.createElement("div");
        square.classList.add("square");
        square.addEventListener("mouseover", () => {
            square.style.backgroundColor = "#222";
        });
        container.appendChild(square);
    }
}

newGridBtn.addEventListener("click", () => {
    const input = prompt("How many squares per side? (Max: 100)");
    if (input === null) return;

    const size = Number(input);
    if (!Number.isInteger(size) || size < 1 || size > 100) {
        alert("Please enter a valid integer between 1 and 100.");
        return;
    }

    createGrid(size);
});

createGrid(16);

const container = document.querySelector("#main-container");
const gridSize = 600;
let rows = 16;
let cols = 16;

container.style.width = `${gridSize}px`;
container.style.height = `${gridSize}px`;

for (let i = 0; i < (rows * cols); i++) {
    let gridItem = document.createElement("div");
    gridItem.classList = "grid-item";
    gridItem.style.width = `${(gridSize / cols) - 2}px`;
    gridItem.style.height = `${(gridSize / rows) - 2}px`;
    container.appendChild(gridItem);
}
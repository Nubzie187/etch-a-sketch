const container = document.querySelector("#main-container");
const gridSize = 600;
let rows = 32;
let cols = 32;

container.style.width = `${gridSize}px`;
container.style.height = `${gridSize}px`;

for (let i = 0; i < (rows * cols); i++) {
    let gridItem = document.createElement("div");
    gridItem.classList = "grid-item";
    gridItem.style.width = `${(gridSize / cols) - 2}px`;
    gridItem.style.height = `${(gridSize / rows) - 2}px`;
    container.appendChild(gridItem);
}

const gridItems = document.querySelectorAll(".grid-item");

gridItems.forEach(item => {
    item.addEventListener("mouseover", () => {
        item.style.backgroundColor = "black";
    });
});

const reset = document.getElementById("reset");

function resetGrid(){
    gridItems.forEach(item => {
            item.style.backgroundColor = "white";
    })    
}

reset.addEventListener("click", resetGrid);
const gridContainer = document.querySelector("#gridContainer");
const body = document.querySelector("body");

function generateGrid(size) {
    let oldGrids = gridContainer.querySelectorAll(".gridRow");
    oldGrids.forEach(Element => {
        gridContainer.removeChild(Element);
    });
    for (let i = 0; i < size; i++) {
        const gridRow = document.createElement("div");
        gridRow.className = "gridRow"
        for (let j = 0; j < size; j++) {
            const gridCell = document.createElement("div");
            gridCell.className = "gridCell";
            gridCell.addEventListener("mouseover", function () {

                color = getPenColor(isRainbow);
                gridCell.style.backgroundColor = color;
            })
            gridRow.appendChild(gridCell);
        }
        gridContainer.appendChild(gridRow);
    }
}
generateGrid(16);

const gridButton = document.createElement("button");
gridButton.textContent = "Change the grid size";

function getprompt() {
    let userInput = prompt("Enter a number between 16 and 100.");
    let parseInput = parseInt(userInput);
    if (!isNaN(parseInput) && parseInput >= 16 && parseInput <= 100) {
        generateGrid(parseInput);
    } else {
        alert("You entered an invalid option.");
    }
}

gridButton.addEventListener("click", getprompt);
const options = document.querySelector("#options");
options.appendChild(gridButton);
const resetButton = document.createElement("button");
resetButton.textContent = "Reset the board.";
resetButton.addEventListener("click", function () {
    generateGrid(16);
})
options.appendChild(resetButton);
let isRainbow = false;
const togglePen = document.createElement("button");
togglePen.id = "togglePen";
togglePen.addEventListener("click", function () {
    isRainbow = !isRainbow;
    togglePen.textContent = getToggleName(isRainbow)
})
togglePen.textContent = getToggleName(isRainbow);
options.appendChild(togglePen);

function getToggleName(isRainbow) {
    let name = "Pen: Black";
    if (isRainbow) {
        name = "Pen: Rainbow";
        return name;
    }
    return name;
}


function getPenColor(isRainbow) {
    let color = "black";
    if (isRainbow === true) {
        let red = Math.floor(Math.random() * 256);
        let blue = Math.floor(Math.random() * 256);
        let green = Math.floor(Math.random() * 256);
        color = `rgb(${red}, ${green}, ${blue})`;
        return color;
    }

    return color;

}
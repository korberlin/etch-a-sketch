const gridContainer = document.querySelector("#gridContainer");
const options = document.querySelector("#options");

let isRainbow = false;

function generateGrid(size) {
    const fragment = document.createDocumentFragment();

    for (let i = 0; i < size; i++) {
        const gridRow = document.createElement("div");
        gridRow.className = "gridRow";
        for (let j = 0; j < size; j++) {
            const gridCell = document.createElement("div");
            gridCell.className = "gridCell";
            gridCell.addEventListener("mouseover", function () {
                gridCell.style.backgroundColor = getPenColor(isRainbow);
            });
            gridRow.appendChild(gridCell);
        }
        fragment.appendChild(gridRow);
    }

    gridContainer.innerHTML = '';
    gridContainer.appendChild(fragment);
}

function getPenColor(isRainbow) {
    if (isRainbow) {
        const red = Math.floor(Math.random() * 256);
        const green = Math.floor(Math.random() * 256);
        const blue = Math.floor(Math.random() * 256);
        return `rgb(${red}, ${green}, ${blue})`;
    }
    return "black";
}

function getToggleName(isRainbow) {
    return isRainbow ? "Pen: Rainbow" : "Pen: Black";
}

// Initialize Grid and Buttons
generateGrid(16);

const gridButton = document.createElement("button");
gridButton.textContent = "Change the grid size";
gridButton.addEventListener("click", function () {
    const userInput = prompt("Enter a number between 16 and 100.");
    const parseInput = parseInt(userInput);
    if (!isNaN(parseInput) && parseInput >= 16 && parseInput <= 100) {
        generateGrid(parseInput);
    } else {
        alert("You entered an invalid option.");
    }
});
options.appendChild(gridButton);

const resetButton = document.createElement("button");
resetButton.textContent = "Reset the board.";
resetButton.addEventListener("click", () => generateGrid(16));
options.appendChild(resetButton);

const togglePen = document.createElement("button");
togglePen.textContent = getToggleName(isRainbow);
togglePen.addEventListener("click", function () {
    isRainbow = !isRainbow;
    togglePen.textContent = getToggleName(isRainbow);
});
options.appendChild(togglePen);

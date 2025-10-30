const gridContainer = document.getElementById("grid-container");
const gridForm = document.getElementById("grid-form");
const gridInput = document.getElementById("grid-size");

function createGrid(size) {
    // Clear grid
    gridContainer.innerHTML = "";

    for (let row = 0; row < size; row++) {
        const gridRow = document.createElement("div");
        gridRow.style.display = "flex";

        for (let column = 0; column < size; column++) {
            const square = document.createElement("div");
            square.style.color = "red";
            square.style.border = "black solid 1px";
            square.style.display = "flex";
            square.style.alignItems = "center";
            square.style.justifyContent = "center";
            square.style.flex = "1 0 auto";
            square.style.aspectRatio = 1/1;
            square.addEventListener('mouseenter', () => {
                square.style.backgroundColor = "black";
            });
            gridRow.appendChild(square);
        }

        gridContainer.appendChild(gridRow);
    }
}

// Initial grid
createGrid(16);

gridForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const size = parseInt(gridInput.value);
    if (size >= 16 && size <= 100) {
        createGrid(size);
    } else {
        alert("Please enter a number between 16 and 100.");
    }
})
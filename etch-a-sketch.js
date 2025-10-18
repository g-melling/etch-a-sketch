const gridContainer = document.getElementById("grid-container");

for (let row = 0; row <16; row++) {
    const gridRow = document.createElement("div");
    gridRow.style.display = "flex";

    for (let column = 0; column < 16; column++) {
        const square = document.createElement("div");
        square.style.color = "red";
        square.style.border = "black solid 5px";
        square.style.margin = "10px";
        square.style.display = "flex";
        square.style.alignItems = "center";
        square.style.justifyContent = "center";
        square.textContent = "O";
        gridRow.appendChild(square);
    }

    gridContainer.appendChild(gridRow);
}
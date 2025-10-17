const grid = document.getElementById("container");

for (let i = 0; i < 16; i++) {
    for (let j = 0; j < 16; j++) {
        const square = document.createElement("div");
        square.style.color = "red";
        square.style.border = "black solid 5px";
        square.style.margin = "30px"
        grid.appendChild(square);
    }
}

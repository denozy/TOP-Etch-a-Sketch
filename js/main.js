function createGrid() {
    let container = document.getElementById("container");

    for (let i = 0; i < 16; i++) {
        for (var j = 0; j < 16; j++) {
            let cell = document.createElement("div");
            cell.classList.add("grid-cell");
            cell.textContent = (i*16) + (j+1);

            cell.addEventListener("mouseenter", function() {
                this.style.backgroundColor = "black";
                this.style.color = "white";
            });

            container.appendChild(cell);
        }
    }
}

function resetColors() {
    let cells = document.querySelectorAll(".grid-cell");

    cells.forEach(function(cell) {
        cell.style.backgroundColor = "lightblue";
        cell.style.color = "initial";
    });
}

window.onload = createGrid;
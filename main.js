
function createGrid(){
    let squareCount = 0;
    let row = 0;

    const mainDiv = document.querySelector(".main")
    while (row < 16 ){    
        let rowDiv = document.createElement("div")
            rowDiv.className = "row"
            // console.log("row added")
            row++
            
        while (squareCount < 16){
            let addSquare = document.createElement("div")
            addSquare.className = "square"
            rowDiv.appendChild(addSquare)
            // console.log("square added")
            squareCount++
        }
        mainDiv.appendChild(rowDiv)
        squareCount = 0;
    }
}

function getRandomColor() {
    const randomColor = `hsl(${Math.floor(Math.random() * 360)}, 100%, 50%)`; 
    return randomColor;
}

createGrid();

document.querySelectorAll(".square").forEach(square => {
    square.addEventListener("mouseenter", function(event){
        const randomColor = getRandomColor(); // Generate a new random color
        square.style.backgroundColor = randomColor;
    });
    square.addEventListener("mouseleave", function(event){
        setTimeout(() => {
            square.style.backgroundColor = ""; // Reset after 500ms
        }, 500);
    });
});

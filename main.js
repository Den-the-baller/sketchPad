
let squareCount = 0;
let row = 0;

const mainDiv = document.querySelector(".main")
while (row < 16 ){    
    let rowDiv = document.createElement("div")
        rowDiv.className = "row"
        console.log("row added")
        row++
        
    while (squareCount < 16){
        // let rowSelect = document.querySelector(".row")
        let addSquare = document.createElement("div")
        addSquare.className = "square"
        rowDiv.appendChild(addSquare)
        console.log("square added")
        squareCount++
    }
    mainDiv.appendChild(rowDiv)
    squareCount = 0;
}

let row = 0;
let column = 0;

const mainDiv = document.querySelector("div")
while (column < 16 ){    
    let addDiv = document.createElement("div")
        addDiv.className = "square column"
        mainDiv.appendChild(addDiv)
        console.log("Column added")
        column++
        
    while (row < 16){
        let addDiv = document.createElement("div")
        addDiv.className = "square row"
        mainDiv.appendChild(addDiv)
        console.log("Row added")
        row++
    }
    row = 0;
}
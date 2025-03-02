
let i = 0;
const mainDiv = document.querySelector("div")
while (i < 16){

    let addDiv = document.createElement("div")
    addDiv.className = "square"
    mainDiv.appendChild(addDiv)
    console.log("Div added")
    i++

}
function getStarted (times) {
    for (i = 0; i < (times**2); i++){
        
        createSquare(times);
        
    };
}

const container = document.querySelector(".container");

function createSquare (times) {
    const square = document.createElement("div");
    square.style.minWidth = `${100/times}%`;
    square.style.paddingTop = `${(100/times-0.2)}%`;
    square.style.minHeight = `${(100/times)}%`;
    square.setAttribute("class", "grid")
    container.appendChild(square);
}

let paint = 0
let clicking = 0

function paintAuto(event) {
    event.target.classList.add("painted");    
    console.log(event.target);                   //verification
}

function paintClickPress (event){
    event.target.classList.add("painted");
    clicking = 1
}

function paintClickHold (event){
    if (clicking === 1) event.target.classList.add("painted");
}

function paintClickRelease (event){
    if (clicking === 1) event.target.classList.add("painted");
    clicking = 0
}

function eraseSquare(event) {
    event.target.classList.remove("painted");    
    // console.log(event.target);                   //verification
}

function paintMode () {
    clicking = 0
    if (paint === 0) {
        container.removeEventListener("mouseover", eraseSquare);
        container.removeEventListener ("mousedown", paintClickPress);
        container.removeEventListener ("mouseover", paintClickHold);
        container.removeEventListener ("mouseup", paintClickRelease);
        container.addEventListener ("mouseover",paintAuto);
    } else if (paint === 1) {
        container.removeEventListener("mouseover", eraseSquare);
        container.removeEventListener("mouseover", paintAuto);
        container.addEventListener ("mousedown", paintClickPress);
        container.addEventListener ("mouseover", paintClickHold);
        container.addEventListener ("mouseup", paintClickRelease);
    } else {
        container.removeEventListener("mouseover", paintAuto);
        container.removeEventListener ("mousedown", paintClickPress);
        container.removeEventListener ("mouseover", paintClickHold);
        container.removeEventListener ("mouseup", paintClickRelease);
        container.addEventListener ("mouseover",eraseSquare);
    }
    

}

let sizeButton = document.querySelector(".size")

sizeButton.addEventListener("click", () => {
        let times = prompt("Insert how many boxes of width do you want","Max 100");
        if (times <= 100 && times >= 0){
            while (container.firstChild){
                container.removeChild(container.lastChild);
            };
            sizeButton.textContent = `${times} x ${times}`;
            return getStarted(times)
        } else {
            alert("Error number must be between 0 and 100");
        }
    });

getStarted(16)



//ads a general listener so we don't have to set the event listener to each square when initializing the square
let autoButton = document.querySelector(".auto");
let clickButton = document.querySelector(".click");
let eraseButton = document.querySelector(".erase");

autoButton.addEventListener("click", () => {
    paint = 0;
    paintMode()
});

clickButton.addEventListener("click", () => {
    paint = 1;
    paintMode()
});

eraseButton.addEventListener("click", () => {
    paint = 2;
    paintMode()
});

paintMode()
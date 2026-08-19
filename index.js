function getStarted (times) {
    for (i = 0; i < (times**2); i++){
        
        createSquare(times);
        
    };
    paint = document.querySelectorAll(".grid")
}

const container = document.querySelector(".container");

function createSquare (times) {
    const square = document.createElement("div");
    square.style.minWidth = `${100/times}%`;
    square.style.paddingTop = `${(100/times-0.2)}%`;
    square.style.minHeight = `${(100/times)}%`;
    square.setAttribute("class","grid");
    container.appendChild(square);
}
let button = document.querySelector("button")

button.addEventListener("click", () => {
        let times = prompt("Insert how many boxes of width do you want","Max 100");
        if (times <= 100 && times >= 0){
            while (container.firstChild){
                container.removeChild(container.lastChild);
            };
            button.textContent = `${times} x ${times}`;
            return getStarted(times)
        } else {
            alert("Error number must be between 0 and 100");
        }
    });

let paint = document.querySelectorAll(".grid");

getStarted(16)



paint.addEventListener("mouseenter", ()=> paint.setAttribute("class","paint"));
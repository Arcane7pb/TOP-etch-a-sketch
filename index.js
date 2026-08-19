function getStarted () {
    for (i = 0; i < (16**2); i++){
        
        createSquare(16);
        
    };
}

//pensar en fer linies * la cuantitat de quadrats demanada 16*16 etxc

const container = document.querySelector(".container");

function createSquare (times) {
    const square = document.createElement("div");
    square.style.width = `${100/times}%`;
    square.style.paddingTop = `${(100/times)}%`;
    square.setAttribute("class","grid");
    container.appendChild(square);
}

function createLine () {
    const line = document.createElement("div");
    container.appendChild(line);
}

getStarted()

createLine()
console.log(container.lastChild)
function getStarted () {
    for (i = 0; i < 16; i++){
        createSquare(16);
    };
}

const container = document.querySelector(".container");

function createSquare (times) {
    const square = document.createElement("div");
    square.style.border = "1px solid";
    square.style.width = `${100/times}%`;
    square.style.paddingTop = `${(100/times)}%`;
    square.style.maxHeight = `${100/times}%`
    square.style.margin = "0"
    square.setAttribute("class","grid")
    container.appendChild(square);
}

getStarted()
let COLOR = 'black'
let click = true;
document.body.addEventListener('click', (e) => {
    if (e.target.tagName != 'BUTTON')
        click = !click
});

function makeGrid(s) {
    changeStatus('DRAW')
    let show = document.querySelector('.show')
    show.innerText = `Size:${s} X ${s}`
    let board = document.querySelector('.board');
    let squares = board.querySelectorAll('div');
    squares.forEach((div) => div.remove());
    board.style.gridTemplateColumns = `repeat(${s},1fr)`
    board.style.gridTemplateRows = `repeat(${s},1fr)`
    let total = s * s;
    for (let i = 0; i < total; i++) {
        let square = document.createElement('div');
        square.addEventListener('mouseover', defaultColor)
        square.style.backgroundColor = 'white'
        board.appendChild(square)
    }
}
makeGrid(16);

function defaultColor() {
    if (click) {
        if (COLOR === 'rainbow') {
            changeStatus('RAINBOW')
            this.style.backgroundColor = `hsl(${Math.random()*360},100%,50%)`

        } else if (COLOR === 'white') {
            changeStatus('ERASER')
            this.style.backgroundColor = COLOR;

        } else if (COLOR === 'black') {
            changeStatus('DRAW')
            this.style.backgroundColor = COLOR;

        }
    } else changeStatus('INACTIVE (Click again to draw)')
}

function changeColor(choice) {
    COLOR = choice
}

function reset() {
    changeStatus('DRAW')
    let board = document.querySelector('.board');
    let squares = board.querySelectorAll('div');
    squares.forEach((div) => div.style.backgroundColor = 'white');
    COLOR = 'black'
}

function changeStatus(status) {
    document.getElementById('status').innerText = `${status}`
}
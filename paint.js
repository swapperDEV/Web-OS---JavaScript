const drawingToolBtn = document.querySelector('#drawingTool');
const textToolBtn = document.querySelector('#textTool');
const textToolInput = document.querySelector('#textToolInput');

let drawColor = 'blue';
let task = 'draw';

let fontType = 'normal';
let fontSize = 30;

const px2 = document.querySelector('#px2');
const px3 = document.querySelector('#px3');
const px4 = document.querySelector('#px4');
const px5 = document.querySelector('#px5');
const italicToolBtn = document.querySelector('.fa-italic');
const colorButton = document.querySelector('#colorButton');
const colorInput = document.querySelector('#colorInput');

px2.addEventListener('click', () => {
    fontSize = 20
});

px3.addEventListener('click', () => {
    fontSize = 30
});

px4.addEventListener('click', () => {
    fontSize = 40
});

px5.addEventListener('click', () => {
    fontSize = 50
});

drawingToolBtn.addEventListener('click', () => {
    task = 'draw'
});

textToolBtn.addEventListener('click', () => {
    task = 'text'
});

italicToolBtn.addEventListener('click', () => {
    if (fontType == "normal") {
        fontType = "italic";
    } else {
        fontType = "normal"
    }
});

colorButton.addEventListener("click", () => {
    drawColor = 'black';
    ctx.strokeStyle = drawColor;
});

const canvas2 = document.querySelector('#drawingArea');
const ctx = canvas2.getContext('2d');
let mouseDown = false;
let newLine = true;

ctx.lineWidth = 10;
ctx.lineCap = "round"

function getMouseXY(e) {
    const rect = canvas2.getBoundingClientRect();
    return [e.clientX - rect.left, e.clientY - rect.top];
}

function draw(e) {
    const [x, y] = getMouseXY(e);
    if (newLine) {
        ctx.moveTo(x, y);
        newLine = false;
    } else {
        ctx.lineTo(x, y);
    }
    ctx.stroke();
    ctx.beginPath();
    ctx.lineTo(x, y);
}

canvas2.addEventListener('mousemove', e => {
    if (task == "draw" && mouseDown) {
        draw(e);
    }
});

canvas2.addEventListener('mousedown', e => {
    if (task == "draw") {
        mouseDown = true;
    } else {
        const [x, y] = getMouseXY(e);
        ctx.font = `${fontType} ${fontSize}px Arial`;
        ctx.fillText(textToolInput.value, x, y);
    }
});

canvas2.addEventListener('mouseup', function() {
    mouseDown = false;
    newLine = true;
}, false);

var dataURL = localStorage.getItem(canvas2);
var img = new Image;
img.src = dataURL;
img.onload = function () {
    ctx.drawImage(img, 0, 0);
};
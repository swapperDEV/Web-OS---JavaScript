let active;
const changePos = () => {
    var mousePosition;
    var offset = [0,0];
    var div;
    var isDown = false;

    div = active;
    div.addEventListener('mousedown', function(e) {
        isDown = true;
        offset = [
            div.offsetLeft - e.clientX,
            div.offsetTop - e.clientY
        ];
    }, true);

    document.addEventListener('mouseup', function() {
        isDown = false;
    }, true);

    document.addEventListener('mousemove', function(event) {
        event.preventDefault();
        if (isDown) {
            mousePosition = {

                x : event.clientX,
                y : event.clientY

            };
            div.style.left = (mousePosition.x + offset[0]) + 'px';
            div.style.top  = (mousePosition.y + offset[1]) + 'px';
        }
    }, true)};

const word = document.querySelector('.word')
word.addEventListener('click', () => {
    document.querySelector('.popup').classList.add('popupact');
        const text = document.querySelector('.text');
        const newSaveValue = localStorage.getItem("save");
        text.value = newSaveValue
        console.log('wczytuje dokument');
        active = document.querySelector('.popup')
        changePos();

})
const off = document.querySelector('.fa-times-circle')
off.addEventListener('click', () => {
    const text = document.querySelector('.text')
    console.log('rem class');
    document.querySelector('.popup').classList.remove('popupact')
    console.log(text.value);
    const saveWords = text.value;
    localStorage.setItem("save", saveWords);
})

const game = document.querySelector('.fa-gamepad');
game.addEventListener('click', () => {
    console.log('POPopen');
    startgame()
    document.querySelector('.popup2').classList.add('popupact2')
    active = document.querySelector('.popup2')
    changePos();
})
const off2 = document.querySelector('.circle2')
off2.addEventListener('click', () => {
    document.querySelector('.popup2').classList.remove('popupact2')
})

const calc = document.querySelector('.calc');
calc.addEventListener('click', () => {
    console.log('POPopen');
    document.querySelector('.popup3').classList.add('popupact3')
    active = document.querySelector('.popup3')
    changePos();
})
const off3 = document.querySelector('.circle3')
off3.addEventListener('click', () => {
    document.querySelector('.popup3').classList.remove('popupact3')
})

const map = document.querySelector('.maps');
map.addEventListener('click', () => {
    console.log('POPopen');
    document.querySelector('.popup4').classList.add('popupact4')
    active = document.querySelector('.popup4')
    changePos();
})
const off4 = document.querySelector('.circle4')
off4.addEventListener('click', () => {
    document.querySelector('.popup4').classList.remove('popupact4')
})

const google = document.querySelector('.fa-google');
google.addEventListener('click', () => {
    console.log('POPopen');
    document.querySelector('.popup5').classList.add('popupact5')
    active = document.querySelector('.popup5')
    changePos();
})
const off5 = document.querySelector('.circle5')
off5.addEventListener('click', () => {
    document.querySelector('.popup5').classList.remove('popupact5')
})

const paint = document.querySelector('.paint');
paint.addEventListener('click', () => {
    console.log('POPopen');
    document.querySelector('.popup6').classList.add('popupact6')
    active = document.querySelector('.popup6')
    changePos();
})
const off6 = document.querySelector('.circle6')
off6.addEventListener('click', () => {
    document.querySelector('.popup6').classList.remove('popupact6');
    localStorage.setItem(canvas2, canvas2.toDataURL());
})

const weather = document.querySelector('.fa-cloud');
weather.addEventListener('click', () => {
    console.log('POPopen');
    document.querySelector('.popup7').classList.add('popupact7')
    active = document.querySelector('.popup7')
    changePos();
})
const off7 = document.querySelector('.circle7')
off7.addEventListener('click', () => {
    document.querySelector('.popup7').classList.remove('popupact7');
})

const corona = document.querySelector('.corona');
corona.addEventListener('click', () => {
    console.log('POPopen');
    document.querySelector('.popup8').classList.add('popupact8')
    active = document.querySelector('.popup8')
    changePos();
})
const off8 = document.querySelector('.circle8')
off8.addEventListener('click', () => {
    document.querySelector('.popup8').classList.remove('popupact8');
})

const shop = document.querySelector('.store');
shop.addEventListener('click', () => {
    console.log('POPopen');
    document.querySelector('.popup9').classList.add('popupact9')
    active = document.querySelector('.popup9')
    changePos();
})
const off9 = document.querySelector('.circle9')
off9.addEventListener('click', () => {
    document.querySelector('.popup9').classList.remove('popupact9');
})
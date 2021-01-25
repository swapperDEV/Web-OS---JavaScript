const word = document.querySelector('.word')
word.addEventListener('click', () => {
    document.querySelector('.popup').classList.add('popupact');
        const text = document.querySelector('.text');
        const newSaveValue = localStorage.getItem("save");
        text.value = newSaveValue
        console.log('wczytuje dokument');

})
const off = document.querySelector('.fa-times-circle')
off.addEventListener('click', () => {
    const text = document.querySelector('.text')
    console.log('rem class');
    document.querySelector('.popup').classList.remove('popupact')
    console.log(text.value);
    const saveWords = text.value;
    localStorage.setItem("save", saveWords); //zalecany sposób
})

const game = document.querySelector('.fa-gamepad');
game.addEventListener('click', () => {
    console.log('POPopen');
    startgame()
    document.querySelector('.popup2').classList.add('popupact2')
})
const off2 = document.querySelector('.circle2')
off2.addEventListener('click', () => {
    document.querySelector('.popup2').classList.remove('popupact2')
})

const calc = document.querySelector('.calc');
calc.addEventListener('click', () => {
    console.log('POPopen');
    document.querySelector('.popup3').classList.add('popupact3')
})
const off3 = document.querySelector('.circle3')
off3.addEventListener('click', () => {
    document.querySelector('.popup3').classList.remove('popupact3')
})

const map = document.querySelector('.maps');
map.addEventListener('click', () => {
    console.log('POPopen');
    document.querySelector('.popup4').classList.add('popupact4')
})
const off4 = document.querySelector('.circle4')
off4.addEventListener('click', () => {
    document.querySelector('.popup4').classList.remove('popupact4')
})

const google = document.querySelector('.fa-google');
google.addEventListener('click', () => {
    console.log('POPopen');
    document.querySelector('.popup5').classList.add('popupact5')
})
const off5 = document.querySelector('.circle5')
off5.addEventListener('click', () => {
    document.querySelector('.popup5').classList.remove('popupact5')
})

const paint = document.querySelector('.paint');
paint.addEventListener('click', () => {
    console.log('POPopen');
    document.querySelector('.popup6').classList.add('popupact6')
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
})
const off7 = document.querySelector('.circle7')
off7.addEventListener('click', () => {
    document.querySelector('.popup7').classList.remove('popupact7');
})

const corona = document.querySelector('.corona');
corona.addEventListener('click', () => {
    console.log('POPopen');
    document.querySelector('.popup8').classList.add('popupact8')
})
const off8 = document.querySelector('.circle8')
off8.addEventListener('click', () => {
    document.querySelector('.popup8').classList.remove('popupact8');
})

const shop = document.querySelector('.store');
shop.addEventListener('click', () => {
    console.log('POPopen');
    document.querySelector('.popup9').classList.add('popupact9')
})
const off9 = document.querySelector('.circle9')
off9.addEventListener('click', () => {
    document.querySelector('.popup9').classList.remove('popupact9');
})
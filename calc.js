const get = document.querySelector('.inputcalc')
const answer = document.querySelector('.answer')

answer.addEventListener('click', () => {
    function calcs(fn) {
        return new Function('return ' + fn)();
      }
      
      console.log( calcs(get.textContent) ); // => inputvalue
      get.textContent = calcs(get.textContent)
})
let first = true;

document.body.addEventListener("click", function (e) {
    console.log('CALC CLICK');
    if (first === true) {
        get.textContent = '';
        first = false;
    }
    else {
        console.log('kolejny');
    }
    const etarget = e.target.closest('button')
    if (e.target.closest('button').classList.contains("przycisk"))     
    {
        console.log(e.target.closest('button'));
        get.textContent = get.textContent + etarget.textContent
    }
})

const clear = document.querySelector('.clear')
clear.addEventListener('click', () => {
    get.textContent = ''
})
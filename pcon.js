const power = document.querySelector('.poweron');
const windows = document.querySelector('.windows')
const name = document.querySelector('.name')
const name2 = document.querySelector('.name2')
power.addEventListener('click', function(){
    this.style.opacity = '0';
    setTimeout(() => {
        console.log('Ring ON');
        const ring = document.querySelector('.lds-ripple');
        console.log(ring);
        ring.style.opacity = 1;
    }, 500)
    setTimeout(()=>{
        const ring = document.querySelector('.lds-ripple');
        ring.style.opacity = 0;
        windows.style.display = 'block'
        setTimeout(()=>{
            name.style.opacity = 1;
            name2.style.opacity = 1;
            windows.style.opacity = 1;
        }, 500)
    }, 5000)
})

name2.addEventListener('click', () => {
    if(name.value == '') {
        name2.style.color = 'red';
    }
    else {
        const userName = name.value;
        name.style.opacity = 0;
        name2.style.opacity = 0;
        windows.style.opacity = 0;
        document.querySelector('.windowsall').style.display = 'block';
        document.querySelector('.popup').style.opacity = 1;
        document.querySelector('.windowsall').style.opacity = 1;
        document.querySelector('.popup').style.opacity = 1;
        document.body.style.backgroundImage = 'url(background.PNG)';
    }
})
name.addEventListener('keyup', () => { 
    name2.style.color = 'gray';
})
    setTimeout(() => {
        console.clear();
    },1000)



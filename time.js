const data = new Date().toLocaleString() 
document.querySelector('.time').textContent = data

setInterval(() => {
    const data = new Date().toLocaleString() 
    document.querySelector('.time').textContent = data
    console.log(data);
}, 1000)
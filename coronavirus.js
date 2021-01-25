let coronavirus
axios.get('https://api.apify.com/v2/key-value-stores/tVaYRsPHLjNdNBu7S/records/LATEST?disableRedirect=true.').then((res) => {
    coronavirus = res.data
    console.log(coronavirus);
}).catch('Krytyczny blad')

let allcases = 0;
setTimeout(() => {
    for(let i = 0; i<coronavirus.length; i++) {
        console.log(allcases);
        allcases += parseInt(coronavirus[i].infected)
        console.log(parseInt(coronavirus[i].infected));
    }
    console.log(allcases);
    opencase.textContent = `Przypadków na świecie ${allcases}`
}, 5000)

const opencase = document.querySelector('.opencase')
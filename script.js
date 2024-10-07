const bar = document.getElementById('bar'); //hamburger menu
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar) {                                 //if someone clicks on hamburger menu
    bar.addEventListener('click', ()=> {
        nav.classList.add('active');
    })
}

if (close) {                                 //if someone clicks on cross button to close navbar
    close.addEventListener('click', ()=> {
        nav.classList.remove('active');
    })
}
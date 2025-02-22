console.log('Menu burger aktywne');


const burgerBtn = document.querySelector('.burger-icon');
const menu = document.querySelector('.header-buttons') || document.querySelector('.nav-list');


burgerBtn?.addEventListener('click', () => {
    menu?.classList.toggle('show');
});


document.addEventListener('click', (e) => {
    if (!burgerBtn?.contains(e.target) && !menu?.contains(e.target)) {
        menu?.classList.remove('show');
    }
});


const contactForm = document.querySelector('#contact-form');
contactForm?.addEventListener('submit', (event) => {
    event.preventDefault(); 
    alert('Formularz został wysłany!');
});

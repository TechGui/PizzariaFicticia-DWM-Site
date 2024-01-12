const headerMenu = document.querySelector('.header__menu');
const headerOpcoes = document.querySelector('.header__opcoes');

headerMenu.addEventListener('click', () => {
    headerOpcoes.classList.toggle('active');
    headerMenu.classList.toggle('active');
    });
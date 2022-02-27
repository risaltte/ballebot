const botaoMenuMobile = document.querySelector('[data-botao-menu-mobile]');
const menu = document.querySelector('[data-menu]');

botaoMenuMobile.addEventListener('click', () => {
    menu.classList.toggle('menu-mobile-ativo');
})

const menu = document.getElementById('menu-hamburguer');
menu.addEventListener('click', () => {
    menu.classList.toggle('open');
});

const menuOptions = document.getElementById('menu');
menuOptions.addEventListener('click', () => {
    menu.classList.toggle('open');
});

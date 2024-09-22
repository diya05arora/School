function toggleMenu() {
    const menu = document.getElementById('menu');
    const burgerMenu = document.querySelector('.burgerMenu');
    
    menu.classList.toggle('open');
    burgerMenu.classList.toggle('open');
}

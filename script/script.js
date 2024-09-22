// Select the burger menu element
const burgerMenu = document.querySelector('.burgerMenu');

// Add click event listener to toggle the 'open' class
burgerMenu.addEventListener('click', function () {
    // Toggle the 'open' class
    burgerMenu.classList.toggle('open');
});

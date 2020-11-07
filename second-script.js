document.addEventListener("DOMContentLoaded", main);

function main() {
    const img = document.querySelector('.img');
    const menu = document.querySelector('.menu-wrapper');
    const background = document.querySelector('.background');

    img.addEventListener('click', function () {
        if (menu.classList.contains('menu-active')) {
            menu.classList.remove('menu-active');
        } else {
            menu.classList.add('menu-active');
        }
    });
    background.addEventListener('click', function () {
        menu.classList.remove('menu-active');
    });
}


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

    const sizebutton = document.querySelector('.size-button');
    const productsize = document.querySelectorAll('.product-size');
    productsize.forEach(function (productsize) {
        productsize.addEventListener('prosuctsize', updateSize);
    });
    //console.log(sizebutton);
    // productsize.addEventListener('click', function () {
    //     if (sizebutton.classList.contains('active')) {
    //         sizebutton.classList.remove('active');
    //     } else {
    //         sizebutton.classList.add('active');
    //     }
    // });  





    document.querySelectorAll('.size-button').forEach(button => {
        button.addEventListener('click', event => {
            const active = document.querySelector('.size-button.active');
            if (active) {
                active.classList.remove('active')
            }

            event.target.classList.add('active');
        });
    });
}

function updateSize(event) {
    click = event.target.classList.value;
    console.log(click);
    // if (click) {
    //     event.target.classList.add('active');
    // } else {
    //     event.target.classList.remove('active');
    // }
}
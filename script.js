document.addEventListener("DOMContentLoaded", main);

function main() {
    let button = document.querySelector('.buttonSubmit');
    console.log(document.getElementById('user'));

    const form = document.querySelector('#signin');

    form.addEventListener('submit', formOnSubmit);

    const input = document.querySelectorAll('.input-wrapper');
    input.forEach(function (input) {
        input.addEventListener('input', updateInput);
    });

}

function formOnSubmit(event) {
    event.preventDefault();
    let login = event.target.user.value;
    let password = event.target.pass.value;
    let sex = event.target.sex.value;
    let allow = event.target.allow.checked;
    let user = { login, password, sex, allow };
    console.log(user);
}

/**
 * 
 * @param {Event} event 
 */
function updateInput(event) {
    login = event.target.value;
    if (login) {
        event.target.classList.add('not-empty');
    } else {
        event.target.classList.remove('not-empty');
    }
}

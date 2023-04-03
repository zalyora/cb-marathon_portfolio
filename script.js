const BODY = document.querySelector('body');
const CONTACT = document.querySelector('#contact');
const MODAL = document.querySelector('#modal');
const CLOSE = document.querySelector('.close');
const NAME = document.querySelector('#name');
const EMAIL = document.querySelector('#email');
const SUBMIT = document.querySelector('#submit');

BODY.addEventListener('click', function (event) {
    let open = event.target;
    if (open == CONTACT) {
        MODAL.style.display = 'block';
    }
    if (open == CLOSE) {
        MODAL.style.display = 'none';
    }
    if (open == MODAL) {
        MODAL.style.display = 'none';
    }
    if (open == SUBMIT) {
        event.preventDefault();
        console.log(MODAL.childNodes[1].children[1]);
        console.dir(MODAL);
        let message = `I'll contact you ${NAME.value}`;
        MODAL.childNodes[1].children[1].innerText = message;
        MODAL.elements[1].hidden = true;
        MODAL.elements[2].hidden = true;
        MODAL.elements[3].hidden = true;
    }
});

BODY.addEventListener('keyup', function (event) {
    let open = event.key;
    if (open == 'Escape') {
        MODAL.style.display = 'none';
    }
});
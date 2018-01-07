let btnMenu = document.querySelector('.menu_btn_content');
let menu = document.querySelector('.menu');


btnMenu.addEventListener('click', function () {
    this.classList.toggle('active');
    menu.classList.toggle('active');
});

// BTN FORM

let btnForm = document.querySelector('.btn_form');
let visaForm = document.querySelector('.america_form');
btnForm.addEventListener('click', () => {
    btnForm.classList.toggle('active');
    visaForm.classList.toggle('active');
});
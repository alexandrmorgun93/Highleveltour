let btnMenu = document.querySelector('.menu_btn_content');
let menu = document.querySelector('.menu');


btnMenu.addEventListener('click', function () {
    this.classList.toggle('active');
    menu.classList.toggle('active');
});
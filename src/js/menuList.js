let menuRightBtn = document.querySelectorAll('.menu_right_btn');
let menuDrop = document.querySelectorAll('.menu_drop');
for (let i = 0; i < menuRightBtn.length && i < menuDrop.length; i++) {
    menuRightBtn[i].addEventListener('click', () => {
        menuRightBtn[i].classList.toggle('active');
        menuDrop[i].classList.toggle('active');
    });
}
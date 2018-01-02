let tabsBtn = document.querySelectorAll('.tabs_btn');
let tabs = document.querySelectorAll('.tabs_content');

for (let i = 0; i < tabsBtn.length && i < tabs.length; i++) {
    tabsBtn[i].addEventListener('click', function () {
        this.classList.toggle('active');
        tabs[i].classList.toggle('active');
    });
}

// for (let i = 0; i < tabs.length; i++) {
//
// }
let tabsBtn = document.querySelectorAll('.tabs_btn');
let tabs = document.querySelectorAll('.tabs_content');

for (let i = 0; i < tabsBtn.length; i++) {
    tabsBtn[i].addEventListener('click', function () {
        this.classList.toggle('active');
    });
}

function tabsList() {
    for (let i = 0; i < tabs.length; i++) {
        tabs[i].classList.add('active');
    }
}

// for (let i = 0; i < tabs.length; i++) {
//
// }
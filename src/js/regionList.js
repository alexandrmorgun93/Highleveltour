let regionList = document.querySelector('.btn_region');
let region = document.querySelector('.region_content_wrap');

regionList.addEventListener('click', () => {
    region.classList.toggle('active');
});
/*BEGIN PARALLAX*/
const Parallax = require('scroll-parallax');
let p = new Parallax('.parallax', {
    intensity: 70
}).init();

/*END PARALLAX*/

let slider = document.querySelectorAll('.main_slide_elem');
let dotsWrap = document.querySelector('.right_control');
let arrDote = [];
let yak = 0;
let timer = null;
let nextSlide = document.querySelector('.right_btn');
let prevSlide = document.querySelector('.left_btn');

function lastElem(arr, int, boll) {
    if (boll) {
        return (arr[int + 1]) ? int + 1 : 0;
    } else {
        return (arr[int - 1]) ? int - 1 : arr.length - 1;
    }
}

for (let i = 0; i < slider.length; i++) {
    let dots = document.createElement('i');
    dots.className = 'dots';
    dots.addEventListener('click', () => {
        clearInterval(timer);
        autoSlider(true, i);
        defult();
    });
    dotsWrap.appendChild(dots);
}
arrDote = dotsWrap.querySelectorAll('i');

function autoSlider(boll, int) {
    for (let i = 0; i < slider.length; i++) {
        slider[i].classList.remove('active');
        arrDote[i].classList.remove('active');

    }
    if (arguments.length < 2) {
        yak = lastElem(slider, yak, boll);
        slider[yak].classList.add('active');
        arrDote[yak].classList.add('active');
    }
    else {
        yak = int;
        slider[int].classList.add('active');
        arrDote[int].classList.add('active');
    }
}

nextSlide.addEventListener('click', () => {
    clearInterval(timer);
    autoSlider(true);
    defult();
});
prevSlide.addEventListener('click', () => {
    clearInterval(timer);
    autoSlider(false);
    defult();
});
document.addEventListener('keyup', (e) => {
    if (e.keyCode === 39) {
        clearInterval(timer);
        autoSlider(true);
        defult();
    } else if (e.keyCode === 37) {
        clearInterval(timer);
        autoSlider(false);
        defult();
    }
});

function defult() {
    timer = setInterval(() => {
        autoSlider(true);
    }, 7000);
}

slider[0].classList.add('active');
arrDote[0].classList.add('active');

defult();



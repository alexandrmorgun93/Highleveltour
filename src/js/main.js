;
(() => {
    'use strict';

    /*variables*/

    /*BEGIN PARALLAX*/
    const Parallax = require('scroll-parallax');
    let p = new Parallax('.parallax', {
        intensity: 70
    }).init();

    /*END PARALLAX*/
    // begin region menu
    let regionList = document.querySelector('.btn_region');
    let region = document.querySelector('.region_content_wrap');

    regionList.addEventListener('click', function () {
        region.classList.toggle('active');
    });
    // end region menu

})();

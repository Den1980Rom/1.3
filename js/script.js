// Создаем функцию для Swiper
(function () {

    'use strict';

    const breakpoint = window.matchMedia('(min-width:480px)');

    let mySwiper;

    const breakpointChecker = function () {

        if (breakpoint.matches === true) {

            if (mySwiper !== undefined) mySwiper.destroy(true, true);
            return;

        } else if (breakpoint.matches === false) {
            return enableSwiper();
        }
    };

    const enableSwiper = function () {

        mySwiper = new Swiper('.swiper', {

            loop: true,

            slidesPerView: 'auto',

            centeredSlides: true,

            a11y: true,
            keyboardControl: true,
            grabCursor: true,
            spaceBetween: 24,
            width: 224,
            speed: 500,

            // pagination
            pagination: {
                el: '.swiper-pagination',
                paginationClickable: true,
                dynamicBullets: true,
            }
        });
    };

    breakpoint.addListener(breakpointChecker);
    breakpointChecker();
})();

const brandBtn = document.querySelector('.brand__btn');
const swiperWrapper = document.querySelector('.swiper-wrapper');
brandBtn.addEventListener('click', function () {
    swiperWrapper.classList.toggle('show');
    brandBtn.classList.toggle('back');
    if (swiperWrapper.classList.contains('show')) {
        brandBtn.textContent = 'Скрыть';
    } else {
        brandBtn.textContent = 'Показать все';
    }

});
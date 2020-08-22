'use strict';

new WOW({
    animateClass: 'animate__animated'
}).init();

// SLIDER
var swiper = new Swiper('.swiper-container', {
    pagination: {
        el: '.projects-pagination',
        bulletClass: 'projects-bullet',
        bulletActiveClass: 'projects-bullet-active',
        clickable: true
    }
});
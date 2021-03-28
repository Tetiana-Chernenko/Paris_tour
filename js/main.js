$(function(){
    $('.romantic__slider').slick({
        prevArrow: '<button type="button" class="slick-btn slick-prev"><img src="/images/arrow-prev.svg" alt="arrow-prev"></button>',
        nextArrow: '<button type="button" class="slick-btn slick-next"><img src="/images/arrow-next.svg" alt="arrow-next"></button>',
        autoplay: true,
        fade: true,
        responsive: [
            {
                breakpoint: 576,
                settings: {
                    arrows: false
                } 
            },
        ]
    });

    $('.our-trip__slider').slick({
        prevArrow: '<button type="button" class="slick-btn slick-prev"><img src="/images/arrow-prev.svg" alt="arrow-prev"></button>',
        nextArrow: '<button type="button" class="slick-btn slick-next"><img src="/images/arrow-next.svg" alt="arrow-next"></button>',
        autoplay: true,
        fade: true,
        responsive: [
            {
                breakpoint: 576,
                settings: {
                    arrows: false
                } 
            },
        ]
    });
});
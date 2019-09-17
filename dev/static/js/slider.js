(function () {
    var $slider = $('.js-slider');
    var responsive = function () {

        if (window.innerWidth >= 1024 && !$slider.hasClass('slick-initialized')) {
            $slider.slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: true,
                prevArrow: '<button class="slider__arrow slider__arrow-prev" title=""><span></span></button>',
                nextArrow: '<button class="slider__arrow slider__arrow-next" title=""><span></span></button>',
                dotsClass: 'slider__dots',
                dots: true,
                infinite: true,
                speed: 500,
                fade: true,
                cssEase: 'linear'
            });

        } else if (window.innerWidth < 1024 && $slider.hasClass('slick-initialized')) {
            $slider.slick('unslick');
        }
    };

    if ($slider.length > 0) {
        responsive();

        $(window).resize(function () {
            responsive();
        });
    }
})();
/*This function animates the slider content based on the data-animation attribute values set up in the individual slides
html markup*/

$(document).ready(function () {
    $('.slider').on('init', function (e, slick) {
        var $firstAnimatingElements = $('div.banner-container:first-child').find('[data-animation]');
        doAnimations($firstAnimatingElements);
    });
    $('.slider').on('beforeChange', function (e, slick, currentSlide, nextSlide) {
        var $animatingElements = $('div.banner-container[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
        doAnimations($animatingElements);
    });
    $('.slider').slick({
        autoplay: false,
        autoplaySpeed: 6500,
        dots: false,
        fade: true,
        arrows: false
    });

    function doAnimations(elements) {
        var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        elements.each(function () {
            var $this = $(this);
            var $animationDelay = $this.data('delay');
            var $animationType = 'animated ' + $this.data('animation');
            $this.css({
                'animation-delay': $animationDelay,
                '-webkit-animation-delay': $animationDelay
            });
            $this.addClass($animationType).one(animationEndEvents, function () {
                $this.removeClass($animationType);
            });
        });
    }

    //The following function initializes the AOS scrolling animation library
    AOS.init();
});
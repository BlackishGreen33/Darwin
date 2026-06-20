$(function () {
    'use strict'

    var $navbar = $(".navbar");

    $(window).on('scroll', function () {
        var b = $(window).scrollTop();

        if (b > 72) {
            $navbar.addClass("scroll");
        } else {
            $navbar.removeClass("scroll");
        }
    });

    // TESTIMONIALS CAROUSEL
    $('#testimonials-carousel').owlCarousel({
        loop: true,
        margin: 10,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            },
            900: {
                items: 2,
            },
            1200: {
                items: 3,
                loop: false
            }
        }
    })

    // MENU + SMOOTHSCROLL
    $('.navbar .nav-link').on('click', function (event) {
        var $anchor = $(this);
        var target = $($anchor.attr('href'));

        $(".navbar-collapse").collapse('hide');

        if (!target.length) {
            return;
        }

        $('html, body').stop().animate({
            scrollTop: target.offset().top - 49
        }, 1000);
        event.preventDefault();
    });
});

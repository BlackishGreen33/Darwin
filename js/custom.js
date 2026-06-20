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

    // MENU
    $('.navbar .nav-link').on('click', function () {
        $(".navbar-collapse").collapse('hide');
    });
});

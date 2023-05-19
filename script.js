$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        dots: false,
        margin: 50,
        items: 5,
        slideTransition: `linear`,
        autoplay: 1000,
        smartSpeed: 1000,
        autoplayTimeout: 1000,
        loop: true
    });
});
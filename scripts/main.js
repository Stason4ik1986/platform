$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        loop: true,
        margin: 52,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            },
            480: {
                items: 1,
            },
            1000: {
                items: 3,
            }
        }
    });
});
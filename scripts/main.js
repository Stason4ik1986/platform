$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        loop: true,
        margin: 52,
        responsiveClass: true,
        responsive: {
            0: {
                items: 2,
            },
            480: {
                items: 2,
                margin: 10
            },
            1000: {
                items: 3,
                margin: 20
            }
        }
    });

    $('.navigation__hidden-button').click(function (e) {
        $(this).toggleClass('active');
        $('.navigation__list-hidden').slideToggle();

        e.preventDefault();
    });


    $(function () {
        $('.popup-modal').magnificPopup({
            type: 'inline',
            removalDelay: 300,
            showCloseBtn: false,
            mainClass: 'mfp-fade',
        });
        $(document).on('click', '.popup-modal-dismiss', function (e) {
            e.preventDefault();
            $.magnificPopup.close();
        });
    });
});
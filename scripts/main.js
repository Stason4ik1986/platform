$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 52,
        responsiveClass: true,
        responsive: {
            0: {
                items: 2,
                margin: 10
            },
            480: {
                items: 2,
                margin: 10
            },
            1000: {
                items: 3,
                margin: 52
            }
        }
    });

    $('.navigation__hidden-button').click(function (e) {
        $(this).toggleClass('active');
        $('.navigation__list-hidden').slideToggle();
        var headerContent = $('#header-content');
        
        if (headerContent.hasClass('animated')) {
            headerContent.removeClass('animated bounceInLeft go');
        } else {
            headerContent.addClass('animated bounceInLeft go');
        }

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

    $("a.navigation__list-item-link").click(function (event) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: $($(this).attr("href")).offset().top }, 500);
        $('.navigation__list-hidden').slideToggle();
    });
});
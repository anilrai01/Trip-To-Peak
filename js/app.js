$(document).ready(function(){
    $('.sidenav').sidenav();
    $('.parallax').parallax();
    $('.scrollspy').scrollSpy();
    $('.materialboxed').materialbox();
    $('.datepicker').datepicker();

    $('#top-carousel  .owl-carousel').owlCarousel({
        loop: true,
        nav: false,
        pagination: false,
        autoplay: 2,

        responsive: {
            0:{
                items: 1
            },
            1000:{
                items: 1
            }
        }
    });

    $('#package-carousel  .owl-carousel').owlCarousel({
        loop: true,
        nav: false,
        pagination: false,
        autoplay: 200,

        responsive: {
            0:{
                items: 1
            },
            1000:{
                items: 3
            }
        }
    });
});

$(document).on('click','#home .nav-links li', function() {
    $(this).addClass('active').siblings().removeClass('active');
    // console.log('Navvy');
});

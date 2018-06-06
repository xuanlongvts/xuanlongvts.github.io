$(document).ready(function () {

    $('.navbar-toggler').click(function () {
        $(this).toggleClass('is-active');
        $('#navbarRight').slideToggle(300);
        $('body').toggleClass('modal-open');
    });

    $('.sub-menu a').click(function () {
        var getRel = $(this).attr('rel');
        if (getRel) {
            $("body,html").animate({ scrollTop: $('#'+getRel).offset().top - 70 }, 300);
        }
    });

    $(window).resize(function () {
        if ($(window).innerWidth() >= 768 && $('.navbar-right').hasClass('show')) {
            $('.navbar-right').removeClass('show');
        }
        setPadTopProHome();
    });

    // scroll body to 0px on click
    $('#top-act').click(function () {
        $('body,html').animate({ scrollTop: 0 }, 300);
        return false;
    });

    var lastScrollTop = 0;
    $(window).scroll(function(){
        var st = $(this).scrollTop();
        if (st > lastScrollTop && (st > 50)){
            // downscroll code
            $('.navbar').slideUp(50);
        } else {
            // upscroll code
            $('.navbar').slideDown(100);
        }
        lastScrollTop = st;

        if ($(this).scrollTop() > 50) {
            $('#top-act').fadeIn();
        } else {
            $('#top-act').fadeOut();
        }

        if ($(window).innerWidth() >= 992) {
            var getHeightWindow = $(window).height();
            var getHeightHomeIntro = $('.home-intro').innerHeight();
            if ($(this).scrollTop() >= (getHeightHomeIntro - 100)) {
                $('.navbar.home').css({ 'background-color': '#fff' });
            }
            else {
                $('.navbar.home').css({ 'background-color': 'transparent' });
            }
        }
    });

    $(window).resize(function(){
        if ($(window).innerWidth() >= 992) {
            $('body').removeClass('modal-open');
        }
        else{
            if($('#navbarRight').is(':visible')){
                $('body').addClass('modal-open');
            }
        }
    });

    function setPadTopProHome() { 
        
        if ($(window).innerWidth() >= 992) {
            var getHeightWindow = $(window).height();
            var getHeightHomeIntro = $('.home-intro').innerHeight();
            $('.list-products.home').css('marginTop', getHeightHomeIntro);
        }
    }
    setPadTopProHome();
});
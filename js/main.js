$(function(){
    $('.blog__slider-inner').slick({
        dots: true,
        arrows: false,
    });

    $('.menu__btn').on('click', function(){
        $('.header__top-inner').toggleClass('header__top-inner--active');
    });
    var mixer = mixitup('.gallery__photos');

});
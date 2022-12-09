$(function () {
    $('.blog__slider-inner').slick({
        dots: true,
        arrows: false,
    });

    $('.menu__btn, .menu a').on('click', function () {
        $('.header__top-inner').toggleClass('header__top-inner--active');
    });

    $('.logo').on('click', function () {
        $('.header__top-inner').removeClass('header__top-inner--active');
    });

    $(".menu a, .logo").on("click", function (event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();

        //забираем идентификатор бока с атрибута href
        var id = $(this).attr('href'),

            //узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top;

        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({ scrollTop: top }, 1500);
    });

    var mixer = mixitup('.gallery__photos');
});

const header = document.querySelector('.header__top-inner');
const headerHeight = header.clientHeight;
document.addEventListener('scroll', function() {
    let switchHeight = document.documentElement.clientHeight - headerHeight;
    if (window.pageYOffset > switchHeight){
        header.classList.add("bgSwitch");
    } else header.classList.remove("bgSwitch");
    // console.log('window.pageYOffset' ,window.pageYOffset);
    // console.log('viewHeight', switchHeight);
});
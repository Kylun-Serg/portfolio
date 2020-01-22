$(function(){


$(".header__menu").on("click","a", function (event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();
        //забираем идентификатор бока с атрибута href
        var id  = $(this).attr('href'),
        //узнаем высоту от начала страницы до блока на который ссылается якорь
        top = $(id).offset().top;
        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({scrollTop: top}, 1500);
    });

$(window).scroll(function() {
	if ($(this).scrollTop() > 200){
	$('.header__top').addClass("sticky");
	}
	else{
	$('.header__top').removeClass("sticky");
	}
});

$(".menu__btn").on('click', function(e) {
	e.preventDefault;
	$(this).toggleClass('menu__btn-active');
});

var mixer = mixitup('.works__items-inner');
  
});
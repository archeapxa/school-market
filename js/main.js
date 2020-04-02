$(document).ready(function () {

  //бургер меню в хедере партнеров
  $('.header-partners__burger-link').on('click', function(e) {
    e.preventDefault;
    $('.header-partners__burger').toggleClass('header-partners__burger--active');
    $('.header-partners__links').toggleClass('header-partners__links--active');
  });

  // скрытие меню при клике вне его
	$(document).mouseup(function (e){ // событие клика по веб-документу
    var div = $(".header-partners__links");
    var burBtn1 = $('.header-partners__burger-link') // тут указываем ID элемента
		if (!div.is(e.target) // если клик был не по нашему блоку
    && div.has(e.target).length === 0) { // и не по его дочерним элементам
      if (!burBtn1.is(e.target) 
      && burBtn1.has(e.target).length === 0) {
        $('.header-partners__burger').removeClass('header-partners__burger--active');
        $('.header-partners__links').removeClass('header-partners__links--active');
      }
		}
	});

//бургер меню в навигации
  $('.menu__burger').on('click', function(e) {
    e.preventDefault;
    $('.menu__burger-inside').toggleClass('menu__burger-inside--active');
    $('.menu__nav').toggleClass('menu__nav--active');
    $('.menu__burger').toggleClass('menu__burger--active');
  });

  // скрытие меню при клике вне его
	$(document).mouseup(function (e){ // событие клика по веб-документу
    var div2 = $(".menu__nav");
    var burBtn2 = $('.menu__burger') // тут указываем ID элемента
		if (!div2.is(e.target) // если клик был не по нашему блоку
    && div2.has(e.target).length === 0) { // и не по его дочерним элементам
      if (!burBtn2.is(e.target) 
      && burBtn2.has(e.target).length === 0) {
        $('.menu__burger-inside').removeClass('menu__burger-inside--active');
        $('.menu__nav').removeClass('menu__nav--active');
        $('.menu__burger').removeClass('menu__burger--active');
      }
		}
	});

  //выпадающий список каталогов
  $('.menu__item-dropdown').on('click', function() {
    // alert('Вы поместили курсор в зону элемента foo.');
    // e.preventDefault;
    $('.menu__dropdown-list').css('visibility', 'visible');
  });

  // скрытие меню при клике вне его
  $(document).mouseup(function (e){ // событие клика по веб-документу
    var div2 = $(".menu__item-dropdown"); // тут указываем ID элемента
    if (!div2.is(e.target) // если клик был не по нашему блоку
        && div2.has(e.target).length === 0) { // и не по его дочерним элементам
          $('.menu__dropdown-list').css('visibility', 'hidden') // скрываем его
    }
  });

  //разворот блока категорий
  $('.categories__more').on('click', function() {
    $('.categories__hidden').stop().fadeToggle(500);
  });


  //модалка входа на сайт
  $('.header-partners__login').on('click', function(e) {
    e.preventDefault;
    $('.popup').addClass('popup--active');
  });

  $('.popup__close').on('click', function(e) {
    e.preventDefault;
    $('.popup').removeClass('popup--active');
  }); 

  // скрытие попапа при клике вне его
  $(document).mouseup(function (e){ // событие клика по веб-документу
    var popup = $(".popup__dialog"); // тут указываем ID элемента
    if (!popup.is(e.target) // если клик был не по нашему блоку
        && popup.has(e.target).length === 0) { // и не по его дочерним элементам
          $('.popup').removeClass('popup--active'); // скрываем его
    }
  });

  $(document).keydown(function (eventObject) { //закрытие окна по esc. Еще одна копипаста
    if (eventObject.which == 27) { // нажата клавиша Esc
      $('.popup').removeClass('popup--active');
      // ваша функция закрытия окна
    };
  });


  var mySwiper = new Swiper ('.hero__swiper', {
    // Navigation arrows
    navigation: {
      nextEl: '.hero__button-next',
      prevEl: '.hero__button-prev',
    },

  });

    var mySwiper2 = new Swiper ('.platforms-swiper', {
    // Navigation arrows
    navigation: {
      nextEl: '.platforms__button-next',
      prevEl: '.platforms__button-prev',
    },
    slidesPerView: 1,
    spaceBetween: 20,
    breakpoints: {
      991: {
        slidesPerView: 4
      },
      767: {
        slidesPerView: 3
      },
      480: {
        slidesPerView: 2
      }
    }
  });


// timer

function timer(settings){
  var config = {
      endDate: '2020-04-06 09:00',
      timeZone: 'Europe/Dublin',
      hours: $('#hours'),
      minutes: $('#minutes'),
      seconds: $('#seconds'),
      newSubMessage: 'and should be back online in a few minutes...'
  };
  function prependZero(number){
      return number < 10 ? '0' + number : number;
  }
  $.extend(true, config, settings || {});
  var currentTime = moment();
  var endDate = moment.tz(config.endDate, config.timeZone);
  var diffTime = endDate.valueOf() - currentTime.valueOf();
  var duration = moment.duration(diffTime, 'milliseconds');
  var days = duration.days();
  var interval = 1000;
  var subMessage = $('.sub-message');
  var clock = $('.timer__clock');
  if(diffTime < 0){
      endEvent(subMessage, config.newSubMessage, clock);
      return;
  }
  // if(days > 0){
  //     $('#days').text(prependZero(days));
  //     $('.days').css('display', 'inline-block');
  // }
  var intervalID = setInterval(function(){
      duration = moment.duration(duration - interval, 'milliseconds');
      var hours = duration.hours(),
          minutes = duration.minutes(),
          seconds = duration.seconds();
      days = duration.days();
      if(hours  <= 0 && minutes <= 0 && seconds  <= 0 && days <= 0){
          clearInterval(intervalID);
          endEvent(subMessage, config.newSubMessage, clock);
          window.location.reload();
      }
      // if(days === 0){
      //     $('.days').hide();
      // }
      $('#days').text(prependZero(days));
      config.hours.text(prependZero(hours));
      config.minutes.text(prependZero(minutes));
      config.seconds.text(prependZero(seconds));
  }, interval);
}
function endEvent($el, newText, hideEl){
  $el.text(newText);
  hideEl.hide();
}
timer();

})
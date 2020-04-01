$(document).ready(function () {

  $('.header-partners__burger-link').on('click', function(e) {
    e.preventDefault;
    $('.header-partners__burger').toggleClass('header-partners__burger--active');
    $('.header-partners__links').toggleClass('header-partners__links--active');

  });
// скрытие меню при клике вне его
	$(document).mouseup(function (e){ // событие клика по веб-документу
		var div = $(".header-partners__links"); // тут указываем ID элемента
		if (div.is(e.target) // если клик был не по нашему блоку
		    && div.has(e.target).length === 0) { // и не по его дочерним элементам
          $('.header-partners__burger').removeClass('header-partners__burger--active');
          $('.header-partners__links').removeClass('header-partners__links--active'); // скрываем его
		}
	});


  $('.menu__burger').on('click', function(e) {
    e.preventDefault;
    $('.menu__burger-inside').toggleClass('menu__burger-inside--active');
    // $('.header-partners__links').toggleClass('header-partners__links--active');

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
$(function () {
  var reviews = $('.banners');
  var reviewsTop = reviews.offset().top;
  $(window).bind('scroll', function () {
   
      var windowTop = $(this).scrollTop();
      if (windowTop > reviewsTop) {
          $('#ban').html('<iframe src="./big_banners/MTS_Invest_Sostav_100Px200/MTS_Invest_100Px200.html" width="100%" height="200px">Ваш браузер не поддерживает плавающие фреймы!</iframe>');
          $(window).unbind('scroll');

          $('#ban2').html('<iframe src="./big_banners/MTS_VoLTE_Sostav_100Px200/MTS_VoLTE_100Px200.html" width="100%" height="200px">Ваш браузер не поддерживает плавающие фреймы!</iframe>');
          $(window).unbind('scroll');

          $('#ban3').html('<iframe class="big" src="./small_banners/MTS_iPhone_Afisha_Mobile_100Px250/index.html" width="100%"height="250px">Ваш браузер не поддерживает плавающие фреймы!</iframe>');
          $(window).unbind('scroll');

          $('#ban4').html('<iframe src="./big_banners/mtsspam/MTS_SPAM_940x250.html" width="100%" height="250px">Ваш браузер не поддерживает плавающие фреймы!</iframe>');
          $(window).unbind('scroll');

          $('#ban5').html(' <iframe src="./big_banners/MF_Bistrolet_RBC_100Px250/index.html" width="100%" height="250px">Ваш браузер не поддерживает плавающие фреймы!</iframe>');
          $(window).unbind('scroll');
          
      }
  });
} 
);

$('.banners').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.slider-dots'
});
$('.slider-dots').slick({
  infinite: true,
  speed: 300,
 
  variableWidth: true,
  autoplay: true,
  autoplaySpeed: 9000,
  focusOnSelect: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.banners',
  prevArrow: '<img class="slider-studio_left" src="img/Arrow_back.svg" alt="">',
  nextArrow: '<img class="slider-studio_right" src="img/Arrow_next.svg" alt="">',
  // responsive: [
  //   {
  //     breakpoint: 700,
  //     settings: {
     
  //       slidesToShow: 2
  //     }
  //   }

  // ]
});



$(document).ready(function () {
  $("#resizable").resizable({ handles: 'e', minWidth: 300 });
  $("#resizable_5").resizable({ handles: 'e', minWidth: 950 });
  $("#resizable_2").resizable({ handles: 'e', minWidth: 300 });
  $("#resizable_3").resizable({ handles: 'e', minWidth: 300 });
  $("#resizable_4").resizable({ handles: 'e', minWidth: 950 });
});

$(window).on('load', function () {
  $('.preloader').delay(2000).fadeOut('slow');
});



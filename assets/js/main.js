$('.single-item').slick({
  // arrows: false,
  infinite: false,
  prevArrow: '<div class="slick-prev-arrow"><i class="fa fa-chevron-left" aria-hidden="true"></i></div>',//$('.slick-prev-arrow'),
  nextArrow: '<div class="slick-next-arrow"><i class="fa fa-chevron-right" aria-hidden="true"></i></div>',//$('.slick-next-arrow'),
});
// ANIMATE
wow = new WOW(
  {
    animateClass: 'animated',
    offset: 100,
    callback: function (box) {
      console.log("WOW: animating <" + box.tagName.toLowerCase() + ">")
    }
  }
);
wow.init();

// slideshow

$(document).ready(function () {
  $('.slideshow').click(function () {
    $('body, html').animate({
      scrollTop: '0px'
    }, 500);
  });

  // $('window').scroll(function(){
  //   if( $(this).scrollTop() > 0){
  //     $('.slideshow').slideDown(300);
  //   } else {
  //     $('.slideshow').slideUp(300);
  //   }
  // });
});

$(window).bind('scroll', function () {
  if ($(window).scrollTop() > 100) {
    $('.slideshow').addClass('slideshow-visible');
  } else {
    $('.slideshow').removeClass('slideshow-visible');
  }
});


// $(window).bind('scroll', function () {
//   if ($(window).scrollTop() > 10) {
//     $('.navbar').addClass('fixed-top');
//   } else {
//     $('.navbar').removeClass('fixed-top');
//   }
// });

$('.btn-color').click(function () {
  $(this).toggleClass('border-color')
});

$('.dropdown-toggle').dropdown();
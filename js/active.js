(function ($) {
    "use strict";


    $('.slider-area').owlCarousel({
      loop:true,
      dots:true,
      nav:false,
      items:1,
  });
    $('.brand-carousel').owlCarousel({
      loop:true,
      margin:0,
      dots:true,
      nav:false,
      items:5,
      responsive:{
        0:{
            items:1
        },
        480:{
            items:2
        },
        767:{
            items:3
        },
        992:{
            items:5
        }
    },
  });
  $(window).on('scroll', function () {
    var scroll = $(window).scrollTop();
    if (scroll < 220) {
    $("#sticky-header").removeClass("sticky");
    } else {
    $("#sticky-header").addClass("sticky");

    }
});
      //onepage-nav
      $('#onepage-nav').onePageNav({
        currentClass: 'current',
        changeHash: false,
        scrollSpeed: 2000,
    }); 
    
})(jQuery);	
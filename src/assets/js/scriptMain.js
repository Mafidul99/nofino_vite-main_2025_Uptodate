(function ($) {

  // owl_carousel Home Page
  $(document).ready(function () {
    $(".owl-carousel").owlCarousel({
      margin: 12,
      nav: false,
      loop: true,
      active: true,
      responsiveClass: true,
      animateOut: 'fadeOut',
      animateIn: 'fadeIn',      
      smartSpeed: 1000,
      autoplay: 6000,
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 1

        },
        700: {
          items: 2

        },
        1000: {
          items: 3
        }
      }
    });
  });

})(window.jQuery);
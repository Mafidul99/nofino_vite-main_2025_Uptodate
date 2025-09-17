
(function($) {	
	
	// owl_carousel Home Page
	 $(document).ready(function () {
      $(".owl-carousel").owlCarousel({
        margin: 20,
        nav: false,
        loop: true,
        responsiveClass: true,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        active: true,
        smartSpeed: 1000,
        autoplay: 6000,
        responsive: {
          0: {
            items: 1
          },
          600: {
            items: 2
            
          },
          1000: {
            items: 3
          }
        }
      });
    });

  
	

})(window.jQuery);



AOS.init({
  duration: 600
});
  

(function($) {

	'use strict';

  $(window).stellar({
    responsive: false,
    parallaxBackgrounds: true,
    parallaxElements: true,
    horizontalScrolling: false,
    hideDistantElements: false,
    scrollProperty: 'scroll'
  });

	// bootstrap dropdown hover

  // loader
  var loader = function() {
    setTimeout(function() { 
      if($('#loader').length > 0) {
        $('#loader').removeClass('show');
      }
    }, 1);
  };
  loader();


  // navigation
  var OnePageNav = function() {
    var navToggler = $('.js-site-nav-toggle');
    $(".smoothscroll[href^='#'], #ftco-navbar ul li a[href^='#']").on('click', function(e) {
      e.preventDefault();
      var hash = this.hash;
        
      $('html, body').animate({

        scrollTop: $(hash).offset().top
      }, 700, 'easeInOutExpo', function(){
        window.location.hash = hash;
      });
    });
    $("#ftco-navbar ul li a[href^='#']").on('click', function(e){
      if ( navToggler.is(':visible') ) {
        navToggler.click();
      }
    });

    // $('body').on('activate.bs.scrollspy', function () {
    //   console.log('nice');
    // })
  };
  OnePageNav();

  $(window).scroll(function() {

    var $this = $(this),
      st = $this.scrollTop(),
      navbar = $('.site-header');

    if (st > 150) {
      if ( !navbar.hasClass('scrolled') ) {
        navbar.addClass('scrolled');  
      }
    } 
    if (st < 150) {
      if ( navbar.hasClass('scrolled') ) {
        navbar.removeClass('scrolled sleep');
      }
    } 
    if ( st > 350 ) {
      if ( !navbar.hasClass('awake') ) {
        navbar.addClass('awake'); 
      }
    }
    if ( st < 350 ) {
      if ( navbar.hasClass('awake') ) {
        navbar.removeClass('awake');
        navbar.addClass('sleep');
      }
    }

  }); 


  $('.js-site-nav-toggle').on('click', function(e) {

    var $this = $(this);
    e.preventDefault();

 

    if ( $('body').hasClass('menu-open') ) {
      $this.removeClass('active');
        $('.site-menu .site-menu-inner > ul > li').each(function(i) {

          var that = $(this);
          setTimeout(function() {
            that.removeClass('is-show');
          }, i * 100);

          // $(this).removeClass('is-show');
        });
      
      setTimeout(function() {
        // $('.site-menu').fadeOut(400);
        $('.site-menu').removeClass('site-menu-show');
      }, 800);

      $('body').removeClass('menu-open');
    } else {

      // $('.site-menu').fadeIn(400);
      $('.site-menu').addClass('site-menu-show');

      $this.addClass('active');
      $('body').addClass('menu-open');

      setTimeout(function() {
        $('.site-menu .site-menu-inner > ul > li').each(function(i) {
          var that = $(this);
          setTimeout(function() {
            that.addClass('is-show');
          }, i * 100);

        });
      }, 500);
      
    }

  });


	
	$('nav .dropdown').hover(function(){
		var $this = $(this);
		$this.addClass('show');
		$this.find('> a').attr('aria-expanded', true);
		$this.find('.dropdown-menu').addClass('show');
	}, function(){
		var $this = $(this);
			$this.removeClass('show');
			$this.find('> a').attr('aria-expanded', false);
			$this.find('.dropdown-menu').removeClass('show');
	});


	$('#dropdown04').on('show.bs.dropdown', function () {
	  console.log('show');
	});

	// home slider
	$('.home-slider').owlCarousel({
    loop:true,
    autoplay: true,
    margin:0,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    nav:true,
    autoplayHoverPause: true,
    items: 1,
    navText : ["<span class='ion-chevron-left'></span>","<span class='ion-chevron-right'></span>"],
    responsive:{
      0:{
        items:1,
        nav:false
      },
      600:{
        items:1,
        nav:false
      },
      1000:{
        items:1,
        nav:true
      }
    }
	});

  $('.home-slider-loop-false').owlCarousel({
    loop:false,
    autoplay: true,
    margin:0,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    nav:true,
    autoplayHoverPause: true,
    items: 1,
    navText : ["<span class='ion-chevron-left'></span>","<span class='ion-chevron-right'></span>"],
    responsive:{
      0:{
        items:1,
        nav:false
      },
      600:{
        items:1,
        nav:false
      },
      1000:{
        items:1,
        nav:true
      }
    }
  });

	// owl carousel
	var majorCarousel = $('.js-carousel-1');
	majorCarousel.owlCarousel({
    loop:true,
    autoplay: true,
    stagePadding: 7,
    margin: 20,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    nav: true,
    autoplayHoverPause: true,
    items: 3,
    navText : ["<span class='ion-chevron-left'></span>","<span class='ion-chevron-right'></span>"],
    responsive:{
      0:{
        items:1,
        nav:false
      },
      600:{
        items:2,
        nav:false
      },
      1000:{
        items:3,
        nav:true,
        loop:false
      }
  	}
	});

	// owl carousel
	var major2Carousel = $('.js-carousel-2');
	major2Carousel.owlCarousel({
    loop:true,
    autoplay: true,
    stagePadding: 7,
    margin: 20,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    nav: true,
    autoplayHoverPause: true,
    items: 4,
    navText : ["<span class='ion-chevron-left'></span>","<span class='ion-chevron-right'></span>"],
    responsive:{
      0:{
        items:1,
        nav:false
      },
      600:{
        items:3,
        nav:false
      },
      1000:{
        items:4,
        nav:true,
        loop:false
      }
  	}
	});


  $('.centernonloop').owlCarousel({
    center: true,
    items: 1,
    loop: false,
    margin:10,
    dots: true,
    responsive:{
      600:{
        items: 3
      }
    }
  });

  $('#date').datepicker({
    'format': 'm/d/yyyy',
    'autoclose': true
  });
  $('#time').timepicker();


  //------- Google Map  js --------//  

    // if (document.getElementById("map")) {
    //     google.maps.event.addDomListener(window, 'load', init);

    //     function init() {
    //         var mapOptions = {
    //             zoom: 13,
    //             center: new google.maps.LatLng(44.107385, -79.592197), // Bradford
                
    //         };
    //         var mapElement = document.getElementById('map');
    //         var map = new google.maps.Map(mapElement, mapOptions);
    //         var marker = new google.maps.Marker({
    //             position: new google.maps.LatLng(44.107385, -79.592197),
    //             map: map,
    //             title: 'Snazzy!'
    //         });
    //     }
    // }

    
})(jQuery);

$(document).on('click', '[data-toggle="lightbox"]', function(event) {
  event.preventDefault();
  $(this).ekkoLightbox();
});


var showTabcontent = function(idname) {
  var screenWidth = window.innerWidth;
  var classes = document.querySelector(idname).className;
  if(screenWidth < 576) {
    // Show all items when screen is smaller than 483px
    
    if( classes.indexOf("active") == -1) {
      classes += " show active";
      document.querySelector(idname).className = classes;
    }
  } else {
    if(classes.indexOf("active")) {
      
      classes = classes.replace(" show active","");
      document.querySelector(idname).className = classes;
    }
  }
}

var findLinkActive = function() {
  var classes = document.querySelector("a.active").href;
  return classes;
};

// Bind to the resize event of the window object
$(window).on("resize", function () {
  var idList = ["#pills-natural-nails","#pills-artificial-nails","#pills-regular-color","#pills-easy-combo","#pills-shellac-color"
  ,"#pills-add-on","#pills-waxing","#pills-eyelash-extensions","#pills-tinting"];
  var idActive = "#"+findLinkActive();
  console.log(idActive);
  for( var i = 0; i < idList.length;i++){
    if(idActive.indexOf(idList[i]) == -1){
      showTabcontent(idList[i]);
    }
      
  }
  
}).resize();


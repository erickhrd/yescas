/*!
    * Start Bootstrap - Creative v6.0.0 (https://startbootstrap.com/themes/creative)
    * Copyright 2013-2020 Start Bootstrap
    * Licensed under MIT (https://github.com/BlackrockDigital/startbootstrap-creative/blob/master/LICENSE)
    */
    (function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 72)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 75
  });

  // Collapse Navbar
  var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-scrolled");
    } else {
      $("#mainNav").removeClass("navbar-scrolled");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

  // Magnific popup calls
  $('.portfolio2').magnificPopup({
    delegate: 'a',
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    mainClass: 'mfp-img-mobile',
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0, 1]
    },
    image: {
      tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
    }
  });

  $('#portfolio').magnificPopup({
    delegate: 'a',
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    mainClass: 'mfp-img-mobile',
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0, 1]
    },
    image: {
      tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
    }
  });


  //Change of logo when scrolled
  $(function(){
    $(window).scroll(function(){
        if($(window).width() >= 1024){
        if($(this).scrollTop()>100){
            $(".navbar .navbar-brand img").attr("src","assets/img/yescaspics/yescaslogo.png");
        }

        else{
            $(".navbar .navbar-brand img").attr("src","assets/img/yescaspics/yescaslogo2.png");
        }
    }
    });
    
    $(document).ready(function(){
      $(window).resize(function(){location.reload();
      }); //end of reload
      if($(window).width() <= 1023){
            $(".navbar .navbar-brand img").attr("src","assets/img/yescaspics/yescaslogo.png");
          }
        });

        // Shuffle js filter and masonry
  var containerEl = document.querySelector('.shuffle-wrapper');
  if (containerEl) {
    var Shuffle = window.Shuffle;
    var myShuffle = new Shuffle(document.querySelector('.shuffle-wrapper'), {
      itemSelector: '.shuffle-item',
      buffer: 1
    });

    jQuery('input[name="shuffle-filter"]').on('change', function (evt) {
      var input = evt.currentTarget;
      if (input.checked) {
        myShuffle.filter(input.value);
      }
    });
  }
  
      });

      $('#item2').click(function(){
            $(".item2").removeClass("item2").addClass("item2-more");        
       }); 
       
       $('#item3').click(function(){
        $(".item3").removeClass("item3").addClass("item3-more");        
   });  

   $('#item4').click(function(){
    $(".item4").removeClass("item4").addClass("item4-more");        
    });  

    $('#item5').click(function(){
      $(".item5").removeClass("item5").addClass("item5-more");        
    });  

    $('#item6').click(function(){
      $(".item6").removeClass("item6").addClass("item6-more");        
    });  

    $('#item7').click(function(){
      $(".item7").removeClass("item7").addClass("item7-more");        
    });  

    $('#item8').click(function(){
      $(".item8").removeClass("item8").addClass("item8-more");        
    }); 

})(jQuery); // End of use strict

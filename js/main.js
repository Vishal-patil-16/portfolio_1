 AOS.init({
 	duration: 800,
 	easing: 'slide'
 });

(function($) {

	"use strict";

	$(window).stellar({
    responsive: true,
    parallaxBackgrounds: true,
    parallaxElements: true,
    horizontalScrolling: false,
    hideDistantElements: false,
    scrollProperty: 'scroll'
  });


	var fullHeight = function() {

		$('.js-fullheight').css('height', $(window).height());
		$(window).resize(function(){
			$('.js-fullheight').css('height', $(window).height());
		});

	};
	fullHeight();

	// loader
	var loader = function() {
		setTimeout(function() { 
			if($('#ftco-loader').length > 0) {
				$('#ftco-loader').removeClass('show');
			}
		}, 1);
	};
	loader();

	// Scrollax
   $.Scrollax();



   // Burger Menu
	var burgerMenu = function() {

		$('body').on('click', '.js-fh5co-nav-toggle', function(event){

			event.preventDefault();

			if ( $('#ftco-nav').is(':visible') ) {
				$(this).removeClass('active');
			} else {
				$(this).addClass('active');	
			}

			
			
		});

	};
	burgerMenu();


	var onePageClick = function() {


		$(document).on('click', '#ftco-nav a[href^="#"]', function (event) {
	    event.preventDefault();

	    var href = $.attr(this, 'href');

	    $('html, body').animate({
	        scrollTop: $($.attr(this, 'href')).offset().top - 70
	    }, 500, function() {
	    	// window.location.hash = href;
	    });
		});

	};

	onePageClick();
	

	var carousel = function() {
		$('.home-slider').owlCarousel({
	    loop:true,
	    autoplay: true,
	    margin:0,
	    animateOut: 'fadeOut',
	    animateIn: 'fadeIn',
	    nav:false,
	    autoplayHoverPause: false,
	    items: 1,
	    navText : ["<span class='ion-md-arrow-back'></span>","<span class='ion-chevron-right'></span>"],
	    responsive:{
	      0:{
	        items:1
	      },
	      600:{
	        items:1
	      },
	      1000:{
	        items:1
	      }
	    }
		});
	};
	carousel();

	$('nav .dropdown').hover(function(){
		var $this = $(this);
		// 	 timer;
		// clearTimeout(timer);
		$this.addClass('show');
		$this.find('> a').attr('aria-expanded', true);
		// $this.find('.dropdown-menu').addClass('animated-fast fadeInUp show');
		$this.find('.dropdown-menu').addClass('show');
	}, function(){
		var $this = $(this);
			// timer;
		// timer = setTimeout(function(){
			$this.removeClass('show');
			$this.find('> a').attr('aria-expanded', false);
			// $this.find('.dropdown-menu').removeClass('animated-fast fadeInUp show');
			$this.find('.dropdown-menu').removeClass('show');
		// }, 100);
	});


	$('#dropdown04').on('show.bs.dropdown', function () {
	  console.log('show');
	});

	// scroll
	var scrollWindow = function() {
		$(window).scroll(function(){
			var $w = $(this),
					st = $w.scrollTop(),
					navbar = $('.ftco_navbar'),
					sd = $('.js-scroll-wrap');

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
				
				if(sd.length > 0) {
					sd.addClass('sleep');
				}
			}
			if ( st < 350 ) {
				if ( navbar.hasClass('awake') ) {
					navbar.removeClass('awake');
					navbar.addClass('sleep');
				}
				if(sd.length > 0) {
					sd.removeClass('sleep');
				}
			}
		});
	};
	scrollWindow();

	

	var counter = function() {
		
		$('#section-counter, .hero-wrap, .ftco-counter, .ftco-about').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('ftco-animated') ) {

				var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',')
				$('.number').each(function(){
					var $this = $(this),
						num = $this.data('number');
						console.log(num);
					$this.animateNumber(
					  {
					    number: num,
					    numberStep: comma_separator_number_step
					  }, 7000
					);
				});
				
			}

		} , { offset: '95%' } );

	}
	counter();


	var contentWayPoint = function() {
		var i = 0;
		$('.ftco-animate').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('ftco-animated') ) {
				
				i++;

				$(this.element).addClass('item-animate');
				setTimeout(function(){

					$('body .ftco-animate.item-animate').each(function(k){
						var el = $(this);
						setTimeout( function () {
							var effect = el.data('animate-effect');
							if ( effect === 'fadeIn') {
								el.addClass('fadeIn ftco-animated');
							} else if ( effect === 'fadeInLeft') {
								el.addClass('fadeInLeft ftco-animated');
							} else if ( effect === 'fadeInRight') {
								el.addClass('fadeInRight ftco-animated');
							} else {
								el.addClass('fadeInUp ftco-animated');
							}
							el.removeClass('item-animate');
						},  k * 50, 'easeInOutExpo' );
					});
					
				}, 100);
				
			}

		} , { offset: '95%' } );
	};
	contentWayPoint();

	// magnific popup
	$('.image-popup').magnificPopup({
    type: 'image',
    closeOnContentClick: true,
    closeBtnInside: false,
    fixedContentPos: true,
    mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
     gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0,1] // Will preload 0 - before current, and 1 after the current image
    },
    image: {
      verticalFit: true
    },
    zoom: {
      enabled: true,
      duration: 300 // don't foget to change the duration also in CSS
    }
  });

  $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
    disableOn: 700,
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,

    fixedContentPos: false
  });

  document.addEventListener('DOMContentLoaded', function () {
	const stars = document.querySelectorAll('.rating .fa-star');
	
	stars.forEach(star => {
	  star.addEventListener('mouseover', function () {
		highlightStars(star.dataset.rating);
	  });

	  star.addEventListener('mouseout', function () {
		resetStars();
	  });

	  star.addEventListener('click', function () {
		selectStars(star.dataset.rating);
	  });
	});

	function highlightStars(rating) {
	  stars.forEach(star => {
		if (star.dataset.rating <= rating) {
		  star.style.color = '#ffcc00';
		  star.style.textShadow = '0 0 20px #ffcc00';
		  star.style.transform = 'translateY(-10px)';
		} else {
		  star.style.color = '#ccc';
		  star.style.textShadow = 'none';
		  star.style.transform = 'none';
		}
	  });
	}

	function resetStars() {
	  stars.forEach(star => {
		if (!star.classList.contains('selected')) {
		  star.style.color = '#ccc';
		  star.style.textShadow = 'none';
		  star.style.transform = 'none';
		}
	  });
	}

	function selectStars(rating) {
	  stars.forEach(star => {
		if (star.dataset.rating <= rating) {
		  star.classList.add('selected');
		  star.style.color = '#ffcc00';
		  star.style.textShadow = '0 0 20px #ffcc00';
		  star.style.transform = 'translateY(-10px)';
		} else {
		  star.classList.remove('selected');
		  star.style.color = '#ccc';
		  star.style.textShadow = 'none';
		  star.style.transform = 'none';
		}
	  });
	}
  });

   // Function to set the rating when a star is clicked
   function setRating(rating) {
	var stars = document.querySelectorAll('.rating .fa-star');
	
	// Remove 'checked' class from all stars
	stars.forEach(function(star) {
		star.classList.remove('checked');
		star.style.color = '#ccc'; // Reset color
	});
	
	// Add 'checked' class to the clicked star and stars before it
	for (var i = 0; i < rating; i++) {
		stars[i].classList.add('checked');
		stars[i].style.color = '#ff8d02'; // Change color for selected stars
	}
}

// Function to submit the rating
function submitRating() {
	var stars = document.querySelectorAll('.rating .fa-star');

	// Find the selected rating
	var selectedRating = 0;
	for (var i = 0; i < stars.length; i++) {
		if (stars[i].classList.contains('checked')) {
			selectedRating = stars[i].getAttribute('data-rating');
			break;
		}
	}

	// If no rating is selected, show an error message
	if (selectedRating === 0) {
		document.getElementById('result').innerHTML = 'Please select a rating!';
		return;
	}

	// Perform your submit logic here (e.g., AJAX request)
	// For demonstration, we'll just show the selected rating
	document.getElementById('result').innerHTML = 'Rating submitted: ' + selectedRating;

	// Reset stars (optional)
	stars.forEach(function(star) {
		star.classList.remove('checked');
		star.style.color = '#ccc';
	});
}

document.querySelectorAll('.resume-wrap').forEach(item => {
	item.addEventListener('mouseover', () => {
		item.style.boxShadow = '0 4px 20px rgba(0, 123, 255, 0.6)';
	});
	item.addEventListener('mouseout', () => {
		item.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.1)';
	});
});


})(jQuery);


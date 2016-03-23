/*
 * Metheor Multi-Purpose App Showcase Template v1.0
 * Copyright 2015 rokathemes
 * Theme Custom Scripts
 */

jQuery(document).ready(function($) {
	'use strict';

	// Disable default link behavior for dummy links that have href='#'
	var $emptyLink = $('a[href=#]');
	$emptyLink.on('click', function(e){
		e.preventDefault();
	});

	// Animated Scroll to Top Button
	var $scrollTop = $('.scroll-to-top-btn');
	if ($scrollTop.length > 0) {
		$(window).on('scroll', function(){
	    if ($(window).scrollTop() > 600) {
	      $scrollTop.addClass('visible');
	    } else {
	      $scrollTop.removeClass('visible');
	    }
		});
		$scrollTop.on('click', function(e){
			e.preventDefault();
			$('html').velocity("scroll", { offset: 0, duration: 1000, easing:'easeOutExpo', mobileHA: false });
		});
	};

	// Smooth scroll to element
	var $scrollTo = $('.scroll-to');
	$scrollTo.on('click', function(event){
		var $elemOffsetTop = $(this).data('offset-top');
		$('html').velocity("scroll", { offset:$(this.hash).offset().top-$elemOffsetTop, duration: 1000, easing:'easeOutExpo', mobileHA: false});
		event.preventDefault();
	});
	

	// On window load functions
	$( window ).on( 'load', function () {

		/** Background Parallax **/
		// For all IE versions
    var ua = window.navigator.userAgent;
    var msie = ua.indexOf('MSIE ');
    var trident = ua.indexOf('Trident/');
    var edge = ua.indexOf('Edge/');
    if (msie > 0 || trident > 0 || edge > 0) {
			if ( $( "body.parallax" ).length > 0 ) {
				$( "body.parallax" ).stellar( {
					scrollProperty: 'scroll',
					verticalOffset: 0,
					horizontalOffset: 0,
					horizontalScrolling: false,
					responsive: true
				} );
			}
    }

    // For other browsers
    else {
			if ( ! Modernizr.touch ) {
				if ( $( "body.parallax" ).length > 0 ) {
					$( "body.parallax" ).stellar( {
						scrollProperty: 'scroll',
						verticalOffset: 50,
						horizontalOffset: 0,
						horizontalScrolling: false,
						responsive: true
					} );
				}
			}
    }

    // Layer Parallax Effect
    // Phone Screens Parallax / Tablet Parallax
    var $layerParallax = $('.layer-parallax');
		if ( ! Modernizr.touch ) {
			if ( $layerParallax.length > 0 ) {
		    $layerParallax.parallax();
			}
		}

		// Custom scrollbar for Device Gallery thumbs
		var $gallThumbs = $('.device-gallery-thumbs');
		if($gallThumbs.length > 0 ) {
	    $gallThumbs.mCustomScrollbar({
				axis:"x",
				theme:"dark",
				scrollInertia: 300,
				advanced:{autoExpandHorizontalScroll:true}
	    });
	  }
	});

	// Submenu Dropdown
	var $dropdown = $('.menu-item-has-children');
	$dropdown.on('mouseover', function(){
		$(this).addClass('active');
	});
	$dropdown.on('mouseout', function(){
		$(this).removeClass('active');
	});

	// Mobile Submenu
	var $hasSubmenu = $('.menu-item-has-children > a', '.main-navigation');
	$hasSubmenu.on('click', function(){
		$(this).parent().toggleClass('open').find('.sub-menu').toggleClass('expanded');
	});

	// Toggle Mobile Navigation
	var $navToggle = $('.nav-toggle', '.navbar');
	$navToggle.on('click', function(){
		$(this).toggleClass('active').parents('.navbar').find('.mobile-dropdown').toggleClass('expanded');
	});

	// Search form expand (Navbar)
	var $searchToggle = $('.search-btn > i');
	$searchToggle.on('click', function(){
		$(this).parent().find('.search-box').addClass('open');
	});
	$('.search-btn').on('click', function(e) {
    e.stopPropagation();
	});
	$(document).on('click', function(e) {
		$('.search-box').removeClass('open');
	});

	// Sharing expand (Navbar)
	var $shareToggleI = $('.share-btn > i'),
			$shareToggle = $('.share-btn, .navbar');
	$shareToggleI.on('click', function(){
		$(this).parent().toggleClass('active').find('.dropdown').toggleClass('expanded');
	});
	$shareToggle.on('click', function(e) {
    e.stopPropagation();
	});
	$(document).on('click', function(e) {
		$shareToggle.removeClass('active').find('.dropdown').removeClass('expanded');
	});

	// Post sharing
	var $postShareBtn = $('.post-share-btn > a'),
	    $postShareToggle = $('.post-share-btn > a > i');
	$postShareToggle.on('click', function(){
		$(this).parents('.post-share-btn').toggleClass('active');
	});
	$postShareBtn.on('click', function(e) {
    e.stopPropagation();
	});
	$(document).on('click', function(e) {
		$postShareBtn.parent().removeClass('active');
	});

	// Tabs Prev/Next Controls
	var $bulletTabs = $('.custom-controls .bullets li');
	$('.custom-controls .prev-btn').on('click', function () {
	    $bulletTabs.filter('.active').prev('li').find('a[data-toggle="tab"]').tab('show');
	});

	$('.custom-controls .next-btn').on('click', function () {
	    $bulletTabs.filter('.active').next('li').find('a[data-toggle="tab"]').tab('show');
	});

	// Tooltips
	var $tooltip = $('[data-toggle="tooltip"]');
	if ( $tooltip.length > 0 ) {
		$tooltip.tooltip();
	}

	// Custom checkboxes and radios
	var $checkbox = $('input[type="checkbox"], input[type="radio"]');
	if($checkbox.length) {
		$('input').iCheck();
	}

	// Blog Filters Dropdown
	var $filterToggleLink = $('.blog-filters .nav-filters li a'),
			$filterToggle = $('.blog-filters .nav-filters li');
	$filterToggleLink.on('click', function(){
		$filterToggleLink.parent().removeClass('active').find('.dropdown').removeClass('expanded');
		$(this).parent().addClass('active').find('.dropdown').addClass('expanded');
	});
	$filterToggle.on('click', function(e) {
    e.stopPropagation();
	});
	$(document).on('click', function(e) {
		$filterToggle.removeClass('active').find('.dropdown').removeClass('expanded');
	});
	$shareToggle.on('click', function(e) {
    $filterToggleLink.parent().removeClass('active').find('.dropdown').removeClass('expanded');
	});
	$filterToggleLink.on('click', function(e) {
    $shareToggle.removeClass('active').find('.dropdown').removeClass('expanded');
	});
	

	// Phone Carousel
	var $phoneCarousel = $( '.phone-carousel .inner' );
	if ( $phoneCarousel.length > 0 ) {
		$phoneCarousel.each( function () {

			var dataLoop 	 = $( this ).parents( '.phone-carousel' ).data( 'loop' ),
					autoPlay   = $( this ).parents( '.phone-carousel' ).data( 'autoplay' ),
					timeOut    = $( this ).parents( '.phone-carousel' ).data( 'interval' );

			$( this ).owlCarousel( {
				items: 1,
				loop: dataLoop,
				margin: 1,
				nav: false,
				dots: true,
				navText: [ , ],
				autoplay: autoPlay,
				autoplayTimeout: timeOut
			} );
		} );
	}

	// Image Carousel
	var $imageCarousel = $( '.image-carousel .inner' );
	if ( $imageCarousel.length > 0 ) {
		$imageCarousel.each( function () {

			var dataLoop 	 = $( this ).parent().data( 'loop' ),
					autoPlay   = $( this ).parent().data( 'autoplay' ),
					timeOut    = $( this ).parent().data( 'interval' ),
					autoheight = $( this ).parent().data( 'autoheight' ),
					dataDots 	 = $( this ).parent().data( 'dots' );

			$( this ).owlCarousel( {
				items: 1,
				loop: dataLoop,
				margin: 0,
				nav: true,
				dots: dataDots,
				navText: [ , ],
				autoplay: autoPlay,
				autoplayTimeout: timeOut,
				autoHeight: autoheight
			} );
		} );
	}

	// Testimonials Carousel
	var $testimonCarousel = $( '.testimonials-carousel .inner' );
	if ( $testimonCarousel.length > 0 ) {
		$testimonCarousel.each( function () {

			var dataLoop 	 = $( this ).parent().data( 'loop' ),
					autoPlay   = $( this ).parent().data( 'autoplay' ),
					timeOut    = $( this ).parent().data( 'interval' );

			$( this ).owlCarousel( {
				items: 1,
				loop: dataLoop,
				margin: 15,
				nav: true,
				dots: true,
				navText: [ , ],
				autoplay: autoPlay,
				autoplayTimeout: timeOut,
				autoHeight: true
			} );
		} );
	}

	// Gallery Popup
	var $gallItem = $( '.gallery-image' );
	if( $gallItem.length > 0 ) {
		$gallItem.magnificPopup( { 
		  type: 'image',
		  mainClass: 'mfp-fade',
		  gallery: {
		    enabled: true
		  },
		  removalDelay: 500,
		  image: {
		  	titleSrc: 'data-title'
		  }
		} );
	}

	// Video Popup
	var $videoBtn = $( '.video-popup-btn, .gallery-video, .video-popup-placeholder .play-btn' );
	if( $videoBtn.length > 0 ) {
		$videoBtn.magnificPopup( { 
		  type: 'iframe',
		  mainClass: 'mfp-fade',
		  removalDelay: 500,
		  gallery: {
		    enabled: true
		  }
		} );
	}

	// On window load functions
	$(window).on('load', function(){

		// Isotope Grid
		var $grid = $('.isotope-masonry-grid, .isotope-grid');
		if($grid.length > 0) {
		  $grid.isotope({
			  itemSelector: '.grid-item',
			  transitionDuration: '0.7s',
			  masonry: {
			    columnWidth: '.grid-sizer',
			    gutter: '.gutter-sizer'
			  }
		  });
		}

		// Filtering
		if($('.filter-grid').length > 0) {
		  var $filterGrid = $('.filter-grid');
			$('.nav-filters').on( 'click', 'a', function(e) {
				e.preventDefault();
				$('.nav-filters li').removeClass('active');
				$(this).parent().addClass('active');
			  var $filterValue = $(this).attr('data-filter');
			  $filterGrid.isotope({ filter: $filterValue });
			});
		}

	});

	// Google Maps API
	var $googleMap = $('.google-map');
	if($googleMap.length > 0) {
		$googleMap.each(function(){
			var mapHeight = $(this).data('height'),
					address = $(this).data('address'),
					zoom = $(this).data('zoom'),
					controls = $(this).data('disable-controls'),
					scrollwheel = $(this).data('scrollwheel'),
					marker = $(this).data('marker'),
					markerTitle = $(this).data('marker-title'),
					styles = $(this).data('styles');
			$(this).height(mapHeight);
			$(this).gmap3({
          marker:{
            address: address,
            data: markerTitle,
            options: {
            	icon: marker
            },
            events: {
              mouseover: function(marker, event, context){
                var map = $(this).gmap3("get"),
                  	infowindow = $(this).gmap3({get:{name:"infowindow"}});
                if (infowindow){
                  infowindow.open(map, marker);
                  infowindow.setContent(context.data);
                } else {
                  $(this).gmap3({
                    infowindow:{
                      anchor:marker, 
                      options:{content: context.data}
                    }
                  });
                }
              },
              mouseout: function(){
                var infowindow = $(this).gmap3({get:{name:"infowindow"}});
                if (infowindow){
                  infowindow.close();
                }
              }
            }
          },
          map:{
            options:{
              zoom: zoom,
              disableDefaultUI: controls,
              scrollwheel: scrollwheel,
              styles: styles
            }
          }
			});
		});
	}

});/*Document Ready End*/

/*Back Function: Manipulating the browser history
*************************************************/
function goBack() {
	window.history.back()
}
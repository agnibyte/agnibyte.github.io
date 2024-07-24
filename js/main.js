$(function ($) {
    "use strict";

 //venobox js
 $('.venobox').venobox();
    //nav collapse
    $('.nav-link').on('click', function () {
        $('.navbar-collapse').collapse('hide');
    });

    /* Offset start */
    var html_body = $('html, body'),
        nav = $('nav'),
        navOffset = nav.offset().top,
        $window = $(window);
    /* offset ends */

    $('nav a, #slider a').on('click', function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                html_body.animate({
                    scrollTop: target.offset().top - 30
                }, 1500);
                return false;
            }
        }
    });
    //scrollspy menu
    $('body').scrollspy({
        target: '#navbarSupportedContent',
        offset: 80
    });

    $(document).ready(function () {
        var scrollToggleBtn = $('.scroll-toggle-btn');
        var lastScrollTop = 0; // To keep track of the last scroll position
        var amountScrolled = 300; // Scroll amount to show the button
    
        // Handle scroll event
        $(window).on('scroll', function () {
            var currentScrollTop = $(this).scrollTop();
    
            // Show or hide the button based on scroll position
            if (currentScrollTop > amountScrolled) {
                scrollToggleBtn.fadeIn('slow');
            } else {
                scrollToggleBtn.fadeOut('slow');
            }
    
            // Change button functionality based on scroll direction
            if (currentScrollTop > lastScrollTop) {
                // Scrolling down
                scrollToggleBtn.find('i').removeClass('fa-chevron-up').addClass('fa-chevron-down');
            } else {
                // Scrolling up
                scrollToggleBtn.find('i').removeClass('fa-chevron-down').addClass('fa-chevron-up');
            }
    
            // Update last scroll position
            lastScrollTop = currentScrollTop;
        });
    
        // Handle button click
        scrollToggleBtn.on('click', function () {
            var currentScrollTop = $(window).scrollTop();
    
            if (scrollToggleBtn.find('i').hasClass('fa-chevron-down')) {
                // Scroll down
                $('html, body').animate({ scrollTop: $(document).height() }, 600);
            } else {
                // Scroll up
                $('html, body').animate({ scrollTop: 0 }, 600);
            }
    
            return false; // Prevent default link behavior
        });
    });
    
    // patner slider
    $('.patner_slider').owlCarousel({
        loop: true,
        margin: 13,
        navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"],
        dots: false,
        autoplay: true,
        smartSpeed: 600,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 2,
                nav: false
            },
            600: {
                items: 3,
                nav: false
            },
            1000: {
                items: 5,
                nav: false
            },
            1600: {
                items: 5,
                nav: false
            }
        }
    })
    // portfolio slick



    $('.portfolio-list').mixItUp();

    // test slider all devices
    $('.test-slide').slick({
        infinite: true,
        autoplay: true,
        arrows: true,
        dots: false,
        autoplaySpeed: 2000,
        speed: 1000
    });

    //team_slider js
    $('.team_slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false,
        dot: true,
        speed: 1000,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });
    // counter js

    $('.count').counterUp({
        delay: 10,
        time: 2000
    });



    // Testimonial js
    $('.post-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        arrows: false,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });

    
    //testimonial
    	// :: 2.0 Slick Active Code
	$('.slider-for').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		speed: 500,
		arrows: true,
		fade: true,
		asNavFor: '.slider-nav',
		prevArrow: '<span><i class="fa fa-angle-left"></i></span>',
		nextArrow: '<span><i class="fa fa-angle-right"></i></span>'
	});

	$('.slider-nav').slick({
		slidesToShow: 5,
		slidesToScroll: 1,
		speed: 500,
		asNavFor: '.slider-for',
		dots: false,
		centerMode: true,
		focusOnSelect: true,
		slide: 'div',
		autoplay: true,
		centerMode: true,
		arrows: false,
		centerPadding: '10px',
        mobileFirst: true,
        responsive: [
            {
              breakpoint: 1324,
              settings: {
                slidesToShow: 5,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 300,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1
              }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // inst
        ]
	});



});
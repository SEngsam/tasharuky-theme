(function ($) {
    "use strict";
	
	var $window = $(window); 
	var $body = $('body'); 

	/* Preloader Effect */
	$window.on('load', function(){
		$(".preloader").fadeOut(600);
	});

	/* Sticky Header */	
	if($('.active-sticky-header').length){
		$window.on('resize', function(){
			setHeaderHeight();
		});

		function setHeaderHeight(){
	 		$("header.active-sticky-header").css("height", $('header.active-sticky-header .header-sticky').outerHeight());
		}	
	
		$window.on("scroll", function() {
			var fromTop = $(window).scrollTop();
			setHeaderHeight();
			var headerHeight = $('header.active-sticky-header .header-sticky').outerHeight()
			$("header.active-sticky-header .header-sticky").toggleClass("hide", (fromTop > headerHeight + 100));
			$("header.active-sticky-header .header-sticky").toggleClass("active", (fromTop > 600));
		});
	}	
	
	/* Slick Menu JS */
	$('#menu').slicknav({
		label : '',
		prependTo : '.responsive-menu'
	});

	function resetMobileDrawerState(){
		const $responsiveMenu = $('.responsive-menu');

		$responsiveMenu.scrollTop(0);
		$responsiveMenu.find('.slicknav_open > .slicknav_item').each(function(){
			$(this).trigger('click');
		});
	}

	function closeMobileDrawer(){
		if($('.slicknav_btn').hasClass('slicknav_open')){
			$('.slicknav_btn').trigger('click');
		}
		$body.removeClass('mobile-menu-open');
		setTimeout(resetMobileDrawerState, 260);
	}

	$(document).on("click", ".slicknav_btn", function() {
		setTimeout(function(){
			const isOpen = $('.slicknav_btn').hasClass('slicknav_open');
			$body.toggleClass('mobile-menu-open', isOpen);

			if(isOpen){
				resetMobileDrawerState();
			}
		}, 0);
	});

	$(document).on("click", ".responsive-menu a", function() {
		const $link = $(this);
		if($link.hasClass('slicknav_item') || $link.attr('href') === '#'){
			return;
		}

		closeMobileDrawer();
	});

	$(document).on("click", function(e) {
		if(!$body.hasClass('mobile-menu-open')) return;

		if(!$(e.target).closest(".responsive-menu, .navbar-toggle").length){
			closeMobileDrawer();
		}
	});

	$(document).on("keyup", function(e) {
		if(e.key === "Escape"){
			closeMobileDrawer();
		}
	});

	$window.on("resize", function() {
		if(window.innerWidth > 991){
			closeMobileDrawer();
		}
	});

	/* Header Search Toggle */
	$(document).on("click", ".search-toggle", function(e) {
		e.preventDefault();
		e.stopPropagation();
		var $search = $(this).closest(".header-search");
		$(".header-search").not($search).removeClass("active");
		$search.toggleClass("active");

		if($search.hasClass("active")){
			$search.find("input[type='search']").trigger("focus");
		}
	});

	$(document).on("click", ".header-search", function(e) {
		e.stopPropagation();
	});

	$(document).on("click keyup", function(e) {
		if(e.type === "click" || e.key === "Escape"){
			$(".header-search").removeClass("active");
		}
	});

	if($("a[href='#top']").length){
		$(document).on("click", "a[href='#top']", function() {
			$("html, body").animate({ scrollTop: 0 }, "slow");
			return false;
		});
	}

	/* Programs Slider JS */
	if ($('.programs-slider').length) {
		$('.programs-slider').each(function(){
			const $slider = $(this);

			const programs_slider = new Swiper($slider.find('.swiper')[0], {
				slidesPerView : 1,
				speed: 2000,
				spaceBetween: 30,
				loop: true,
				autoplay: {
					delay: 5000,
				},
				pagination: {
					el: $slider.find('.programs-pagination')[0],
					clickable: true,
				},
				breakpoints: {
					768:{
						slidesPerView: 2,
					},
					1025:{
						slidesPerView: 3,
					}
				}
			});
		});
	}

	/* Testimonial Slider JS */
	if ($('.testimonial-slider').length) {
		const testimonial_slider = new Swiper('.testimonial-slider .swiper', {
			slidesPerView : 1,
			speed: 1500,
			spaceBetween: 50,
			loop: true,
			autoplay: {
				delay: 5000,
			},
			navigation: {
				nextEl: '.testimonial-button-next',
				prevEl: '.testimonial-button-prev',
			},
			breakpoints: {
				768:{
					slidesPerView: 1,
				},
			}
		});
	}

	/* Volunteer Slider JS */
	if ($('.volunteer-slider').length) {
		const volunteer_slider = new Swiper('.volunteer-slider .swiper', {
			slidesPerView : 1,
			speed: 1500,
			spaceBetween: 30,
			loop: true,
			autoplay: {
				delay: 5000,
			},
			pagination: {
				el: '.volunteer-pagination',
				clickable: true,
			},
			breakpoints: {
				768:{
					slidesPerView: 2,
				},
				1025:{
					slidesPerView: 3,
				}
			}
		});
	}

	/* Testimonial Slider JS */
	if ($('.testimonial-slider-gold').length) {
		const testimonial_slider_gold = new Swiper('.testimonial-slider-gold .swiper', {
			slidesPerView : 1,
			speed: 1500,
			spaceBetween: 30,
			loop: true,
			autoplay: {
				delay: 5000,
			},			
			pagination: {
				el: '.testimonial-pagination-gold',
				clickable: true,
			},
			breakpoints: {
				768:{
					slidesPerView: 1,
				},
			}
			
		});
	}

	/* Testimonial Slider JS */
	if ($('.testimonial-slider-silver').length) {
		const testimonial_slider_silver = new Swiper('.testimonial-slider-silver .swiper', {
			slidesPerView : 1,
			speed: 1500,
			spaceBetween: 30,
			loop: true,
			autoplay: {
				delay: 5000,
			},
			navigation: {
				nextEl: '.testimonial-button-next-silver',
				prevEl: '.testimonial-button-prev-silver',
			},
			breakpoints: {
				768:{
					slidesPerView: 1,
				},
			}
		});
	}
	
	/* Skill Bar */
	if ($('.skills-progress-bar').length) {
		$('.skills-progress-bar').waypoint(function() {
			$('.skillbar').each(function() {
				$(this).find('.count-bar').animate({
				width:$(this).attr('data-percent')
				},2000);
			});
		},{
			offset: '70%'
		});
	}

	/* Youtube Background Video JS */
	if ($('#herovideo').length) {
		var myPlayer = $("#herovideo").YTPlayer();
	}

	/* Init Counter */
	if ($('.counter').length) {
		$('.counter').counterUp({ delay: 6, time: 3000 });
	}

	/* Image Reveal Animation */
	if ($('.reveal').length) {
        gsap.registerPlugin(ScrollTrigger);
        let revealContainers = document.querySelectorAll(".reveal");
        revealContainers.forEach((container) => {
            let image = container.querySelector("img");
            let tl = gsap.timeline({
                scrollTrigger: {
                    trigger: container,
                    toggleActions: "play none none none"
                }
            });
            tl.set(container, {
                autoAlpha: 1
            });
            tl.from(container, 1, {
                xPercent: -100,
                ease: Power2.out
            });
            tl.from(image, 1, {
                xPercent: 100,
                scale: 1,
                delay: -1,
                ease: Power2.out
            });
        });
    }

	/* Text Effect Animation */
	function initHeadingAnimation() {
		
		if($('.text-effect').length) {
			var textheading = $(".text-effect");

			if(textheading.length === 0) return; gsap.registerPlugin(SplitText); textheading.each(function(index, el) {
				
				el.split = new SplitText(el, { 
					type: "lines,words,chars",
					linesClass: "split-line"
				});
				
				if( $(el).hasClass('text-effect') ){
					gsap.set(el.split.chars, {
						opacity: .3,
						x: "-7",
					});
				}
				el.anim = gsap.to(el.split.chars, {
					scrollTrigger: {
						trigger: el,
						start: "top 92%",
						end: "top 60%",
						markers: false,
						scrub: 1,
					},

					x: "0",
					y: "0",
					opacity: 1,
					duration: .7,
					stagger: 0.2,
				});
				
			});
		}
		
		if ($('.text-anime-style-1').length) {
			let staggerAmount 	= 0.05,
				translateXValue = 0,
				delayValue 		= 0.5,
			   animatedTextElements = document.querySelectorAll('.text-anime-style-1');
			
			animatedTextElements.forEach((element) => {
				let animationSplitText = new SplitText(element, { type: "chars, words" });
					gsap.from(animationSplitText.words, {
					duration: 1,
					delay: delayValue,
					x: 20,
					autoAlpha: 0,
					stagger: staggerAmount,
					scrollTrigger: { trigger: element, start: "top 85%" },
					});
			});		
		}
		
		if ($('.text-anime-style-2').length) {				
			let	 staggerAmount 		= 0.03,
				 translateXValue	= 20,
				 delayValue 		= 0.1,
				 easeType 			= "power2.out",
				 animatedTextElements = document.querySelectorAll('.text-anime-style-2');
			
			animatedTextElements.forEach((element) => {
				let animationSplitText = new SplitText(element, { type: "chars, words" });
					gsap.from(animationSplitText.chars, {
						duration: 1,
						delay: delayValue,
						x: translateXValue,
						autoAlpha: 0,
						stagger: staggerAmount,
						ease: easeType,
						scrollTrigger: { trigger: element, start: "top 85%"},
					});
			});		
		}
		
		if ($('.text-anime-style-3').length) {		
			let	animatedTextElements = document.querySelectorAll('.text-anime-style-3');
			
			 animatedTextElements.forEach((element) => {
				const textContent = element.textContent || "";
				const isArabicText = /[\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF]/.test(textContent);
				const splitType = isArabicText ? "lines,words" : "lines,words,chars";

				//Reset if needed
				if (element.animation) {
					element.animation.progress(1).kill();
					element.split.revert();
				}

				element.split = new SplitText(element, {
					type: splitType,
					linesClass: "split-line",
				});
				gsap.set(element, { perspective: 400 });

				const animationTargets = isArabicText ? element.split.lines : element.split.chars;

				gsap.set(animationTargets, {
					opacity: 0,
					x: "50",
				});

				element.animation = gsap.to(animationTargets, {
					scrollTrigger: { trigger: element,	start: "top 90%" },
					x: "0",
					y: "0",
					rotateX: "0",
					opacity: 1,
					duration: 1,
					ease: Back.easeOut,
					stagger: isArabicText ? 0.08 : 0.02,
				});
			});		
		}
	}
	
	if (document.fonts && document.fonts.ready) {
        document.fonts.ready.then(() => {
            initHeadingAnimation();
        });
    } else {
        window.addEventListener("load", initHeadingAnimation);
    }

	/* Parallaxie js */
	/* var $parallaxie = $('.parallaxie');
	if($parallaxie.length && ($window.width() > 1024))
	{
		if ($window.width() > 768) {
			$parallaxie.parallaxie({
				speed: 0.55,
				offset: 0,
			});
		}
	} */

	/* Zoom Gallery screenshot */
	$('.gallery-items').magnificPopup({
		delegate: 'a',
		type: 'image',
		closeOnContentClick: false,
		closeBtnInside: false,
		mainClass: 'mfp-with-zoom',
		image: {
			verticalFit: true,
		},
		gallery: {
			enabled: true
		},
		zoom: {
			enabled: true,
			duration: 300, // don't foget to change the duration also in CSS
			opener: function(element) {
			  return element.find('img');
			}
		}
	});

	/* Contact form validation */
	var $contactform = $("#contactForm");
	$contactform.validator({focus: false}).on("submit", function (event) {
		if (!event.isDefaultPrevented()) {
			event.preventDefault();
			submitForm();
		}
	});

	function submitForm(){
		/* Ajax call to submit form */
		$.ajax({
			type: "POST",
			url: "form-process.php",
			data: $contactform.serialize(),
			success : function(text){
				if (text === "success"){
					formSuccess();
				} else {
					submitMSG(false,text);
				}
			}
		});
	}

	function formSuccess(){
		$contactform[0].reset();
		submitMSG(true, "Message Sent Successfully!")
	}

	function submitMSG(valid, msg){
		if(valid){
			var msgClasses = "h4 text-success";
		} else {
			var msgClasses = "h4 text-danger";
		}
		$("#msgSubmit").removeClass().addClass(msgClasses).text(msg);
	}
	/* Contact form validation end */

	/* Animated Wow Js */	
	new WOW().init();

	/* Popup Video */
	if ($('.popup-video').length) {
		$('.popup-video').magnificPopup({
			type: 'iframe',
			mainClass: 'mfp-fade',
			removalDelay: 160,
			preloader: false,
			fixedContentPos: true
		});
	}

	/* Our Gallery (filtering) Start */
	$window.on( "load", function(){
		if( $(".gallery-item-boxes-gold").length ) {
				
			/* Init Isotope */
			var $menuitem = $(".gallery-item-boxes-gold").isotope({
				itemSelector: ".gallery-item-box-gold",
				layoutMode: "masonry",
				masonry: {
					// use outer width of grid-sizer for columnWidth
					columnWidth: 1,
				}
			});
				
			/* Filter items on click */
			var $menudisesnav = $(".our-gallery-nav li a");
				$menudisesnav.on('click', function (e) { 
			
				var filterValue = $(this).attr('data-filter');
				$menuitem.isotope({
					filter: filterValue
				}); 
				
				$menudisesnav.removeClass("active-btn"); 
				$(this).addClass("active-btn");
				e.preventDefault();
			});		
			$menuitem.isotope({ filter: "*" });
		}			
	});
	/* Our Gallery (filtering) End */

})(jQuery);

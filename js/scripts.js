document.addEventListener('DOMContentLoaded', function(){


	$('.buttons-nav').each(function(i, el){
		let btns = $(el).find('[data-slide]');
		let target = $(this).data('target');


		$(target).on('beforeChange', function(e, s, current, next){
			$(el).find('[data-slide="'+current+'"]').removeClass('current');
			$(el).find('[data-slide="'+next+'"]').addClass('current');
		});

		btns.eq(1).addClass('current');


		btns.on('click', function(e){
			e.preventDefault();
			let slide = $(this).data('slide');

			$(target).slick('slickGoTo', slide);
			$(this).addClass('current').siblings().removeClass('current');
		});
	});


	// For test
	$('#order-modal form').on('submit', function(e){
		e.preventDefault();

		hideModal( $(this).closest('.modal') );

		if (Math.random() >= 0.5) {
			showModal('#success-modal');
		} else{
			showModal('#error-modal');
		}
	});


	// const ps = new PerfectScrollbar('#container');


	// Sliders
	function equalSlideHeight(slider){
		$(slider).on('setPosition', function () {
			$(this).find('.slick-slide').height('auto');
			var slickTrack = $(this).find('.slick-track');
			var slickTrackHeight = $(slickTrack).height();
			$(this).find('.slick-slide').css('height', slickTrackHeight + 'px');
		});
	}

	let arrowsButtons = {
		prevArrow: '<button type="button" class="slick-prev" aria-label="Предыдущий"><svg viewBox="0 0 433 514" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M234 491h199L244 246 433 0H234L45 246l189 245z" fill="#0B7DE3"/><path fill-rule="evenodd" clip-rule="evenodd" d="M188 514h199L199 269 387 23H188L0 269l188 245z" fill="#D74814"/></svg></button>',
		nextArrow: '<button type="button" class="slick-next" aria-label="Следующий"><svg viewBox="0 0 433 514" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M199 23H0l189 246L0 514h199l189-245L199 23z" fill="#0B7DE3"/><path fill-rule="evenodd" clip-rule="evenodd" d="M245 0H46l188 245L46 491h199l188-246L245 0z" fill="#D74814"/></svg></button>'
	}

	let arrowsButtonsWhite = {
		prevArrow: '<button type="button" class="slick-prev" aria-label="Предыдущий"><svg viewBox="0 0 433 514" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M234 491h199L244 246 433 0H234L45 246l189 245z" fill="#D74814"/><path fill-rule="evenodd" clip-rule="evenodd" d="M188 514h199L199 269 387 23H188L0 269l188 245z" fill="#ECECEC"/></svg></button>',
		nextArrow: '<button type="button" class="slick-next" aria-label="Следующий"><svg viewBox="0 0 433 514" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M199 23H0l189 246L0 514h199l189-245L199 23z" fill="#D74814"/><path fill-rule="evenodd" clip-rule="evenodd" d="M245 0H46l188 245L46 491h199l188-246L245 0z" fill="#ECECEC"/></svg></button>'
	}

	let arrowsButtonsBlue = {
		prevArrow: '<button type="button" class="slick-prev" aria-label="Предыдущий"><svg viewBox="0 0 433 514" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M234 491h199L244 246 433 0H234L45 246l189 245z" fill="#D74814"/><path fill-rule="evenodd" clip-rule="evenodd" d="M188 514h199L199 269 387 23H188L0 269l188 245z" fill="#0B7DE3"/></svg></button>',
		nextArrow: '<button type="button" class="slick-next" aria-label="Следующий"><svg viewBox="0 0 433 514" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M199 23H0l189 246L0 514h199l189-245L199 23z" fill="#D74814"/><path fill-rule="evenodd" clip-rule="evenodd" d="M245 0H46l188 245L46 491h199l188-246L245 0z" fill="#0B7DE3"/></svg></button>'
	}

	$('.first-screen-slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		...arrowsButtonsWhite,
		dots: false,
		infinite: false,
		speed: 800,
		appendArrows: $('.first-screen-slider-nav'),
		// adaptiveHeight: true,
		autoplay: true,
		autoplaySpeed: 4000,
		swipeToSlide: true,
		touchMove: false,
		// fade: true
		responsive: [
			{
				breakpoint: 480,
				settings: {
					arrows: false,
					dots: true,
					appendDots: $('.first-screen-slider-nav')
				}
			}
		]
	});

	equalSlideHeight('.first-screen-slider');

	$('.reviews-slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		prevArrow: '<button type="button" class="slick-prev" aria-label="Предыдущий"><svg viewBox="0 0 433 514" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M234 491h199L244 246 433 0H234L45 246l189 245z" fill="#0B7DE3"/><path fill-rule="evenodd" clip-rule="evenodd" d="M188 514h199L199 269 387 23H188L0 269l188 245z" fill="#D74814"/></svg><span class="button-text">Предыдущий</span></button>',
		nextArrow: '<button type="button" class="slick-next" aria-label="Следующий"><span class="button-text">Следующий</span><svg viewBox="0 0 433 514" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M199 23H0l189 246L0 514h199l189-245L199 23z" fill="#0B7DE3"/><path fill-rule="evenodd" clip-rule="evenodd" d="M245 0H46l188 245L46 491h199l188-246L245 0z" fill="#D74814"/></svg></button>',
		appendArrows: $('.reviews-slider-nav'),
		dots: false,
		infinite: true,
		speed: 800,
		responsive: [
			{
				breakpoint: 992,
				settings: {
					...arrowsButtonsBlue,
					appendArrows: $('.reviews-slider-nav-mobile'),
				}
			}
		]
	});

	equalSlideHeight('.reviews-slider');


	let isDesktop = $(window).width() >= 992;
	let initCount = 0;

	function servicesSliderInit(){
		initCount++;
		if ($(window).width() < 992) {
			$('.services-list').slick({
				slidesToShow: 1,
				slidesToScroll: 1,
				initialSlide: 1,
				arrows: false,
				dots: false,
				infinite: true,
				speed: 800,
				arrows: false
			});
		} else{
			if (initCount > 1) {
				$('.services-list').slick('unslick');
			}
		}
	}

	$(window).resize(function(){
		if ($(window).width() < 992 && isDesktop){
			isDesktop = false;

			servicesSliderInit();
		} else if ($(window).width() >= 992 && !isDesktop){
			isDesktop = true;

			servicesSliderInit();
		}
	});

	servicesSliderInit();

	// Scroll to anchor
	$(document).on('click', 'a[href^="#"]', function (event) {
		event.preventDefault();

		$('html, body').animate({
			scrollTop: $($.attr(this, 'href')).offset().top - 80
		}, 500);

		// $(".main-wrapper").mCustomScrollbar("scrollTo", $.attr(this, 'href'));
	});

	// $("a").click(function() {
	// 	if ($(this).attr('href').indexOf("#") >= 0) {
	// 		$(".main-wrapper").mCustomScrollbar("scrollTo", $(this).attr('href'));
	// 	}
	// });

	// Menu opener
	$('.menu-opener').click(function(e){
		e.preventDefault();

		$(this).toggleClass('active');
		$('.mobile-top-nav').toggleClass('opened');
		$('.header').toggleClass('nav-opened');
	});

	// Mobile nav
	$('.mobile-top-nav a').click(function(){
		$('.menu-opener').click();
	});

	$('body').on('click', '.header.nav-opened', function(e){
		if ($(e.target).is('.header')) {
			$('.menu-opener').click();
		}
	});

	// Sticky Header
	window.addEventListener('scroll', function(){
		let header = document.querySelector('.header');

		if (!!header) {
			window.scrollY > 0
				? header.classList.add('sticky')
				: header.classList.remove('sticky');
		};
	});

	setTimeout(function(){
		let header = document.querySelector('.header');

		if (!!header) {
			window.scrollY > 0
				? header.classList.add('sticky')
				: header.classList.remove('sticky');
		};
	}, 100);



	// Page Nav Highlighting
	// Cache selectors
	let topMenu = $('.top-nav ul');

	if ($(window).width() < 992) {
		topMenu = $('.mobile-top-nav ul')
	}

	let lastId,
		topMenuHeight = 0,
		// All list items
		menuItems = topMenu.find("a"),
		// Anchors corresponding to menu items
		scrollItems = menuItems.map(function() {
			var item = $($(this).attr("href"));
			if (item.length) {
				return item;
			}
		});

	// Bind to scroll
	$(window).scroll(function() {
		let fromTop = $(this).scrollTop() + topMenuHeight + 300;

		let cur = scrollItems.map(function() {
			if ($(this).offset().top < fromTop)
				return this;
		});

		cur = cur[cur.length - 1];
		let id = cur && cur.length ? cur[0].id : "";

		if (lastId !== id) {
			lastId = id;
			menuItems.parent().removeClass("current-menu-item");
			menuItems.filter("[href='#" + id + "']").parent().addClass("current-menu-item");
		}
	});

	// Modals
	$('.modal').css('display','block');

	$('.modal-dialog').click(e => e.stopPropagation());
	$('.modal').click(function(e){
		// hideModal( $(this) );
	});

	$('.modal-close, .js-modal-close').click(function(e){
		e.preventDefault();

		hideModal( $(this).closest('.modal') );
	});

	$('[data-modal]').click(function(e){
		e.preventDefault();
		e.stopPropagation();

		hideModal('.modal');

		showModal( $(this).data('modal') );
	});

	$('[data-btn-text]').click(function(e){
		let btnText = $(this).data('btn-text');

		$('.js-change-text').text(btnText);
	});

	// Scrollbar
	// if ($(window).width() >= 992) {
	// 	$(".main-wrapper").mCustomScrollbar({
	// 		axis: "y",
	// 		theme: "minimal-dark",
	// 		// scrollInertia: 0,
	// 	});
	// }

	// Swipe
	function swipeTopNav(){
		if ($(window).height() > 475) {
			$(".header, .mobile-top-nav").swipe({
				swipeUp:function(event, direction, distance, duration) {
					$('.menu-opener').removeClass('active');
					$('.mobile-top-nav').removeClass('opened');
					$('.header').removeClass('nav-opened');
				},
				swipeDown:function(event, direction, distance, duration) {
				 // console.log("You swiped " + direction) 
				},
				click:function(event, target) { 
				},
				threshold:50,
				allowPageScroll:"none"
			});
		} else{
			$(".header, .mobile-top-nav").swipe("destroy");
		}
	}

	swipeTopNav();

	$(window).resize(function(){
		swipeTopNav();
	});
});

// function getScrollWidth(){
// 	// create element with scroll
// 	let div = document.createElement('div');

// 	div.style.overflowY = 'scroll';
// 	div.style.width = '50px';
// 	div.style.height = '50px';

// 	document.body.append(div);
// 	let scrollWidth = div.offsetWidth - div.clientWidth;

// 	div.remove();

// 	return scrollWidth;
// }

// let bodyScrolled = 0;
function showModal(modal){
	$(modal).addClass('visible');
	// bodyScrolled = $(window).scrollTop();
	// $('body, .header').addClass('modal-visible')
	// 		 .scrollTop(bodyScrolled)
	// 		 .css('padding-right', getScrollWidth());
}

function hideModal(modal){
	$(modal).removeClass('visible');
	// bodyScrolled = $(window).scrollTop();
	// $('body, .header').removeClass('modal-visible')
	// 		 .scrollTop(bodyScrolled)
	// 		 .css('padding-right', 0);
}
document.addEventListener('DOMContentLoaded', function() {
	var swiper = new Swiper(".slider__swiper", {
    effect: 'slide',
    spaceBetween: 0,
    slidesPerView: 2.2,
    centeredSlides: true,
    //grabCursor: true,
		slideToClickedSlide: true,
		loop: false,
    initialSlide: 1,
		scrollbar: {
			el: '.swiper-scrollbar-drag',
			draggable: true,
		},
		breakpoints: {
			360: {
				slidesPerView: 1,
			},
			440: {
				slidesPerView: 1,
			},
			768: {
				slidesPerView: 1.3,
			},
			1000: {
				slidesPerView: 2,
			}
		},
	});
	$('.accordion__header').click(function () {
		$(this).addClass('active').next().slideToggle();
		$('.accordion__header').not(this).removeClass('active').next().slideUp();
	});
	$('.send__form').click(function(){
		var em = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
		var ph = /^(.*?\d.*?){7,}$/;
		$('.form__faq').find('input, select, textarea').each(function() {
			if (($(this).attr('name') == 'name')) {
				if ($(this).val() == '') {
					$(this).addClass('error');
				} else {
					$(this).removeClass('error');
				}
			} else if (($(this).attr('name') == 'phone')) {
				if (ph.test($(this).val()) ==  false) {
					$(this).addClass('error');
				} else {
					$(this).removeClass('error');
				}
			} else if (($(this).attr('name') == 'email')) {
				if (em.test($(this).val()) ==  false) {
					$(this).addClass('error');
				} else {
					$(this).removeClass('error');
				}
			}
		});
		if ($(this).parents('.form__faq').find('.error').length == 0) {	
			var query = $(this).parents('.form__faq').serialize();
			$.ajax({
				type: "POST",
				url: "./invista/mail.php",					
				data:query,
				success: function(data) {					
					$('.form__faq').trigger('reset');
					$('.success').fadeIn();
					$('.dark__block').fadeIn();			
				}
			})
		}
	});
	$('.success__close').click(function () {
		$('.success').fadeOut();
		$('.dark__block').fadeOut();		
	})
	$('.dark__block').click(function () {
		$('.success').fadeOut();
		$(this).fadeOut();		
	})	
});

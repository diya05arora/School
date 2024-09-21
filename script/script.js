$(document).ready(function(){
	"use strict";
	
	/*************responsive news slider*****************/
	function checkwidth(){
		var windowSize = $(window).width();
		
		if(windowSize < 321){
			$('#hm-news-slider').newsTicker({
				row_height: 250,
				max_rows: 1,
				speed: 1000,
				direction: 'up',
				duration: 3000,
				autostart: 1,
				prevButton:  $('#prev-button'),
				nextButton:  $('#next-button'),
			});
		}
		
		if(windowSize < 620){
			$('#hm-news-slider').newsTicker({
				row_height: 200,
				max_rows: 1,
				speed: 1000,
				direction: 'up',
				duration: 3000,
				autostart: 1,
				prevButton:  $('#prev-button'),
				nextButton:  $('#next-button'),
			});
		}
	}
	checkwidth();
	$(window).resize(checkwidth);
	/*************responsive news slider end*****************/
	
	$('#hm-news-slider').newsTicker({
		row_height:70,
		max_rows: 3,
		speed: 1000,
		direction: 'up',
		duration: 3000,
		autostart: 1,
		prevButton:  $('#prev-button'),
		nextButton:  $('#next-button'),
	});
	$(".burgerMenu").click(function(){

        $(this).toggleClass("open");

		$(".navigationContainer").toggleClass('showNavigation');

		$(".menuChild").removeClass("showMenuChild");

    });
	$(".navBtn1").click(function(){

        $(".menuFirstChild").removeClass("showMenuChild");

		$("#menuFirstChild"+$(this).attr("target")).addClass("showMenuChild");

    });
	$(".menuChildClose").click(function(){

		$(this).parent().removeClass("showMenuChild");

    });
	$(".globChildBtn").click(function(){

        $(".menuSecondChild").removeClass("showMenuChild");

		$("#globSecondChild"+$(this).attr("target")).addClass("showMenuChild");

    });
	$("#popup-close2okp").click(function() {
		$(".popup-serch").slideUp();
		// $("#popup-serch7").slideDown("slow");

	});
	$(".searchBtn").click(function() {
		$(".popup-serch").slideDown("slow");

	});
	$(".main-div-cou").click(function(){

        $(".in-numbersContainer").fadeOut(100);

		$("#in-numbersContainer"+$(this).data("target")).fadeIn(400);

    });


	$(".aboutChildBtn").click(function(){

        $(".menuSecondChild").removeClass("showMenuChild");

		$("#aboutSecondChild"+$(this).attr("target")).addClass("showMenuChild");

    });

	$(".infraChildBtn").click(function(){

        $(".menuSecondChild").removeClass("showMenuChild");

		$("#infraSecondChild"+$(this).attr("target")).addClass("showMenuChild");

    });

	$(".in-numberClose").click(function(){

		$(".in-numbersContainer").fadeOut(100);

	});
	$('.counter').counterUp({
		delay: 20,
		time: 5000 
	}); 
	$('.slider').cycle({
		next: '#next',
		prev: '#prev',
		speed:7000 
	});
		$('#galSlider').cycle({
		fx: 'scrollHorz'
	});
	$('.play').click(function(){
        $('.videoContainer').hide();
		$('.overlay').fadeIn();
		$('#videoContainer'+$(this).attr('target')).fadeIn();
		
		var video = $('#iframe'+$(this).attr('target'));
		video.attr("src", $(this).attr("data-href"));
    });
	
	$('.closeVideo, .overlay').click(function(){
		$('.overlay, .videoContainer').fadeOut();
		
		$("iframe[id^=iframe]").removeAttr("src");
    });
});
var doc = jQuery(document);

$(window).on("load",function(){
	$('.loader').fadeOut(500);
});

doc.ready(function(){

	"use strict";

	$(window).scrollTop(0);

	var typed = new Typed(".mytext", {
		strings: ["Ebhath", "Research Organization","Non-Profit Organization"],
		smartBackspace: true, // Default value
		loop:true,
		backDelay: 3000,
		typeSpeed: 15
	  });
  
	$('.navbar-nav').onePageNav({
		currentClass: 'active'
	});

	if($(window).scrollTop()<200)
	{
		$('.navbar-nav').addClass('navbar-nav-bg');
	}

	$(window).scroll(function(){

		var top = $(window).scrollTop();

	});

	$('.progress-content .skill-progress').each(function(){

		var waypoint = new Waypoint({
		  element: this,
		  handler: function(direction) {
		    var value = $(this.element).attr('data-progress');
			$(this.element).css('width',''+value+'%');
		  },
		  offset: '70%'
		})

	});


	/*** scrolling animation ***/

	$('.animation').each(function(){

		var waypoint = new Waypoint({
		  element: this,
		  handler: function(direction) {
		    var cssvalue = $(this.element).attr('data-animation');

			$(this.element).addClass("animated "+cssvalue);
			$(this.element).css('opacity','1').fadeIn(2000);
		  },
		  offset: '70%'
		})

	});

	

	 var $grid = $('.portfolio-container').isotope({
	  // options
	  itemSelector: '.portfolio-item'
	  
	});

	$('.filter li').on( 'click', function() {

		$('.filter li').removeClass('filter-active');
	  var filterValue = $(this).attr('data-filter');
	  $grid.isotope({ filter: filterValue });
	  $(this).addClass('filter-active');
	});

	 $(".testi-conte").owlCarousel({

	 	items:1,
	 	autoplay:true,
	 	rewind:true
	 });

	 $(".ourteam").owlCarousel({
		items:5,
		autoplay:true,
		rewind:true
	 });

});

// $(document).ready(function(){
// 	$('.mobile_menu_icon').click(function(){
// 		$('nav').css({
// 			'display':'block !important'
// 		});
// 	});
// });








$(document).ready(function(){
	// jquery plagin owlCarousel code
  	$('.owl_carousel').owlCarousel({
  		items:1,
  		autoplay:true,
  		autoplayTimeout:2000,
  		loop:true,
  		autoplayHoverPause:true,
  		smartSpeed:1000,
  		nav:true,
  		navText:[
  			'<i class="fa-solid fa-caret-left"></i>',
  			'<i class="fa-solid fa-caret-right"></i>',
  		],
  	});




});




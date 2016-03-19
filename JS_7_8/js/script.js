$(document).ready(function() {

	$(".myTooltip").css('opacity','0');

	$('.first .btn').on('click', function(e)  {
		$(".myTooltip").stop().animate({ opacity: 1 });
		e.preventDefault();
	});

	
	$(".first .block").hover(
		function() {
			$(this).find(".myTooltip").stop().animate({ opacity: 1 });
		},
		function() {
			$(this).find(".myTooltip").stop().animate({ opacity: 0 }); 
		});

	$('.second .tab-links a').on('click', function(e)  {
		var currentAttrValue = $(this).attr('href'); 
      		//$('.second ' + currentAttrValue).show().siblings().hide();
      		$('.second ' + currentAttrValue).fadeIn(500).siblings().hide();
      		$(this).parent('li').addClass('active').siblings().removeClass('active'); 
        	e.preventDefault();
  });

});

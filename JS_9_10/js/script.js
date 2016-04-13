$(document).ready(function(){
	/* jCarousel Test Plugin */
	var params = {
		changedEl: ".testCusel select",
		visRows: 5,
		scrollArrows: true
	}
	cuSel(params);

	/*Custom JavaScript Checkbox*/
	$(".jCheck").each(function() {
		var $this = $(this);	
		$this.hide();    
		var image = $("<img src='img/ch_empty.png' />").insertAfter($this);   
		
		image.on("click", function() {
			var checkbox = $(this).prev(".jCheck");
			checkbox.prop("checked", !checkbox.prop("checked"));    
			checkImage();
		});

		function checkImage() {
			if(image.prev(".jCheck").prop("checked")) {
				image.attr("src", "img/ch_full.png"); 
			} else {
				image.attr("src", "img/ch_empty.png");
			}
		};    
	});

	/* DropDown Menu */
	$( '.dropdown' ).hover(
		function(){
			$(this).children('.sub-menu').slideDown(200);
			$(this).children('.sub-menu').animate({
				backgroundColor: "#FF4A4A"}, 1500, "swing");},
		function(){
			$(this).children('.sub-menu').slideUp(200);
			$(this).children('.sub-menu').animate({
				backgroundColor: "#FF4A4A"}, 1500, "swing", function() {
        // set back hover state
        $(this).removeAttr('style');
    });				
		}
		);
});
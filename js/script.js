$("#nav").addClass("js");

$("#nav").addClass("js").before('<div id="menu"><img src="images/hamburger.png"></div>');

$("#menu").click(function(){
	$("#nav").toggle();
});

$(window).resize(function(){
	if(window.innerWidth > 768) {
		$("#nav").removeAttr("style");
	}
});
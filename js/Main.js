// console.log("Main.jx is loaded");
// $("img").width(200);

$(document).ready(function(){
	$("img").on("dblclick", function(){
		$("img").width(200);
		$("h1").fadeOut();
		$(".booboo").slideUp();
		$("#rahul").hide();
	});
	// $("img").click(function(){
	
	// });
});
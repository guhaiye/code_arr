$(function(){
	
	$("#choice_r li a").click(function(){
		var a=$(this).text();
        $("#choice_result").html(a);
        $("#choice_r").css('display','none');
	});
	$("#choice_button").toggle(function(){
		$("#choice_r").show();
	},function(){
        $("#choice_r").hide();
	});
})
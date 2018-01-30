// JavaScript Document
$(function(){
	var _BackstageshelfMainLul2li=$(".Backstageshelf_MainLul2 .li_02");	
	var _BackstageshelfMainLul2sec2ul=$(".Backstageshelf_MainLul2 .li_02 .ul_sec2");
	_BackstageshelfMainLul2sec2ul.hide();
	_BackstageshelfMainLul2li.click(function(){
		$(this).addClass("check");	
		$(this).find(".ul_sec2").slideDown();
		$(this).siblings().removeClass("check");
		$(this).siblings().find(".ul_sec2").slideUp();
	});
	
});

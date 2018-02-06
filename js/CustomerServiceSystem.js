// JavaScript Document

$(function(){
	//客服系统
	var _WinH=$(window).outerHeight(true);	
	 
	//复选框1
	var _idSelectAll=$(".SelectAll:has(:checkbox)");
	_idSelectAll.click(function(){
	    var $chk=$(this).find("input:checkbox");
		if($(this).hasClass("SelectAll_check")){
			$(this).removeClass("SelectAll_check");
			$chk.attr("checked",false);
		} else {
			$(this).addClass("SelectAll_check");
			$chk.attr("checked",true);
		}		
		
	});	
	//复选框2
	var _idSelectAll2=$(".SelectAll2:has(:checkbox)");
	_idSelectAll2.click(function(){
	    var $chk=$(this).find("input:checkbox");
		if($(this).hasClass("SelectAll2_check")){
			$(this).removeClass("SelectAll2_check");
			$chk.attr("checked",false);
		} else {
			$(this).addClass("SelectAll2_check");
			$chk.attr("checked",true);
		}		
		
	});	
		
});
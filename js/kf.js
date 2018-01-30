// JavaScript Document
$(function(){
	var _WinH=$(window).outerHeight(true);
	var _ServiceSystemHeadH=$(".ServiceSystem_Head").outerHeight(true);
	var _ServiceSystemLnavgatH=$(".ServiceSystem_L .navgat").outerHeight(true);	
	
	//left
	var _ServiceSystemLover=$(".ServiceSystem_Lover");	
	_ServiceSystemLoverH=_WinH-_ServiceSystemHeadH-_ServiceSystemLnavgatH;
	_ServiceSystemLover.css({"height":_ServiceSystemLoverH,"overflow":"scroll"});
	
	//center	
	var _ServiceSystemCover=$(".ServiceSystem_Cover");
	var _ServiceSystemCEditorH=$(".ServiceSystem_C .Editor").outerHeight(true);
	_ServiceSystemLoverH=_WinH-_ServiceSystemHeadH-_ServiceSystemLnavgatH-_ServiceSystemCEditorH;
	_ServiceSystemCover.css({"height":_ServiceSystemLoverH,"overflow-y":"scroll"});
	
	//今日接待与全部会话的切换
	var _ServiceSystemLMeunulli=$(".ServiceSystem_L .Meunul .Meunli");
	var _ServiceLCententulEntli=$(".ServiceSystem_L .Cententul .Entli");
	_ServiceLCententulEntli.hide();
	_ServiceSystemLMeunulli.eq(0).addClass("check");
	_ServiceLCententulEntli.eq(0).show();
	_ServiceSystemLMeunulli.click(function(){
		$(this).addClass("check");
		$(this).siblings().removeClass("check");
		var _thisindex=$(this).index();	
		_ServiceLCententulEntli.eq(_thisindex).fadeIn();
		_ServiceLCententulEntli.eq(_thisindex).siblings().fadeOut();
	});
	
	//点击选择切换
	var _ServiceSystemLbox2btn1=$(".ServiceSystem_L .box2 .btn1");
	var _ServiceSystemLCententulliX=$(".ServiceSystem_L .Cententul .EntliX");
	_ServiceSystemLbox2btn1.click(function(){
		_ServiceSystemLCententulliX.toggleClass("Xuan");	
	});
	
});
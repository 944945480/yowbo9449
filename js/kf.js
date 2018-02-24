// JavaScript Document
$(function(){
	var _WinH=$(window).outerHeight(true);
	var _ServiceSystemHeadH=$(".ServiceSystem_Head").outerHeight(true);
	var _ServiceSystemLnavgatH=$(".ServiceSystem_L .navgat").outerHeight(true);	
	
	//left
	var _ServiceSystemLover=$(".ServiceSystem_Lover");	
	_ServiceSystemLoverH=_WinH-_ServiceSystemHeadH-_ServiceSystemLnavgatH;
	_ServiceSystemLover.css({"height":_ServiceSystemLoverH,"overflow-y":"scroll"});
	
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
	
	//right
	
	var _ServiceSystemRoverYhide=$(".ServiceSystem_R .overYhide");
	var _ServiceSystemRpaddbotfdH=$(".ServiceSystem_R .paddbotfd").outerHeight(true);
	_ServiceSystemRoverYhide.css({"height":_WinH-_ServiceSystemHeadH-_ServiceSystemLnavgatH-_ServiceSystemRpaddbotfdH});
	/* 商品推荐内的切换*/
	var _Recommendulli=$(".Recommendul .li_01");	
	var _RecommendNrulli=$(".RecommendNrul_01 .li_01");
	_RecommendNrulli.hide();
	_Recommendulli.removeClass("check");
	_Recommendulli.eq(0).addClass("check");
	_RecommendNrulli.eq(0).show();
	_Recommendulli.click(function(){
		$(this).addClass("check");
		$(this).siblings().removeClass("check");
		var _thisoffer=$(this).index();
		_RecommendNrulli.eq(_thisoffer).show();
		_RecommendNrulli.eq(_thisoffer).siblings().hide();		
	});
	
	/* 最新订单内的切换*/
	var _ShopOrderulli=$(".ShopOrderul .li_01");
	var _ShopOrderNrulli=$(".ShopOrderNrul .li_01");
	_ShopOrderNrulli.hide();
	_ShopOrderulli.removeClass("check");
	_ShopOrderulli.eq(0).addClass("check");	
	_ShopOrderNrulli.eq(0).show();	
	_ShopOrderulli.click(function(){
		$(this).addClass("check");	
		$(this).siblings().removeClass("check");
		var _thisShopOrder=$(this).index();
		_ShopOrderNrulli.eq(_thisShopOrder).show();
		_ShopOrderNrulli.eq(_thisShopOrder).siblings().hide();
	});
	
	//最新订单内的店铺订单中改价按钮效果
	var _NoManualPrice=$(".NoManualPrice");
	var _ManualPrice=$(".ManualPrice");
	var _ManualPricebtn=$(".ManualPricebtn");
	var _PreserHandwribtn=$(".PreserHandwribtn");
	_ManualPrice.hide();
	_ManualPricebtn.click(function(){
		_NoManualPrice.hide();
		_ManualPrice.show();	
	});
	_PreserHandwribtn.click(function(){
		_ManualPrice.hide();	
		_NoManualPrice.show();
	});
	
	//最新订单内的店铺订单中备注按钮效果
	var _Remarksbtn=$(".Remarksbtn");
	_Remarksbtn.siblings(".dl_02").hide();
	_Remarksbtn.click(function(){
		$(this).siblings(".dl_02").show();
	});
	_PreserHandwribtn.click(function(){
		_Remarksbtn.siblings(".dl_02").hide();	
	});
	
	//快捷回复里面的与自定义短语中的切换
	var _QuickHFulli=$(".Quick_HF .ul_01 .li_01");
	var _QuickHFNRulli=$(".QuickHF_NRul .QuickHF_li");
	_QuickHFNRulli.hide();
	_QuickHFulli.eq(0).addClass("check");
	_QuickHFNRulli.eq(0).show();
	_QuickHFulli.click(function(){
		var _thisQuickHFindex=$(this).index();	
		_QuickHFNRulli.eq(_thisQuickHFindex).show();
		_QuickHFNRulli.eq(_thisQuickHFindex).siblings().hide();
	});
	
	//快捷回复 折叠展开与收缩
	var _CustomPhrasedivdldt=$(".CustomPhrasediv .dl_01 .dt_01");
	_CustomPhrasedivdldt.siblings(".dd_01").hide();
	_CustomPhrasedivdldt.click(function(){
		$(this).siblings(".dd_01").slideDown();	
		$(this).parent().siblings().find(".dd_01").slideUp();
	});
	
	//快捷回复 点击编辑弹出
	var _Groupingbtn=$(".Groupingbtn");
	var _Groupingshow=$(".Groupingshow");
	_Groupingshow.hide();
	_Groupingbtn.click(function(){
		_Groupingshow.toggle();
	});
	
	
});
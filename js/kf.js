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
	
	//居中弹出	
	var G_WindowH=$(window).outerHeight(true);
	var G_WindowW=$(window).outerWidth(true);
	var _aqszyy=$(".aqszyy");
	var _aqszmid=$(".aqszfd .aqszmid");
	_aqszyy.hide();	
	_aqszmid.hide();	
	var _AddChatMeun=$(".AddChatMeun");
	var _Conversationtan=$(".Conversation_tan");  //建立会话
	var _TransferMeun=$(".TransferMeun");
	var _Transfertan=$(".Transfer_tan");  //转移
	var _ReportMeun=$(".ReportMeun");
	var _Reporttan=$(".Report_tan");  //举报
	var _MoveToBlacklistMeun=$(".MoveToBlacklistMeun");
	var _MoveBlacklisttan=$(".MoveBlacklist_tan"); //移至黑名单
	var _ManagingBlacklistsMeun=$(".ManagingBlacklistsMeun");
	var _BlacklistManagetan=$(".BlacklistManage_tan"); // 黑名单管理
	var _EditMeun=$(".EditMeun");
	var _EditSymboltan=$(".EditSymbol_tan");  //点击编辑符号
	var _AddbtnMeun=$(".addbtn");
	var _AddSymboltan=$(".AddSymbol_tan");  //点击添加符号
	var _EditGroupingMeun=$(".EditGroupingMeun");
	var _EditingGroupingtan=$(".EditingGrouping_tan"); //点击编辑分组
	var _HotkeyMeun=$(".HotkeyMeun");
	var _Hotkeytan=$(".Hotkey_tan");  //点击热键
	
	_Conversationtan.hide();
	_Transfertan.hide();
	_Reporttan.hide();
	_MoveBlacklisttan.hide();
	_BlacklistManagetan.hide();
	_EditSymboltan.hide();
	_AddSymboltan.hide();
	_EditingGroupingtan.hide();
	_Hotkeytan.hide();
	
	_AddChatMeun.click(function(){
		_Conversationtan.show();
		_aqszyy.show();	
		_aqszmid.show();
		_Transfertan.hide();
		_Reporttan.hide();
		_MoveBlacklisttan.hide();
		_BlacklistManagetan.hide();
		_EditSymboltan.hide();
		_AddSymboltan.hide();
		_EditingGroupingtan.hide();
		_Hotkeytan.hide();
		_thisH=_aqszmid.outerHeight(true);	
		var _banH=(G_WindowH-_thisH)/2;	
		$(".aqszfd").css({"top":_banH}); 	
	});
	_TransferMeun.click(function(){
		_Transfertan.show();
		_aqszyy.show();	
		_aqszmid.show();
		_Conversationtan.hide();
		_Reporttan.hide();
		_MoveBlacklisttan.hide();
		_BlacklistManagetan.hide();
		_EditSymboltan.hide();
		_AddSymboltan.hide();
		_EditingGroupingtan.hide();
		_Hotkeytan.hide();
		_thisH=_aqszmid.outerHeight(true);	
		var _banH=(G_WindowH-_thisH)/2;	
		$(".aqszfd").css({"top":_banH}); 	
	});
	_ReportMeun.click(function(){
		_Reporttan.show();
		_aqszyy.show();	
		_aqszmid.show();
		_Conversationtan.hide();
		_Transfertan.hide();
		_MoveBlacklisttan.hide();
		_BlacklistManagetan.hide();
		_EditSymboltan.hide();
		_AddSymboltan.hide();
		_EditingGroupingtan.hide();
		_Hotkeytan.hide();
		_thisH=_aqszmid.outerHeight(true);	
		var _banH=(G_WindowH-_thisH)/2;	
		$(".aqszfd").css({"top":_banH}); 	
	});
	_MoveToBlacklistMeun.click(function(){
		_MoveBlacklisttan.show();
		_aqszyy.show();	
		_aqszmid.show();
		_Conversationtan.hide();
		_Transfertan.hide();
		_Reporttan.hide();
		_BlacklistManagetan.hide();
		_EditSymboltan.hide();
		_AddSymboltan.hide();
		_EditingGroupingtan.hide();
		_Hotkeytan.hide();
		_thisH=_aqszmid.outerHeight(true);	
		var _banH=(G_WindowH-_thisH)/2;	
		$(".aqszfd").css({"top":_banH}); 	
	});
	_ManagingBlacklistsMeun.click(function(){
		_BlacklistManagetan.show();
		_aqszyy.show();	
		_aqszmid.show();
		_Conversationtan.hide();
		_Transfertan.hide();
		_Reporttan.hide();
		_MoveBlacklisttan.hide();
		_EditSymboltan.hide();
		_AddSymboltan.hide();
		_EditingGroupingtan.hide();
		_Hotkeytan.hide();
		_thisH=_aqszmid.outerHeight(true);	
		var _banH=(G_WindowH-_thisH)/2;	
		$(".aqszfd").css({"top":_banH}); 	
	});
	_EditMeun.click(function(){
		_EditSymboltan.show();
		_aqszyy.show();	
		_aqszmid.show();
		_Conversationtan.hide();
		_Transfertan.hide();
		_Reporttan.hide();
		_MoveBlacklisttan.hide();
		_BlacklistManagetan.hide();
		_AddSymboltan.hide();
		_EditingGroupingtan.hide();
		_Hotkeytan.hide();
		_thisH=_aqszmid.outerHeight(true);	
		var _banH=(G_WindowH-_thisH)/2;	
		$(".aqszfd").css({"top":_banH}); 	
	});
	_AddbtnMeun.click(function(){
		_AddSymboltan.show();
		_aqszyy.show();	
		_aqszmid.show();
		_Conversationtan.hide();
		_Transfertan.hide();
		_Reporttan.hide();
		_MoveBlacklisttan.hide();
		_BlacklistManagetan.hide();
		_EditSymboltan.hide();
		_EditingGroupingtan.hide();
		_Hotkeytan.hide();
		_thisH=_aqszmid.outerHeight(true);	
		var _banH=(G_WindowH-_thisH)/2;	
		$(".aqszfd").css({"top":_banH}); 	
	});
	_EditGroupingMeun.click(function(){
		_EditingGroupingtan.show();
		_aqszyy.show();	
		_aqszmid.show();
		_Conversationtan.hide();
		_Transfertan.hide();
		_Reporttan.hide();
		_MoveBlacklisttan.hide();
		_BlacklistManagetan.hide();
		_EditSymboltan.hide();
		_AddSymboltan.hide();
		_Hotkeytan.hide();
		_thisH=_aqszmid.outerHeight(true);	
		var _banH=(G_WindowH-_thisH)/2;	
		$(".aqszfd").css({"top":_banH}); 	
	});
	_HotkeyMeun.click(function(){
		_Hotkeytan.show();
		_aqszyy.show();	
		_aqszmid.show();
		_Conversationtan.hide();
		_Transfertan.hide();
		_Reporttan.hide();
		_MoveBlacklisttan.hide();
		_BlacklistManagetan.hide();
		_EditSymboltan.hide();
		_AddSymboltan.hide();
		_EditingGroupingtan.hide();
		_thisH=_aqszmid.outerHeight(true);	
		var _banH=(G_WindowH-_thisH)/2;	
		$(".aqszfd").css({"top":_banH}); 	
	});
	_aqszyy.click(function(){
		_Conversationtan.hide();
		_aqszyy.hide();	
		_aqszmid.hide();
		_Transfertan.hide();
		_Reporttan.hide();
		_MoveBlacklisttan.hide();
		_BlacklistManagetan.hide();
		_EditSymboltan.hide();
		_AddSymboltan.hide();
		_EditingGroupingtan.hide();
		_Hotkeytan.hide();	
	});
	
	
	//举报弹出的 复选框
	//复选框2
	var _idReportla2=$(".Report_la2:has(:checkbox)");
	_idReportla2.click(function(){
	    var $chk=$(this).find("input:checkbox");
		if($(this).hasClass("Report_la2_check")){
			$(this).removeClass("Report_la2_check");
			$chk.attr("checked",false);
		} else {
			$(this).addClass("Report_la2_check");
			$chk.attr("checked",true);
		}		
		
	});		
	//黑名单管理弹出的 复选框
	//复选框2
	var _idBlacklistManage=$(".BlacklistManage_la2:has(:checkbox)");
	_idBlacklistManage.click(function(){
	    var $chk=$(this).find("input:checkbox");
		if($(this).hasClass("BlacklistManage_la2_check")){
			$(this).removeClass("BlacklistManage_la2_check");
			$chk.attr("checked",false);
		} else {
			$(this).addClass("BlacklistManage_la2_check");
			$chk.attr("checked",true);
		}		
		
	});		
	
	
});